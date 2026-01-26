import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Cloud,
  Cog,
  GraduationCap,
  HardHat,
  HeartPulse,
  Megaphone,
  ShieldCheck,
  ShoppingCart,
  Briefcase,
  Utensils,
  Headset,
  Smartphone,
} from "lucide-react";

const services = [
  {
    label: "Development",
    title: "Custom Application Development",
    description:
      "Mobile apps, web applications, and SaaS platforms built specifically for your business needs and workflows.",
    offerings: [
      "Native iOS & Android apps",
      "Cross-platform mobile development",
      "Progressive web applications",
      "Custom SaaS platforms",
      "Business web applications",
      "Multi-tenant systems",
    ],
    icon: <Smartphone className="h-5 w-5" />,
    href: "#custom-applications",
  },
  {
    label: "Automation",
    title: "Business Systems & Automation",
    description:
      "Transform manual processes into streamlined, automated workflows that save time and eliminate errors.",
    offerings: [
      "Employee management systems",
      "Payroll & attendance tracking",
      "Internal dashboards & reporting",
      "Workflow automation",
      "CRM-style tools",
      "Custom business applications",
    ],
    icon: <Cog className="h-5 w-5" />,
    href: "#services-overview",
  },
  {
    label: "Security",
    title: "Cybersecurity & IT Security",
    description:
      "Enterprise-grade security solutions bringing robust protection to businesses of all sizes.",
    offerings: [
      "Security assessments & hardening",
      "Microsoft security stack",
      "Vulnerability management",
      "Identity & access management",
      "Essential 8 compliance",
      "Security advisory for SMEs",
    ],
    icon: <ShieldCheck className="h-5 w-5" />,
    href: "#cybersecurity",
  },
  {
    label: "Infrastructure",
    title: "Cloud & Infrastructure",
    description:
      "Secure, scalable cloud solutions and infrastructure that grows with your business.",
    offerings: [
      "Cloud setup & migration",
      "Secure hosting & deployments",
      "Infrastructure optimization",
      "Domain, email & tenant setup",
      "Backup & disaster recovery",
      "Infrastructure monitoring",
    ],
    icon: <Cloud className="h-5 w-5" />,
    href: "#services-overview",
  },
  {
    label: "Marketing",
    title: "Digital Marketing & SEO",
    description:
      "Drive traffic, generate leads, and grow your online presence with data-driven digital strategies.",
    offerings: [
      "Search engine optimization (SEO)",
      "Pay-per-click advertising (PPC)",
      "Content marketing",
      "Social media marketing",
      "Email marketing campaigns",
      "Analytics & conversion optimization",
    ],
    icon: <Megaphone className="h-5 w-5" />,
    href: "#digital-marketing",
  },
  {
    label: "Support",
    title: "Managed IT & Consulting",
    description:
      "Your complete IT department—strategic planning, day-to-day support, and long-term partnership.",
    offerings: [
      "IT support & helpdesk",
      "Technology planning & architecture",
      "Vendor & solution selection",
      "Ongoing maintenance",
      "IT project management",
      "Strategic IT consulting",
    ],
    icon: <Headset className="h-5 w-5" />,
    href: "#services-overview",
  },
];

const processSteps = [
  {
    title: "Discovery & Requirements",
    description:
      "We start by understanding your business, challenges, and goals through detailed consultation.",
  },
  {
    title: "Strategy & Planning",
    description:
      "We develop a clear roadmap with defined milestones, timeline, and transparent cost breakdown.",
  },
  {
    title: "Design & Prototyping",
    description:
      "Visual designs and interactive prototypes ensure we're aligned before development begins.",
  },
  {
    title: "Development & Security",
    description:
      "Agile development with security built-in from the start and regular progress updates.",
  },
  {
    title: "Testing & QA",
    description:
      "Rigorous testing across functionality, security, performance, and user acceptance.",
  },
  {
    title: "Deployment & Training",
    description:
      "Smooth launch with comprehensive team training and documentation.",
  },
  {
    title: "Support & Optimization",
    description:
      "Ongoing support, monitoring, and continuous improvement as your needs evolve.",
  },
];

