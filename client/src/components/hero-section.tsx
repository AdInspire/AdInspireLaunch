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
      className="min-h-screen hero-gradient-enhanced flex items-center justify-center relative overflow-hidden pt-24"
      data-testid="hero-section"
    >
      {/* Background Animation Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full mix-blend-screen filter blur-2xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full mix-blend-screen filter blur-2xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-amber-300 to-blue-300 rounded-full mix-blend-screen filter blur-2xl animate-float"
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
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-amber-400 to-blue-500 rounded-full blur-xl opacity-40 scale-125 animate-pulse"></div>
              <img 
                src={logoImage} 
                alt="ADINSPIRE Logo" 
                className="relative w-28 h-28 md:w-40 md:h-40 mb-4 drop-shadow-2xl"
              />
            </div>
            <h1 className="text-6xl md:text-8xl font-black uppercase leading-tight">
              <span className="text-blue-300">AD</span><span className="text-amber-400">INSPIRE</span>
            </h1>
          </div>

          <h2 className="text-2xl md:text-4xl font-bold uppercase mb-8 text-slate-300">
            IGNITING BRANDS, INSPIRING GROWTH
          </h2>

          <p className="text-xl md:text-2xl font-semibold uppercase mb-8 text-slate-400 max-w-4xl mx-auto">
            OUR GOAL: TRANSFORMING BUSINESSES THROUGH INNOVATIVE DIGITAL
            MARKETING STRATEGIES
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              data-testid="cta-button"
            >
              START YOUR JOURNEY
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="border-2 border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300"
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
