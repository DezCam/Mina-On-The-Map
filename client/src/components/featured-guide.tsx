import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import type { TravelGuide } from "@shared/schema";

export default function FeaturedGuide() {
  const { data: featuredGuide, isLoading } = useQuery<TravelGuide>({
    queryKey: ["/api/travel-guides/featured"],
  });

  if (isLoading) {
    return (
      <section className="mb-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Skeleton className="w-full h-64 md:h-80" />
          <div className="p-8">
            <Skeleton className="h-4 w-32 mb-4" />
            <Skeleton className="h-8 w-3/4 mb-4" />
            <Skeleton className="h-20 w-full mb-6" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-48" />
              <Skeleton className="h-12 w-32" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!featuredGuide) {
    return null;
  }

  return (
    <section className="mb-16">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <img 
          src={featuredGuide.imageUrl} 
          alt={featuredGuide.title}
          className="w-full h-64 md:h-80 object-cover"
        />
        
        <div className="p-8">
          <div className="flex items-center mb-4">
            <Badge className="bg-teal-primary text-white px-3 py-1 rounded-full text-sm font-lato font-semibold mr-3">
              Featured Guide
            </Badge>
            <span className="text-gray-500 font-lato text-sm">Updated December 2024</span>
          </div>
          
          <h2 className="font-lato font-bold text-3xl md:text-4xl text-earth-brown mb-4">
            {featuredGuide.title}
          </h2>
          
          <p className="font-merriweather text-gray-700 text-lg leading-relaxed mb-6">
            {featuredGuide.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-earth-brown text-white px-8 py-3 rounded-full font-lato font-semibold hover:bg-opacity-90 transition-colors">
              Download the Guide Now
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-earth-brown text-earth-brown px-8 py-3 rounded-full font-lato font-semibold hover:bg-earth-brown hover:text-white transition-colors"
            >
              Read More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
