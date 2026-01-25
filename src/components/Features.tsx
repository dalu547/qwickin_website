import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
interface FeatureProps {
  title: string;
  description: string;
}

const features: FeatureProps[] = [
  {
    title: "Faster placements",
    description:
      "Cut time-to-fill with real-time availability and vetted talent pools.",
  },
  {
    title: "Housing you can trust",
    description:
      "Every accommodation is verified for safety, proximity, and compliance.",
  },
  {
    title: "Regional visibility",
    description:
      "Track crew readiness, local demand, and ad performance in one view.",
  },
];

const featureList: string[] = [
  "Verified partners",
  "Fast onboarding",
  "Regional compliance",
  "Crew scheduling",
  "Local promotions",
  "Unified dashboard",
  "Real-time updates",
  "Support team",
  "Secure data",
];

export const Features = () => {
  return (
    <section
      id="benefits"
      className="container py-24 sm:py-32 space-y-8"
    >
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Why{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Qwickin
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge
              variant="secondary"
              className="text-sm"
            >
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description }: FeatureProps) => (
          <Card key={title}>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <div
                aria-hidden="true"
                className="w-full h-[160px] rounded-lg border bg-gradient-to-br from-primary/10 via-white to-primary/20"
              />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
