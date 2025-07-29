import { type TravelGuide, type InsertTravelGuide, type Destination, type InsertDestination, type BlogPost, type InsertBlogPost } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Travel Guides
  getTravelGuides(): Promise<TravelGuide[]>;
  getFeaturedGuide(): Promise<TravelGuide | undefined>;
  getTravelGuide(id: string): Promise<TravelGuide | undefined>;
  createTravelGuide(guide: InsertTravelGuide): Promise<TravelGuide>;

  // Destinations
  getDestinations(): Promise<Destination[]>;
  getTopDestinations(): Promise<Destination[]>;
  createDestination(destination: InsertDestination): Promise<Destination>;

  // Blog Posts
  getBlogPosts(): Promise<BlogPost[]>;
  getRecentPosts(): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;

  // Search
  searchGuidesAndDestinations(query: string): Promise<{ guides: TravelGuide[], destinations: Destination[] }>;
}

export class MemStorage implements IStorage {
  private travelGuides: Map<string, TravelGuide>;
  private destinations: Map<string, Destination>;
  private blogPosts: Map<string, BlogPost>;

  constructor() {
    this.travelGuides = new Map();
    this.destinations = new Map();
    this.blogPosts = new Map();

    // Initialize with sample data
    this.initializeData();
  }

  private initializeData() {
    // Featured Travel Guide
    const featuredGuide: TravelGuide = {
      id: randomUUID(),
      title: "San Francisco: Your Ultimate City Adventure",
      description: "Most travelers spend hours trying to figure out the most beautiful sights and hidden gems to visit. We've created a detailed itinerary that gives you a step-by-step game plan so you can experience the best of San Francisco at the perfect times and create memories that will last forever!",
      excerpt: "Discover the most beautiful San Francisco with our comprehensive guide.",
      imageUrl: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
      category: "Adventure Travel",
      readTime: "12 min read",
      isFeatured: true,
      createdAt: new Date(),
    };
    this.travelGuides.set(featuredGuide.id, featuredGuide);

    // Other Travel Guides
    const guides: TravelGuide[] = [
      {
        id: randomUUID(),
        title: "Peru Adventure: Machu Picchu & Beyond",
        description: "Discover the ancient wonders of Peru with our comprehensive guide to Machu Picchu, Cusco, and the Sacred Valley. Learn the best times to visit, where to stay, and hidden gems off the beaten path.",
        excerpt: "Discover the ancient wonders of Peru with our comprehensive guide to Machu Picchu, Cusco, and the Sacred Valley...",
        imageUrl: "https://images.unsplash.com/photo-1587595431973-160d0d94add1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        category: "Cultural Experiences",
        readTime: "5 min read",
        isFeatured: false,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Iceland Winter Magic: Northern Lights Guide",
        description: "Experience the mystical beauty of Iceland's winter wonderland with our ultimate guide to chasing the Northern Lights, ice caves, and hot springs.",
        excerpt: "Experience the mystical beauty of Iceland's winter wonderland with our ultimate guide to chasing the Northern Lights...",
        imageUrl: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        category: "Adventure Travel",
        readTime: "7 min read",
        isFeatured: false,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "French Polynesia Paradise: Island Guide",
        description: "Escape to tropical paradise with our insider's guide to Bora Bora, Tahiti, and the hidden gems of French Polynesia.",
        excerpt: "Escape to tropical paradise with our insider's guide to Bora Bora, Tahiti, and the hidden gems of French Polynesia...",
        imageUrl: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        category: "Beach & Islands",
        readTime: "6 min read",
        isFeatured: false,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Ireland Road Trip: Emerald Isle Adventures",
        description: "Journey through Ireland's stunning landscapes with our complete road trip guide covering castles, cliffs, and culture.",
        excerpt: "Journey through Ireland's stunning landscapes with our complete road trip guide covering castles, cliffs, and culture...",
        imageUrl: "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        category: "Road Trips",
        readTime: "8 min read",
        isFeatured: false,
        createdAt: new Date(),
      },
    ];

    guides.forEach(guide => this.travelGuides.set(guide.id, guide));

    // Destinations
    const destinations: Destination[] = [
      {
        id: randomUUID(),
        name: "Cambodia",
        country: "Cambodia",
        description: "Ancient temples & culture",
        imageUrl: "https://images.unsplash.com/photo-1539650116574-75c0c6d31abd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        category: "Cultural Heritage",
      },
      {
        id: randomUUID(),
        name: "Japan",
        country: "Japan",
        description: "Tradition meets modernity",
        imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        category: "Cultural Experiences",
      },
      {
        id: randomUUID(),
        name: "Kenya",
        country: "Kenya",
        description: "Safari adventures",
        imageUrl: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
        category: "Wildlife Safari",
      },
    ];

    destinations.forEach(dest => this.destinations.set(dest.id, dest));

    // Blog Posts
    const posts: BlogPost[] = [
      {
        id: randomUUID(),
        title: "Best Time to Visit Patagonia",
        excerpt: "Everything you need to know about timing your Patagonia adventure for the best weather and wildlife viewing.",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
        publishedAt: new Date("2024-12-15"),
      },
      {
        id: randomUUID(),
        title: "Food Markets Around the World",
        excerpt: "Discover the most vibrant food markets across different continents and what makes each one special.",
        imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
        publishedAt: new Date("2024-12-12"),
      },
      {
        id: randomUUID(),
        title: "Winter Cabin Retreats",
        excerpt: "Cozy cabin getaways perfect for escaping the winter blues and reconnecting with nature.",
        imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80",
        publishedAt: new Date("2024-12-10"),
      },
    ];

    posts.forEach(post => this.blogPosts.set(post.id, post));
  }

