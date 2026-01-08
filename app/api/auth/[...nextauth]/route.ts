import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcryptjs";
import { Pool } from "pg";

type AppUser = {
  id: string;
  email: string;
  name: string;
  employeeId: number;
  displayName: string;
  role: string | null;
};

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Mot de passe", type: "password" },
      },

      async authorize(credentials) {
        try {
          if (!credentials?.email || !credentials?.password) return null;

          const email = credentials.email.trim().toLowerCase();
          const password = credentials.password;

          const result = await pool.query(
            `
            SELECT id, employee_id, display_name, email, hashed_password, active, role
            FROM public.employees
            WHERE email = $1
            LIMIT 1
            `,
            [email]
          );

          const user = result.rows[0];
          if (!user) return null;
          if (user.active === false) return null;

          // ✅ Vérifie le mot de passe (si tu veux l’activer)
          if (user.hashed_password) {
            const ok = await compare(password, user.hashed_password);
            if (!ok) return null;
          } else {
            // si tu n'as pas encore les mots de passe en DB
            return null;
          }

          // ✅ IMPORTANT : retourner les infos dont on a besoin
          return {
            id: String(user.id),
            email: user.email,
            name: user.display_name,      // NextAuth standard
            employeeId: Number(user.employee_id),
            displayName: user.display_name,
            role: user.role ?? null,
          };
        } catch (e) {
          console.log("authorize error:", e);
          return null;
        }
      },
    }),
  ],

  pages: {
    signIn: "/login",
    error: "/login",
  },

  session: { strategy: "jwt" },

  callbacks: {
    async session({ session, token }) {
      const u = session.user as any;
      u.employeeId = token.employeeId;
      u.displayName = token.displayName;
      u.role = token.role;
      return session;
    },

    async session({ session, token }) {
      (session.user as any).employeeId = token.employeeId;
      (session.user as any).displayName = token.displayName;
      (session.user as any).role = token.role;
      return session;
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
