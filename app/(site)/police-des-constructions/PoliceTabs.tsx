"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PoliceTabs() {
  const pathname = usePathname();

  const tabs = [
    {
      href: "/police-des-constructions",
      title: "Informations générales",
    },
    {
      href: "/police-des-constructions/capteurs-solaires",
      title: "Capteurs solaires",
    },
    {
      href: "/police-des-constructions/pompes-a-chaleur",
      title: "Pompes à chaleur",
    },
    {
      href: "/police-des-constructions/patrimoine-arbore",
      title: "Patrimoine arboré",
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-200 bg-white/90 backdrop-blur-md shadow-sm p-4">
      <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-4">
        {tabs.map((tab) => {
          const active = pathname === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`rounded-xl px-3 py-3 text-sm border transition-all 
                ${
                  active
                    ? "border-sky-400 bg-sky-50 shadow-md shadow-sky-200"
                    : "border-slate-200 bg-slate-50 hover:bg-white hover:border-slate-400"
                }
              `}
            >
              {tab.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
