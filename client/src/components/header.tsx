import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import AppearanceToggle from "@/components/appearance-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import logoImage from "@assets/MinaOnTheMap Logo Audition_1753800500181.png";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/destinations", label: "Destinations" },
  { href: "/travel-guides", label: "Travel Guides" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 border-b-2 border-sandy-tan bg-white shadow-lg transition-all duration-300 ${
      isScrolled ? "bg-opacity-95 backdrop-blur-sm" : ""
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img 
              src={logoImage} 
              alt="Mina on the Map Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-lato font-medium transition-colors ${
                  location === link.href
                    ? "text-teal-primary"
                    : "text-dark-brown hover:text-teal-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <AppearanceToggle />

            <Button className="bg-teal-primary text-white px-6 py-2 rounded-full font-lato font-semibold hover:bg-teal-light transition-colors">
              <span className="hidden md:inline">Plan Your Trip</span>
              <span className="md:hidden">Plan</span>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="mt-6 flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`text-lg font-lato font-medium transition-colors ${
                        location === link.href
                          ? "text-teal-primary"
                          : "text-dark-brown hover:text-teal-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button className="mt-6 bg-teal-primary px-6 py-3 font-lato font-semibold text-white transition-colors hover:bg-teal-light">
                    Plan Your Trip
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
