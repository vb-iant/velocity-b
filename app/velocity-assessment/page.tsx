import type { Metadata } from "next";
import { VelocityAssessment } from "@/components/VelocityAssessment";

export const metadata: Metadata = {
  title: "The Velocity Assessment | Velocity-B",
  description:
    "Twelve questions, about ten minutes, and an honest score across Awareness, Revenue, and Trust — straight from two people who've run this stuff themselves.",
};

export default function VelocityAssessmentPage() {
  return <VelocityAssessment />;
}
