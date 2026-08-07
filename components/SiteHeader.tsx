"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { PRIMARY_NAV, NAV_CTA } from "@/lib/nav";

// Single-purpose conversion landing pages get a lean, logo-only header —
// the full site nav would just be an exit ramp off the page's one job.
// Add a route prefix here if another landing page needs the same treatment.
const LEAN_HEADER_ROUTES = ["/velocity-sprint", "/velocity-assessment", "/meet-alex"];

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    >
      {open ? (
        <>
          <line x1="5" y1="5" x2="19" y2="19" />
          <line x1="19" y1="5" x2="5" y2="19" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </>
      )}
    </svg>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const isLeanHeader = LEAN_HEADER_ROUTES.some((route) => pathname.startsWith(route));

  // Close the mobile menu on route change.
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Lock body scroll while the mobile overlay is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close on Escape.
  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  if (isLeanHeader) {
    return (
      <header className="mx-auto flex max-w-[1180px] items-center px-6 py-7 md:px-12">
        <Link href="/" aria-label="Velocity-B home">
          <Logo />
        </Link>
      </header>
    );
  }

  return (
    <header className="relative mx-auto flex max-w-[1180px] items-center justify-between px-6 py-7 md:px-12">
      <Link href="/" aria-label="Velocity-B home" className="relative z-50">
        <Logo />
      </Link>

      {/* Desktop nav */}
      <nav className="hidden items-center gap-8 text-[13.5px] font-semibold md:flex">
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
        className="hidden bg-navy px-[22px] py-[11px] text-[13px] font-bold text-white md:inline-block"
      >
        {NAV_CTA.label}
      </Link>

      {/* Mobile burger toggle */}
      <button
        type="button"
        onClick={() => setMobileOpen((v) => !v)}
        aria-expanded={mobileOpen}
        aria-controls="mobile-nav-panel"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        className="relative z-50 -mr-2 flex h-10 w-10 items-center justify-center text-navy md:hidden"
      >
        <MenuIcon open={mobileOpen} />
      </button>

      {/* Mobile full-screen overlay */}
      {mobileOpen && (
        <div
          id="mobile-nav-panel"
          className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-navy px-6 pb-10 pt-24 text-white md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {PRIMARY_NAV.map((group) => {
              const isOpen = openGroup === group.label;
              const isActive = group.links.some((link) => pathname.startsWith(link.href));
              return (
                <div key={group.label} className="border-b border-white/15">
                  <button
                    type="button"
                    onClick={() => setOpenGroup(isOpen ? null : group.label)}
                    aria-expanded={isOpen}
                    className={`flex w-full items-center justify-between py-4 text-left text-[19px] font-semibold ${
                      isActive ? "text-blue" : "text-white"
                    }`}
                  >
                    {group.label}
                    <span
                      className={`transition-transform duration-200 ${isOpen ? "rotate-45" : ""}`}
                    >
                      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                    </span>
                  </button>
                  {isOpen && (
                    <div className="flex flex-col gap-1 pb-4 pl-1">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          className="py-2 text-[15px] font-medium text-white/75 hover:text-white"
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          <Link
            href={NAV_CTA.href}
            className="mt-8 inline-block bg-orange px-[22px] py-[14px] text-center text-[15px] font-bold text-navy"
          >
            {NAV_CTA.label}
          </Link>
        </div>
      )}
    </header>
  );
}
