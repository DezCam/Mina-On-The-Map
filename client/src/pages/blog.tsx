import { useQuery } from "@tanstack/react-query";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Calendar, Clock } from "lucide-react";
import type { BlogPost } from "@shared/schema";

function formatPublishedDate(publishedAt: BlogPost["publishedAt"]) {
  if (!publishedAt) {
    return "Coming soon";
  }

  return new Date(publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function Blog() {
  const { data: blogPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts/recent"],
  });

  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <section className="text-center mb-16">
          <div className="mb-8">
            <img 
              src="/mina-logo.png" 
              alt="Mina on the Map Logo" 
              className="w-32 h-32 mx-auto mb-6"
            />
          </div>
          <h1 className="section-title mb-6 font-lato text-4xl font-black md:text-6xl">
            Mina's Travel Blog
          </h1>
          <p className="font-merriweather text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Join me on my journey around the world as I share travel stories, tips, and experiences 
            from every corner of the globe. Let's explore together!
          </p>
        </section>

        {/* Blog Posts Grid */}
        <section className="mb-16">
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
              blogPosts?.map((post) => (
                <Card key={post.id} className="botanical-card overflow-hidden rounded-xl transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-48 object-cover"
                  />
                  <CardContent className="p-6">
                    <h3 className="font-lato font-bold text-xl text-earth-brown mb-3">{post.title}</h3>
                    <p className="font-merriweather text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{formatPublishedDate(post.publishedAt)}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <div className="mt-4">
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

        {/* Newsletter Signup */}
        <section className="terracotta-panel rounded-2xl p-12 text-center shadow-[0_20px_40px_rgba(183,101,60,0.22)]">
          <h2 className="font-lato font-bold text-3xl mb-4">Never Miss an Adventure</h2>
          <p className="font-merriweather text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to get the latest travel stories, tips, and destination guides delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 rounded-full border-0 bg-[#F3E8D6] px-4 py-3 text-dark-brown placeholder:text-muted-olive"
            />
            <button className="rounded-full bg-earth-brown px-6 py-3 font-lato font-semibold text-white transition-colors hover:bg-teal-primary">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
