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
    <div className="min-h-screen bg-cream-light">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="text-center mb-16">
          <h1 className="font-lato font-black text-4xl md:text-6xl text-earth-brown mb-6">
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
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
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
                    <Badge className="bg-teal-primary text-white px-3 py-1 rounded-full text-sm font-lato font-semibold mr-3">
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
                    <span className="text-teal-primary font-lato text-sm font-semibold">{featuredGuide.category}</span>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-earth-brown text-white px-8 py-3 rounded-full font-lato font-semibold hover:bg-opacity-90 transition-colors">
                      Download Guide
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-2 border-earth-brown text-earth-brown px-8 py-3 rounded-full font-lato font-semibold hover:bg-earth-brown hover:text-white transition-colors"
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
          <h2 className="font-lato font-bold text-3xl text-earth-brown mb-8">All Travel Guides</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {isLoading ? (
              [...Array(6)].map((_, i) => (
                <Card key={i} className="bg-white rounded-xl shadow-lg overflow-hidden">
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
                <Card key={guide.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img 
                    src={guide.imageUrl} 
                    alt={guide.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <div className="flex items-center mb-3">
                      <Badge className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-lato">
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
                      <a href="#" className="text-earth-brown font-semibold hover:text-teal-primary transition-colors">
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