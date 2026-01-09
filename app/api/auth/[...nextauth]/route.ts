import NextAuth from "next-auth";
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

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Mot de passe", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const email = credentials.email.trim().toLowerCase();
        const password = credentials.password;

        const result = await pool.query(
          `
          SELECT id, display_name, email, hashed_password, active, role
          FROM public.employees
          WHERE email = $1
          LIMIT 1
          `,
          [email]
        );

        const user = result.rows[0];
        if (!user || user.active === false) return null;

        const ok = await compare(password, user.hashed_password);
        if (!ok) return null;

        const appUser: AppUser = {
          id: String(user.id),
          email: user.email,
          name: user.display_name,
          employeeId: Number(user.id),
          displayName: user.display_name,
          role: user.role ?? null,
        };

        return appUser;
      },
    }),
  ],

  session: { strategy: "jwt" as const },

  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: Record<string, unknown>;
      user?: unknown;
    }) {
      if (user) {
        const u = user as AppUser;
        token.employeeId = u.employeeId;
        token.displayName = u.displayName;
        token.role = u.role;
      }
      return token;
    },

    async session({
      session,
      token,
    }: {
      session: { user?: Record<string, unknown> } & Record<string, unknown>;
      token: Record<string, unknown>;
    }) {
      if (session.user) {
        session.user.employeeId = token.employeeId;
        session.user.displayName = token.displayName;
        session.user.role = token.role ?? null;
      }
      return session;
    },
  },


  pages: {
    signIn: "/login",
    error: "/login",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions as any);
export { handler as GET, handler as POST };
