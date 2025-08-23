import { motion } from "framer-motion";

export default function ClientsSection() {
  const clients = [
    { name: "TechCorp Solutions", initials: "TC", color: "bg-blue-500" },
    { name: "Global Logistics", initials: "GL", color: "bg-purple-500" },
    { name: "EcoInnovate", initials: "EI", color: "bg-green-500" },
    { name: "Fashion Metro", initials: "FM", color: "bg-orange-500" },
    { name: "FoodieGourmet", initials: "FG", color: "bg-red-500" },
    { name: "Digital Health", initials: "DH", color: "bg-indigo-500" },
  ];

  const clientsRow2 = [
    { name: "SmartFinance", initials: "SF", color: "bg-yellow-500" },
    { name: "Beauty Glow", initials: "BG", color: "bg-pink-500" },
    { name: "AutoFlex Motors", initials: "AF", color: "bg-teal-500" },
    { name: "HealthHub Pro", initials: "HH", color: "bg-cyan-500" },
    { name: "Green Architecture", initials: "GA", color: "bg-lime-500" },
    { name: "Luxury Interiors", initials: "LI", color: "bg-violet-500" },
  ];

  interface Client {
    name: string;
    initials: string;
    color: string;
  }

  const ClientBelt = ({ clients, direction = "left" }: { clients: Client[], direction?: "left" | "right" }) => (
    <div className="moving-belt mb-8">
      <div className={`belt-content ${direction === "left" ? "animate-scroll-left" : "animate-scroll-right"}`}>
        {[...clients, ...clients, ...clients].map((client, index) => (
          <div
            key={`${client.initials}-${index}`}
            className="flex items-center space-x-4 bg-slate-700/80 backdrop-blur-sm px-8 py-5 rounded-xl whitespace-nowrap mr-16 border border-slate-500/30 shadow-lg hover:bg-slate-600/80 transition-colors duration-300"
            data-testid={`client-${client.initials.toLowerCase()}-${index}`}
          >
            <div className={`w-12 h-12 ${client.color} rounded-full flex items-center justify-center shadow-md`}>
              <span className="text-white font-bold text-lg">{client.initials}</span>
            </div>
            <span className="text-white font-semibold text-lg">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section 
      id="clients" 
      className="py-20 bg-slate-800 overflow-hidden"
      data-testid="clients-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 text-white">
            THE CLIENTS WE ONBOARDED
          </h2>
          <p className="text-xl text-gray-300">
            Trusted by industry leaders and growing businesses worldwide
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-green-500 to-blue-500 mx-auto rounded-full mt-6"></div>
        </motion.div>
      </div>

      {/* First Belt - Moving Left */}
      <ClientBelt clients={clients} direction="left" />

      {/* Second Belt - Moving Right */}
      <ClientBelt clients={clientsRow2} direction="right" />
    </section>
  );
}
