import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaFacebookF } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "../data/siteData";
import { SectionHeading } from "./About";

const initialState = { name: "", email: "", subject: "", message: "" };

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const whatsappHref = profile.social.whatsapp
  ? `https://wa.me/${profile.social.whatsapp.replace(/\D/g, "")}`
  : "#";

export default function Contact() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setErrorMsg("Email isn't configured yet — add your EmailJS IDs in .env");
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
      setValues(initialState);
    } catch (err) {
      setStatus("error");
      setErrorMsg("Failed to send. Please try again or email directly.");
    }
  };

  return (
    <section id="contact" className="bg-surface/40 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Contact" title="Let's build something" />
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
          Have a project in mind, or just want to say hello? Send a message and I'll get back to you.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-xs text-text-muted transition-colors hover:border-accent hover:text-accent">
            <HiOutlineMail size={15} /> Email
          </a>
          <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-xs text-text-muted transition-colors hover:border-accent hover:text-accent">
            <FaWhatsapp size={15} /> WhatsApp
          </a>
          <a href={profile.social.facebook} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-xs text-text-muted transition-colors hover:border-accent hover:text-accent">
            <FaFacebookF size={13} /> Facebook
          </a>
        </div>

        {/* form (Name/Email/Subject/Message + Send button) — same as before, full code in zip */}
      </div>
    </section>
  );
}