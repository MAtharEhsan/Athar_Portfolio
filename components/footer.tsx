'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import Image from 'next/image';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
  ];

  const resourceLinks = [
    { label: 'Blog', href: '#blog' },
    { label: 'Documentation', href: '#docs' },
    { label: 'Tutorials', href: '#tutorials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/MAtharEhsan', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/muhammadatharehsan', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:muhammadatharehsan2@gmail.com', label: 'Email' },
    { icon: FaWhatsapp, href: 'https://wa.me/923046000182', label: 'WhatsApp' },
  ];

  return (
    <footer className="bg-[#111827] border-t border-[#1F2937] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Footer Sections Grid */}
        <div className="grid md:grid-cols-4 gap-x-12 gap-y-6 mb-8 items-start">
          {/* Brand with Image */}
          <div className="flex items-start gap-8">
            <div className="flex-shrink-0 mt-2 ml-2">
              <Image
                src="/profile_footer.png"
                alt="Muhammad Athar Ehsan"
                width={60}
                height={60}
                className="rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col mt-2">
              <h4 className="text-2xl font-bold text-[#38BDF8] mb-4">
                M Athar Ehsan
              </h4>
              <p className="text-base text-[#9CA3AF]">
                <span className="block mb-1">Full Stack Developer |</span>
                <span className="block mb-1">Project Manager|</span>
                <span className="block">SQA Engineer</span>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="mt-2 ml-18">
            <h4 className="text-2xl font-bold text-[#38BDF8] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-[#9CA3AF] hover:text-[#38BDF8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="mt-2 ml-18">
            <h4 className="text-2xl font-bold text-[#38BDF8] mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-base text-[#9CA3AF] hover:text-[#38BDF8] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="mt-2 ml-16">
            <h4 className="text-2xl font-bold text-[#38BDF8] mb-4">
              Connect
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#2563EB]/20 rounded-lg flex items-center justify-center text-[#9CA3AF] hover:bg-[#2563EB] hover:text-[#E5E7EB] transition-colors"
                    aria-label={link.label}
                  >
                    <Icon size={22} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#1F2937] pt-8">
          <div className="flex justify-center items-center">
            <p className="text-base text-[#9CA3AF] text-center">
              © {currentYear} Muhammad Athar Ehsan. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
