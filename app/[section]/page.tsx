import { PortfolioPage } from '@/components/portfolio-page';

const sections = ['projects', 'experience', 'skills', 'education', 'contact'];

export function generateStaticParams() {
  return sections.map((section) => ({ section }));
}

export const dynamicParams = false;

export default function SectionPage() {
  return <PortfolioPage />;
}
