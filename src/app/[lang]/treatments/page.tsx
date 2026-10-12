import type { Metadata } from "next";
import { alternates, getContent } from "@/content";
import { PageHeroCentered } from "@/components/page-parts";
import { CtaBand, OfferCard, TreatmentsGrid } from "@/components/sections";
import Faq from "@/components/faq";

export async function generateMetadata(): Promise<Metadata> {
  const { t } = await getContent();
  return { title: t.treatmentsPage.metaTitle, alternates: alternates("/treatments") };
}

export default async function TreatmentsPage() {
  const { t } = await getContent();
  const p = t.treatmentsPage;
  return (
    <>
      <PageHeroCentered eyebrow={p.eyebrow} title={p.title} lead={p.lead} />
      <TreatmentsGrid withHead={false} flush />
      <OfferCard />
      <Faq />
      <CtaBand />
    </>
  );
}
