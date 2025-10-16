import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  fullName: string;
  email: string;
  company?: string;
  projectDetails: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    company: "",
    projectDetails: "",
  });

  const { toast } = useToast();

  const submitContactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("POST", "/api/contacts", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message! We will get back to you soon.",
      });
      setFormData({
        fullName: "",
        email: "",
        company: "",
        projectDetails: "",
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactMutation.mutate(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-white" />,
      color: "bg-blue-500",
      title: "support@adinspire.com",
      subtitle: "Drop us an email anytime",
    },
    {
      icon: <Phone className="w-6 h-6 text-white" />,
      color: "bg-purple-500",
      title: "+91 9211377028",
      subtitle: "Call us anytime, We are here to help",
    },
  ];

  // --- ADDED SOCIAL MEDIA HANDLES ---
  const socialHandles = [
    { 
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />, 
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        alert("LinkedIn will be coming soon!");
      },
    },
    { 
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />, 
      onClick: (e: React.MouseEvent) => {
        e.preventDefault();
        alert("Twitter will be coming soon!"); 
      },
    },
    { 
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />, 
      url: "https://www.instagram.com/adinspire.in" 
    },
    { 
      name: "Facebook",
      icon: <Facebook className="w-6 h-6" />, 
      url: "https://www.facebook.com/profile.php?id=61579142551688" 
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-20 relative" style={{backgroundColor: '#2D3748'}}
      data-testid="contact-section"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/8 to-blue-500/8"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 text-gray-100">
            READY TO GROW?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            If you want help to grow your business even further, work with us.
            Let's transform your digital presence together.
          </p>
          <div className="w-24 h-2 bg-gradient-to-r from-yellow-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="contact-info"
          >
            <h3 className="text-3xl font-bold text-gray-100 uppercase">
              LET'S START YOUR SUCCESS STORY
            </h3>

            <p className="text-lg text-gray-300">
              Our team is ready to help you achieve unprecedented growth. Whether
              you're launching a new product, expanding your market reach, or
              looking to optimize your existing campaigns, we have the expertise
              to make it happen.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${index}`}>
                  <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-lg text-gray-100">{info.title}</div>
                    <div className="text-gray-400">{info.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* --- NEW SOCIAL MEDIA SECTION --- */}
            <div className="pt-6">
                <h4 className="text-xl font-bold text-gray-100 mb-4">
                    Connect With Us
                </h4>
                <div className="flex items-center space-x-4">
                    {socialHandles.map((social) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 border border-gray-600"
                            whileHover={{ y: -5, scale: 1.1, color: '#FBBF24' }} // Yellow color on hover
                            transition={{ type: "spring", stiffness: 300 }}
                            aria-label={`Visit our ${social.name} page`}
                        >
                            {social.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
            
          </motion.div>

          <motion.div
            className="bg-gray-700/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-600 shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="contact-form"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-200 font-semibold mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-gray-600 border-gray-500 text-gray-100 focus:border-yellow-500"
                  placeholder="Enter your full name"
                  required
                  data-testid="input-fullname"
                />
              </div>

              <div>
                <label className="block text-gray-200 font-semibold mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-600 border-gray-500 text-gray-100 focus:border-yellow-500"
                  placeholder="Enter your email"
                  required
                  data-testid="input-email"
                />
              </div>

              <div>
                <label className="block text-gray-200 font-semibold mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-gray-600 border-gray-500 text-gray-100 focus:border-yellow-500"
                  placeholder="Your company name"
                  data-testid="input-company"
                />
              </div>

              <div>
                <label className="block text-gray-200 font-semibold mb-2">
                  Project Details
                </label>
                <Textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-gray-600 border-gray-500 text-gray-100 focus:border-yellow-500 resize-none"
                  placeholder="Tell us about your project..."
                  required
                  data-testid="input-project-details"
                />
              </div>

              <Button
                type="submit"
                disabled={submitContactMutation.isPending}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                data-testid="submit-button"
              >
                {submitContactMutation.isPending ? (
                  "SENDING..."
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    SEND MESSAGE
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}