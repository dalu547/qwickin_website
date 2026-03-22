import { useNavigate } from "react-router-dom";
import { Container } from "@/components/premium/Container";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="mt-10">
    <h2 className="text-xl font-bold text-[#1A1A1A]">{title}</h2>
    <div className="mt-3 space-y-3 text-sm leading-relaxed text-[#555555]">{children}</div>
  </div>
);

export const PrivacyPolicyPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white pt-32 pb-24">
      <Container className="max-w-3xl">
        {/* Breadcrumb */}
        <button
          type="button"
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#7CBD5E] hover:text-[#9ed885] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M9 3L5 7L9 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back to Home
        </button>

        {/* Header */}
        <div className="mt-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">
            Legal
          </span>
          <h1 className="mt-3 text-4xl font-extrabold text-[#1A1A1A]">Privacy Policy</h1>
          <p className="mt-3 text-sm text-[#666]">
            Last updated: March 2026 &nbsp;·&nbsp; QwickIn IT Services (QWICKIN PTY LTD) &nbsp;·&nbsp; ABN: 67 680 498 198
          </p>
          <div className="mt-6 h-px bg-[#E5E5E5]" />
        </div>

        <Section title="1. Introduction">
          <p>
            QwickIn IT Services (QWICKIN PTY LTD) ("we", "us", or "our") is committed to protecting your
            personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard
            your information when you visit our website or engage with our services.
          </p>
          <p>
            By using our website or services, you consent to the data practices described in this policy.
            If you do not agree, please do not use our website.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p>We may collect the following types of information:</p>
          <ul className="ml-4 list-disc space-y-1.5">
            <li><strong className="text-[#333333]">Contact information</strong> — name, email address, phone number, business name.</li>
            <li><strong className="text-[#333333]">Enquiry details</strong> — the service you are interested in and your project description.</li>
            <li><strong className="text-[#333333]">Usage data</strong> — pages visited, time on site, browser type, IP address (via Google Analytics).</li>
            <li><strong className="text-[#333333]">Cookie data</strong> — session and preference cookies stored locally in your browser.</li>
          </ul>
        </Section>

        <Section title="3. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="ml-4 list-disc space-y-1.5">
            <li>Respond to your enquiries and provide the services you request.</li>
            <li>Send follow-up communications related to your enquiry.</li>
            <li>Improve our website and services using anonymised analytics data.</li>
            <li>Comply with legal and regulatory obligations.</li>
          </ul>
          <p>We do not sell, trade, or rent your personal information to third parties.</p>
        </Section>

        <Section title="4. Cookies">
          <p>
            Our website uses cookies to enhance your browsing experience. A cookie is a small text file stored
            on your device. We use cookies to remember your preferences and analyse site traffic.
          </p>
          <p>
            You may disable cookies in your browser settings at any time. Note that some features of the
            website may not function correctly without cookies.
          </p>
        </Section>

        <Section title="5. Third-Party Services">
          <p>We use the following third-party services that may process your data:</p>
          <ul className="ml-4 list-disc space-y-1.5">
            <li><strong className="text-[#333333]">Formspree</strong> — processes contact form submissions and forwards them to our inbox.</li>
            <li><strong className="text-[#333333]">Google Analytics</strong> — anonymised website traffic analysis.</li>
            <li><strong className="text-[#333333]">Google Maps</strong> — embedded maps to display our office locations.</li>
          </ul>
          <p>Each of these services has its own privacy policy governing their data practices.</p>
        </Section>

        <Section title="6. Data Storage & Security">
          <p>
            We take reasonable steps to protect your personal information from misuse, loss, and unauthorised
            access. Our founder is a practising cybersecurity professional and security is central to how we
            operate.
          </p>
          <p>
            However, no method of transmission over the internet is 100% secure. We cannot guarantee the
            absolute security of any data you transmit to us.
          </p>
        </Section>

        <Section title="7. Your Rights (Australian Privacy Act 1988)">
          <p>Under the Australian Privacy Act, you have the right to:</p>
          <ul className="ml-4 list-disc space-y-1.5">
            <li>Access the personal information we hold about you.</li>
            <li>Request correction of inaccurate or incomplete information.</li>
            <li>Request deletion of your personal information (subject to legal retention requirements).</li>
            <li>Opt out of direct marketing communications at any time.</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at{" "}
            <a href="mailto:info@qwickin.com" className="text-[#7CBD5E] underline underline-offset-2 hover:text-[#9ed885]">
              info@qwickin.com
            </a>.
          </p>
        </Section>

        <Section title="8. Contact Us">
          <p>If you have any questions about this Privacy Policy, please contact us:</p>
          <ul className="ml-4 list-disc space-y-1.5">
            <li><strong className="text-[#333333]">Email:</strong> info@qwickin.com</li>
            <li><strong className="text-[#333333]">Phone:</strong> +61 424 127 808</li>
            <li><strong className="text-[#333333]">Address:</strong> Unit 88/150 Palmers Road, Truganina VIC 3029, Australia</li>
          </ul>
        </Section>

        <div className="mt-12 h-px bg-white/10" />
        <p className="mt-6 text-xs text-[#555]">
          © 2026 QwickIn IT Services (QWICKIN PTY LTD). All rights reserved.
        </p>
      </Container>
    </div>
  );
};
