import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import ContactSection from "@/components/contact-section";
import ClientsSection from "@/components/clients-section";
import TestimonialsSection from "@/components/testimonials-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream-50 text-gray-800 overflow-x-hidden" style={{backgroundColor: '#F8F7F2', color: '#333333'}}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <ClientsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