const whyWorkWithUs = [
  "Security-first approach",
  "End-to-end ownership",
  "Custom solutions",
  "Long-term partnership",
];

const industries = [
  { label: "Retail & E-commerce", icon: <ShoppingCart className="h-5 w-5" /> },
  {
    label: "Hospitality & Food Services",
    icon: <Utensils className="h-5 w-5" />,
  },
  { label: "Healthcare & Medical", icon: <HeartPulse className="h-5 w-5" /> },
  { label: "Construction & Trades", icon: <HardHat className="h-5 w-5" /> },
  { label: "Professional Services", icon: <Briefcase className="h-5 w-5" /> },
  { label: "Education & Public Sector", icon: <GraduationCap className="h-5 w-5" /> },
];

const technologies = {
  Development: [
    "React & React Native",
    "Flutter",
    "Node.js & Python",
    ".NET Core",
    "iOS (Swift) & Android (Kotlin)",
  ],
  "Cloud & Infrastructure": [
    "AWS, Azure, Google Cloud",
    "Docker & Kubernetes",
    "CI/CD Pipelines",
    "Infrastructure as Code",
  ],
  Security: [
    "Microsoft Defender Suite",
    "Microsoft Sentinel",
    "Vulnerability Management Tools",
    "SIEM Solutions",
  ],
  Marketing: [
    "Google Analytics & Ads",
    "SEO Tools (SEMrush, Ahrefs)",
    "Marketing Automation",
    "Social Media Platforms",
  ],
};

export const ServicesOverview = () => {
  return (
    <section
      id="services-overview"
      className="container py-24 sm:py-32 space-y-16"
    >
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold">Our Services</h2>
        <p className="text-muted-foreground text-lg">
          Comprehensive technology solutions built for Melbourne businesses—from
          custom applications to enterprise security.
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-muted-foreground text-lg space-y-4">
        <p>
          We provide end-to-end technology solutions that help businesses operate
          more efficiently, securely, and competitively.
        </p>
        <p>
          Whether you need a custom application, robust cybersecurity, cloud
          infrastructure, digital marketing, or complete IT management—we
          deliver practical solutions built on real-world experience.
        </p>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          What We Offer
        </h3>
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
          {services.map((service) => (
            <Card key={service.title} className="h-full">
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary">
                  {service.label}
                </div>
                <div className="bg-primary/10 text-primary w-fit rounded-2xl p-2">
                  {service.icon}
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>{service.description}</p>
                <ul className="space-y-1">
                  {service.offerings.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
                <Button asChild variant="outline" className="mt-2">
                  <a href={service.href}>Learn More</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className="text-2xl md:text-3xl font-semibold">Our Process</h3>
          <p className="text-muted-foreground">
            A clear, collaborative approach to every project.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {processSteps.map((step, index) => (
            <Card key={step.title}>
              <CardHeader className="space-y-2">
                <div className="text-sm text-primary font-semibold">
                  Step {index + 1}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {step.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Why Work With Us
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {whyWorkWithUs.map((item) => (
            <Card key={item}>
              <CardHeader>
                <CardTitle className="text-lg">{item}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Every solution is built for your specific needs with long-term
                support and accountability.
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Industries We Serve
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Card key={industry.label}>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-2xl p-2">
                  {industry.icon}
                </div>
                <CardTitle className="text-lg">{industry.label}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Technologies We Use
          </h3>
          <p className="text-muted-foreground">
            Modern, proven technologies delivering reliable results.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(technologies).map(([title, items]) => (
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

      <div className="bg-muted/60 rounded-3xl p-8 text-center space-y-4">
        <h3 className="text-2xl md:text-3xl font-semibold">
          Not Sure Which Service You Need?
        </h3>
        <p className="text-muted-foreground">
          Let's have a conversation. We'll help you identify the right
          solutions for your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="px-8">
            <a href="#consultation">Schedule Free Consultation</a>
          </Button>
          <Button asChild variant="outline" className="px-8">
            <a href="#projects">View Our Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
