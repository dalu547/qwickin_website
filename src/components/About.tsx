import { Statistics } from "./Statistics";
export const About = () => {
  return (
    <section
      id="overview"
      className="container py-24 sm:py-32"
    >
      <div className="grid lg:grid-cols-[0.9fr,1.1fr] gap-10 items-center">
        <div className="max-w-sm mx-auto w-full">
          <div className="rounded-[24px] border border-border bg-white p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div className="text-sm font-semibold text-foreground">
                Qwickin Flow
              </div>
              <span className="text-xs text-primary">4 Steps</span>
            </div>

            <div className="relative mt-6 space-y-6">
              <div className="absolute left-4 top-3 h-[calc(100%-24px)] w-px bg-primary/20" />

              {[
                "Post a job",
                "Match with candidates",
                "Confirm accommodations",
                "Launch ads & events",
              ].map((step, index) => (
                <div
                  key={step}
                  className="relative flex items-start gap-4"
                >
                  <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xs font-semibold">
                    {index + 1}
                  </div>
                  <div className="rounded-2xl border border-border bg-background px-4 py-3 text-sm font-medium text-foreground shadow-sm">
                    {step}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-primary/10 px-4 py-3 text-xs text-primary">
              One workflow connects jobs, housing, and ads in minutes.
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Qwickin in{" "}
            <span className="text-primary">30 seconds</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Qwickin brings jobs, accommodations, ads, and events into one
            mobile-first experience. Teams can browse listings, apply in
            seconds, and contact employers directly from the app.
          </p>
          <div className="grid gap-3 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Streamlined job posting and applications.
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Verified accommodation listings and pricing.
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              Local ads and event promotions built in.
            </div>
          </div>
          <Statistics />
        </div>
      </div>
    </section>
  );
};
