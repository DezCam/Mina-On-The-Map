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
    <section className="relative h-96 md:h-[600px] overflow-hidden">
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-image.jpg')"
        }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-40" />
      
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
          <h1 className="font-lato font-black text-4xl md:text-6xl text-white mb-6 leading-tight">
            Your Compass to Unforgettable Adventures
          </h1>
          <p className="font-merriweather text-lg md:text-xl text-white mb-8 max-w-2xl mx-auto">
            Discover hidden gems, authentic experiences, and expert travel tips from around the world
          </p>
          
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-md mx-auto bg-white rounded-full shadow-lg overflow-hidden">
            <div className="flex">
              <Input
                type="text"
                placeholder="Search Guides or Destinations"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-6 py-4 font-lato text-dark-brown border-0 focus:ring-0 rounded-l-full"
              />
              <Button 
                type="submit"
                className="bg-teal-primary text-white px-6 py-4 hover:bg-teal-light transition-colors rounded-r-full"
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
