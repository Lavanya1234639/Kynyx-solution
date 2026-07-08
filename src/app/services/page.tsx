import PageLayout from "@/components/layout/PageLayout";
import Services from "@/components/sections/Services";
import Technologies from "@/components/sections/Technologies";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Contact from "@/components/sections/Contact";

export const metadata = { title: "Services | Kynyx Solution", description: "Premium technology services — web, mobile, cloud, AI and more." };

export default function ServicesPage() {
  return (
    <PageLayout
      badge="What We Do"
      title="Services Built for"
      titleHighlight="Scale & Impact"
      description="From rapid MVPs to enterprise platforms, we deliver technology that moves the needle. Every engagement is tailored, every solution is built to last."
      accentColor="#3B82F6"
    >
      <div className="section-divider mx-auto max-w-5xl" />
      <Services showAll />
      <div className="section-divider mx-auto max-w-5xl" />
      <Technologies />
      <div className="section-divider mx-auto max-w-5xl" />
      <WhyChooseUs />
      <div className="section-divider mx-auto max-w-5xl" />
      <Contact />
    </PageLayout>
  );
}
