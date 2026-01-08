// app/(site)/layout.tsx
import Link from "next/link";
import Image from "next/image";
import BtiCopilotChat from "@/components/BtiCopilotChat";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Présentation", href: "/presentation" },
  { label: "Urbanisme", href: "/urbanisme" },
  { label: "Police des constructions", href: "/police-des-constructions" },
  { label: "Travaux", href: "/travaux" },
  { label: "Publications", href: "/publications" },
  { label: "Règlements & tarifs", href: "/reglements-tarifs" },
  { label: "Équipe", href: "/equipe" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-100 via-slate-50 to-slate-100 text-slate-900 antialiased">
      <div className="h-[3px] w-full bg-gradient-to-r from-emerald-400 via-sky-400 to-violet-500" />

      {/* Header public */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/70">
        <div className="max-w-6xl mx-auto px-0 h-18 flex items-center justify-between gap-8 py-2">
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/images/logo_bti_logo.png"
              alt="BTI"
              width={70}
              height={70}
            />
            <Image
              src="/images/logo_bti_txt.png"
              alt="BTI text"
              width={100}
              height={100}
            />
          </Link>

          <nav className="hidden lg:flex flex-1 justify-center">
            <div className="inline-flex items-center gap-0 rounded-full bg-slate-100/80 border border-slate-200 px-3 py-1.5 shadow-[0_10px_25px_rgba(15,23,42,0.06)]">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-1 rounded-full text-[13px] text-slate-600 hover:text-slate-900 hover:bg-white transition-colors whitespace-nowrap"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-3 text-[11px] font-medium shadow-lg hover:bg-slate-800 transition"
            >
              Contact
            </Link>

            <Link
              href="/login"
              className="text-[11px] text-slate-500 hover:text-slate-900"
            >
              Espace interne
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-slate-200/80 bg-white/90 backdrop-blur-md text-[11px] text-slate-500">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} BTI – Bureau Technique Intercommunal</span>
          <span className="flex gap-2 text-slate-400">
            <span>Urbanisme</span>
            <span>·</span>
            <span>Police des constructions</span>
            <span>·</span>
            <span>Travaux</span>
          </span>
        </div>
      </footer>

      <BtiCopilotChat />
    </div>
  );
}
