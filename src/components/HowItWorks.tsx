import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { MedalIcon, MapIcon, PlaneIcon, GiftIcon } from "../components/Icons";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <MedalIcon />,
    title: "Create your hub",
    description:
      "Set up regions, permissions, and compliance in one onboarding flow.",
  },
  {
    icon: <MapIcon />,
    title: "Post and match",
    description:
      "Publish jobs, auto-match candidates, and confirm shift availability.",
  },
  {
    icon: <PlaneIcon />,
    title: "Lock in stays",
    description:
      "Reserve verified accommodations close to each active worksite.",
  },
  {
    icon: <GiftIcon />,
    title: "Launch local ads",
    description:
      "Promote openings and services across Qwickin's location-based network.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="howItWorks"
      className="container py-24 sm:py-32"
    >
      <div className="max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold">
          How it works in{" "}
          <span className="text-primary">four steps</span>
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          The app screens you shared map directly to these actions.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {features.map(({ icon, title, description }: FeatureProps, index) => (
          <Card key={title}>
            <CardHeader className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  {index + 1}
                </div>
                <div className="text-primary">{icon}</div>
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
