import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  const navLinks = [
    { href: "#", label: "Home" },
    { href: "#destinations", label: "Destinations" },
    { href: "#guides", label: "Travel Guides" },
    { href: "#blog", label: "Blog" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-white shadow-lg border-b-2 border-sandy-tan transition-all duration-300 ${
      isScrolled ? 'bg-opacity-95 backdrop-blur-sm' : ''
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="../../attached_assets/MinaOnTheMap Logo Audition_1753800066592.png" 
              alt="Mina on the Map Logo" 
              className="w-20 h-20 drop-shadow-md"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-lato font-medium text-dark-brown hover:text-teal-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-teal-primary text-white px-6 py-2 rounded-full font-lato font-semibold hover:bg-teal-light transition-colors">
              Plan Your Trip
            </Button>
          </div>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="font-lato font-medium text-dark-brown hover:text-teal-primary transition-colors text-lg"
                  >
                    {link.label}
                  </a>
                ))}
                <Button className="bg-teal-primary text-white px-6 py-3 rounded-full font-lato font-semibold hover:bg-teal-light transition-colors mt-6">
                  Plan Your Trip
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
