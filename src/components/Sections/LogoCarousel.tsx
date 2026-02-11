import { Container } from "@/components/premium/Container";

const logos = [
  "SWEETINDIA",
  "SABGWALA",
  "DIGITAL SIGNAGE",
  "SK CONSTRUCTIONS",
  "NORFIELD",
  "APEXBUILD",
  "GREENLINE",
  "RIDGEPOINT",
];

export const LogoCarousel = () => {
  const items = [...logos, ...logos];

  return (
    <section className="py-20">
      <Container>
        <div className="mb-5 flex flex-wrap items-center justify-center gap-2">
          {["Verified Partners", "Enterprise Ready", "Local Support"].map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.15em] text-[#c3c7d8]"
            >
              {badge}
            </span>
          ))}
        </div>
        <h2 className="text-center text-2xl font-semibold text-white md:text-3xl">
          Trusted by Melbourne&apos;s Leading Businesses
        </h2>

        <div className="logo-marquee mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-5">
          <div className="logo-track flex w-max items-center gap-4 px-4">
            {items.map((logo, index) => (
              <div
                key={`${logo}-${index}`}
                className="min-w-[190px] rounded-xl border border-white/10 bg-[#151621] px-6 py-4 text-center text-sm font-semibold tracking-wide text-white/80"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
