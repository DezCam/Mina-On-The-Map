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
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#1F3D2A_0%,#123A5A_52%,#B7653C_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(199,221,101,0.22),transparent_26%),radial-gradient(circle_at_top_right,rgba(143,179,201,0.24),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(217,139,117,0.22),transparent_28%)]" />
      <div className="absolute -left-20 top-24 h-64 w-64 rounded-full border border-[#D8D9B8]/25 bg-[#8FBF4D]/10 blur-3xl" />
      <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#8FB3C9]/12 blur-3xl" />
      <div className="absolute bottom-[-4rem] left-1/2 h-56 w-[42rem] -translate-x-1/2 rounded-[100%] border border-[#F3E8D6]/10 bg-[#F3E8D6]/5 blur-2xl" />
      
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl">
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
