import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import SummarySection from "@/components/portfolio/SummarySection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import ExpertiseSection from "@/components/portfolio/ExpertiseSection";
import MethodologySection from "@/components/portfolio/MethodologySection";
import ToolsSection from "@/components/portfolio/ToolsSection";
import IndustriesSection from "@/components/portfolio/IndustriesSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ValuesSection from "@/components/portfolio/ValuesSection";
import EducationSection from "@/components/portfolio/EducationSection";
import ContactSection from "@/components/portfolio/ContactSection";

export default function Index() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SummarySection />
        <AchievementsSection />
        <ExpertiseSection />
        <MethodologySection />
        <ToolsSection />
        <IndustriesSection />
        <ExperienceSection />
        <ValuesSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  );
}
