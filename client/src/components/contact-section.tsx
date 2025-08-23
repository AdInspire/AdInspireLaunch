import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

interface ContactFormData {
  fullName: string;
  email: string;
  company: string;
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
      icon: <Mail className="w-6 h-6" />,
      color: "bg-blue-500",
      title: "contact@adinspire.com",
      subtitle: "Drop us an email anytime",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      color: "bg-purple-500",
      title: "+1 (555) 123-4567",
      subtitle: "Call us during business hours",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      color: "bg-orange-500",
      title: "123 Marketing Street, Digital City",
      subtitle: "Visit our creative hub",
    },
  ];

  return (
    <section 
      id="contact" 
      className="py-20 relative" style={{backgroundColor: '#F8F7F2'}}
      data-testid="contact-section"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-blue-600/5"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black uppercase mb-6 text-gray-800">
            READY TO GROW?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
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
            <h3 className="text-3xl font-bold text-gray-800 uppercase">
              LET'S START YOUR SUCCESS STORY
            </h3>

            <p className="text-lg text-gray-600">
              Our team is ready to help you achieve unprecedented growth. Whether
              you're launching a new product, expanding your market reach, or
              looking to optimize your existing campaigns, we have the expertise
              to make it happen.
            </p>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4" data-testid={`contact-info-${index}`}>
                  <div className={`w-12 h-12 ${info.color} rounded-full flex items-center justify-center`}>
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">{info.title}</div>
                    <div className="text-gray-500">{info.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-gray-200 shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            data-testid="contact-form"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Full Name
                </label>
                <Input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full bg-white border-gray-300 text-gray-800 focus:border-yellow-500"
                  placeholder="Enter your full name"
                  required
                  data-testid="input-fullname"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-white border-gray-300 text-gray-800 focus:border-yellow-500"
                  placeholder="Enter your email"
                  required
                  data-testid="input-email"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white border-gray-300 text-gray-800 focus:border-yellow-500"
                  placeholder="Your company name"
                  data-testid="input-company"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">
                  Project Details
                </label>
                <Textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-white border-gray-300 text-gray-800 focus:border-yellow-500 resize-none"
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
