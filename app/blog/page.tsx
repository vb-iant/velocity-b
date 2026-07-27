import Link from "next/link";

export const metadata = {
  title: "Blog — Velocity-B",
};

export default function BlogPlaceholder() {
  return (
    <main className="mx-auto max-w-[1180px] px-12 py-28 text-center">
      <h1 className="font-display text-[42px] font-bold leading-[1.05] tracking-tight md:text-[56px]">
        Blog — coming soon.
      </h1>
      <p className="mx-auto mt-5 max-w-[520px] text-lg leading-[1.7] text-[#42465c]">
        We&rsquo;re still lining up how this gets published. In the meantime,
        get in touch and we&rsquo;ll point you to the right resources
        directly.
      </p>
      <Link
        href="/contact"
        className="mt-8 inline-block bg-navy px-[30px] py-4 text-[15px] font-bold text-white"
      >
        Get in touch
      </Link>
    </main>
  );
}
