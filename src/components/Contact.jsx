import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaFacebookF, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineMail, HiOutlineCheck, HiOutlineSparkles } from "react-icons/hi";
import { FiCopy, FiSend, FiMapPin, FiClock } from "react-icons/fi";
import { profile } from "../data/siteData";
import { SectionHeading } from "./About";

const initialState = { name: "", email: "", subject: "", message: "" };

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | loading | sent | error
  const [copied, setCopied] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!values.name || !values.email || !values.message) {
      setStatus("error");
      setFeedback("Please fill out all required fields.");
      return;
    }

    // Check if EmailJS keys are configured in environment
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      // Fallback: Direct mailto link so user doesn't get stuck!
      const mailtoUrl = `mailto:${profile.email}?subject=${encodeURIComponent(
        values.subject || "Project Inquiry from Portfolio"
      )}&body=${encodeURIComponent(
        `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
      )}`;
      window.location.href = mailtoUrl;

      setStatus("sent");
      setFeedback("Redirecting to your email client with your message drafted!");
      setValues(initialState);
      return;
    }

    setStatus("loading");
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject,
          message: values.message,
        },
        { publicKey: PUBLIC_KEY }
      );
      setStatus("sent");
      setFeedback("Thank you! Your message has been sent successfully.");
      setValues(initialState);
    } catch {
      setStatus("error");
      setFeedback("Failed to send message. Please send an email directly to hello@sohelrana.dev");
    }
  };

  const whatsappHref = profile.social.whatsapp
    ? `https://wa.me/${profile.social.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
        "Hi Sohel, I explored your portfolio and would like to discuss a project with you."
      )}`
    : "#";

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="// 05. GET IN TOUCH"
          title="Let's Build Something Exceptional"
          subtitle="Have a question, an opportunity, or need a dedicated Python/Django developer for your next product? Let's connect."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16 items-start">
          
          {/* Left Column: Direct Info & Social Cards */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0d0f15]/80 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="font-display text-lg font-bold text-white tracking-tight flex items-center gap-2">
                <HiOutlineSparkles className="text-[#e11d48]" />
                Direct Communication Channels
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#94a3b8]">
                Feel free to email directly, ping on WhatsApp for quick inquiries, or connect on LinkedIn.
              </p>

              {/* Email Pill Box */}
              <div className="mt-6 flex flex-col gap-2 rounded-xl border border-white/[0.08] bg-[#141724] p-3.5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2.5 truncate">
                  <HiOutlineMail className="text-[#e11d48] text-lg shrink-0" />
                  <span className="font-mono text-xs sm:text-sm text-white truncate">
                    {profile.email}
                  </span>
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="flex items-center justify-center gap-1.5 rounded-lg border border-white/[0.1] bg-[#1a1e2e] px-3 py-1.5 font-mono text-xs text-[#94a3b8] hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <HiOutlineCheck className="text-[#fb7185]" />
                      <span className="text-[#fb7185]">Copied</span>
                    </>
                  ) : (
                    <>
                      <FiCopy />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              {/* Contact Information Details */}
              <div className="mt-6 space-y-3.5 border-t border-white/[0.06] pt-6 font-mono text-xs">
                <div className="flex items-center gap-3 text-[#94a3b8]">
                  <FiMapPin className="text-[#e11d48] text-base" />
                  <span>{profile.location}</span>
                </div>
                <div className="flex items-center gap-3 text-[#94a3b8]">
                  <FiClock className="text-[#fb7185] text-base" />
                  <span>Fast Response (within 24 hours)</span>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-8 flex flex-wrap gap-2.5 border-t border-white/[0.06] pt-6">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-[#141724] px-4 py-2.5 font-mono text-xs text-white transition-all hover:border-[#25D366] hover:text-[#25D366]"
                >
                  <FaWhatsapp size={15} className="text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>

                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-[#141724] px-4 py-2.5 font-mono text-xs text-white transition-all hover:border-[#e11d48] hover:text-[#fb7185]"
                >
                  <FaGithub size={14} />
                  <span>GitHub</span>
                </a>

                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-[#141724] px-4 py-2.5 font-mono text-xs text-white transition-all hover:border-[#0077B5] hover:text-[#0077B5]"
                >
                  <FaLinkedinIn size={14} />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={profile.social.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/[0.1] bg-[#141724] px-4 py-2.5 font-mono text-xs text-white transition-all hover:border-[#1877F2] hover:text-[#1877F2]"
                >
                  <FaFacebookF size={13} />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0d0f15]/80 p-6 sm:p-8 backdrop-blur-md shadow-2xl">
            <h3 className="font-display text-xl font-bold text-white tracking-tight">
              Send A Direct Message
            </h3>
            <p className="mt-1 font-mono text-xs text-[#94a3b8]">
              Fill out the form below and I will respond to your inquiry shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block font-mono text-xs font-medium text-[#94a3b8] mb-2">
                    Your Name <span className="text-[#e11d48]">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={values.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full rounded-xl border border-white/[0.1] bg-[#141724] px-4 py-3 font-mono text-sm text-white placeholder-[#64748b] transition-all focus:border-[#e11d48] focus:bg-[#181c2c] focus:outline-none focus:ring-1 focus:ring-[#e11d48]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-mono text-xs font-medium text-[#94a3b8] mb-2">
                    Your Email <span className="text-[#e11d48]">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full rounded-xl border border-white/[0.1] bg-[#141724] px-4 py-3 font-mono text-sm text-white placeholder-[#64748b] transition-all focus:border-[#e11d48] focus:bg-[#181c2c] focus:outline-none focus:ring-1 focus:ring-[#e11d48]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block font-mono text-xs font-medium text-[#94a3b8] mb-2">
                  Project Scope / Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={values.subject}
                  onChange={handleChange}
                  placeholder="e.g. Django REST API Development / Full-Stack Project"
                  className="w-full rounded-xl border border-white/[0.1] bg-[#141724] px-4 py-3 font-mono text-sm text-white placeholder-[#64748b] transition-all focus:border-[#e11d48] focus:bg-[#181c2c] focus:outline-none focus:ring-1 focus:ring-[#e11d48]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block font-mono text-xs font-medium text-[#94a3b8] mb-2">
                  Message Details <span className="text-[#e11d48]">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, timeline, and architectural requirements..."
                  className="w-full resize-none rounded-xl border border-white/[0.1] bg-[#141724] px-4 py-3 font-mono text-sm text-white placeholder-[#64748b] transition-all focus:border-[#e11d48] focus:bg-[#181c2c] focus:outline-none focus:ring-1 focus:ring-[#e11d48]"
                />
              </div>

              {/* Status & Feedback message */}
              {feedback && (
                <div
                  className={`rounded-xl p-3.5 font-mono text-xs ${
                    status === "sent"
                      ? "border border-[#e11d48]/40 bg-[#e11d48]/10 text-[#fb7185]"
                      : "border border-red-500/40 bg-red-500/10 text-red-300"
                  }`}
                >
                  {feedback}
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#e11d48] to-[#be123c] py-4 font-mono text-xs font-semibold uppercase tracking-wider text-white shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all hover:shadow-[0_0_35px_rgba(225,29,72,0.7)] hover:scale-[1.01] disabled:opacity-50"
              >
                {status === "loading" ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <FiSend className="text-sm transition-transform group-hover:translate-x-1" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
