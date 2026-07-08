import PageLayout from "@/components/layout/PageLayout";
import Portfolio from "@/components/sections/Portfolio";
import Testimonials from "@/components/sections/Testimonials";
import Statistics from "@/components/sections/Statistics";
import Contact from "@/components/sections/Contact";

export const metadata = { title: "Our Work | Kynyx Solution", description: "See how we've helped companies scale with exceptional digital products." };

export default function WorkPage() {
  return (
    <PageLayout
      badge="Case Studies"
      title="Products We've"
      titleHighlight="Shipped & Scaled"
      description="Real work. Real impact. Explore how we've helped ambitious companies transform their ideas into category-defining digital products."
      accentColor="#06B6D4"
    >
      <div className="section-divider mx-auto max-w-5xl" />
      <Portfolio showAll />
      <div className="section-divider mx-auto max-w-5xl" />
      <Statistics />
      <div className="section-divider mx-auto max-w-5xl" />
      <Testimonials />
      <div className="section-divider mx-auto max-w-5xl" />
      <Contact />
    </PageLayout>
  );
}
