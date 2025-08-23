import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-slate-800" data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 text-white">
            WHAT DO WE DO
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="about-content"
          >
            <h3 className="text-3xl md:text-4xl font-bold text-blue-400 uppercase">
              ABOUT ADINSPIRE
            </h3>

            <p className="text-lg text-gray-300 leading-relaxed">
              ADINSPIRE is a cutting-edge digital marketing agency that
              specializes in transforming businesses through innovative marketing
              strategies. We are passionate about helping brands reach their full
              potential in the digital landscape.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              Our team of experts combines creativity with data-driven insights to
              deliver exceptional results. We understand that every business is
              unique, which is why we craft personalized marketing solutions that
              align with your specific goals and target audience.
            </p>

            <p className="text-lg text-gray-300 leading-relaxed">
              From startups to established enterprises, we've helped countless
              businesses amplify their online presence, increase brand awareness,
              and drive sustainable growth through strategic digital marketing
              initiatives.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="text-center p-6 bg-slate-700 rounded-lg">
                <div className="text-3xl font-bold text-blue-400 mb-2" data-testid="projects-stat">150+</div>
                <div className="text-gray-300 uppercase font-semibold">
                  Projects Completed
                </div>
              </div>
              <div className="text-center p-6 bg-slate-700 rounded-lg">
                <div className="text-3xl font-bold text-purple-400 mb-2" data-testid="satisfaction-stat">98%</div>
                <div className="text-gray-300 uppercase font-semibold">
                  Client Satisfaction
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="about-image"
          >
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern office workspace with team collaboration"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
