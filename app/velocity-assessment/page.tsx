import type { Metadata } from "next";
import { AnimatedChevron } from "@/components/AnimatedChevron";
import { VelocityAssessment } from "@/components/VelocityAssessment";

export const metadata: Metadata = {
  title: "Velocity Assessment | Velocity-B",
  description:
    "Twelve questions, about ten minutes, and an honest score across Awareness, Revenue, and Trust \u2014 straight from two people who've run this stuff themselves.",
};

export default function VelocityAssessmentPage() {
  return (
    <main>
      <section className="mx-auto max-w-[1180px] px-12 pb-4 pt-20">
        <h1 className="font-display text-[42px] font-bold leading-[1.02] tracking-tight md:text-[56px]">
          <AnimatedChevron className="text-blue" />
          How&rsquo;s your sales and marketing doing?
        </h1>
        <h2 className="font-display mt-2 text-[42px] font-bold leading-[1.02] tracking-tight text-blue md:text-[56px]">
          Really doing.
        </h2>
      </section>

      <VelocityAssessment />
    </main>
  );
}
