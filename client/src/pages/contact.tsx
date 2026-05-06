import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageCircle, Instagram, MapPin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="section-title mb-6 font-lato text-4xl font-black md:text-6xl">
            Get in Touch
          </h1>
          <p className="font-merriweather text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Have a question about travel? Want to collaborate? Or just want to say hello? 
            I'd love to hear from you! Drop me a message and let's start a conversation.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="botanical-card rounded-2xl">
            <CardContent className="p-8">
              <h2 className="font-lato font-bold text-2xl text-earth-brown mb-6">Send Me a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-lato font-semibold text-gray-700 mb-2">Name</label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 bg-[#F3E8D6] px-4 py-3 focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block font-lato font-semibold text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-lg border border-gray-300 bg-[#F3E8D6] px-4 py-3 focus-visible:ring-2 focus-visible:ring-ring"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block font-lato font-semibold text-gray-700 mb-2">Subject</label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-300 bg-[#F3E8D6] px-4 py-3 focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block font-lato font-semibold text-gray-700 mb-2">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full resize-none rounded-lg border border-gray-300 bg-[#F3E8D6] px-4 py-3 focus-visible:ring-2 focus-visible:ring-ring"
                    placeholder="Tell me about your travel dreams, questions, or just say hello!"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full rounded-full bg-earth-brown px-8 py-4 font-lato font-semibold text-white transition-colors hover:bg-teal-primary"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="botanical-card rounded-2xl">
              <CardContent className="p-8">
                <h3 className="font-lato font-bold text-xl text-earth-brown mb-6">Let's Connect</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-earth-brown">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-lato font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="font-merriweather text-gray-600">hello@minaonthemap.com</p>
                      <p className="font-merriweather text-sm text-gray-500 mt-1">Response timing will be shared here.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-ocean-blue">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-lato font-semibold text-gray-800 mb-1">Instagram</h4>
                      <p className="font-merriweather text-gray-600">@minaonthemap</p>
                      <p className="font-merriweather text-sm text-gray-500 mt-1">Follow for daily travel inspiration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-terracotta-clay">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-lato font-semibold text-gray-800 mb-1">Currently Exploring</h4>
                      <p className="font-merriweather text-gray-600">San Francisco, CA</p>
                      <p className="font-merriweather text-sm text-gray-500 mt-1">But always planning the next adventure!</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* FAQ */}
            <Card className="sage-panel rounded-2xl">
              <CardContent className="p-8">
                <h3 className="font-lato font-bold text-xl text-earth-brown mb-6">Quick Questions?</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-lato font-semibold text-gray-800 mb-2">Travel Planning Services</h4>
                    <p className="font-merriweather text-sm text-gray-600">Yes! I offer personalized travel planning consultations. Email me for details.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-lato font-semibold text-gray-800 mb-2">Collaboration Opportunities</h4>
                    <p className="font-merriweather text-sm text-gray-600">Partnership details can be added here.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-lato font-semibold text-gray-800 mb-2">Guest Posts</h4>
                    <p className="font-merriweather text-sm text-gray-600">Have an amazing travel story to share? I'd love to feature fellow travelers on the blog.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="ocean-panel rounded-2xl shadow-[0_20px_40px_rgba(18,58,90,0.24)]">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h3 className="font-lato font-bold text-xl mb-2">Response Time</h3>
                <p className="font-merriweather">A response message can be added here when details are finalized.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
