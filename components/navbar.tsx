'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, MessageCircle } from 'lucide-react';
import Image from 'next/image';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = ['home', 'features', 'projects', 'resume', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'Features', id: 'features' },
    { label: 'Projects', id: 'projects' },
    { label: 'Resume', id: 'resume' },
    { label: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MAtharEhsan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/muhammadatharehsan', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:muhammadatharehsan2@gmail.com', label: 'Email' },
    { icon: MessageCircle, href: 'https://wa.me/923046000182', label: 'WhatsApp' },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/95 backdrop-blur border-b border-[#1F2937]'
          : 'bg-transparent border-b border-[#1F2937]'
      }`}
    >
      <div className="w-full px-2 sm:px-4 lg:px-16">
        <div className="flex items-center py-2">

          {/* LEFT MOST — LOGO */}
          <button
            onClick={() => scrollToSection('home')}
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/profile.png"
              alt="Muhammad Athar Ehsan"
              width={100}
              height={100}
              className="rounded-full"
              priority
            />
          </button>

          {/* FLEX SPACER */}
          <div className="flex-1" />

          {/* RIGHT MOST — DESKTOP NAV */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-base font-medium transition-colors ${
                  activeSection === link.id
                    ? 'text-[#38BDF8] border-b-2 border-[#38BDF8]'
                    : 'text-[#E5E7EB] hover:text-[#38BDF8]'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden ml-4 text-[#E5E7EB]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden bg-[#111827] border-t border-[#1F2937]">
            <div className="px-3 pt-3 pb-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left px-3 py-2 text-[#E5E7EB] hover:bg-[#1F2937] rounded transition-colors"
                >
                  {link.label}
                </button>
              ))}

              <div className="border-t border-[#1F2937] pt-3 mt-3">
                <p className="text-xs font-semibold text-[#9CA3AF] px-3 mb-2 uppercase tracking-wider">
                  Find me on
                </p>
                <div className="flex gap-2 px-3">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-[#2563EB]/20 rounded flex items-center justify-center text-[#9CA3AF] hover:text-[#E5E7EB] hover:bg-[#2563EB] transition-colors"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
