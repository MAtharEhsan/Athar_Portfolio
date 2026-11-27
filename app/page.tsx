import { PortfolioPage } from '@/components/portfolio-page';

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
  return <PortfolioPage />;
}
