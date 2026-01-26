import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Bell,
  CreditCard,
  Globe,
  Key,
  Plug,
  RefreshCw,
  Smartphone,
  TabletSmartphone,
  Monitor,
  Cloud,
  Users,
  CloudUpload,
  BarChart3,
} from "lucide-react";

const buildTypes = [
  {
    title: "Native Mobile Applications",
    description:
      "Build powerful native apps for iOS and Android with full access to device capabilities.",
    icon: <Smartphone className="h-5 w-5" />,
    highlights: [
      "iOS development (Swift)",
      "Android development (Kotlin)",
      "Native performance and UX",
      "App Store & Play Store deployment",
    ],
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "Reach both iOS and Android users with a single codebase while maintaining near-native performance.",
    icon: <TabletSmartphone className="h-5 w-5" />,
    highlights: [
      "React Native or Flutter",
      "Cross-platform deployment",
      "Shared business logic",
      "Native component integration",
    ],
  },
  {
    title: "Web Applications",
    description:
      "Build powerful web applications that work seamlessly across all devices and browsers.",
    icon: <Monitor className="h-5 w-5" />,
    highlights: [
      "React, Vue.js, Next.js",
      "Progressive Web Apps (PWA)",
      "Responsive design",
      "Cloud-native architecture",
    ],
  },
  {
    title: "SaaS Platforms",
    description:
      "Build scalable software-as-a-service solutions with multi-tenant architecture.",
    icon: <Cloud className="h-5 w-5" />,
    highlights: [
      "Multi-tenant architecture",
      "Subscription management",
      "Role-based access control",
      "API-first design",
    ],
  },
];

const features = [
  { title: "User Authentication", icon: <Key className="h-5 w-5" /> },
  { title: "Role-Based Access", icon: <Users className="h-5 w-5" /> },
  { title: "Real-Time Updates", icon: <RefreshCw className="h-5 w-5" /> },
  { title: "Push Notifications", icon: <Bell className="h-5 w-5" /> },
  { title: "Payment Integration", icon: <CreditCard className="h-5 w-5" /> },
  { title: "Analytics & Reporting", icon: <BarChart3 className="h-5 w-5" /> },
  { title: "API Integration", icon: <Plug className="h-5 w-5" /> },
  { title: "Offline Capability", icon: <CloudUpload className="h-5 w-5" /> },
  { title: "Multi-Language Support", icon: <Globe className="h-5 w-5" /> },
];

const process = [
  {
    title: "Discovery Workshop",
    detail: "Requirements, user needs, and technical recommendations.",
  },
  {
    title: "UX/UI Design",
    detail: "Wireframes, prototypes, and design systems.",
  },
  {
    title: "Development Sprints",
    detail: "Agile delivery with regular demos and feedback.",
  },
  {
    title: "Testing & QA",
    detail: "Functional, security, and performance testing.",
  },
  {
    title: "Deployment",
    detail: "Production launch with monitoring and automation.",
  },
  {
    title: "Support & Iteration",
    detail: "Ongoing improvements, updates, and enhancements.",
  },
];

const techStack = {
  Frontend: ["React & React Native", "Flutter", "Vue.js & Next.js", "TypeScript"],
  Backend: ["Node.js & Express", "Python & Django", ".NET Core", "GraphQL"],
  Databases: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase"],
  Cloud: ["AWS", "Microsoft Azure", "Google Cloud Platform", "DigitalOcean"],
};

const caseStudies = [
  {
    title: "Qwickin Community Platform",
    description:
      "Multi-feature community app connecting local residents, businesses, and job seekers.",
    href: "/projects/qwickin-community-platform",
  },
  {
    title: "SweetIndia Workforce System",
    description:
      "Location-based employee management system for multi-branch food business.",
    href: "/projects/sweetindia-workforce",
  },
  {
    title: "Construction Workforce App",
    description:
      "Daily attendance and team management for construction teams.",
    href: "/projects/construction-workforce",
  },
];

