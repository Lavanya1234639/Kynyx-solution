import PageLayout from "@/components/layout/PageLayout";
import About from "@/components/sections/About";
import Statistics from "@/components/sections/Statistics";
import TrustedBy from "@/components/sections/TrustedBy";
import Industries from "@/components/sections/Industries";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export const metadata = { title: "About Us | Kynyx Solution", description: "Meet the team behind Kynyx Solution — engineers, designers, and strategists building tomorrow's products today." };

export default function AboutPage() {
  return (
    <PageLayout
      badge="Our Story"
      title="The Team Behind"
      titleHighlight="Kynyx Solution"
      description="We're a team of engineers, designers, and strategists who believe exceptional products are built at the intersection of deep technical craft and sharp business thinking."
      accentColor="#8B5CF6"
    >
      <div className="section-divider mx-auto max-w-5xl" />
      <About />
      <div className="section-divider mx-auto max-w-5xl" />
      <Statistics />
      <div className="section-divider mx-auto max-w-5xl" />
      <TrustedBy />
      <div className="section-divider mx-auto max-w-5xl" />
      <Industries />
      <div className="section-divider mx-auto max-w-5xl" />
      <Testimonials />
      <div className="section-divider mx-auto max-w-5xl" />
      <Contact />
    </PageLayout>
  );
}
