import { Avatar, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import { LightBulbIcon } from "./Icons";

export const HeroCards = () => {
  return (
    <div className="hidden lg:flex flex-row flex-wrap gap-8 relative w-[700px] h-[500px]">
      {/* Testimonial */}
      <Card className="absolute w-[340px] -top-[15px] drop-shadow-xl shadow-black/10">
        <CardHeader className="flex flex-row items-center gap-4 pb-2">
          <Avatar>
            <AvatarFallback>LO</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <CardTitle className="text-lg">Lena Ortiz</CardTitle>
            <CardDescription>Operations Lead</CardDescription>
          </div>
        </CardHeader>

        <CardContent>We staffed 24 roles in 48 hours without emails.</CardContent>
      </Card>

      {/* Team */}
      <Card className="absolute right-[20px] top-4 w-80 flex flex-col justify-center items-center drop-shadow-xl shadow-black/10">
        <CardHeader className="mt-8 flex justify-center items-center pb-2">
          <div
            aria-hidden="true"
            className="absolute -top-12 rounded-full w-24 h-24 bg-primary/10 border flex items-center justify-center text-lg font-semibold text-primary"
          >
            CR
          </div>
          <CardTitle className="text-center">Crew Readiness</CardTitle>
          <CardDescription className="font-normal text-primary">
            92% confirmed for this week
          </CardDescription>
        </CardHeader>

        <CardContent className="text-center pb-2">
          <p>
            Get instant status on staffing, housing, and active locations.
          </p>
        </CardContent>
      </Card>

      {/* Pricing */}
      <Card className="absolute top-[150px] left-[50px] w-72 drop-shadow-xl shadow-black/10">
        <CardHeader>
          <CardTitle className="flex item-center justify-between">
            Launch Week
            <Badge
              variant="secondary"
              className="text-sm text-primary"
            >
              Early access
            </Badge>
          </CardTitle>
          <div>
            <span className="text-3xl font-bold">0</span>
            <span className="text-muted-foreground"> setup fees</span>
          </div>

          <CardDescription>
            Get onboarding support for your first region.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Button className="w-full">Reserve a slot</Button>
        </CardContent>

        <hr className="w-4/5 m-auto mb-4" />

        <CardFooter className="flex">
          <div className="space-y-4">
            {["Dedicated launch manager", "Region-specific onboarding", "Priority support"].map(
              (benefit: string) => (
                <span
                  key={benefit}
                  className="flex"
                >
                  <Check className="text-green-500" />{" "}
                  <h3 className="ml-2">{benefit}</h3>
                </span>
              )
            )}
          </div>
        </CardFooter>
      </Card>

      {/* Service */}
      <Card className="absolute w-[350px] -right-[10px] bottom-[35px] drop-shadow-xl shadow-black/10">
        <CardHeader className="space-y-1 flex md:flex-row justify-start items-start gap-4">
          <div className="mt-1 bg-primary/20 p-1 rounded-2xl">
            <LightBulbIcon />
          </div>
          <div>
            <CardTitle>Smart onboarding</CardTitle>
            <CardDescription className="text-md mt-2">
              Qwickin configures job sites, housing, and ads in one guided flow.
            </CardDescription>
          </div>
        </CardHeader>
      </Card>
    </div>
  );
};
