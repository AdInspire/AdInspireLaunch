import { motion } from "framer-motion";
import { Users, BarChart3, ShieldCheck, Handshake, Target } from "lucide-react";

export default function TestimonialsSection() {
  // --- REPLACED FAKE TESTIMONIALS WITH HONEST COMMITMENTS ---
  const commitments = [
    {
      icon: <Handshake className="w-10 h-10" />,
      gradient: "from-blue-400 to-purple-500",
      title: "A True Partnership",
      description: "We don't just work for you; we work with you. Our goal is to become a seamless extension of your team, deeply invested in your mission and dedicated to achieving your goals together.",
      principles: ["Dedicated Support", "Regular Strategy Calls", "Shared Goals & KPIs"],
      color: "text-blue-400"
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      gradient: "from-purple-400 to-pink-500",
      title: "Data-Driven Decisions",
      description: "Guesswork has no place in our strategies. Every campaign is built on a foundation of rigorous data analysis, ensuring your marketing budget is invested for maximum impact and measurable ROI.",
      principles: ["Actionable Reporting", "A/B Testing", "Continuous Optimization"],
      color: "text-purple-400"
    },
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      gradient: "from-orange-400 to-red-500",
      title: "Radical Transparency",
      description: "You will always know exactly what we're doing, why we're doing it, and how it's performing. We provide clear reporting and maintain open lines of communication, so you have complete confidence.",
      principles: ["No Hidden Fees", "Open-Door Policy", "Honest Feedback"],
      color: "text-orange-400"
    },
    {
      icon: <Target className="w-10 h-10" />,
      gradient: "from-green-400 to-blue-500",
      title: "Custom-Tailored Strategies",
      description: "We believe in bespoke solutions, not one-size-fits-all templates. We take the time to understand your unique brand, audience, and objectives to build a strategy that is uniquely yours.",
      principles: ["In-depth Onboarding", "Audience Research", "Competitive Analysis"],
      color: "text-green-400"
    },
    {
      icon: <Users className="w-10 h-10" />,
      gradient: "from-yellow-400 to-orange-500",
      title: "Customer-Centric Focus",
      description: "Your success is the ultimate measure of our own. Our entire process is built around delivering value to your business and ensuring that our work directly contributes to your bottom line.",
      principles: ["Proactive Communication", "Long-Term Vision", "Focus on Your ROI"],
      color: "text-yellow-400"
    }
  ];

  return (
    <section 
      id="Our Commitment" 
      className="py-20" style={{backgroundColor: '#4A5568'}}
      data-testid="testimonials-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* --- UPDATED THEME --- */}
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 text-gray-100">
            Our Client Commitment
          </h2>
          <p className="text-xl text-gray-300">
            This is our pledge to every client we partner with.
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-yellow-500 to-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {commitments.slice(0, 3).map((commitment, index) => (
            <motion.div
              key={index}
              className="bg-gray-700/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-600 cursor-pointer group flex flex-col justify-between"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.03 }}
              viewport={{ once: true }}
              transition={{
                ease: "easeOut", duration: 0.5, delay: index * 0.15,
                y: { type: "spring", stiffness: 400, damping: 15 },
                scale: { type: "spring", stiffness: 400, damping: 15 }
              }}
            >
              <div>
                <div className="flex items-center mb-6">
                  {/* --- REPLACED INITIALS WITH ICON --- */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${commitment.gradient} rounded-full flex items-center justify-center mr-4 text-white`}>
                    {commitment.icon}
                  </div>
                  <div>
                    {/* --- REPLACED NAME/TITLE WITH COMMITMENT TITLE --- */}
                    <h4 className="text-gray-100 font-bold text-xl">{commitment.title}</h4>
                  </div>
                </div>
                <div className="mb-6">
                  {/* --- REMOVED STAR RATING --- */}
                  <p className="text-gray-300 italic">"{commitment.description}"</p>
                </div>
              </div>
              
              {/* --- REPURPOSED HOVER EFFECT WITH KEY PRINCIPLES --- */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-auto">
                <h5 className={`${commitment.color} font-semibold mb-2 text-lg`}>
                  How We Deliver:
                </h5>
                <ul className="space-y-1 text-gray-400 text-sm list-disc list-inside">
                  {commitment.principles.map((principle, pIndex) => (
                    <li key={pIndex}>{principle}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- You can uncomment this second row when you want to add more commitments --- */}
        {/* <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"> ... </div> */}
      </div>
    </section>
  );
}