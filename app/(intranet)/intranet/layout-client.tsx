"use client";

import type { ReactNode } from "react";
import type { Session } from "next-auth";
import IntranetSidebar from "@/components/IntranetSidebar";
import IntranetProviders from "./IntranetProviders";

export default function IntranetLayoutClient({
  children,
  session,
}: {
  children: ReactNode;
  session: Session;
}) {
  return (
    <IntranetProviders session={session}>
      <div className="min-h-screen bg-[#f2f3f6] text-slate-900">
        <div className="mx-auto max-w-7xl px-4 py-5">
          <div className="grid gap-4 md:grid-cols-[280px_1fr]">
            <IntranetSidebar />
            <main className="min-w-0">{children}</main>
          </div>
        </div>
      </div>
    </IntranetProviders>
  );
}
