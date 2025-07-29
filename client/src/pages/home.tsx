import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturedGuide from "@/components/featured-guide";
import TravelGuidesGrid from "@/components/travel-guides-grid";
import DestinationsSection from "@/components/destinations-section";
import TravelTipsSection from "@/components/travel-tips-section";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-dark-brown font-merriweather">
      <Header />
      <HeroSection />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          <main className="lg:w-2/3">
            <FeaturedGuide />
            <TravelGuidesGrid />
            <DestinationsSection />
            <TravelTipsSection />
          </main>
          
          <Sidebar />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
