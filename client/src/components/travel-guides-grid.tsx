import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import type { TravelGuide } from "@shared/schema";

export default function TravelGuidesGrid() {
  const { data: guides, isLoading } = useQuery<TravelGuide[]>({
    queryKey: ["/api/travel-guides"],
  });

  if (isLoading) {
    return (
      <section id="guides" className="mb-16">
        <h2 className="font-lato font-bold text-3xl text-earth-brown mb-8 text-center">Travel Themes & Destinations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[...Array(4)].map((_, i) => (
            <Card key={i} className="overflow-hidden">
              <Skeleton className="w-full h-48" />
              <CardContent className="p-6">
                <Skeleton className="h-6 w-3/4 mb-3" />
                <Skeleton className="h-16 w-full mb-4" />
                <div className="flex items-center justify-between">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-4 w-16" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    );
  }

  const nonFeaturedGuides = guides?.filter(guide => !guide.isFeatured) || [];

  return (
    <section id="guides" className="mb-16">
      <h2 className="font-lato font-bold text-3xl text-earth-brown mb-8 text-center">Travel Themes & Destinations</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {nonFeaturedGuides.map((guide) => (
          <Card key={guide.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <img 
              src={guide.imageUrl} 
              alt={guide.title}
              className="w-full h-48 object-cover"
            />
            <CardContent className="p-6">
              <h3 className="font-lato font-bold text-xl text-earth-brown mb-3">{guide.title}</h3>
              <p className="font-merriweather text-gray-600 mb-4">{guide.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="text-teal-primary font-lato text-sm">{guide.readTime}</span>
                <a href="#" className="text-earth-brown font-semibold hover:text-teal-primary transition-colors">
                  Read More →
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}