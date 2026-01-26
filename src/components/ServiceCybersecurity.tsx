import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  BadgeCheck,
  ClipboardCheck,
  Eye,
  KeyRound,
  ShieldCheck,
  Target,
  AlertTriangle,
  Building2,
  GraduationCap,
  Briefcase,
} from "lucide-react";

const securityServices = [
  {
    title: "Security Assessments & Hardening",
    description:
      "Comprehensive security audits identifying vulnerabilities and providing actionable remediation plans.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Microsoft Security Stack",
    description:
      "Expert implementation of Microsoft Defender, Sentinel, Purview, and security baselines.",
    icon: <BadgeCheck className="h-5 w-5" />,
  },
  {
    title: "Identity & Access Management",
    description:
      "Azure AD/Entra ID optimization, PIM/PAM, MFA, and conditional access policies.",
    icon: <KeyRound className="h-5 w-5" />,
  },
  {
    title: "Vulnerability Management",
    description:
      "Continuous scanning, remediation tracking, alert management, and monthly reporting.",
    icon: <Target className="h-5 w-5" />,
  },
  {
    title: "Essential 8 Compliance",
    description:
      "Implementation and maintenance of the Essential 8 framework with documented controls.",
    icon: <ClipboardCheck className="h-5 w-5" />,
  },
  {
    title: "Security Advisory for SMEs",
    description:
      "Strategic guidance tailored to your business size, budget, and risk profile.",
    icon: <Eye className="h-5 w-5" />,
  },
];

const riskCards = [
  {
    title: "Financial Loss",
    stat: "Average cost of data breach: $4.45M (IBM, 2023)",
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    title: "Reputation Damage",
    stat: "60% of small businesses close within 6 months of a cyber attack",
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    title: "Regulatory Penalties",
    stat: "GDPR fines up to €20M or 4% of revenue",
    icon: <AlertTriangle className="h-5 w-5" />,
  },
  {
    title: "Operational Disruption",
    stat: "Average downtime: 21 days after ransomware",
    icon: <AlertTriangle className="h-5 w-5" />,
  },
];

const approach = [
  "Practical security controls that get implemented.",
  "Risk-based prioritization to focus on highest impact.",
  "Business-aligned security that balances protection and usability.",
  "Long-term partnership with continuous monitoring and improvement.",
];

const process = [
  "Security Assessment",
  "Roadmap Development",
  "Quick Wins Implementation",
  "Core Security Controls",
  "Advanced Security",
  "Compliance & Documentation",
  "Continuous Monitoring & Improvement",
];

const helped = [
  {
    title: "Education Sector",
    description:
      "Defender and Sentinel deployments, Essential 8 alignment, and vulnerability management programs.",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    title: "Local Councils",
    description:
      "Security assessments, Microsoft security stack implementation, and policy development.",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: "Small & Medium Businesses",
    description:
      "Security uplift, MFA deployment, backup and recovery, and ongoing advisory.",
    icon: <Briefcase className="h-5 w-5" />,
  },
];

const techStack = {
  "Microsoft Security Suite": [
    "Defender for Endpoint, Office 365, Cloud Apps",
    "Microsoft Sentinel (SIEM)",
    "Microsoft Purview (DLP & Governance)",
    "Azure AD / Entra ID",
  ],
  "Vulnerability Management": [
    "Qualys",
    "Tenable Nessus",
    "Rapid7",
    "OpenVAS",
    "Microsoft Defender Vulnerability Management",
  ],
  "Security Monitoring & SIEM": ["Microsoft Sentinel", "Splunk", "Azure Monitor"],
  "Identity & Access": [
    "Azure AD / Entra ID",
    "Privileged Identity Management (PIM)",
    "Conditional Access",
    "Identity Protection",
  ],
  "Backup & Recovery": ["Veeam", "Azure Backup", "AWS Backup", "Acronis"],
};

