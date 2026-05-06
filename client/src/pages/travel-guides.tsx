import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, Star } from "lucide-react";
import type { TravelGuide } from "@shared/schema";

export default function TravelGuides() {
  const { data: guides, isLoading } = useQuery<TravelGuide[]>({
    queryKey: ["/api/travel-guides"],
  });

  const { data: featuredGuide } = useQuery<TravelGuide>({
    queryKey: ["/api/travel-guides/featured"],
  });

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="section-title mb-6 font-lato text-4xl font-black md:text-6xl">
            Travel Guides
          </h1>
          <p className="font-merriweather text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive travel guides crafted with local expertise and insider knowledge. 
            Discover the best places to visit, where to stay, and hidden gems off the beaten path.
          </p>
        </section>

        {/* Featured Guide */}
        {featuredGuide && (
          <section className="mb-16">
            <div className="botanical-card overflow-hidden rounded-2xl">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img 
                    src={featuredGuide.imageUrl} 
                    alt={featuredGuide.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Badge className="mr-3 rounded-full bg-terracotta-clay px-3 py-1 text-sm font-lato font-semibold text-white">
                      <Star className="h-3 w-3 mr-1" />
                      Featured Guide
                    </Badge>
                  </div>
                  
                  <h2 className="font-lato font-bold text-3xl text-earth-brown mb-4">
                    {featuredGuide.title}
                  </h2>
                  
                  <p className="font-merriweather text-gray-700 text-lg leading-relaxed mb-6">
                    {featuredGuide.description}
                  </p>
                  
                  <div className="flex items-center mb-6">
                    <Clock className="h-4 w-4 text-gray-500 mr-2" />
                    <span className="text-gray-600 font-lato text-sm">{featuredGuide.readTime}</span>
                    <span className="mx-3 text-gray-400">•</span>
                    <span className="font-lato text-sm font-semibold text-ocean-blue">{featuredGuide.category}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="rounded-full bg-earth-brown px-8 py-3 font-lato font-semibold text-white transition-colors hover:bg-teal-primary">
                      Download Guide
                    </Button>
                    <Button 
                      variant="outline"
                      className="rounded-full border-2 border-wood px-8 py-3 font-lato font-semibold text-earth-brown transition-colors hover:bg-warm-beige"
                    >
                      Read Online
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* All Guides Grid */}
        <section className="mb-16">
          <h2 className="section-title mb-8 font-lato text-3xl font-bold">All Travel Guides</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              [...Array(6)].map((_, i) => (
                <Card key={i} className="botanical-card overflow-hidden rounded-xl">
                  <Skeleton className="w-full h-48" />
                  <CardContent className="p-6">
                    <Skeleton className="h-6 w-3/4 mb-3" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-2/3 mb-4" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardContent>
                </Card>
              ))
            ) : (
              guides?.filter(guide => !guide.isFeatured).map((guide) => (
                <Card key={guide.id} className="botanical-card overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img 
                    src={guide.imageUrl} 
                    alt={guide.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Badge className="rounded bg-warm-beige px-2 py-1 text-xs font-lato text-earth-brown">
                        {guide.category}
                      </Badge>
                    </div>
                    <h3 className="font-lato font-bold text-xl text-earth-brown mb-3">{guide.title}</h3>
                    <p className="font-merriweather text-gray-600 mb-4 line-clamp-3">{guide.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-gray-500 text-sm">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{guide.readTime}</span>
                      </div>
                      <a href="#" className="font-semibold text-earth-brown transition-colors hover:text-ocean-blue">
                        Read More →
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
