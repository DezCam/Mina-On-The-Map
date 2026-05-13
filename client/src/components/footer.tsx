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
    <footer className="brand-surface py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-4 font-lato text-xl font-black uppercase tracking-[0.18em] text-[#F3E8D6]">
              Mina On The Map
            </div>
            <p className="mb-4 font-merriweather text-sm text-[#D8D9B8]">
              Travel notes, guides, and stories from Mina On The Map.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#D5E3E8] transition-colors hover:text-[#E1C44A]">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#D5E3E8] transition-colors hover:text-[#E1C44A]">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-[#D5E3E8] transition-colors hover:text-[#E1C44A]">
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
                  <a href="#" className="text-[#D8D9B8] transition-colors hover:text-[#E1C44A]">
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
                  <a href="#" className="text-[#D8D9B8] transition-colors hover:text-[#E1C44A]">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-lato font-bold text-lg mb-4">Get in Touch</h3>
            <div className="space-y-3 font-merriweather text-sm text-[#D8D9B8]">
              <div className="flex items-center">
                <Mail className="mr-3 h-4 w-4 text-[#8FB3C9]" />
                hello@minaonthemap.com
              </div>
              <div className="flex items-center">
                <MapPin className="mr-3 h-4 w-4 text-[#8FB3C9]" />
                Contact details coming soon
              </div>
              <div className="flex items-center">
                <Clock className="mr-3 h-4 w-4 text-[#8FB3C9]" />
                Updates shared here
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-[#3F6F35] pt-8 text-center">
          <p className="font-merriweather text-sm text-[#D8D9B8]">
            © Mina On The Map. | 
            <a href="#" className="ml-1 text-[#8FB3C9] transition-colors hover:text-[#E1C44A]">Privacy Policy</a> | 
            <a href="#" className="ml-1 text-[#8FB3C9] transition-colors hover:text-[#E1C44A]">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
