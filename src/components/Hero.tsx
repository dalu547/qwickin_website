import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";

export const Hero = () => {
  return (
    <section
      id="home"
      className="container grid lg:grid-cols-2 place-items-center py-16 md:py-24 gap-10"
    >
      <div className="text-center lg:text-start space-y-6">
        <div className="space-y-4">
          <p className="text-base uppercase tracking-[0.3em] text-muted-foreground">
            Build smarter. Operate securely. Scale confidently.
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Technology.{" "}
            <span className="text-primary">Security.</span> Solutions that work.
          </h1>
        </div>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Custom-built applications, secure IT systems, and smart automation for
          modern businesses in Melbourne.
        </p>

        <div className="space-y-2 text-muted-foreground text-lg">
          <p className="text-xl text-foreground">
            <span className="font-semibold text-primary">QwickIn</span> is a
            Melbourne-based technology partner built for practical results.
          </p>
          <p>
            <span className="font-semibold text-primary">Qwickin</span> is a
            Melbourne-based technology and digital solutions company helping
            businesses move faster, operate smarter, and stay secure. We design
            and deliver custom apps, automation, and security solutions that fit
            how your team actually works.
          </p>
        </div>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button asChild className="w-full md:w-auto px-8">
            <a href="#contact">Talk to Us</a>
          </Button>

          <a
            rel="noreferrer noopener"
            href="#services"
            className={`w-full md:w-auto ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Our Services
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
