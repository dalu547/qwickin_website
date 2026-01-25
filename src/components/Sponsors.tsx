import { Radar } from "lucide-react";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}

const sponsors: SponsorProps[] = [
  {
    icon: <Radar size={18} />,
    name: "FieldStack",
  },
  {
    icon: <Radar size={18} />,
    name: "Stayline",
  },
  {
    icon: <Radar size={18} />,
    name: "Crewlink",
  },
  {
    icon: <Radar size={18} />,
    name: "LocalPoint",
  },
  {
    icon: <Radar size={18} />,
    name: "RigCore",
  },
  {
    icon: <Radar size={18} />,
    name: "MetroWorks",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="partners"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-semibold mb-8 text-primary">
        Trusted by partners across the region
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-sm font-medium"
          >
            <span className="text-primary">{icon}</span>
            <span>{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
