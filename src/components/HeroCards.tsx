export const HeroCards = () => {
  return (
    <div className="hidden lg:block w-full max-w-xl">
      <div className="hero-showcase p-8 text-white">
        <div className="flex items-center justify-between text-sm uppercase tracking-[0.3em] text-white/70">
          <span>Qwickin IT</span>
          <span>Melbourne, VIC</span>
        </div>

        <div className="mt-10 space-y-6">
          <h2 className="text-3xl font-semibold leading-tight">
            Secure systems built for the way you work.
          </h2>
          <p className="text-white/80">
            From custom applications to cybersecurity and cloud infrastructure,
            we deliver practical solutions that scale with your business.
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Custom applications",
              "Security-first delivery",
              "Automation & workflows",
              "Local support team",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 text-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
