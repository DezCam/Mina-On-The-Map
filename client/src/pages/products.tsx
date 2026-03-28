import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Compass, Map, ShoppingBag, Sparkles } from "lucide-react";

const products = [
  {
    title: "City Weekend Guide Kit",
    description:
      "A curated planning bundle for quick getaways with neighborhood notes, packing prompts, and itinerary starters.",
    cta: "View Product",
    accent: "from-[#ffd7bd] via-[#fff0e4] to-white",
    icon: Map,
  },
  {
    title: "Travel Creator Essentials",
    description:
      "A placeholder collection for the tools Mina reaches for when documenting routes, stories, and favorite finds on the road.",
    cta: "Coming Soon",
    accent: "from-[#bfe8e4] via-[#ecfaf8] to-white",
    icon: Compass,
  },
  {
    title: "Favorite Finds Collection",
    description:
      "A future roundup of travel-inspired staples, thoughtful gifts, and practical products worth packing or gifting.",
    cta: "Coming Soon",
    accent: "from-[#f3dfb6] via-[#fff8ea] to-white",
    icon: ShoppingBag,
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-cream-light">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16 overflow-hidden rounded-[2rem] bg-white shadow-lg">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="px-8 py-12 md:px-12 md:py-16">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-warm-beige px-4 py-2 text-sm font-lato font-semibold text-earth-brown">
                <Sparkles className="h-4 w-4 text-teal-primary" />
                Mina on the Map Shop Preview
              </div>
              <h1 className="font-lato text-4xl font-black text-earth-brown md:text-6xl">
                Products
              </h1>
              <p className="mt-6 max-w-2xl font-merriweather text-lg leading-relaxed text-gray-700 md:text-xl">
                Explore curated travel-inspired products, tools, and future favorites from Mina On The Map.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button className="rounded-full bg-teal-primary px-6 py-6 font-lato font-semibold text-white hover:bg-teal-light">
                  Browse Favorites
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full border-sandy-tan px-6 py-6 font-lato font-semibold text-earth-brown hover:bg-warm-beige"
                >
                  Join the Waitlist
                </Button>
              </div>
            </div>

            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-earth-brown px-8 py-12 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />
              <div className="absolute -right-12 top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-teal-light/25 blur-3xl" />
              <div className="relative w-full max-w-sm rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-3 py-1 font-lato text-xs font-bold uppercase tracking-[0.2em] text-white/85">
                    Curated Picks
                  </span>
                  <Sparkles className="h-5 w-5 text-sandy-tan" />
                </div>
                <div className="rounded-[1.5rem] bg-gradient-to-br from-white/20 via-white/10 to-transparent p-6">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-earth-brown shadow-lg">
                    <ShoppingBag className="h-10 w-10" />
                  </div>
                  <p className="font-lato text-2xl font-bold">Travel-ready essentials</p>
                  <p className="mt-3 font-merriweather text-sm leading-7 text-white/85">
                    Thoughtful guides, planning tools, and future merchandise shaped around Mina&apos;s travel voice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-lato text-sm font-bold uppercase tracking-[0.18em] text-teal-primary">
                Launching Soon
              </p>
              <h2 className="mt-3 font-lato text-3xl font-bold text-earth-brown md:text-4xl">
                Placeholder product lineup
              </h2>
            </div>
            <p className="max-w-2xl font-merriweather text-gray-600">
              These cards are wired into the site now and ready to be replaced with real product photos, descriptions, and destination-specific offers.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <Card
                  key={product.title}
                  className="overflow-hidden rounded-[1.75rem] border-0 bg-white shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`relative flex h-64 items-center justify-center bg-gradient-to-br ${product.accent}`}
                  >
                    <div className="absolute inset-x-8 top-8 flex items-center justify-between">
                      <span className="rounded-full bg-white/80 px-3 py-1 font-lato text-xs font-bold uppercase tracking-[0.18em] text-earth-brown shadow-sm">
                        Product Preview
                      </span>
                      <Sparkles className="h-4 w-4 text-earth-brown/70" />
                    </div>
                    <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-white shadow-xl">
                      <Icon className="h-12 w-12 text-teal-primary" />
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/70 bg-white/80 px-4 py-3 backdrop-blur-sm">
                      <p className="font-merriweather text-sm text-gray-600">
                        Product image placeholder
                      </p>
                    </div>
                  </div>
                  <CardHeader className="pb-4">
                    <CardTitle className="font-lato text-2xl font-bold text-earth-brown">
                      {product.title}
                    </CardTitle>
                    <CardDescription className="font-merriweather text-base leading-7 text-gray-600">
                      {product.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between gap-4">
                    <span className="font-lato text-sm font-semibold uppercase tracking-[0.18em] text-teal-primary">
                      Mina approved
                    </span>
                    <Button className="rounded-full bg-earth-brown px-5 font-lato font-semibold text-white hover:bg-dark-brown">
                      {product.cta}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
