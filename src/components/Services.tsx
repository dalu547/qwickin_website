import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Cloud,
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
      "Build fast, reliable apps tailored to your workflows and customers.",
    icon: <Smartphone className="h-5 w-5" />,
    href: "#contact",
  },
  {
    title: "Business Systems & Automation",
    description:
      "Automate operations with internal tools, dashboards, and workflows.",
    icon: <Settings2 className="h-5 w-5" />,
    href: "#contact",
  },
  {
    title: "Cybersecurity & IT Security",
    description:
      "Secure your systems with audits, hardening, and ongoing protection.",
    icon: <ShieldCheck className="h-5 w-5" />,
    href: "#contact",
  },
  {
    title: "Cloud & Managed IT",
    description:
      "Reliable cloud setup, migrations, and day-to-day IT support.",
    icon: <Cloud className="h-5 w-5" />,
    href: "#contact",
  },
];

export const Services = () => {
  return (
    <section
      id="services"
      className="container py-24 sm:py-32"
    >
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold">
            What{" "}
            <span className="text-primary">We Do</span>
          </h2>
          <p className="text-muted-foreground text-xl mt-3">
            We help businesses solve real problems using technology.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {serviceList.map(
            ({ icon, title, description, href }: ServiceProps) => (
              <a
                key={title}
                href={href}
                className="group"
              >
                <Card className="border border-border shadow-sm transition-all group-hover:-translate-y-1 group-hover:shadow-md">
                  <CardHeader className="space-y-2">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 text-primary w-fit rounded-2xl p-2">
                        {icon}
                      </div>
                      <CardTitle className="text-2xl">{title}</CardTitle>
                    </div>
                    <CardDescription className="text-lg">
                      {description}
                    </CardDescription>
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
