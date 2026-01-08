// components/AppShell.tsx
"use client";

import { usePathname } from "next/navigation";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isIntranet = pathname.startsWith("/intranet");

  return (
    <div className={isIntranet ? "bti-dark" : "bti-light"}>
      {children}
    </div>
  );
}
