import Header from "@/components/header";
import Footer from "@/components/footer";
import AppearanceSettings from "@/components/appearance-settings";

export default function About() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="section-title mb-6 font-lato text-4xl font-black md:text-6xl">
            About Mina
          </h1>
          <div className="mx-auto min-h-12 max-w-3xl" />
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
              <h2 className="section-title mb-6 font-lato text-3xl font-bold">My Story</h2>
              <div className="min-h-40 rounded-2xl border border-wood bg-[#F3E8D6]/60" />
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mx-auto max-w-3xl">
            <div className="mb-8 text-center">
                <h2 className="section-title font-lato text-3xl font-bold">
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
        <section className="terracotta-panel rounded-2xl p-12 text-center shadow-[0_20px_40px_rgba(183,101,60,0.22)]">
          <h2 className="font-lato font-bold text-3xl mb-4">Let's Explore Together</h2>
          <p className="font-merriweather text-lg mb-8 max-w-2xl mx-auto">
            Have a question about a destination? Want travel advice? Or just want to share your own adventure? 
            I'd love to hear from you!
          </p>
          <button className="rounded-full bg-earth-brown px-8 py-4 font-lato font-semibold text-white transition-colors hover:bg-teal-primary">
            Get in Touch
          </button>
        </section>
      </main>

      <Footer />
    </div>
  );
}
