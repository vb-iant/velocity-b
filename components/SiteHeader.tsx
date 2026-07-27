"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { PRIMARY_NAV, NAV_CTA } from "@/lib/nav";

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="mx-auto flex max-w-[1180px] items-center justify-between px-12 py-7">
      <Link href="/" aria-label="Velocity-B home">
        <Logo />
      </Link>

      <nav className="flex items-center gap-8 text-[13.5px] font-semibold">
        {PRIMARY_NAV.map((group) => {
          const isActive = group.links.some((link) => pathname.startsWith(link.href));
          return (
            <div key={group.label} className="group relative py-1.5">
              <span className={isActive ? "cursor-default text-blue" : "cursor-default"}>
                {group.label}
              </span>
              <div
                className="absolute left-[-14px] top-full z-20 hidden min-w-[180px] border
                           border-hair bg-white p-2.5 shadow-[0_10px_24px_rgba(10,21,67,0.09)]
                           group-hover:block"
              >
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block rounded px-2.5 py-2 text-[13px] font-medium text-[#42465c]
                               hover:bg-[#fafbfd] hover:text-navy"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </nav>

      <Link
        href={NAV_CTA.href}
        className="bg-navy px-[22px] py-[11px] text-[13px] font-bold text-white"
      >
        {NAV_CTA.label}
      </Link>
    </header>
  );
}
