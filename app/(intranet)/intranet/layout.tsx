import type { Session } from "next-auth";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import IntranetLayoutClient from "./layout-client";

export default async function IntranetLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session | null = await getServerSession(authOptions as any);

  return (
    <IntranetLayoutClient session={session}>
      {children}
    </IntranetLayoutClient>
  );
}
