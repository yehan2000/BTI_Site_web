import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name?: string | null;
      email?: string | null;
      employeeId: number;
    };
  }

  interface User {
    employeeId: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    employeeId: number;
  }
}
