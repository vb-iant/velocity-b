// Single source of truth for site navigation + footer structure.
// Mirrors velocity-b-navigation-sitemap.md (locked 2026-07-25).
// Update this file, not individual pages, when nav/footer links change.

export interface NavLink {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  links: NavLink[];
}

// Primary nav — 4 parent groups, two-level dropdown.
export const PRIMARY_NAV: NavGroup[] = [
  {
    label: "How We Help",
    links: [
      { label: "Revenue Growth", href: "/growth" },
      { label: "UK Expansion", href: "/uk-expansion" },
    ],
  },
  {
    label: "Our Approach",
    links: [
      { label: "How We Work", href: "/how-we-work" },
      { label: "Our Work", href: "/our-work" },
    ],
  },
  {
    label: "Who We Are",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

// Standalone CTA, not part of a dropdown.
export const NAV_CTA: NavLink = { label: "Get in touch", href: "/contact" };

// Footer — mirrors the four primary groups as columns.
export const FOOTER_NAV: NavGroup[] = [
  {
    label: "How We Help",
    links: [
      { label: "Revenue Growth", href: "/growth" },
      { label: "UK Expansion", href: "/uk-expansion" },
    ],
  },
  {
    label: "Our Approach",
    links: [
      { label: "How We Work", href: "/how-we-work" },
      { label: "Our Work", href: "/our-work" },
    ],
  },
  {
    label: "Who We Are",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    links: [
      { label: "Resources", href: "/resources" },
      { label: "Blog", href: "/blog" },
    ],
  },
];

// Direct contact links shown in the footer bottom row.
export const FOOTER_CONNECT: NavLink[] = [
  { label: "Email", href: "mailto:hello@velocity-b.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/velocityb" },
];
