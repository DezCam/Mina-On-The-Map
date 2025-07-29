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
    <div className="min-h-screen bg-cream-light">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="font-lato font-black text-4xl md:text-6xl text-earth-brown mb-6">
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
                <Card key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
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
                <Card key={destination.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={destination.imageUrl} 
                    alt={destination.name}
                    className="w-full h-64 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <MapPin className="h-4 w-4 text-teal-primary mr-2" />
                      <span className="font-lato text-sm text-gray-600">{destination.country}</span>
                    </div>
                    <h3 className="font-lato font-bold text-xl text-earth-brown mb-3">{destination.name}</h3>
                    <p className="font-merriweather text-gray-600 mb-4">{destination.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-teal-primary font-lato text-sm font-semibold">{destination.category}</span>
                      <a href="#" className="text-earth-brown font-semibold hover:text-teal-primary transition-colors">
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
        <section className="text-center bg-teal-primary text-white rounded-2xl p-12">
          <h2 className="font-lato font-bold text-3xl mb-4">Ready to Plan Your Adventure?</h2>
          <p className="font-merriweather text-lg mb-8 max-w-2xl mx-auto">
            Get personalized destination recommendations and expert travel advice tailored to your interests.
          </p>
          <button className="bg-white text-teal-primary px-8 py-4 rounded-full font-lato font-semibold hover:bg-gray-100 transition-colors">
            Start Planning
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}