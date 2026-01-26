import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  BadgeCheck,
  Handshake,
  LifeBuoy,
  Puzzle,
  ShieldCheck,
  Ear,
  Hammer,
  Workflow,
} from "lucide-react";

const whyQwickin = [
  {
    title: "Built by practitioners, not just developers",
    description:
      "Led by professionals with hands-on experience in cybersecurity, enterprise IT, and real business operations.",
    icon: <BadgeCheck className="h-5 w-5" />,
  },
  {
    title: "End-to-end ownership",
    description:
      "From requirements and architecture to deployment and support—we handle everything in-house.",
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    title: "Security-first mindset",
    description:
      "Every solution is built with security, compliance, and resilience in mind—not added later.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Custom > Generic",
    description:
      "We tailor solutions to your workflow, users, and growth plans—no off-the-shelf bloat.",
    icon: <Puzzle className="h-5 w-5" />,
  },
  {
    title: "Long-term partner approach",
    description:
      "We work as an extension of your team, focused on long-term value and trust.",
    icon: <Handshake className="h-5 w-5" />,
  },
];

const approach = [
  {
    title: "Listen First",
    description:
      "We start with deep discovery of your needs, challenges, and goals.",
    icon: <Ear className="h-5 w-5" />,
  },
  {
    title: "Build Right",
    description:
      "Security, scalability, and maintainability are built in from day one.",
    icon: <Hammer className="h-5 w-5" />,
  },
  {
    title: "Support Long-term",
    description:
      "We stay involved with ongoing support, optimization, and guidance.",
    icon: <LifeBuoy className="h-5 w-5" />,
  },
];

const beliefs = [
  "Security is non-negotiable.",
  "Transparency builds trust.",
  "Technology should enable, not complicate.",
  "Long-term thinking wins.",
  "Local matters.",
];

const expertise = {
  Cybersecurity: [
    "Vulnerability Management",
    "Security Architecture",
    "Threat Detection & Response",
    "Compliance Frameworks (Essential 8, ISM)",
  ],
  "Microsoft Ecosystem": [
    "Microsoft Defender Suite",
    "Microsoft Sentinel",
    "Microsoft Purview",
    "Azure / Entra ID",
    "Microsoft 365 Security",
  ],
  Development: [
    "Full-stack Development",
    "Mobile Application Development (iOS, Android)",
    "Cloud-native Architecture",
    "DevSecOps Practices",
  ],
  Infrastructure: [
    "Cloud Architecture (AWS, Azure, GCP)",
    "Infrastructure as Code",
    "High Availability Design",
    "Disaster Recovery Planning",
  ],
};

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32 space-y-16"
    >
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
          About Qwickin
        </p>
        <h2 className="text-3xl md:text-4xl font-semibold">
          Melbourne-based technology partner built on security expertise and
          real business experience.
        </h2>
      </div>

      <div className="max-w-3xl mx-auto text-muted-foreground text-lg space-y-4">
        <h3 className="text-2xl font-semibold text-foreground">Who We Are</h3>
        <p>
          Qwickin is a Melbourne-based technology and digital solutions company
          helping businesses move faster, operate smarter, and stay secure.
        </p>
        <p>
          We design, build, and support custom applications, IT systems, and
          security solutions for small and medium businesses, councils, and
          growing organisations. From idea to deployment—and long-term
          support—we focus on solutions that are practical, scalable, and built
          for real-world use.
        </p>
        <p>
          Our work spans custom SaaS platforms, internal business apps,
          cybersecurity, cloud solutions, managed IT services, and digital
          marketing—with a strong focus on automation, reliability, and
          security.
        </p>
      </div>

      <div id="why-qwickin" className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Why Qwickin
          </h3>
          <p className="text-muted-foreground">
            Built by practitioners, delivered with ownership, and secured from
            day one.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyQwickin.map(({ title, description, icon }) => (
            <Card key={title}>
              <CardHeader className="space-y-3">
                <div className="bg-primary/10 text-primary w-fit rounded-2xl p-2">
                  {icon}
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-10 items-center">
        <div className="rounded-3xl bg-muted/60 p-8 text-center">
          <div className="h-56 w-56 mx-auto rounded-full bg-white/80 flex items-center justify-center text-sm text-muted-foreground">
            Founder photo
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            400x400px headshot
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-semibold">Meet the Founder</h3>
          <p className="text-lg font-semibold">Vinay Pinnapureddy</p>
          <p className="text-sm text-muted-foreground">
            Founder &amp; Principal Consultant
          </p>
          <p className="text-muted-foreground">
            Vinay brings extensive experience in cybersecurity and enterprise
            IT systems, having worked with organizations across education,
            public sector, and commercial industries. He founded Qwickin to
            bridge the gap between complex technology and practical business
            needs.
          </p>
          <div className="grid gap-2 text-sm text-muted-foreground">
            <div>Cybersecurity architecture and implementation</div>
            <div>Microsoft security ecosystem (Defender, Sentinel, Purview)</div>
            <div>Identity and access management (Azure AD, PIM/PAM)</div>
            <div>Essential 8 compliance and security frameworks</div>
            <div>Custom application development and cloud migration</div>
          </div>
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className="text-2xl md:text-3xl font-semibold">How We Work</h3>
          <p className="text-muted-foreground">
            A practical, security-first approach from discovery to support.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {approach.map(({ title, description, icon }) => (
            <Card key={title}>
              <CardHeader className="space-y-3">
                <div className="bg-primary/10 text-primary w-fit rounded-2xl p-2">
                  {icon}
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          What We Stand For
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          {beliefs.map((belief) => (
            <div
              key={belief}
              className="rounded-2xl border border-border bg-white px-6 py-4 text-sm text-muted-foreground"
            >
              {belief}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Expertise &amp; Credentials
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(expertise).map(([title, items]) => (
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

      <div className="rounded-3xl bg-muted/60 p-8 text-center space-y-3">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Serving Melbourne &amp; Beyond
        </h3>
        <p className="text-muted-foreground">
          Primary service area: Melbourne, Victoria. On-site services are
          available across Melbourne metro, with remote services available
          Australia-wide and internationally.
        </p>
      </div>

      <div className="bg-primary/10 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Ready to Work Together?
        </h3>
        <p className="text-muted-foreground">
          Let's discuss how we can help your business with the right technology
          solutions.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="px-8">
            <a href="#consultation">Schedule Free Consultation</a>
          </Button>
          <Button asChild variant="outline" className="px-8">
            <a href="#services-overview">View Our Services</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
