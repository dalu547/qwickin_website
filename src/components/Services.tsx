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
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
              Services{" "}
            </span>
            & Modules
          </h2>

          <p className="text-muted-foreground text-xl mt-4 mb-8 ">
            Qwickin bundles everything crews need into four focused modules.
          </p>

          <div className="flex flex-col gap-8">
            {serviceList.map(({ icon, title, description }: ServiceProps) => (
              <Card key={title}>
                <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
                  <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
                    {icon}
                  </div>
                  <div>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-md mt-2">
                      {description}
                    </CardDescription>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>

        <div
          aria-hidden="true"
          className="w-[300px] md:w-[500px] lg:w-[600px] h-[320px] rounded-2xl border bg-gradient-to-br from-primary/10 via-white to-primary/20"
        />
      </div>
    </section>
  );
};
