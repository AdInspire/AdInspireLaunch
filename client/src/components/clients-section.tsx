// clients-section.tsx
import { motion } from "framer-motion";

// Helper for SVG Icon styling
const iconStyles = "h-10 w-10 text-yellow-400";

// You can find great, free SVG icons from libraries like Heroicons (https://heroicons.com/)
// I've included a few placeholders below.
const industriesRow1 = [
  {
    name: "Tech & SaaS",
    icon: (
      <svg className={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
    ),
  },
  {
    name: "E-commerce & Retail",
    icon: (
      <svg className={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4z" />
      </svg>
    ),
  },
  {
    name: "Local Businesses",
    icon: (
      <svg className={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    name: "Healthcare & Wellness",
    icon: (
      <svg className={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    name: "Real Estate",
    icon: (
      <svg className={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    name: "Hospitality",
    icon: (
      <svg className={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h6m-6 4h6m-6 4h6" />
      </svg>
    ),
  },
];

const industriesRow2 = [
    {
    name: "Finance & Fintech",
    icon: (
      <svg className={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    name: "Education & EdTech",
    icon: (
       <svg className={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 14l9-5-9-5-9 5 9 5z" />
        <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-9.998 12.078 12.078 0 01.665-6.479L12 14z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v6" />
      </svg>
    ),
  },
  {
    name: "Creative Agencies",
    icon: (
      <svg className={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" />
      </svg>
    ),
  },
    {
    name: "Non-Profit",
    icon: (
      <svg className={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
  },
   {
    name: "B2B Services",
    icon: (
      <svg className={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z" />
      </svg>
    ),
  },
  {
    name: "Entertainment",
    icon: (
      <svg className={iconStyles} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

interface Industry {
  name: string;
  icon: JSX.Element;
}

const IndustryBelt = ({ industries, direction = "left" }: { industries: Industry[], direction?: "left" | "right" }) => (
  <div className="moving-belt mb-8">
    <div className={`belt-content ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}>
      {[...industries, ...industries, ...industries].map((industry, index) => (
        <div
          key={`${industry.name}-${index}`}
          className="flex items-center space-x-6 bg-gray-700/90 backdrop-blur-sm px-8 py-5 rounded-xl whitespace-nowrap mr-16 border border-gray-600 shadow-lg hover:border-yellow-500/50 transition-colors duration-100"
          data-testid={`industry-${industry.name.toLowerCase()}-${index}`}
        >
          {industry.icon}
          <span className="text-gray-100 font-semibold text-lg">{industry.name}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function IndustriesSection() {
  return (
    <section 
      id="clients" 
      className="py-20 overflow-hidden bg-gray-700"
      data-testid="industries-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 text-gray-100">
            Industries We're Passionate About
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're equipped with the strategies to help businesses in these sectors thrive and dominate their digital landscape.
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-yellow-500 to-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>
      </div>

      {/* First Belt - Moving Left */}
      <IndustryBelt industries={industriesRow1} direction="left" />

      {/* Second Belt - Moving Right */}
      <IndustryBelt industries={industriesRow2} direction="right" />
    </section>
  );
}