const pricing = [
  {
    title: "Security Assessment",
    price: "$3,000 - $8,000",
    detail:
      "Comprehensive review, vulnerability assessment, and prioritized recommendations.",
  },
  {
    title: "Essential 8 Implementation",
    price: "$15,000 - $40,000",
    detail:
      "Gap analysis, control deployment, policy development, and compliance documentation.",
  },
  {
    title: "Managed Security Service",
    price: "$2,000 - $8,000/month",
    detail:
      "24/7 monitoring, incident response, vulnerability management, and reporting.",
  },
];

const faqs = [
  {
    q: "Do we really need cybersecurity if we're a small business?",
    a: "Yes. Small businesses are increasingly targeted because they often have weaker security.",
  },
  {
    q: "What's Essential 8 and do we need it?",
    a: "Essential 8 is the Australian Cyber Security Centre's baseline framework. It's best practice and required for many government contractors.",
  },
  {
    q: "How long does it take to implement proper security?",
    a: "Basic improvements can be done in weeks. Comprehensive programs take 3-6 months and continue ongoing.",
  },
  {
    q: "What if we don't have a big budget?",
    a: "We prioritize based on risk and budget so you get the most impact from each investment.",
  },
  {
    q: "Can you help us if we've already been breached?",
    a: "Yes. We provide incident response services and can help with recovery and future prevention.",
  },
  {
    q: "Do you provide security training for our staff?",
    a: "Yes. Security awareness training is part of our advisory services.",
  },
];

export const ServiceCybersecurity = () => {
  return (
    <section
      id="cybersecurity"
      className="container py-24 sm:py-32 space-y-16"
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Cybersecurity &amp; IT Security
        </h2>
        <p className="text-muted-foreground text-lg">
          Enterprise-grade security solutions for businesses of all sizes.
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-muted-foreground text-lg space-y-4">
        <p>
          Cybersecurity isn't optional—it's essential. We bring enterprise-level
          security expertise to small and medium businesses, making robust
          protection accessible and practical.
        </p>
        <p>
          Led by cybersecurity professionals with hands-on experience across
          education, public sector, and commercial organizations, we deliver
          security solutions that actually work in the real world.
        </p>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Our Security Services
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {securityServices.map((service) => (
            <Card key={service.title}>
              <CardHeader className="space-y-3">
                <div className="bg-primary/10 text-primary w-fit rounded-2xl p-2">
                  {service.icon}
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {service.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          The Business Impact of Security
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {riskCards.map((risk) => (
            <Card key={risk.title}>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-2xl p-2">
                  {risk.icon}
                </div>
                <CardTitle className="text-lg">{risk.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {risk.stat}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Security Built for Real Business
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {approach.map((item) => (
            <Card key={item}>
              <CardContent className="text-sm text-muted-foreground pt-6">
                {item}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          How We Secure Your Business
        </h3>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {process.map((step, index) => (
            <Card key={step}>
              <CardHeader>
                <div className="text-sm text-primary font-semibold">
                  Step {index + 1}
                </div>
                <CardTitle className="text-base">{step}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Proven Security Delivery
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {helped.map((sector) => (
            <Card key={sector.title}>
              <CardHeader className="space-y-3">
                <div className="bg-primary/10 text-primary w-fit rounded-2xl p-2">
                  {sector.icon}
                </div>
                <CardTitle className="text-lg">{sector.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {sector.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Our Security Technology Stack
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(techStack).map(([title, items]) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm text-muted-foreground">
                {items.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Security Investment
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((tier) => (
            <Card key={tier.title}>
              <CardHeader>
                <CardTitle className="text-lg">{tier.title}</CardTitle>
                <div className="text-2xl font-semibold text-primary">
                  {tier.price}
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {tier.detail}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Frequently Asked Questions
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <Card key={faq.q}>
              <CardHeader>
                <CardTitle className="text-base">{faq.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {faq.a}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-primary/10 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Don't Wait for a Security Incident
        </h3>
        <p className="text-muted-foreground">
          Get expert security assessment and practical recommendations to
          protect your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="px-8">
            <a href="#consultation">Schedule Security Consultation</a>
          </Button>
          <Button asChild variant="outline" className="px-8">
            <a href="#contact">Request Security Assessment</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
