import {
  CtaBand,
  Hero,
  InfoStrip,
  OfferCard,
  Reviews,
  Team,
  TreatmentsGrid,
  WhyUs,
} from "@/components/sections";
import Faq from "@/components/faq";
import type { Metadata } from "next";
import { alternates } from "@/content";

export const metadata: Metadata = { alternates: alternates() };

export default function HomePage() {
  return (
    <>
      <Hero />
      <InfoStrip />
      <TreatmentsGrid />
      <WhyUs />
      <OfferCard />
      <Team />
      <Reviews />
      <Faq />
      <CtaBand />
    </>
  );
}
