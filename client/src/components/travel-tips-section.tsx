import { CheckCircle, Star, Lightbulb, MapPin } from "lucide-react";

export default function TravelTipsSection() {
  const travelTips = [
    "Pack light and smart - bring versatile clothing pieces",
    "Always have backup payment methods and documents",
    "Learn basic phrases in the local language",
    "Book accommodations with free cancellation",
  ];

  const hiddenGems = [
    "Faroe Islands - Nordic paradise with dramatic cliffs",
    "Raja Ampat, Indonesia - Underwater wonderland",
    "Socotra Island, Yemen - Alien-like landscapes",
    "Lofoten Islands, Norway - Arctic circle beauty",
  ];

  return (
    <section className="mb-16">
      <h2 className="section-title mb-8 text-center font-lato text-3xl font-bold">Travel Tips & Must-See Spots</h2>
      
      <div className="sage-panel rounded-2xl p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-lato font-bold text-xl text-earth-brown mb-4 flex items-center">
              <Lightbulb className="mr-2 h-5 w-5 text-terracotta-clay" />
              Pro Travel Tips
            </h3>
            <ul className="space-y-3 font-merriweather">
              {travelTips.map((tip, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="text-teal-primary mr-3 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-lato font-bold text-xl text-earth-brown mb-4 flex items-center">
              <MapPin className="mr-2 h-5 w-5 text-ocean-blue" />
              Must-See Hidden Gems
            </h3>
            <ul className="space-y-3 font-merriweather">
              {hiddenGems.map((gem, index) => (
                <li key={index} className="flex items-start">
                  <Star className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-[#E1C44A]" />
                  <span>{gem}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
