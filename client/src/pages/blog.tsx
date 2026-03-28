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
    <div className="min-h-screen bg-cream-light">
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
          <h1 className="font-lato font-black text-4xl md:text-6xl text-earth-brown mb-6">
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
              blogPosts?.map((post) => (
                <Card key={post.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
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

        {/* Newsletter Signup */}
        <section className="text-center bg-teal-primary text-white rounded-2xl p-12">
          <h2 className="font-lato font-bold text-3xl mb-4">Never Miss an Adventure</h2>
          <p className="font-merriweather text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to get the latest travel stories, tips, and destination guides delivered straight to your inbox.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 border-0"
            />
            <button className="bg-white text-teal-primary px-6 py-3 rounded-full font-lato font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
