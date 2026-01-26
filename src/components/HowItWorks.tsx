import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Building2,
  GraduationCap,
  Rocket,
  Store,
  Users,
} from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
  href: string;
}

const features: FeatureProps[] = [
  {
    icon: <Building2 className="h-5 w-5" />,
    title: "Small & Medium Businesses (SMEs)",
    description: "Local teams looking for reliable, scalable technology partners.",
    href: "/who-we-work-with#smes",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Community & Local Organisations",
    description: "Community-focused groups needing platforms and automation.",
    href: "/who-we-work-with#community",
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: "Education & Public Sector",
    description: "Institutions requiring secure, compliant digital systems.",
    href: "/who-we-work-with#education",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Startups & Growing Businesses",
    description: "Fast-moving teams ready to build and scale new ideas.",
    href: "/who-we-work-with#startups",
  },
  {
    icon: <Store className="h-5 w-5" />,
    title: "Multi-branch Retail & Service Businesses",
    description: "Distributed operations that need centralized systems.",
    href: "/who-we-work-with#multi-branch",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="clients"
      className="container py-24 sm:py-32"
    >
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold">
          Who{" "}
          <span className="text-primary">We Work With</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          We partner with teams that need secure systems, custom tools, and
          reliable support.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {features.map(({ icon, title, description, href }: FeatureProps) => (
          <a
            key={title}
            href={href}
            className="group"
          >
            <Card className="h-full border border-border shadow-sm transition-all group-hover:-translate-y-1 group-hover:shadow-md">
              <CardHeader className="space-y-3">
                <div className="flex items-center gap-3 text-primary">
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                    {icon}
                  </div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </section>
  );
};
