import Link from "next/link";
import { LogoMark } from "./Logo";
import { FOOTER_NAV, FOOTER_CONNECT } from "@/lib/nav";

export function SiteFooter() {
  return (
    <footer className="mx-auto max-w-[1180px] border-t border-hair px-12 pb-9 pt-14">
      <div className="flex flex-wrap items-start justify-between gap-10">
        <LogoMark className="h-24 w-auto md:h-32" />

        <div className="flex flex-wrap gap-16">
          {FOOTER_NAV.map((group) => (
            <div key={group.label}>
              <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[#9aa0b5]">
                {group.label}
              </div>
              {group.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mb-2 block text-sm text-navy hover:text-blue"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}

          <div>
            <div className="mb-3 text-xs font-bold uppercase tracking-wider text-[#9aa0b5]">
              Connect
            </div>
            {FOOTER_CONNECT.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.href}
                  href={link.href}
                  className="mb-2 block text-sm text-navy hover:text-blue"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener" : undefined}
                  className="mb-2 block text-sm text-navy hover:text-blue"
                >
                  {link.label}
                </a>
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-hair pt-6 text-xs text-[#9aa0b5]">
        <span>© Velocity-B — c/o Rockstar CMO Ltd, 49 Greek St, London W1D 4EG</span>
        <Link href="/privacy-policy" className="hover:text-navy">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
