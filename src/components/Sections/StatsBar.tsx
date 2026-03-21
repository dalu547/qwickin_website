import { motion } from "framer-motion";

const stats = [
  { value: "13+", label: "Projects Delivered" },
  { value: "2+", label: "Years in Business" },
  { value: "AU + IN", label: "Offices" },
  { value: "24/7", label: "Support Available" },
];

export const StatsBar = () => (
  <div className="w-full bg-[#5AA64A]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 divide-x divide-white/20 md:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center justify-center py-7 px-4 text-center first:border-l-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r md:[&:nth-child(2)]:divide-x-0 divide-y divide-white/20 md:divide-y-0"
          >
            <span className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
              {stat.value}
            </span>
            <span className="mt-1 text-sm font-medium text-white/80">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);
