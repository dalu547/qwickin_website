import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-16 md:py-24 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-4xl md:text-5xl font-semibold leading-tight">
          <h1 className="inline">
            <span className="text-primary">Qwickin</span> is the mobile-first
            platform for
          </h1>{" "}
          <h2 className="inline">
            jobs, accommodations, ads, and events.
          </h2>
        </main>

        <p className="text-lg text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Match crews, book stays, and promote opportunities in one unified
          marketplace designed for fast-moving teams.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-auto px-8">Book a Demo</Button>

          <a
            rel="noreferrer noopener"
            href="#overview"
            className={`w-full md:w-auto ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Explore the App
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">
        <HeroCards />
      </div>
    </section>
  );
};
