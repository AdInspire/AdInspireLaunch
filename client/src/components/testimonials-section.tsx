import { motion } from "framer-motion";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "John Davis",
      title: "CEO, TechCorp Solutions",
      initials: "JD",
      gradient: "from-blue-400 to-purple-500",
      testimonial: "ADINSPIRE transformed our digital presence completely. Their strategic approach to lead generation increased our qualified leads by 300% in just 3 months. Outstanding results!",
      project: "Lead Generation Campaign",
      duration: "6 months",
      roi: "450%",
      color: "text-blue-400"
    },
    {
      name: "Sarah Martinez",
      title: "Founder, EcoInnovate",
      initials: "SM",
      gradient: "from-purple-400 to-pink-500",
      testimonial: "Their multi-channel retention strategy helped us maintain 95% customer retention rate. The WhatsApp and email automation campaigns are phenomenal!",
      project: "Customer Retention System",
      duration: "4 months",
      roi: "95%",
      color: "text-purple-400"
    },
    {
      name: "Michael Roberts",
      title: "Marketing Director, Fashion Metro",
      initials: "MR",
      gradient: "from-orange-400 to-red-500",
      testimonial: "Working with ADINSPIRE was a game-changer. Their creative campaigns and data-driven approach helped us achieve a 250% increase in online sales. Highly recommended!",
      project: "Digital Marketing Overhaul",
      duration: "8 months",
      roi: "250%",
      color: "text-orange-400"
    },
    {
      name: "Amanda Lee",
      title: "Co-founder, HealthHub Pro",
      initials: "AL",
      gradient: "from-green-400 to-blue-500",
      testimonial: "The Instagram and WhatsApp engagement strategies they developed for us resulted in a 400% increase in customer engagement. Their team is incredibly creative and professional.",
      project: "Social Media Strategy",
      duration: "5 months",
      roi: "+400%",
      color: "text-green-400"
    },
    {
      name: "David Kim",
      title: "Owner, AutoFlex Motors",
      initials: "DK",
      gradient: "from-yellow-400 to-orange-500",
      testimonial: "ADINSPIRE's comprehensive digital marketing strategy helped us dominate our local market. From lead generation to customer retention, they delivered exceptional results across all channels.",
      project: "Complete Digital Transformation",
      duration: "12 months",
      roi: "+60%",
      color: "text-yellow-400"
    }
  ];

  return (
    <section 
      id="testimonials" 
      className="py-20" style={{backgroundColor: '#EAE8E1'}}
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
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 text-gray-800">
            CLIENT TESTIMONIALS
          </h2>
          <p className="text-xl text-gray-600">
            What our satisfied clients say about working with ADINSPIRE
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-yellow-500 to-blue-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 cursor-pointer group transition-all duration-400 hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              data-testid={`testimonial-${index}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="text-gray-800 font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex text-yellow-400 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className={`${testimonial.color} font-semibold`}>
                  Project: {testimonial.project}
                </p>
                <p className="text-gray-500 text-sm">
                  Duration: {testimonial.duration} | ROI: {testimonial.roi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional testimonials row */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.slice(3).map((testimonial, index) => (
            <motion.div
              key={index + 3}
              className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 cursor-pointer group transition-all duration-400 hover:transform hover:-translate-y-2 hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index + 3) * 0.2 }}
              data-testid={`testimonial-${index + 3}`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${testimonial.gradient} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold text-lg">{testimonial.initials}</span>
                </div>
                <div>
                  <h4 className="text-gray-800 font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>

              <div className="mb-6">
                <div className="flex text-yellow-400 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">"{testimonial.testimonial}"</p>
              </div>

              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className={`${testimonial.color} font-semibold`}>
                  Project: {testimonial.project}
                </p>
                <p className="text-gray-500 text-sm">
                  Duration: {testimonial.duration} | ROI: {testimonial.roi}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
