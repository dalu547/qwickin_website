import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface TestimonialProps {
  image?: string;
  initials: string;
  name: string;
  userName: string;
  comment: string;
}

const testimonials: TestimonialProps[] = [
  {
    initials: "MC",
    name: "Maya Clarke",
    userName: "Ops Director, Norfield",
    comment: "Qwickin cut our time-to-fill from weeks to days. Crews show up ready.",
  },
  {
    initials: "DM",
    name: "Derrick Mason",
    userName: "Regional Manager, ApexBuild",
    comment:
      "The housing module saved us hours every week and kept teams close to site.",
  },

  {
    initials: "PN",
    name: "Priya Nair",
    userName: "Talent Lead, Greenline",
    comment:
      "The ad tools are the fastest way we have found to reach local talent.",
  },
  {
    initials: "KM",
    name: "Kofi Mensah",
    userName: "Crew Supervisor, Steelway",
    comment:
      "One dashboard for jobs, stays, and locations keeps our teams aligned.",
  },
  {
    initials: "AF",
    name: "Alina Flores",
    userName: "Operations, RidgePoint",
    comment:
      "Compliance checks and approvals are finally centralized and fast.",
  },
  {
    initials: "BH",
    name: "Ben Hart",
    userName: "Logistics, Portside",
    comment:
      "We launched in two new regions without adding headcount.",
  },
];

export const Testimonials = () => {
  return (
    <section
      id="testimonials"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold">
        See Why
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          {" "}
          Teams Choose{" "}
        </span>
        Qwickin
      </h2>

      <p className="text-xl text-muted-foreground pt-4 pb-8">
        Real operators share how Qwickin accelerates staffing and logistics.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2  lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {testimonials.map(
          ({ image, initials, name, userName, comment }: TestimonialProps) => (
            <Card
              key={userName}
              className="max-w-md md:break-inside-avoid overflow-hidden"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <Avatar>
                  {image ? <AvatarImage alt="" src={image} /> : null}
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>

                <div className="flex flex-col">
                  <CardTitle className="text-lg">{name}</CardTitle>
                  <CardDescription>{userName}</CardDescription>
                </div>
              </CardHeader>

              <CardContent>{comment}</CardContent>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
