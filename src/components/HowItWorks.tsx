import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  ClipboardList,
  Rocket,
  ShieldCheck,
} from "lucide-react";

interface FeatureProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    icon: <ClipboardList className="h-5 w-5" />,
    title: "Discover & Plan",
    description:
      "We understand your goals, map the workflow, and define a clear scope.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Build & Secure",
    description:
      "We design, build, and test with security and reliability baked in.",
  },
  {
    icon: <Rocket className="h-5 w-5" />,
    title: "Launch & Support",
    description:
      "We deploy smoothly and stay with you for ongoing improvements.",
  },
];

export const HowItWorks = () => {
  return (
    <section
      id="process"
      className="container pt-2 pb-20 sm:pb-28"
    >
      <div className="max-w-3xl text-left">
        <h2 className="text-3xl md:text-4xl font-semibold">Our Process</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A simple, transparent approach designed to keep projects moving fast.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {features.map(({ icon, title, description }: FeatureProps) => (
          <Card key={title} className="h-full border border-border shadow-sm">
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
        ))}
      </div>
    </section>
  );
};
