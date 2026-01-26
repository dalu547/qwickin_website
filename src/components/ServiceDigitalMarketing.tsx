import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  BarChart3,
  ChartLine,
  ClipboardCheck,
  FileText,
  Globe,
  Mail,
  Megaphone,
  MousePointerClick,
  Puzzle,
  Share2,
  TrendingUp,
} from "lucide-react";

const marketingServices = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve your organic search rankings and drive qualified traffic to your website.",
    icon: <Globe className="h-5 w-5" />,
  },
  {
    title: "Pay-Per-Click Advertising (PPC)",
    description:
      "Drive immediate, targeted traffic with optimized paid advertising campaigns.",
    icon: <MousePointerClick className="h-5 w-5" />,
  },
  {
    title: "Content Marketing",
    description:
      "Create valuable content that attracts, engages, and converts your target audience.",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: "Social Media Marketing",
    description:
      "Build and engage your audience across social media platforms.",
    icon: <Share2 className="h-5 w-5" />,
  },
  {
    title: "Email Marketing",
    description:
      "Nurture leads and engage customers with targeted email campaigns.",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    title: "Conversion Rate Optimization (CRO)",
    description:
      "Improve your website's ability to convert visitors into customers.",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    title: "Analytics & Reporting",
    description:
      "Track, measure, and understand your marketing performance.",
    icon: <BarChart3 className="h-5 w-5" />,
  },
];

const differentiators = [
  {
    title: "Technical Expertise",
    description:
      "We combine marketing strategy with technical implementation and integrations.",
    icon: <Megaphone className="h-5 w-5" />,
  },
  {
    title: "Data-Driven Approach",
    description:
      "Every decision is backed by data, testing, and ongoing optimization.",
    icon: <ChartLine className="h-5 w-5" />,
  },
  {
    title: "Integrated Strategy",
    description:
      "SEO, PPC, and content work together to maximize impact across channels.",
    icon: <Puzzle className="h-5 w-5" />,
  },
  {
    title: "Transparent Reporting",
    description:
      "Clear reporting on what's working and what to improve—no jargon.",
    icon: <ClipboardCheck className="h-5 w-5" />,
  },
];

const process = [
  "Discovery & Audit",
  "Strategy Development",
  "Setup & Implementation",
  "Launch & Optimization",
  "Reporting & Analysis",
  "Scale & Expand",
];

const packages = [
  {
    title: "Starter Package",
    price: "$2,000 - $3,500/month",
    description: "Small businesses starting digital marketing.",
    includes: [
      "Local SEO focus",
      "Google Business Profile optimization",
      "2-4 blog posts per month",
      "Basic social media management",
      "Monthly strategy call",
    ],
  },
  {
    title: "Growth Package",
    price: "$3,500 - $7,000/month",
    description: "Established businesses ready to scale.",
    includes: [
      "Comprehensive SEO",
      "Google Ads management",
      "Content marketing (4-6 posts/month)",
      "Social media marketing (2 platforms)",
      "Bi-weekly strategy calls",
    ],
  },
  {
    title: "Enterprise Package",
    price: "$7,000+/month",
    description: "Businesses with significant marketing budgets.",
    includes: [
      "Full-service SEO",
      "Multi-channel PPC",
      "Content marketing (8-12 posts/month)",
      "Advanced automation & CRO",
      "Dedicated account manager",
    ],
  },
];

const caseStudies = [
  {
    title: "Local Retail Business",
    result: "300% traffic increase and 450% ROI in 6 months.",
  },
  {
    title: "Professional Services",
    result: "25 qualified leads per month and $180k new business.",
  },
  {
    title: "E-commerce Business",
    result: "180% revenue increase with 4.2x ROAS.",
  },
];

