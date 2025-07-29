import { Instagram, Facebook, Youtube, MapPin, Mail, Clock } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    "Home", "Destinations", "Travel Guides", "Blog", "About", "Contact"
  ];

  const categories = [
    "Adventure Travel", "Cultural Experiences", "Food & Drink", 
    "Budget Travel", "Solo Travel", "Photography"
  ];

  return (
    <footer className="bg-earth-brown text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-teal-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-lato font-bold mr-2">
                M
              </div>
              <h3 className="font-lato font-bold text-lg">Mina on the Map</h3>
            </div>
            <p className="font-merriweather text-sm text-gray-300 mb-4">
              Your trusted companion for authentic travel experiences and unforgettable adventures around the globe.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-lato font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 font-merriweather text-sm">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-lato font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2 font-merriweather text-sm">
              {categories.map((category) => (
                <li key={category}>
                  <a href="#" className="text-gray-300 hover:text-white transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-lato font-bold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3 font-merriweather text-sm text-gray-300">
              <div className="flex items-center">
                <Mail className="text-teal-light mr-3 h-4 w-4" />
                hello@minaonthemap.com
              </div>
              <div className="flex items-center">
                <MapPin className="text-teal-light mr-3 h-4 w-4" />
                Based in California, USA
              </div>
              <div className="flex items-center">
                <Clock className="text-teal-light mr-3 h-4 w-4" />
                Response within 24 hours
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="font-merriweather text-sm text-gray-300">
            © 2024 Mina on the Map. All rights reserved. | 
            <a href="#" className="text-teal-light hover:text-white transition-colors ml-1">Privacy Policy</a> | 
            <a href="#" className="text-teal-light hover:text-white transition-colors ml-1">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