const pricing = [
  {
    title: "Simple Mobile/Web App",
    price: "$15,000 - $30,000",
    timeline: "6-8 weeks",
    includes: [
      "Core feature set (3-5 screens/pages)",
      "Basic admin panel",
      "Testing and deployment",
      "30 days post-launch support",
    ],
  },
  {
    title: "Complex Business Application",
    price: "$30,000 - $80,000",
    timeline: "10-16 weeks",
    includes: [
      "Advanced workflows and integrations",
      "Role-based access control",
      "Custom reporting",
      "60 days post-launch support",
    ],
  },
  {
    title: "SaaS / Enterprise Solution",
    price: "Custom Pricing",
    timeline: "4-9 months",
    includes: [
      "Multi-tenant architecture",
      "Subscription & billing management",
      "Scalable infrastructure",
      "Ongoing support plan",
    ],
  },
];

const faqs = [
  {
    q: "How long does it take to build a custom application?",
    a: "Simple applications take 6-10 weeks, complex applications 3-6 months, and enterprise SaaS platforms 6-12 months.",
  },
  {
    q: "Do you provide ongoing maintenance and support?",
    a: "Yes. We offer ongoing support plans including bug fixes, updates, hosting management, and feature enhancements.",
  },
  {
    q: "Can you integrate with our existing systems?",
    a: "Absolutely. We integrate with existing CRMs, ERPs, payment systems, and other business tools via APIs.",
  },
  {
    q: "Do we own the source code?",
    a: "Yes. Upon final payment, you receive full ownership of the source code and all related materials.",
  },
  {
    q: "Can the application scale as we grow?",
    a: "Yes. We architect applications with scalability in mind using cloud-native practices.",
  },
  {
    q: "What if we need changes after launch?",
    a: "We provide post-launch support and can implement changes, new features, or improvements on an ongoing basis.",
  },
];

export const ServiceCustomApplications = () => {
  return (
    <section
      id="custom-applications"
      className="container py-24 sm:py-32 space-y-16"
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Custom Application Development
        </h2>
        <p className="text-muted-foreground text-lg">
          Native mobile apps, web applications, and SaaS platforms built
          specifically for your business.
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-muted-foreground text-lg">
        We build custom applications that solve real business problems. Whether
        you need a mobile app for your customers, an internal web application
        for your team, or a scalable SaaS platform for your market—we design and
        develop solutions tailored to your exact requirements.
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          What We Build
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {buildTypes.map((type) => (
            <Card key={type.title}>
              <CardHeader className="space-y-3">
                <div className="bg-primary/10 text-primary w-fit rounded-2xl p-2">
                  {type.icon}
                </div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>{type.description}</p>
                <ul className="space-y-1">
                  {type.highlights.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Built-In Capabilities
        </h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader className="flex flex-row items-center gap-3">
                <div className="bg-primary/10 text-primary rounded-2xl p-2">
                  {feature.icon}
                </div>
                <CardTitle className="text-base">{feature.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          How We Develop Your Application
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {process.map((step, index) => (
            <Card key={step.title}>
              <CardHeader>
                <div className="text-sm text-primary font-semibold">
                  Step {index + 1}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {step.detail}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Our Technology Stack
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
          Recent Projects
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((project) => (
            <Card key={project.title}>
              <CardHeader>
                <CardTitle className="text-lg">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-muted-foreground">
                <p>{project.description}</p>
                <Button asChild variant="outline">
                  <a href={project.href}>View Full Case Study</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Investment &amp; Pricing
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((tier) => (
            <Card key={tier.title}>
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg">{tier.title}</CardTitle>
                <div className="text-2xl font-semibold text-primary">
                  {tier.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  Timeline: {tier.timeline}
                </div>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm text-muted-foreground">
                {tier.includes.map((item) => (
                  <span key={item}>• {item}</span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Exact pricing depends on feature complexity, integrations, design
          requirements, and ongoing support needs.
        </p>
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
          Ready to Build Your Application?
        </h3>
        <p className="text-muted-foreground">
          Let's discuss your project and create something exceptional together.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="px-8">
            <a href="#consultation">Schedule Free Consultation</a>
          </Button>
          <Button asChild variant="outline" className="px-8">
            <a href="#projects">View More Projects</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
