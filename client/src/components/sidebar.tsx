import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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

export default function Sidebar() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const { data: recentPosts, isLoading } = useQuery<BlogPost[]>({
    queryKey: ["/api/blog-posts/recent"],
  });

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you for subscribing!",
        description: `Welcome to the Map Tribe, ${email}`,
      });
      setEmail("");
    }
  };

  const instagramImages = [
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    "https://images.unsplash.com/photo-1548013146-72479768bada?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
  ];

  return (
    <aside className="lg:w-1/3">
      {/* Newsletter Signup */}
      <Card className="terracotta-panel mb-8 rounded-2xl border-none shadow-[0_18px_38px_rgba(183,101,60,0.24)]">
        <CardContent className="p-8">
          <h3 className="font-lato font-bold text-2xl mb-4">Join the Map Tribe</h3>
          <p className="font-merriweather mb-6">Get exclusive travel tips, destination guides, and adventure inspiration delivered to your inbox weekly.</p>

          <form onSubmit={handleNewsletterSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border-0 bg-[#F3E8D6] px-4 py-3 text-dark-brown placeholder:text-muted-olive"
              required
            />
            <Button 
              type="submit"
              className="w-full rounded-lg bg-earth-brown px-6 py-3 font-lato font-semibold text-white transition-colors hover:bg-teal-primary"
            >
              Subscribe Now
            </Button>
          </form>

          <p className="text-xs mt-4 opacity-80">No spam, unsubscribe anytime. Read our privacy policy.</p>
        </CardContent>
      </Card>

      {/* Blog Header and Recent Posts */}
      <Card className="botanical-card rounded-2xl">
        <CardContent className="p-6">
          <div className="relative mb-6">
            <div className="flex h-40 w-full flex-col items-center justify-center rounded-lg bg-[linear-gradient(160deg,rgba(217,139,117,0.92),rgba(183,101,60,0.94),rgba(31,61,42,0.78))] p-6 text-center">
              <p className="font-lato text-xs font-bold uppercase tracking-[0.24em] text-[#F3E8D6]/80">
                Mina On The Map
              </p>
              <h3 className="mt-3 font-lato text-2xl font-black text-white">
                Stories from the road
              </h3>
              <p className="mt-2 max-w-xs font-merriweather text-sm text-[#F3E8D6]">
                Fresh reflections, travel notes, and destination highlights.
              </p>
            </div>
          </div>

          <h3 className="font-lato font-bold text-xl text-earth-brown mb-6">Recent Posts</h3>

          <div className="space-y-4">
            {isLoading ? (
              [...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="w-16 h-16 rounded-lg" />
                  <div className="flex-1">
                    <Skeleton className="h-4 w-3/4 mb-2" />
                    <Skeleton className="h-3 w-1/2" />
                  </div>
                </div>
              ))
            ) : (
              recentPosts?.map((post) => (
                <article key={post.id} className="flex gap-4">
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-lato font-semibold text-sm text-earth-brown mb-1">{post.title}</h4>
                    <p className="text-xs text-gray-500">
                      {formatPublishedDate(post.publishedAt)}
                    </p>
                  </div>
                </article>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Instagram Feed */}
      <Card className="botanical-card rounded-2xl">
        <CardContent className="p-6">
          <h3 className="font-lato font-bold text-xl text-earth-brown mb-6 flex items-center">
            <Instagram className="mr-2 h-5 w-5 text-ocean-blue" />
            Instagram Feed
          </h3>

          <div className="grid grid-cols-3 gap-2">
            {instagramImages.map((imageUrl, index) => (
              <img 
                key={index}
                src={imageUrl} 
                alt={`Instagram post ${index + 1}`}
                className="w-full h-20 object-cover rounded-lg hover:opacity-80 transition-opacity cursor-pointer"
              />
            ))}
          </div>

          <div className="mt-4 text-center">
            <a href="#" className="font-lato font-semibold text-ocean-blue hover:underline">
              @minaonthemap
            </a>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
}
