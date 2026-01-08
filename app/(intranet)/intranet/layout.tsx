import type { ReactNode } from "react";
import { redirect } from "next/navigation";
import { getAuthSession } from "@/lib/auth";
import IntranetLayoutClient from "./layout-client";

export default async function IntranetLayout({
  children,
}: {
  children: ReactNode;
}) {
  const session = await getAuthSession();
  if (!session) redirect("/login");

  // on passe la session au client pour afficher nom/photo etc.
  return <IntranetLayoutClient session={session}>{children}</IntranetLayoutClient>;
}
