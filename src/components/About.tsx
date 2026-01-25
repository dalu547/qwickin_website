import { Statistics } from "./Statistics";
export const About = () => {
  return (
    <section
      id="overview"
      className="container py-24 sm:py-32"
    >
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <div
            aria-hidden="true"
            className="w-full md:w-[300px] h-[240px] rounded-lg border bg-gradient-to-br from-primary/10 via-white to-primary/20"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Qwickin{" "}
                </span>
                in 30 seconds
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                Qwickin streamlines regional hiring and logistics for fast
                moving crews. Post jobs, place staff in verified housing, and
                promote local offers with one dashboard built for field teams.
              </p>
            </div>

            <Statistics />
          </div>
        </div>
      </div>
    </section>
  );
};
