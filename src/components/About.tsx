import { Statistics } from "./Statistics";
export const About = () => {
  return (
    <section
      id="overview"
      className="container py-24 sm:py-32"
    >
      <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
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

        <div className="phone-frame max-w-sm mx-auto w-full">
          <div className="phone-content space-y-4">
            <div className="text-center space-y-2">
              <div className="mx-auto h-12 w-12 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                Qi
              </div>
              <div className="text-sm text-primary font-medium">Login</div>
            </div>
            <div className="phone-input">Email</div>
            <div className="phone-input">Password</div>
            <div className="text-right text-xs text-primary">
              Forgot Password
            </div>
            <div className="phone-button">Login</div>
            <div className="text-center text-xs text-muted-foreground">
              Don't have an account?{" "}
              <span className="text-primary">Register</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
