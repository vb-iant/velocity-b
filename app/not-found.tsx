import Link from "next/link";

const ctaSolid = "inline-block bg-navy px-[30px] py-4 text-[15px] font-bold text-white";

export default function NotFound() {
  return (
    <main>
      <section className="mx-auto max-w-[1180px] px-12 py-32 text-center">
        <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight text-navy md:text-[56px]">
          Sorry, we can&rsquo;t find that page.
        </h1>
        <h2 className="font-display mt-4 text-[32px] font-bold leading-tight tracking-tight text-blue md:text-[46px]">
          Get in touch, please let us know what&rsquo;s missing.
        </h2>
        <Link href="/contact" className={`${ctaSolid} mt-8`}>
          Get in Touch
        </Link>
      </section>
    </main>
  );
}
