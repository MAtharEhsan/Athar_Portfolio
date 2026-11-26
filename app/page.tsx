import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero-section';
import { FeaturesSection } from '@/components/features-section';
import { ProjectsSection } from '@/components/projects-section';
import { ExperienceSection, SkillsSection } from '@/components/resume-section';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { ScrollRevealObserver } from '@/components/scroll-reveal-observer';
import { EducationSection } from '@/components/education-section';

export const metadata = {
  title: "Muhammad Athar Ehsan's Portfolio",
  description:
    'Software Quality Assurance Engineer specializing in manual and automated testing, with MERN Stack development experience.',
  keywords: [
    'SQA Engineer',
    'Cypress',
    'Playwright',
    'MERN Stack',
  ],
  authors: [{ name: 'Muhammad Athar Ehsan' }],
  openGraph: {
    title: 'Muhammad Athar Ehsan | SQA Engineer',
    description: 'Portfolio showcasing software quality assurance, test automation, and web development.',
    type: 'website',
  },
};

export default function Home() {
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
