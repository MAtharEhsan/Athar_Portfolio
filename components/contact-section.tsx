'use client';

import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Mail, Phone } from 'lucide-react';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  website: string;
};

const emptyForm: ContactFormData = {
  name: '',
  email: '',
  message: '',
  website: '',
};

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
      setFormData(emptyForm);
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong while sending your message.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="section contact-section" id="contact">
      <div className="container contact-grid">
        <div>
          <h2 className="section-title">Get in touch</h2>
          <p className="contact-copy">
            Open a conversation about testing, automation, or web development.
          </p>
          <div className="contact-details">
            <a className="contact-detail" href="mailto:muhammadatharehsan2@gmail.com">
              <Mail size={18} aria-hidden="true" />
              muhammadatharehsan2@gmail.com
            </a>
            <a className="contact-detail" href="tel:+923046000182">
              <Phone size={18} aria-hidden="true" />
              +92 304 6000182
            </a>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              type="text"
              value={formData.website}
              onChange={handleChange}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              autoComplete="email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="How can I help?"
              rows={5}
              required
            />
          </div>
          <button className="contact-submit" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
          {submitStatus.type && (
            <p className="form-status" data-type={submitStatus.type} role="status" aria-live="polite">
              {submitStatus.message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
