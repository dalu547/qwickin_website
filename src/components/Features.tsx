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
      "Post jobs, review applicants, and contact candidates from one screen.",
  },
  {
    title: "Housing you can trust",
    description:
      "Browse verified listings with pricing, availability, and location data.",
  },
  {
    title: "Regional visibility",
    description:
      "Promote events and ads with clear schedules, ticketing, and partners.",
  },
];

const featureList: string[] = [
  "Mobile-first UI",
  "Verified listings",
  "Smart filters",
  "Direct contact",
  "Event details",
  "Simple posting",
  "Quick apply",
  "Local reach",
  "Secure profiles",
];

export const Features = () => {
  return (
    <section
      id="benefits"
      className="container py-24 sm:py-32 space-y-8"
    >
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Why{" "}
          <span className="text-primary">Qwickin</span>
        </h2>
        <p className="text-muted-foreground mt-3 text-lg">
          The web experience mirrors the mobile UI with clean, actionable cards.
        </p>
      </div>

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
        {features.map(({ title, description }: FeatureProps, index) => (
          <Card key={title} className="overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-sm text-muted-foreground">
              {description}
            </CardContent>

            <CardFooter className="pt-0">
              {index === 0 && (
                <div className="phone-card w-full">
                  <div className="text-xs text-muted-foreground">Job posting</div>
                  <div className="text-sm font-semibold">Supply Chain Manager</div>
                  <div className="mt-2 h-2 rounded-full bg-muted" />
                  <div className="mt-2 h-2 w-3/4 rounded-full bg-muted" />
                  <div className="mt-3 phone-button">Post a Job</div>
                </div>
              )}
              {index === 1 && (
                <div className="phone-card w-full">
                  <div className="text-xs text-muted-foreground">Accommodation</div>
                  <div className="text-sm font-semibold">Room in 4 Bedroom Apartment</div>
                  <div className="text-lg font-bold">$230 per week</div>
                  <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    Melbourne, VIC
                  </div>
                </div>
              )}
              {index === 2 && (
                <div className="phone-card w-full">
                  <div className="text-xs text-muted-foreground">Events</div>
                  <div className="text-sm font-semibold">FitHer Expo Melbourne</div>
                  <div className="mt-2 text-xs text-muted-foreground">
                    28 Jul 2024 • 10:00 AM - 7:00 PM
                  </div>
                  <div className="mt-3 phone-button">Book Tickets</div>
                </div>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};
