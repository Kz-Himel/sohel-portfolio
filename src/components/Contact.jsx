import { useState } from "react";
import { profile } from "../data/siteData";
import { SectionHeading } from "./About";

const initialState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState("idle"); // idle | sent

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // No backend wired up yet — this is where an email/API call goes later.
    setStatus("sent");
    setValues(initialState);
  };

  return (
    <section id="contact" className="bg-surface/40 px-6 py-28 sm:py-32">
      <div className="mx-auto max-w-3xl">
        <SectionHeading eyebrow="Contact" title="Let's build something" />
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-text-muted sm:text-base">
          Have a project in mind, or just want to say hello? Send a message
          and I'll get back to you.
        </p>

        <form onSubmit={handleSubmit} className="mt-10 grid gap-5 sm:grid-cols-2">
          <Field
            label="Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
          <Field
            label="Email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          <div className="sm:col-span-2">
            <Field
              label="Subject"
              name="subject"
              value={values.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-muted">
              Message
            </label>
            <textarea
              name="message"
              rows={5}
              required
              value={values.message}
              onChange={handleChange}
              className="w-full resize-none border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
            />
          </div>

          <div className="sm:col-span-2 flex items-center gap-4">
            <button
              type="submit"
              className="border border-accent bg-accent px-7 py-3 font-mono text-sm text-bg transition-transform hover:-translate-y-0.5"
            >
              Send Message
            </button>
            {status === "sent" && (
              <span className="font-mono text-xs text-accent">
                Message ready — connect a backend to deliver it.
              </span>
            )}
          </div>
        </form>

        <p className="mt-10 font-mono text-xs text-text-muted">
          Or email directly at{" "}
          <a href={`mailto:${profile.email}`} className="text-accent">
            {profile.email}
          </a>
        </p>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", value, onChange, required }) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block font-mono text-xs uppercase tracking-wider text-text-muted"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full border border-border bg-bg px-4 py-3 text-sm text-text outline-none transition-colors focus:border-accent"
      />
    </div>
  );
}
