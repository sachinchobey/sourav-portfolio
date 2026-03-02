import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import WorkSection from "@/components/WorkSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

export default function Index() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(180deg, #03064A 0%, #060FB0 50%, #03064A 100%)" }}>
      <Header />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <FooterSection />
    </div>
  );
}
