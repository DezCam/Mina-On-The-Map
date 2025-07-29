import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";
import type { Destination } from "@shared/schema";

export default function DestinationsSection() {
  const { data: destinations, isLoading } = useQuery<Destination[]>({
    queryKey: ["/api/destinations/top"],
  });

  if (isLoading) {
    return (
      <section id="destinations" className="mb-16">
        <h2 className="font-lato font-bold text-3xl text-earth-brown mb-8 text-center">Top Destinations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="relative overflow-hidden rounded-xl">
              <Skeleton className="w-full h-48" />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section id="destinations" className="mb-16">
      <h2 className="font-lato font-bold text-3xl text-earth-brown mb-8 text-center">Top Destinations</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        {destinations?.map((destination) => (
          <div key={destination.id} className="relative group overflow-hidden rounded-xl">
            <img 
              src={destination.imageUrl} 
              alt={destination.name}
              className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="font-lato font-bold text-lg">{destination.name}</h3>
              <p className="text-sm opacity-90">{destination.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
