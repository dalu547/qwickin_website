import { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";

// ─── Form config ──────────────────────────────────────────────────────────────
// TODO: Replace YOUR_FORM_ID with the Formspree form ID created under info@qwickin.com
// Sign up at https://formspree.io → New Form → use info@qwickin.com as recipient
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const services = [
  "App Development",
  "Cybersecurity",
  "Cloud Infrastructure",
  "Managed IT Services",
  "Digital Signage",
  "Web Development",
  "Not Sure Yet",
];

const hearAboutOptions = [
  "Google",
  "Referral",
  "Social Media",
  "Other",
];

// ─── Shared input class ───────────────────────────────────────────────────────
const inputCls =
  "w-full rounded-lg border border-white/15 bg-[#2A2A2A] px-4 py-3 text-sm text-white placeholder-[#666] outline-none transition-all duration-200 focus:border-[#7CBD5E] focus:ring-2 focus:ring-[#7CBD5E]/20";

const labelCls = "mb-1.5 block text-sm font-medium text-[#ccc]";

// ─── Left panel info items ────────────────────────────────────────────────────
const infoItems = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M9 1.5C6.1 1.5 3.75 3.85 3.75 6.75C3.75 10.69 9 16.5 9 16.5C9 16.5 14.25 10.69 14.25 6.75C14.25 3.85 11.9 1.5 9 1.5Z" stroke="#7CBD5E" strokeWidth="1.4" strokeLinejoin="round"/>
        <circle cx="9" cy="6.75" r="2" stroke="#7CBD5E" strokeWidth="1.4"/>
      </svg>
    ),
    label: "Melbourne Office",
    value: "Unit 88/150 Palmers Road, Truganina VIC 3029",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3.4 3H6.5L8 6.5L6 7.75C6.9 9.6 8.4 11.1 10.25 12L11.5 10L15 11.5V14.6C15 14.82 14.82 15 14.6 15C7.67 15 2.5 9.83 2.5 3C2.5 2.78 2.68 2.6 2.9 2.6" stroke="#7CBD5E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Phone",
    value: "+61 424 127 808",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <rect x="1.5" y="4" width="15" height="10" rx="1.5" stroke="#7CBD5E" strokeWidth="1.4"/>
        <path d="M1.5 6.5L9 11L16.5 6.5" stroke="#7CBD5E" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    label: "Email",
    value: "info@qwickin.com",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <circle cx="9" cy="9" r="7.5" stroke="#7CBD5E" strokeWidth="1.4"/>
        <path d="M9 5V9.5L11.5 12" stroke="#7CBD5E" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    label: "Response Time",
    value: "Within 24 hours",
  },
];

// ─── Contact Section ──────────────────────────────────────────────────────────
export const ContactSection = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="relative bg-[#1A1A1A] py-20 md:py-24 overflow-hidden">
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_10%_50%,rgba(124,189,94,0.07),transparent)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_90%_20%,rgba(90,166,74,0.06),transparent)]" />

      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16 xl:gap-20">

          {/* ── Left: header + contact info ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">
              Get in Touch
            </span>
            <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
              Request a Free IT Consultation
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#999]">
              Tell us about your business and what you need. We'll get back within 24 hours.
            </p>

            {/* Info items */}
            <ul className="mt-10 space-y-6">
              {infoItems.map(({ icon, label, value }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-[#7CBD5E]/20 bg-[#7CBD5E]/10">
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#7CBD5E]">
                      {label}
                    </p>
                    <p className="mt-0.5 text-sm text-[#ccc]">{value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ── Right: form ── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-white/10 bg-[#212121] p-7 md:p-9"
            >
              {/* Success banner */}
              {status === "success" && (
                <div className="mb-6 flex items-center gap-3 rounded-lg border border-[#7CBD5E]/30 bg-[#7CBD5E]/10 px-4 py-3 text-sm font-medium text-[#9ed885]">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0">
                    <circle cx="9" cy="9" r="7.5" stroke="#7CBD5E" strokeWidth="1.4"/>
                    <path d="M6 9L8 11L12 7" stroke="#7CBD5E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  Thanks! We'll be in touch within 24 hours.
                </div>
              )}

              {/* Error banner */}
              {status === "error" && (
                <div className="mb-6 flex items-start gap-3 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 flex-shrink-0">
                    <circle cx="9" cy="9" r="7.5" stroke="#EF4444" strokeWidth="1.4"/>
                    <path d="M9 5.5V9.5M9 11.5V12" stroke="#EF4444" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                  <span>
                    Something went wrong. Please email us directly at{" "}
                    <a href="mailto:info@qwickin.com" className="underline">
                      info@qwickin.com
                    </a>
                  </span>
                </div>
              )}

              <div className="grid gap-5 sm:grid-cols-2">
                {/* 1. Full Name */}
                <div>
                  <label htmlFor="name" className={labelCls}>
                    Full Name <span className="text-[#7CBD5E]">*</span>
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    className={inputCls}
                  />
                </div>

                {/* 2. Business Name */}
                <div>
                  <label htmlFor="company" className={labelCls}>
                    Business / Company Name <span className="text-[#7CBD5E]">*</span>
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    placeholder="e.g. Acme Pty Ltd"
                    className={inputCls}
                  />
                </div>

                {/* 3. Email */}
                <div>
                  <label htmlFor="email" className={labelCls}>
                    Email Address <span className="text-[#7CBD5E]">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com.au"
                    className={inputCls}
                  />
                </div>

                {/* 4. Phone */}
                <div>
                  <label htmlFor="phone" className={labelCls}>
                    Phone Number <span className="text-[#7CBD5E]">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+61 4XX XXX XXX"
                    className={inputCls}
                  />
                </div>

                {/* 5. Service dropdown */}
                <div className="sm:col-span-2">
                  <label htmlFor="service" className={labelCls}>
                    Service Interested In <span className="text-[#7CBD5E]">*</span>
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className={`${inputCls} cursor-pointer`}
                  >
                    <option value="" disabled>Select a service…</option>
                    {services.map((s) => (
                      <option key={s} value={s} className="bg-[#2A2A2A] text-white">
                        {s}
                      </option>
                    ))}
                  </select>
                </div>

                {/* 6. Message */}
                <div className="sm:col-span-2">
                  <label htmlFor="message" className={labelCls}>
                    Message / Project Description <span className="text-[#7CBD5E]">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell us about your project, current challenges, or what you'd like to achieve…"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                {/* 7. How did you hear */}
                <div className="sm:col-span-2">
                  <label htmlFor="referral" className={labelCls}>
                    How did you hear about us?{" "}
                    <span className="text-[#555] font-normal">(optional)</span>
                  </label>
                  <select
                    id="referral"
                    name="referral"
                    defaultValue=""
                    className={`${inputCls} cursor-pointer`}
                  >
                    <option value="" className="bg-[#2A2A2A]">Select…</option>
                    {hearAboutOptions.map((o) => (
                      <option key={o} value={o} className="bg-[#2A2A2A] text-white">
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#7CBD5E] py-3.5 text-sm font-semibold text-[#1A1A1A] transition-all duration-200 hover:bg-[#5AA64A] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6" stroke="#1A1A1A" strokeWidth="2" strokeDasharray="28" strokeDashoffset="10"/>
                    </svg>
                    Sending…
                  </>
                ) : (
                  "Send Enquiry"
                )}
              </button>

              <p className="mt-4 text-center text-xs text-[#555]">
                By submitting this form you agree to be contacted by QwickIn IT Services.
              </p>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
