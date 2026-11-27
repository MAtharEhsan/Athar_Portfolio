import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection, SkillsSection } from '@/components/experience-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { ScrollRevealObserver } from '@/components/scroll-reveal-observer';
import { EducationSection } from '@/components/education-section';

export function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <ScrollRevealObserver />
      <HeroSection />
      <FeaturesSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
