import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {
  Briefcase,
  BedDouble,
  Megaphone,
  Repeat2,
  Building2,
  CalendarDays,
} from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Jobs",
    description:
      "Post roles, review applicants, and hire faster.",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    title: "Accommodation",
    description:
      "Find verified stays with transparent weekly pricing.",
    icon: <BedDouble className="h-5 w-5" />,
  },
  {
    title: "Post Ads",
    description:
      "Promote openings and local offers in minutes.",
    icon: <Megaphone className="h-5 w-5" />,
  },
  {
    title: "Buy & Sell",
    description: "List equipment, furniture, or services locally.",
    icon: <Repeat2 className="h-5 w-5" />,
  },
  {
    title: "Real Estate",
    description: "Browse rentals, offices, and commercial spaces.",
    icon: <Building2 className="h-5 w-5" />,
  },
  {
    title: "Events",
    description: "Discover regional expos, training, and meetups.",
    icon: <CalendarDays className="h-5 w-5" />,
  },
];

export const Services = () => {
  return (
    <section
      id="modules"
      className="container py-24 sm:py-32"
    >
      <div className="space-y-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Services &{" "}
            <span className="text-primary">Modules</span>
          </h2>
          <p className="text-muted-foreground text-lg mt-3">
            Built to match the Qwickin mobile app experience with clear,
            action-first tools.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceList.map(({ icon, title, description }: ServiceProps) => (
            <Card
              key={title}
              className="border-l-4 border-l-primary shadow-sm"
            >
              <CardHeader className="space-y-3">
                <div className="bg-primary/10 text-primary w-fit rounded-2xl p-2">
                  {icon}
                </div>
                <CardTitle className="text-xl">{title}</CardTitle>
                <CardDescription className="text-sm">
                  {description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
