import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import AppearanceToggle from "@/components/appearance-toggle";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

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
    <header className={`sticky top-0 z-50 border-b border-sandy-tan bg-earth-brown shadow-lg transition-all duration-300 ${
      isScrolled ? "bg-opacity-95 backdrop-blur-md" : ""
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <div className="font-lato text-xl font-black uppercase tracking-[0.18em] text-[#F3E8D6]">
              Mina On The Map
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`font-lato font-medium transition-colors ${
                  location === link.href
                    ? "text-[#E1C44A]"
                    : "text-[#F3E8D6] hover:text-[#C1A57F]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          
          <div className="flex items-center gap-3">
            <AppearanceToggle />

            <Button className="rounded-full bg-terracotta-clay px-6 py-2 font-lato font-semibold text-white transition-colors hover:bg-salt-pink">
              <span className="hidden md:inline">Plan Your Trip</span>
              <span className="md:hidden">Plan</span>
            </Button>
            
            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-[#F3E8D6] hover:bg-white/10 hover:text-[#C1A57F] md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] border-l border-sandy-tan bg-cream sm:w-[400px]">
                <div className="mt-6 flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`text-lg font-lato font-medium transition-colors ${
                        location === link.href
                          ? "text-teal-primary"
                          : "text-dark-brown hover:text-ocean-blue"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button className="mt-6 bg-earth-brown px-6 py-3 font-lato font-semibold text-white transition-colors hover:bg-teal-primary">
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
