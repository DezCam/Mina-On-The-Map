import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { MapPin } from "lucide-react";
import type { Destination } from "@shared/schema";

export default function Destinations() {
  const { data: destinations, isLoading } = useQuery<Destination[]>({
    queryKey: ["/api/destinations/top"],
  });

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="section-title mb-6 font-lato text-4xl font-black md:text-6xl">
            Explore Destinations
          </h1>
          <p className="font-merriweather text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Discover breathtaking destinations around the world. From hidden gems to iconic landmarks, 
            find your next adventure with our curated collection of travel destinations.
          </p>
        </section>

        {/* Destinations Grid */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              [...Array(6)].map((_, i) => (
                <Card key={i} className="botanical-card overflow-hidden rounded-xl">
                  <Skeleton className="w-full h-64" />
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3" />
                  </CardContent>
                </Card>
              ))
            ) : (
              destinations?.map((destination) => (
                <Card key={destination.id} className="overflow-hidden rounded-xl border border-ocean-blue bg-[#F3E8D6] shadow-[0_18px_36px_rgba(18,58,90,0.14)] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img 
                    src={destination.imageUrl} 
                    alt={destination.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <MapPin className="mr-2 h-4 w-4 text-ocean-blue" />
                      <span className="font-lato text-sm text-gray-600">{destination.country}</span>
                    </div>
                    <h3 className="font-lato font-bold text-xl text-earth-brown mb-3">{destination.name}</h3>
                    <p className="font-merriweather text-gray-600 mb-4">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="font-lato text-sm font-semibold text-ocean-blue">{destination.category}</span>
                      <a href="#" className="font-semibold text-earth-brown transition-colors hover:text-ocean-blue">
                        Explore →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="ocean-panel rounded-2xl p-12 text-center shadow-[0_20px_40px_rgba(18,58,90,0.24)]">
          <h2 className="font-lato font-bold text-3xl mb-4">Ready to Plan Your Adventure?</h2>
          <p className="font-merriweather text-lg mb-8 max-w-2xl mx-auto">
            Explore destinations and keep an eye out for future planning resources.
          </p>
          <button className="rounded-full bg-[#F3E8D6] px-8 py-4 font-lato font-semibold text-[#123A5A] transition-colors hover:bg-[#D5E3E8]">
            Start Planning
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
