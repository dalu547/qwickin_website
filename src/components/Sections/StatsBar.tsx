import { motion } from "framer-motion";

const stats = [
  { value: "13+", label: "Projects Delivered" },
  { value: "2+", label: "Years in Business" },
  { value: "AU + IN", label: "Offices" },
  { value: "24/7", label: "Support Available" },
];

export const StatsBar = () => (
  <div className="w-full bg-[#5AA64A] py-2">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center px-4 py-8 text-center"
          >
            <span className="text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl">
              {stat.value}
            </span>
            <span className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/85 md:text-sm">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
