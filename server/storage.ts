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
      imageUrl: "/mina-sf-photo.jpg",
      category: "Adventure Travel",
      readTime: "12 min read",
      isFeatured: true,
      createdAt: new Date(),
    };
    this.travelGuides.set(featuredGuide.id, featuredGuide);

    // Other Travel Guides - Mina's Personal Adventures
    const guides: TravelGuide[] = [
      {
        id: randomUUID(),
        title: "Turkey Explorer: The Magic of Istanbul",
        description: "Dive into the enchanting city where Europe meets Asia. From the stunning Hagia Sophia to the bustling Grand Bazaar, discover Istanbul's rich history, incredible architecture, and vibrant street food scene.",
        excerpt: "Dive into the enchanting city where Europe meets Asia, exploring Istanbul's rich history and vibrant culture...",
        imageUrl: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        category: "Cultural Heritage",
        readTime: "8 min read",
        isFeatured: false,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Spain Adventures: From Barcelona to Andalusia",
        description: "Journey through Spain's most captivating cities - from Barcelona's architectural wonders and vibrant nightlife to the white villages of Ronda, coastal charm of Nerja, and Moorish splendor of Granada.",
        excerpt: "Journey through Spain's most captivating cities from Barcelona's modernist architecture to Andalusia's Moorish heritage...",
        imageUrl: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        category: "Cultural Experiences",
        readTime: "10 min read",
        isFeatured: false,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "Swiss Serenity: Discovering Bern's Hidden Gems",
        description: "Explore Switzerland's charming capital with its medieval old town, stunning bear park, and breathtaking Alpine views. Learn where to find the best Swiss chocolate and how to navigate this UNESCO World Heritage site.",
        excerpt: "Explore Switzerland's charming capital with its medieval old town, bear park, and stunning Alpine views...",
        imageUrl: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        category: "Alpine Adventures",
        readTime: "6 min read",
        isFeatured: false,
        createdAt: new Date(),
      },
      {
        id: randomUUID(),
        title: "European City Breaks: Perfect Weekend Escapes",
        description: "Master the art of European city hopping with insider tips on maximizing short trips, finding authentic local experiences, and making the most of limited time in Europe's most beautiful cities.",
        excerpt: "Master the art of European city hopping with insider tips on maximizing short trips and authentic experiences...",
        imageUrl: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
        category: "Travel Tips",
        readTime: "7 min read",
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