import { motion } from "framer-motion";
import logoImage from "@assets/Untitled_design__1_-removebg-preview_1755947894247.png";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden pt-24"
      data-testid="hero-section"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-xl animate-float"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          data-testid="hero-content"
        >
          <div className="flex flex-col items-center mb-6">
            <img 
              src={logoImage} 
              alt="ADINSPIRE Logo" 
              className="w-24 h-24 md:w-32 md:h-32 mb-4"
            />
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-orange-500">
                ADINSPIRE
              </span>
            </h1>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold uppercase mb-8 text-gray-200">
            IGNITING BRANDS, INSPIRING GROWTH
          </h2>

          <p className="text-xl md:text-2xl font-semibold uppercase mb-8 text-gray-300 max-w-4xl mx-auto">
            OUR GOAL: TRANSFORMING BUSINESSES THROUGH INNOVATIVE DIGITAL
            MARKETING STRATEGIES
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-testid="cta-button"
            >
              START YOUR JOURNEY
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
              data-testid="learn-more-button"
            >
              LEARN MORE
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
