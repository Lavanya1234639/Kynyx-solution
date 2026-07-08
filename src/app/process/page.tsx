import PageLayout from "@/components/layout/PageLayout";
import Process from "@/components/sections/Process";
import FAQ from "@/components/sections/FAQ";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";

export const metadata = { title: "Our Process | Kynyx Solution", description: "A disciplined, transparent process that delivers predictable results every time." };

export default function ProcessPage() {
  return (
    <PageLayout
      badge="How We Work"
      title="A Process Built for"
      titleHighlight="Predictable Success"
      description="No surprises. No scope creep. Just disciplined execution with clear milestones, transparent communication, and results you can rely on."
      accentColor="#06B6D4"
    >
      <div className="section-divider mx-auto max-w-5xl" />
      <Process />
      <div className="section-divider mx-auto max-w-5xl" />
      <WhyChooseUs />
      <div className="section-divider mx-auto max-w-5xl" />
      <FAQ />
      <div className="section-divider mx-auto max-w-5xl" />
      <Contact />
    </PageLayout>
  );
}
