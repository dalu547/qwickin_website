"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/premium/Container";

const MapPinIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 1.5C5.93 1.5 4.25 3.18 4.25 5.25C4.25 8.16 8 13.5 8 13.5C8 13.5 11.75 8.16 11.75 5.25C11.75 3.18 10.07 1.5 8 1.5Z" stroke="#7CBD5E" strokeWidth="1.4" strokeLinejoin="round"/>
    <circle cx="8" cy="5.25" r="1.5" stroke="#7CBD5E" strokeWidth="1.4"/>
  </svg>
);

const PhoneIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M3 2.5H6L7.5 6L5.5 7.25C6.33 9 7 9.67 8.75 10.5L10 8.5L13.5 10V13C13.5 13.28 13.28 13.5 13 13.5C6.37 13.5 2.5 9.63 2.5 3C2.5 2.72 2.72 2.5 3 2.5Z" stroke="#7CBD5E" strokeWidth="1.4" strokeLinejoin="round"/>
  </svg>
);

const MailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="#7CBD5E" strokeWidth="1.4"/>
    <path d="M1.5 5.5L8 9.5L14.5 5.5" stroke="#7CBD5E" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const BuildingIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <rect x="2" y="3" width="12" height="11" rx="1" stroke="#7CBD5E" strokeWidth="1.4"/>
    <path d="M5 14V10H11V14" stroke="#7CBD5E" strokeWidth="1.4" strokeLinejoin="round"/>
    <rect x="5" y="5.5" width="2" height="2" rx="0.3" stroke="#7CBD5E" strokeWidth="1.2"/>
    <rect x="9" y="5.5" width="2" height="2" rx="0.3" stroke="#7CBD5E" strokeWidth="1.2"/>
    <path d="M8 3V1.5" stroke="#7CBD5E" strokeWidth="1.4" strokeLinecap="round"/>
  </svg>
);

const locations = [
  {
    flag: "🇦🇺",
    country: "Australia",
    city: "Melbourne",
    type: "Headquarters",
    details: [
      { Icon: MapPinIcon,   text: "Unit 88/150 Palmers Road, Truganina VIC 3029" },
      { Icon: PhoneIcon,    text: "+61 424 127 808" },
      { Icon: MailIcon,     text: "info@qwickin.com" },
    ],
    mapSrc:
      "https://maps.google.com/maps?q=150+Palmers+Road+Truganina+VIC+3029+Australia&output=embed&z=15",
  },
  {
    flag: "🇮🇳",
    country: "India",
    city: "Hyderabad",
    type: "Development & Delivery Office",
    details: [
      { Icon: MapPinIcon,   text: "Hyderabad, Telangana, India" },
      { Icon: BuildingIcon, text: "Development & Delivery Office" },
    ],
    mapSrc:
      "https://maps.google.com/maps?q=Hyderabad+Telangana+India&output=embed&z=11",
  },
];

export const LocationsSection = () => (
  <section className="relative bg-white py-20 md:py-24 overflow-hidden">
    {/* Background accents */}
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_20%_60%,rgba(124,189,94,0.07),transparent)]" />
    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_45%_40%_at_80%_30%,rgba(90,166,74,0.06),transparent)]" />

    <Container className="relative z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="text-xs font-bold uppercase tracking-widest text-[#7CBD5E]">
          Where We Are
        </span>
        <h2 className="mt-3 text-3xl font-bold text-[#1A1A1A] md:text-4xl">
          Melbourne &amp; Hyderabad
        </h2>
        <p className="mt-4 text-base text-[#555555]">
          With offices in Australia and India, we deliver local service with global capability.
        </p>
      </motion.div>

      {/* Location Cards */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {locations.map(({ flag, country, city, type, details, mapSrc }, index) => (
          <motion.div
            key={city}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
            className="overflow-hidden rounded-2xl border border-[#E5E5E5] bg-[#F8F9FA] shadow-[0_2px_16px_rgba(0,0,0,0.06)]"
          >
            {/* Map embed */}
            <div className="relative h-52 w-full overflow-hidden">
              <iframe
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`Map of ${city}`}
                className="absolute inset-0 h-full w-full"
              />
              <div className="pointer-events-none absolute inset-0 bg-white/5" />
            </div>

            {/* Card content */}
            <div className="p-6">
              {/* Flag + city */}
              <div className="flex items-center gap-3">
                <span className="text-3xl leading-none">{flag}</span>
                <div>
                  <h3 className="text-lg font-bold text-[#1A1A1A]">
                    {city}, {country}
                  </h3>
                  <span className="mt-0.5 inline-block rounded-full bg-[#7CBD5E]/15 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-[#7CBD5E]">
                    {type}
                  </span>
                </div>
              </div>

              {/* Contact details */}
              <ul className="mt-5 space-y-3">
                {details.map(({ Icon, text }) => (
                  <li key={text} className="flex items-start gap-3 text-sm text-[#555555]">
                    <span className="mt-0.5 flex-shrink-0">
                      <Icon />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </Container>
  </section>
);
