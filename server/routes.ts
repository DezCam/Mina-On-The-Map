import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Travel Guides routes
  app.get("/api/travel-guides", async (req, res) => {
    try {
      const guides = await storage.getTravelGuides();
      res.json(guides);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch travel guides" });
    }
  });

  app.get("/api/travel-guides/featured", async (req, res) => {
    try {
      const featuredGuide = await storage.getFeaturedGuide();
      if (!featuredGuide) {
        return res.status(404).json({ message: "No featured guide found" });
      }
      res.json(featuredGuide);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch featured guide" });
    }
  });

  app.get("/api/travel-guides/:id", async (req, res) => {
    try {
      const guide = await storage.getTravelGuide(req.params.id);
      if (!guide) {
        return res.status(404).json({ message: "Travel guide not found" });
      }
      res.json(guide);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch travel guide" });
    }
  });

  // Destinations routes
  app.get("/api/destinations", async (req, res) => {
    try {
      const destinations = await storage.getDestinations();
      res.json(destinations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch destinations" });
    }
  });

  app.get("/api/destinations/top", async (req, res) => {
    try {
      const topDestinations = await storage.getTopDestinations();
      res.json(topDestinations);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch top destinations" });
    }
  });

  // Blog Posts routes
  app.get("/api/blog-posts", async (req, res) => {
    try {
      const posts = await storage.getBlogPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch blog posts" });
    }
  });

  app.get("/api/blog-posts/recent", async (req, res) => {
    try {
      const recentPosts = await storage.getRecentPosts();
      res.json(recentPosts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch recent posts" });
    }
  });

  // Search route
  app.get("/api/search", async (req, res) => {
    try {
      const query = req.query.q as string;
      if (!query) {
        return res.status(400).json({ message: "Search query is required" });
      }
      
      const results = await storage.searchGuidesAndDestinations(query);
      res.json(results);
    } catch (error) {
      res.status(500).json({ message: "Search failed" });
    }
  });

  // Newsletter subscription (placeholder)
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      const { email } = req.body;
      if (!email) {
        return res.status(400).json({ message: "Email is required" });
      }
      
      // TODO: Implement actual newsletter subscription logic
      res.json({ message: "Successfully subscribed to newsletter" });
    } catch (error) {
      res.status(500).json({ message: "Failed to subscribe to newsletter" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
