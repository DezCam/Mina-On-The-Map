import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
    <div className="min-h-screen bg-cream-light">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="font-lato font-black text-4xl md:text-6xl text-earth-brown mb-6">
            Get in Touch
          </h1>
          <p className="font-merriweather text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Have a question about travel? Want to collaborate? Or just want to say hello? 
            I'd love to hear from you! Drop me a message and let's start a conversation.
          </p>
        </section>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white rounded-2xl shadow-lg">
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-primary focus:ring-1 focus:ring-teal-primary"
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
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-primary focus:ring-1 focus:ring-teal-primary"
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
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-primary focus:ring-1 focus:ring-teal-primary"
                    placeholder="What's this about?"
                  />
                </div>
                
                <div>
                  <label className="block font-lato font-semibold text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-teal-primary focus:ring-1 focus:ring-teal-primary resize-none"
                    placeholder="Tell me about your travel dreams, questions, or just say hello!"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-teal-primary text-white px-8 py-4 rounded-full font-lato font-semibold hover:bg-teal-light transition-colors"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Social */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="bg-white rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-lato font-bold text-xl text-earth-brown mb-6">Let's Connect</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-teal-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-lato font-semibold text-gray-800 mb-1">Email</h4>
                      <p className="font-merriweather text-gray-600">hello@minaonthemap.com</p>
                      <p className="font-merriweather text-sm text-gray-500 mt-1">I typically respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-teal-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-lato font-semibold text-gray-800 mb-1">Instagram</h4>
                      <p className="font-merriweather text-gray-600">@minaonthemap</p>
                      <p className="font-merriweather text-sm text-gray-500 mt-1">Follow for daily travel inspiration</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-teal-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
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
            <Card className="bg-white rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <h3 className="font-lato font-bold text-xl text-earth-brown mb-6">Quick Questions?</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-lato font-semibold text-gray-800 mb-2">Travel Planning Services</h4>
                    <p className="font-merriweather text-sm text-gray-600">Yes! I offer personalized travel planning consultations. Email me for details.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-lato font-semibold text-gray-800 mb-2">Collaboration Opportunities</h4>
                    <p className="font-merriweather text-sm text-gray-600">I'm always open to partnering with travel brands and destinations that align with my values.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-lato font-semibold text-gray-800 mb-2">Guest Posts</h4>
                    <p className="font-merriweather text-sm text-gray-600">Have an amazing travel story to share? I'd love to feature fellow travelers on the blog.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-teal-primary text-white rounded-2xl shadow-lg">
              <CardContent className="p-8 text-center">
                <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-80" />
                <h3 className="font-lato font-bold text-xl mb-2">Response Time</h3>
                <p className="font-merriweather">I read every message personally and aim to respond within 24 hours. Your travel questions and stories mean the world to me!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}