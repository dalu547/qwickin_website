import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BadgeCheck,
  Handshake,
  Puzzle,
  ShieldCheck,
  Workflow,
} from "lucide-react";

interface FeatureProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const features: FeatureProps[] = [
  {
    title: "Built by practitioners, not just developers",
    description:
      "Led by professionals with hands-on experience in cybersecurity, enterprise IT, and real business operations.",
    icon: <BadgeCheck className="h-5 w-5" />,
  },
  {
    title: "Security-first approach",
    description:
      "Every solution is built with security, compliance, and resilience in mind—not added as an afterthought.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "End-to-end ownership",
    description:
      "From requirements to deployment and support—we handle everything in-house. No hand-offs. No confusion.",
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    title: "Custom > Generic",
    description:
      "We don't push off-the-shelf tools. Every solution is tailored to your workflow, users, and growth plans.",
    icon: <Puzzle className="h-5 w-5" />,
  },
  {
    title: "Long-term partner approach",
    description:
      "We work as an extension of your team. Our goal is long-term value, scalability, and trust.",
    icon: <Handshake className="h-5 w-5" />,
  },
];

export const Features = () => {
  return (
    <section
      id="why-qwickin"
      className="container py-24 sm:py-32 space-y-8"
    >
      <div className="text-center">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Why Businesses{" "}
          <span className="text-primary">Choose Qwickin</span>
        </h2>
        <p className="text-muted-foreground mt-3 text-lg">
          Security-first delivery, custom solutions, and ownership from strategy
          to support.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, icon }: FeatureProps) => (
          <Card key={title} className="overflow-hidden">
            <CardHeader>
              <div className="bg-primary/10 text-primary w-fit rounded-2xl p-2 mb-3">
                {icon}
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
