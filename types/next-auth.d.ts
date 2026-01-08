import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      employeeId: number;
      displayName?: string;
      role?: string | null;
    };
  }

  interface User {
    id: string;
    email: string;
    name: string;
    employeeId: number;
    displayName: string;
    role: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    employeeId: number;
    displayName?: string;
    role?: string | null;
  }
}
