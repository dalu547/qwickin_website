import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  BadgeCheck,
  Puzzle,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const whyQwickin = [
  {
    title: "Built by practitioners, not just developers",
    description:
      "Led by professionals with hands-on experience in cybersecurity, enterprise IT, and real business operations.",
    icon: <BadgeCheck className="h-5 w-5" />,
  },
  {
    title: "End-to-end ownership",
    description:
      "From requirements and architecture to deployment and support—we handle everything in-house.",
    icon: <Workflow className="h-5 w-5" />,
  },
  {
    title: "Security-first mindset",
    description:
      "Every solution is built with security, compliance, and resilience in mind—not added later.",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
  {
    title: "Custom > Generic",
    description:
      "We tailor solutions to your workflow, users, and growth plans—no off-the-shelf bloat.",
    icon: <Puzzle className="h-5 w-5" />,
  },
];

export const About = () => {
  return (
    <section
      id="about"
      className="container py-24 sm:py-32 space-y-12"
    >
      <div className="space-y-8">
        <div className="text-center space-y-3">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Why <span className="text-primary">Qwickin</span>
          </h3>
          <p className="text-muted-foreground">
            Built by practitioners, delivered with ownership, and secured from
            day one.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {whyQwickin.map(({ title, description, icon }) => (
            <Card key={title}>
              <CardHeader className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-primary/10 text-primary w-fit rounded-2xl p-2">
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
      </div>
    </section>
  );
};
