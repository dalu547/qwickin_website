import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { MagnifierIcon, WalletIcon, ChartIcon, MapIcon } from "./Icons";

interface ServiceProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const serviceList: ServiceProps[] = [
  {
    title: "Jobs",
    description:
      "Post openings, screen talent, and confirm shifts with built-in compliance.",
    icon: <ChartIcon />,
  },
  {
    title: "Accommodations",
    description:
      "Secure verified stays close to job sites for short or long-term crews.",
    icon: <WalletIcon />,
  },
  {
    title: "Ads",
    description:
      "Launch hyper-local campaigns to fill jobs and promote on-the-ground offers.",
    icon: <MagnifierIcon />,
  },
  {
    title: "Locations",
    description:
      "Pin job sites, housing, and vendors in a single map-driven workspace.",
    icon: <MapIcon />,
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
