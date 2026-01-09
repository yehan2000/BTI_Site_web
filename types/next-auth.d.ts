import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;

      employeeId?: number;
      displayName?: string;
      role?: string | null;
    };
    expires: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    employeeId?: number;
    displayName?: string;
    role?: string | null;
  }
}
