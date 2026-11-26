'use client';

import { useRef, useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { Mail, Phone } from 'lucide-react';
import { isValidContactEmail, isValidContactName } from '@/lib/contact-validation';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
  website: string;
};

type ContactField = 'name' | 'email' | 'message';
type ContactFieldErrors = Partial<Record<ContactField, string>>;

const requiredFieldMessages: Record<ContactField, string> = {
  name: 'Please enter your name.',
  email: 'Please enter your email address.',
  message: 'Please enter a message.',
};

const emptyForm: ContactFormData = {
  name: '',
  email: '',
  message: '',
  website: '',
};

const suggestedMessages = [
  "Hi Athar, I'm interested in your software testing services. Could we discuss my project?",
  'Hello Athar, I need help setting up automated tests for my web application. Could we talk?',
  'Hi, I would like to discuss API and regression testing support for an upcoming release.',
  'Hello, could you review our current testing process and suggest ways to improve automation?',
  "Hi Athar, I'm planning a web development project and would like to discuss working with you.",
];

const getFieldError = (field: ContactField, value: string) => {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return requiredFieldMessages[field];
  }

  if (field === 'name' && !isValidContactName(trimmedValue)) {
    return 'Please enter a valid name using letters.';
  }

  if (field === 'email' && !isValidContactEmail(trimmedValue)) {
    return 'Enter a valid email address like abc@xyz.com.';
  }

  return undefined;
};

export function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(emptyForm);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [suggestionIndex, setSuggestionIndex] = useState(-1);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleUseSuggestedMessage = () => {
    const nextIndex = (suggestionIndex + 1) % suggestedMessages.length;
    setSuggestionIndex(nextIndex);
    setFormData((previous) => ({ ...previous, message: suggestedMessages[nextIndex] }));
    setFieldErrors((previous) => ({ ...previous, message: undefined }));
    setSubmitStatus({ type: null, message: '' });
    messageRef.current?.focus();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));

    if (name === 'name' || name === 'email' || name === 'message') {
      setFieldErrors((previous) => {
        const shouldValidate = Boolean(value.trim()) || Boolean(previous[name]);

        return {
          ...previous,
          [name]: shouldValidate ? getFieldError(name, value) : undefined,
        };
      });
    }

    setSubmitStatus({ type: null, message: '' });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitStatus({ type: null, message: '' });

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();
    const errors: ContactFieldErrors = {
      name: getFieldError('name', name),
      email: getFieldError('email', email),
      message: getFieldError('message', message),
    };

    setFieldErrors(errors);

    if (Object.values(errors).some(Boolean)) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, name, email, message }),
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

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
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
            <label htmlFor="name">
              Name <span className="required-mark" aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Mr. Athar"
              autoComplete="name"
              required
              aria-invalid={Boolean(fieldErrors.name)}
              aria-describedby={fieldErrors.name ? 'name-error' : undefined}
            />
            {fieldErrors.name && (
              <p className="field-error" id="name-error" role="alert">
                {fieldErrors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email">
              Email <span className="required-mark" aria-hidden="true">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="abc@xyz.com"
              autoComplete="email"
              required
              aria-invalid={Boolean(fieldErrors.email)}
              aria-describedby={fieldErrors.email ? 'email-error' : undefined}
            />
            {fieldErrors.email && (
              <p className="field-error" id="email-error" role="alert">
                {fieldErrors.email}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="message">
              Message <span className="required-mark" aria-hidden="true">*</span>
            </label>
            <div className="message-input-wrap">
              <textarea
                ref={messageRef}
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                rows={5}
                required
                aria-invalid={Boolean(fieldErrors.message)}
                aria-describedby={fieldErrors.message ? 'message-error' : undefined}
              />
              <button
                className="message-suggestion"
                type="button"
                onClick={handleUseSuggestedMessage}
              >
                {suggestionIndex < 0
                  ? 'Use sample 1 of 5'
                  : `Use sample ${((suggestionIndex + 1) % suggestedMessages.length) + 1} of 5`}
              </button>
            </div>
            {fieldErrors.message && (
              <p className="field-error" id="message-error" role="alert">
                {fieldErrors.message}
              </p>
            )}
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
