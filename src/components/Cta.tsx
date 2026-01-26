import { Button } from "./ui/button";

export const Cta = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-[#7CBD5E]/20 via-white to-[#7CBD5E]/10 py-16 my-24 sm:my-32"
    >
      <div className="container lg:grid lg:grid-cols-2 place-items-center">
        <div className="lg:col-start-1">
          <h2 className="text-3xl md:text-4xl font-semibold ">
            Have an idea, problem, or system you want to improve?
          </h2>
          <p className="text-muted-foreground text-lg mt-4 mb-8 lg:mb-0">
            Let's build something that actually works for your business.
          </p>
        </div>

        <div className="space-y-4 lg:col-start-2">
          <Button asChild className="w-full md:mr-4 md:w-auto px-8">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild variant="outline" className="w-full md:w-auto">
            <a href="#contact">Book Free Consultation</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
