import { motion } from "framer-motion";
import { Megaphone, Users, Heart, Check } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Megaphone className="w-10 h-10" />,
      color: "text-blue-400",
      hoverColor: "hover:border-blue-500",
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies for brands, products, services, and businesses. We create impactful campaigns that resonate with your target audience and drive conversions.",
      features: [
        "Social Media Marketing",
        "Content Strategy", 
        "Brand Development",
        "PPC Advertising"
      ]
    },
    {
      icon: <Users className="w-10 h-10" />,
      color: "text-purple-400",
      hoverColor: "hover:border-purple-500",
      title: "Lead Generation",
      description: "Strategic lead generation solutions that connect you with qualified prospects. Our data-driven approach ensures high-quality leads that convert into loyal customers.",
      features: [
        "Targeted Campaigns",
        "Landing Page Optimization",
        "CRM Integration",
        "Analytics & Reporting"
      ]
    },
    {
      icon: <Heart className="w-10 h-10" />,
      color: "text-orange-400",
      hoverColor: "hover:border-orange-500",
      title: "Client Retention",
      description: "Keep your customers engaged and loyal through multi-channel retention strategies. We use WhatsApp, email, Instagram DMs, and other channels to maintain strong client relationships.",
      features: [
        "WhatsApp Marketing",
        "Email Automation",
        "Instagram Engagement",
        "Customer Journey Mapping"
      ]
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20" style={{backgroundColor: '#2D3748'}}
      data-testid="services-section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 text-gray-100">
            OUR SERVICES
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions to elevate your brand and
            drive measurable results
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-yellow-500 to-blue-600 mx-auto rounded-full mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={`bg-gray-700/80 backdrop-blur-sm p-8 rounded-2xl border border-gray-600 hover:border-yellow-500/50 hover:shadow-xl transition-all duration-300 group`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-testid={`service-${index}`}
            >
              <div className={`${service.color} text-4xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-100 mb-4 uppercase">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 text-gray-400">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center" data-testid={`feature-${index}-${featureIndex}`}>
                    <Check className="w-4 h-4 text-green-400 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
