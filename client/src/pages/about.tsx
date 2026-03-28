import Header from "@/components/header";
import Footer from "@/components/footer";
import AppearanceSettings from "@/components/appearance-settings";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Camera, Heart, Compass } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-cream-light">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="mb-8">
            <img 
              src="/mina-logo.png" 
              alt="Mina on the Map Logo" 
              className="w-40 h-40 mx-auto mb-6"
            />
          </div>
          <h1 className="font-lato font-black text-4xl md:text-6xl text-earth-brown mb-6">
            About Mina
          </h1>
          <p className="font-merriweather text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Hi, I'm Mina! I'm a passionate traveler, storyteller, and adventure seeker dedicated to 
            inspiring others to explore the world with curiosity and wonder.
          </p>
        </section>

        {/* About Content */}
        <section className="mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/mina-sf-photo.jpg" 
                alt="Mina in San Francisco" 
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="font-lato font-bold text-3xl text-earth-brown mb-6">My Story</h2>
              <div className="space-y-4 font-merriweather text-gray-700 leading-relaxed">
                <p>
                  What started as a solo backpacking trip through Europe has turned into a lifelong passion 
                  for discovering the world's hidden gems and sharing them with fellow adventurers.
                </p>
                <p>
                  Over the past decade, I've explored over 50 countries, lived with local families, 
                  learned new languages, and collected countless stories that have shaped who I am today.
                </p>
                <p>
                  Through Mina on the Map, I want to show you that travel isn't just about checking 
                  destinations off a list—it's about connecting with people, understanding different 
                  cultures, and growing as a person along the way.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="font-lato font-bold text-3xl text-earth-brown mb-12 text-center">What Drives Me</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-white rounded-xl shadow-lg text-center p-8">
              <div className="w-16 h-16 bg-teal-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Compass className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-lato font-bold text-xl text-earth-brown mb-3">Authentic Experiences</h3>
              <p className="font-merriweather text-gray-600">Seeking genuine connections and real cultural immersion beyond tourist attractions.</p>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg text-center p-8">
              <div className="w-16 h-16 bg-teal-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-lato font-bold text-xl text-earth-brown mb-3">Responsible Travel</h3>
              <p className="font-merriweather text-gray-600">Supporting local communities and traveling sustainably to preserve our planet.</p>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg text-center p-8">
              <div className="w-16 h-16 bg-teal-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-lato font-bold text-xl text-earth-brown mb-3">Visual Storytelling</h3>
              <p className="font-merriweather text-gray-600">Capturing moments that inspire others to embark on their own adventures.</p>
            </Card>

            <Card className="bg-white rounded-xl shadow-lg text-center p-8">
              <div className="w-16 h-16 bg-teal-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-lato font-bold text-xl text-earth-brown mb-3">Hidden Gems</h3>
              <p className="font-merriweather text-gray-600">Discovering off-the-beaten-path places that create unforgettable memories.</p>
            </Card>
          </div>
        </section>

        {/* Stats */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <h2 className="font-lato font-bold text-3xl text-earth-brown mb-8 text-center">My Journey in Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-lato font-black text-teal-primary mb-2">50+</div>
                <div className="font-merriweather text-gray-600">Countries Explored</div>
              </div>
              <div>
                <div className="text-4xl font-lato font-black text-teal-primary mb-2">200+</div>
                <div className="font-merriweather text-gray-600">Cities Visited</div>
              </div>
              <div>
                <div className="text-4xl font-lato font-black text-teal-primary mb-2">10</div>
                <div className="font-merriweather text-gray-600">Years Traveling</div>
              </div>
              <div>
                <div className="text-4xl font-lato font-black text-teal-primary mb-2">∞</div>
                <div className="font-merriweather text-gray-600">Memories Made</div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <h2 className="font-lato font-bold text-3xl text-earth-brown">
                Preferences
              </h2>
              <p className="mt-3 font-merriweather text-gray-600">
                Personalize how the site looks while keeping Mina&apos;s travel style intact.
              </p>
            </div>
            <AppearanceSettings />
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-teal-primary text-white rounded-2xl p-12">
          <h2 className="font-lato font-bold text-3xl mb-4">Let's Explore Together</h2>
          <p className="font-merriweather text-lg mb-8 max-w-2xl mx-auto">
            Have a question about a destination? Want travel advice? Or just want to share your own adventure? 
            I'd love to hear from you!
          </p>
          <button className="bg-white text-teal-primary px-8 py-4 rounded-full font-lato font-semibold hover:bg-gray-100 transition-colors">
            Get in Touch
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
