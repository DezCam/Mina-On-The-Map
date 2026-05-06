import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      toast({
        title: "Search initiated",
        description: `Searching for: ${searchQuery}`,
      });
      // TODO: Implement actual search functionality
    }
  };

  return (
    <section className="relative h-96 overflow-hidden md:h-[600px]">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-image.jpg')",
          backgroundColor: '#8B7355'
        }}
      >
        <img 
          src="/hero-image.jpg" 
          alt="Coastal landscape background"
          className="w-full h-full object-cover opacity-0"
          onLoad={(e) => {
            console.log('Hero image loaded, making visible');
            e.currentTarget.style.opacity = '1';
            if (e.currentTarget.parentElement) {
              e.currentTarget.parentElement.style.backgroundImage = "url('/hero-image.jpg')";
            }
          }}
          onError={(e) => {
            console.error('Hero image failed to load:', e);
            if (e.currentTarget.parentElement) {
              e.currentTarget.parentElement.style.backgroundColor = '#C1A57F';
            }
          }}
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(31,61,42,0.82),rgba(18,58,90,0.38),rgba(183,101,60,0.42))]" />
      
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center rounded-full border border-white/25 bg-white/10 px-4 py-2 font-lato text-sm font-semibold uppercase tracking-[0.18em] text-[#F3E8D6] backdrop-blur-sm">
            Botanical Terracotta Journeys
          </div>
          <h1 className="font-lato font-black text-4xl md:text-6xl text-white mb-6 leading-tight">
            Your Compass to Unforgettable Adventures
          </h1>
          <p className="mx-auto mb-8 max-w-2xl font-merriweather text-lg text-[#F3E8D6] md:text-xl">
            Discover hidden gems, authentic experiences, and expert travel tips from around the world
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mx-auto max-w-md overflow-hidden rounded-full border border-[#C1A57F] bg-[#F3E8D6] shadow-[0_18px_40px_rgba(42,33,27,0.18)]">
            <div className="flex">
              <Input
                type="text"
                placeholder="Search Guides or Destinations"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 rounded-l-full border-0 bg-transparent px-6 py-4 font-lato text-dark-brown placeholder:text-muted-olive focus-visible:ring-0"
              />
              <Button 
                type="submit"
                className="rounded-r-full bg-earth-brown px-6 py-4 text-white transition-colors hover:bg-teal-primary"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
