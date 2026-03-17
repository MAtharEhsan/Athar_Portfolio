'use client';

import React from "react"

import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { useState } from 'react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || 'Failed to send message.');
      }

      setSubmitStatus({
        type: 'success',
        message: 'Your message was sent successfully. I will get back to you soon.',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : 'Something went wrong while sending your message.';

      setSubmitStatus({
        type: 'error',
        message: errorMessage,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'muhammadatharehsan2@gmail.com',
      href: 'mailto:muhammadatharehsan2@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 304 6000182',
      href: 'tel:+923046000182',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Islamabad, Pakistan',
      href: '#',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/muhammadatharehsan',
      href: 'https://linkedin.com/in/muhammadatharehsan',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/MAtharEhsan',
      href: 'https://github.com/MAtharEhsan',
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#E5E7EB] mb-4">
            Get In Touch
          </h2>
          <p className="text-[#9CA3AF] text-xl max-w-2xl mx-auto">
            I'd love to hear from you. Let's connect and discuss how I can help with your next project.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[#E5E7EB] mb-8">
              Contact Information
            </h3>
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-[#2563EB]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#38BDF8]/20 transition-colors">
                    <Icon className="text-[#38BDF8]" size={24} />
                  </div>
                  <div>
                    <p className="text-base font-semibold text-[#9CA3AF]">
                      {info.label}
                    </p>
                    <p className="text-[#E5E7EB] text-lg group-hover:text-[#38BDF8] transition-colors">
                      {info.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-8">
            <h3 className="text-3xl font-bold text-[#E5E7EB] mb-6">
              Send me a Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-base font-medium text-[#E5E7EB] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0B0F19] border border-[#1F2937] rounded-lg px-4 py-2 text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#38BDF8] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium text-[#E5E7EB] mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0B0F19] border border-[#1F2937] rounded-lg px-4 py-2 text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#38BDF8] transition-colors"
                  placeholder="Your email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-base font-medium text-[#E5E7EB] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-[#0B0F19] border border-[#1F2937] rounded-lg px-4 py-2 text-[#E5E7EB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#38BDF8] transition-colors resize-none"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#2563EB] text-[#E5E7EB] font-semibold py-3 rounded-lg hover:bg-[#1E40AF] transition-colors text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitStatus.type && (
                <p
                  className={`text-sm ${
                    submitStatus.type === 'success' ? 'text-green-400' : 'text-red-400'
                  }`}
                >
                  {submitStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