const tools = {
  "SEO Tools": ["Google Search Console", "GA4", "SEMrush", "Ahrefs"],
  "Advertising Platforms": [
    "Google Ads",
    "Facebook Business Manager",
    "LinkedIn Campaign Manager",
  ],
  "Content & Social": ["WordPress/CMS", "Canva/Adobe", "Hootsuite/Buffer"],
  "Email Marketing": ["Mailchimp", "HubSpot", "ActiveCampaign"],
  "Analytics & CRO": ["Google Tag Manager", "Hotjar", "Looker Studio"],
};

const faqs = [
  {
    q: "How long before we see results?",
    a: "PPC can drive results immediately. SEO takes 3-6 months for significant results.",
  },
  {
    q: "What's the minimum budget for digital marketing?",
    a: "We recommend at least $2,000/month for meaningful results and measurable impact.",
  },
  {
    q: "Do we need to sign a long-term contract?",
    a: "Yes, we require a 6-month minimum commitment to allow proper testing and optimization.",
  },
  {
    q: "Can you guarantee first page rankings?",
    a: "No ethical SEO provider can guarantee specific rankings, but we deliver best-practice execution and reporting.",
  },
  {
    q: "Do you work with businesses outside Melbourne?",
    a: "Yes. We work Australia-wide and internationally for digital marketing services.",
  },
  {
    q: "What if digital marketing didn't work before?",
    a: "We'll audit what went wrong and build a better strategy with proper targeting and tracking.",
  },
];

export const ServiceDigitalMarketing = () => {
  return (
    <section
      id="digital-marketing"
      className="container py-24 sm:py-32 space-y-16"
    >
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Digital Marketing &amp; SEO
        </h2>
        <p className="text-muted-foreground text-lg">
          Data-driven digital strategies that drive traffic, generate leads, and
          grow your business online.
        </p>
      </div>

      <div className="max-w-3xl mx-auto text-muted-foreground text-lg space-y-4">
        <p>
          Effective digital marketing combines technical expertise with
          strategic thinking. We help Melbourne businesses increase their online
          visibility, attract qualified leads, and convert visitors into
          customers.
        </p>
        <p>
          Our approach focuses on measurable results—not vanity metrics. We
          combine SEO, paid advertising, content marketing, and analytics to
          create integrated strategies that deliver real ROI.
        </p>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          What We Offer
        </h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {marketingServices.map((service) => (
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
          Marketing + Technology Expertise
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {differentiators.map((item) => (
            <Card key={item.title}>
              <CardHeader className="space-y-3">
                <div className="bg-primary/10 text-primary w-fit rounded-2xl p-2">
                  {item.icon}
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {item.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          How We Drive Results
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
          Digital Marketing Packages
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((pkg) => (
            <Card key={pkg.title}>
              <CardHeader className="space-y-2">
                <CardTitle className="text-lg">{pkg.title}</CardTitle>
                <div className="text-2xl font-semibold text-primary">
                  {pkg.price}
                </div>
                <div className="text-sm text-muted-foreground">
                  {pkg.description}
                </div>
              </CardHeader>
              <CardContent className="grid gap-2 text-sm text-muted-foreground">
                {pkg.includes.map((item) => (
                  <span key={item}>• {item}</span>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
        <p className="text-sm text-muted-foreground text-center">
          One-time projects also available: SEO audit, content strategy, CRO
          audit, and landing page builds.
        </p>
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl md:text-3xl font-semibold text-center">
          Our Marketing Technology Stack
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(tools).map(([title, items]) => (
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
          Real Results for Melbourne Businesses
        </h3>
        <div className="grid gap-6 md:grid-cols-3">
          {caseStudies.map((item) => (
            <Card key={item.title}>
              <CardHeader>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {item.result}
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
          Ready to Grow Your Business Online?
        </h3>
        <p className="text-muted-foreground">
          Let's develop a digital marketing strategy that delivers measurable
          results for your business.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="px-8">
            <a href="#consultation">Schedule Marketing Consultation</a>
          </Button>
          <Button asChild variant="outline" className="px-8">
            <a href="#contact">Request Marketing Audit</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
