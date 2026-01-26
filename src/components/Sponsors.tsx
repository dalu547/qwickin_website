import { Radar } from "lucide-react";

interface AppProps {
  icon: JSX.Element;
  name: string;
}

const apps: AppProps[] = [
  {
    icon: <Radar size={18} />,
    name: "Sweetindia",
  },
  {
    icon: <Radar size={18} />,
    name: "Sabgwala",
  },
  {
    icon: <Radar size={18} />,
    name: "Digital Singage",
  },
  {
    icon: <Radar size={18} />,
    name: "SK constructions",
  },
];

export const Sponsors = () => {
  return (
    <section
      id="customers"
      className="container pt-24 sm:py-32"
    >
      <h2 className="text-center text-md lg:text-xl font-semibold mb-8 text-primary">
        Qwickin customers
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4">
        {apps.map(({ icon, name }: AppProps) => (
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
