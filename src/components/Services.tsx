import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Cloud,
  Headset,
  Megaphone,
  Settings2,
  ShieldCheck,
  Smartphone,
} from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
  href: string;
}

const serviceList: ServiceProps[] = [
  {
    title: "Custom Mobile & Web Applications",
    description:
      "Native and cross-platform apps built for your business needs—iOS, Android, and web.",
    icon: <Smartphone className="h-5 w-5" />,
    href: "#custom-applications",
  },
  {
    title: "Business Systems & Automation",
    description:
      "Internal tools that streamline operations, from employee management to custom dashboards.",
    icon: <Settings2 className="h-5 w-5" />,
    href: "#services-overview",
  },
  {
    title: "Cybersecurity & IT Security",
    description:
      "Enterprise-grade security for SMEs—vulnerability management, identity protection, and compliance.",
    icon: <ShieldCheck className="h-5 w-5" />,
    href: "#cybersecurity",
  },
  {
    title: "Cloud & Infrastructure",
    description:
      "Secure hosting, cloud migration, and optimized infrastructure that scales with you.",
    icon: <Cloud className="h-5 w-5" />,
    href: "#services-overview",
  },
  {
    title: "Digital Marketing & SEO",
    description:
      "Drive traffic, generate leads, and build your online presence with targeted digital strategies.",
    icon: <Megaphone className="h-5 w-5" />,
    href: "#digital-marketing",
  },
  {
    title: "Managed IT & Consulting",
    description:
      "Your complete IT department—from planning to support, we handle it all.",
    icon: <Headset className="h-5 w-5" />,
    href: "#services-overview",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="container py-24 sm:py-32"
    >
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">
            What{" "}
            <span className="text-primary">We Do</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-3">
            We help businesses solve real problems using technology.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map(
            ({ icon, title, description, href }: ServiceProps) => (
              <a
                key={title}
                href={href}
                className="group"
              >
                <Card className="border border-border shadow-sm transition-all group-hover:-translate-y-1 group-hover:shadow-md">
                  <CardHeader className="space-y-3">
                    <div className="bg-primary/10 text-primary w-fit rounded-2xl p-2">
                      {icon}
                    </div>
                    <CardTitle className="text-xl">{title}</CardTitle>
                    <CardDescription className="text-sm">
                      {description}
                    </CardDescription>
                    <span className="text-sm font-semibold text-primary">
                      Learn more →
                    </span>
                  </CardHeader>
                </Card>
              </a>
            )
          )}
        </div>
      </div>
    </section>
  );
};
