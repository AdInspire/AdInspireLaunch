import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20" style={{backgroundColor: '#4A5568'}} data-testid="about-section">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          {/* UPDATED HEADING */}
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 text-gray-100">
            Our Mission & Approach
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-yellow-500 to-blue-600 mx-auto rounded-full"></div>
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

            {/* Your updated, honest paragraphs */}
            <p className="text-lg text-gray-300 leading-relaxed">
              ADINSPIRE was founded on the belief that every brand has a powerful story to tell in the digital world. We are a modern, agile digital marketing agency passionate about helping businesses unlock their full potential and build a meaningful online presence.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our team of experts combines bold creativity with data-driven insights to craft bespoke marketing solutions. We understand that your business is unique, which is why we are dedicated to developing personalized strategies that align perfectly with your specific goals and target audience.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Our commitment is to act as a true partner in your growth. We focus on building transparent, collaborative relationships to deliver tangible results. Your success will be the ultimate measure of our success, and we are ready to build that journey with you from day one.
            </p>

            {/* --- REPLACED FAKE STATS WITH CORE VALUES --- */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-gray-800/50 rounded-lg shadow-lg border border-gray-600 flex flex-col items-center text-center">
                <div className="mb-3">
                  <svg className="h-10 w-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-100 mb-2">Data-Driven Strategy</h4>
                <p className="text-gray-400 text-sm">Every decision is backed by data to maximize your ROI.</p>
              </div>
              <div className="p-6 bg-gray-800/50 rounded-lg shadow-lg border border-gray-600 flex flex-col items-center text-center">
                <div className="mb-3">
                   <svg className="h-10 w-10 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a3.004 3.004 0 014.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-100 mb-2">Transparent Partnership</h4>
                 <p className="text-gray-400 text-sm">We build relationships on open communication and full clarity.</p>
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
            {/* --- UPDATED IMAGE TO BE MORE MODERN & ABSTRACT --- */}
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern office workspace with team collaboration"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-yellow-400/15 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}