  async getTravelGuides(): Promise<TravelGuide[]> {
    return Array.from(this.travelGuides.values()).sort((a, b) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async getFeaturedGuide(): Promise<TravelGuide | undefined> {
    return Array.from(this.travelGuides.values()).find(guide => guide.isFeatured);
  }

  async getTravelGuide(id: string): Promise<TravelGuide | undefined> {
    return this.travelGuides.get(id);
  }

  async createTravelGuide(insertGuide: InsertTravelGuide): Promise<TravelGuide> {
    const id = randomUUID();
    const guide: TravelGuide = { ...insertGuide, id, createdAt: new Date() };
    this.travelGuides.set(id, guide);
    return guide;
  }

  async getDestinations(): Promise<Destination[]> {
    return Array.from(this.destinations.values());
  }

  async getTopDestinations(): Promise<Destination[]> {
    return Array.from(this.destinations.values()).slice(0, 3);
  }

  async createDestination(insertDestination: InsertDestination): Promise<Destination> {
    const id = randomUUID();
    const destination: Destination = { ...insertDestination, id };
    this.destinations.set(id, destination);
    return destination;
  }

  async getBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values()).sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
  }

  async getRecentPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values())
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
      .slice(0, 3);
  }

  async createBlogPost(insertPost: InsertBlogPost): Promise<BlogPost> {
    const id = randomUUID();
    const post: BlogPost = { ...insertPost, id, publishedAt: new Date() };
    this.blogPosts.set(id, post);
    return post;
  }

  async searchGuidesAndDestinations(query: string): Promise<{ guides: TravelGuide[], destinations: Destination[] }> {
    const lowerQuery = query.toLowerCase();

    const guides = Array.from(this.travelGuides.values()).filter(guide =>
      guide.title.toLowerCase().includes(lowerQuery) ||
      guide.description.toLowerCase().includes(lowerQuery) ||
      guide.category.toLowerCase().includes(lowerQuery)
    );

    const destinations = Array.from(this.destinations.values()).filter(dest =>
      dest.name.toLowerCase().includes(lowerQuery) ||
      dest.country.toLowerCase().includes(lowerQuery) ||
      dest.description.toLowerCase().includes(lowerQuery)
    );

    return { guides, destinations };
  }
}

export const storage = new MemStorage();