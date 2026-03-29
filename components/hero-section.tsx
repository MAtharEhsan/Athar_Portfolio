'use client';

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;

  const titles = [
    'Software Quality Assurance Engineer',
    'Full Stack Developer',
    'Project Manager',
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MAtharEhsan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/muhammadatharehsan', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:muhammadatharehsan2@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/923046000182', label: 'WhatsApp' },
  ];

  const techStack = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'TypeScript', icon: '📘' },
  ];

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeoutId: NodeJS.Timeout | undefined;

    if (!isDeleting && displayedText === currentTitle) {
      timeoutId = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timeoutId = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentTitle.slice(0, prev.length + 1)
        );
      }, isDeleting ? 50 : typingSpeed);
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [displayedText, isDeleting, titleIndex]);

  return (
    <section id="home" className="pt-32 pb-16 px-6 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-0">
              {/* Name in 2 lines */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#E5E7EB] leading-tight">
                <span className="block" >Hi, I'm </span>
                <span className="block text-[#38BDF8]">M Athar Ehsan</span>
              </h1>

              {/* Typing Titles */}
              <div className="h-20">
                <p className="text-2xl sm:text-3xl font-semibold min-h-12 text-[#E5E7EB]">
                  {displayedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              {/* Paragraph */}
              <p className="text-[#9CA3AF] text-lg max-w-xl leading-snug text-justify">
                Experienced Software Engineer and Associate Project Manager with expertise in delivering complex,
                high-impact projects on time. Skilled at leading cross-functional teams, translating technical
                requirements into actionable roadmaps, and maintaining clear stakeholder alignment. A disciplined Agile
                practitioner across the full sprint lifecycle from planning and backlog grooming to risk mitigation and
                retrospectives. Brings hands-on expertise in test automation (Cypress, Selenium, Playwright) and
                full-stack MERN development, building scalable, production-ready applications from the ground up.
              </p>
            </div>

            {/* Social & Tech Stack */}
            <div className="flex flex-col lg:flex-row gap-20">
              {/* Social Links */}
              <div>
                <p className="text-lg font-semibold text-gray-400 uppercase mb-3 font-sans tracking-widest">Find me on</p>
                <div className="grid grid-cols-2 gap-4 w-fit">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-11 h-11 bg-[#2563EB]/20 rounded-lg flex items-center justify-center text-[#38BDF8] hover:bg-[#2563EB] hover:text-[#E5E7EB] transition-all hover:scale-110"
                        aria-label={link.label}
                        title={link.label}
                      >
                        <Icon size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <p className="text-lg font-semibold text-gray-400 uppercase mb-3 font-sans tracking-widest">Tech Stack</p>
                <div className="grid grid-cols-2 gap-4 w-fit">
                  {techStack.map((tech) => (
                    <div
                      key={tech.name}
                      className="px-3 py-2 bg-[#2563EB]/10 border border-[#2563EB]/30 rounded-lg flex items-center gap-2 hover:border-[#38BDF8] transition-colors"
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span className="text-sm text-[#E5E7EB]">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-start md:pl-12 lg:pl-9">
            <div className="relative w-[19rem] sm:w-[23rem] md:w-[30rem] h-100 sm:h-110 md:h-[40rem] rounded-2xl overflow-hidden border border-[#2563EB]/30">
              <img
                src="/profile-placeholder.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
