import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Compass, Map, Sparkles } from "lucide-react";

const products = [
  {
    title: "Japan Complete Travel Guide",
    description:
      "Japan Complete Travel Guide Coming Soon",
    badge: "Coming Soon",
    cta: "Coming Soon",
    accent: "from-[#8FB3C9] via-[#D5E3E8] to-[#F3E8D6]",
    icon: Map,
  },
  {
    title: "Turkey Complete Travel Guide",
    description:
      "Turkey Complete Travel Guide Coming Soon",
    badge: "Coming Soon",
    cta: "Notify Me Soon",
    accent: "from-[#D98B75] via-[#F3E8D6] to-[#D8D9B8]",
    icon: Compass,
  },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-cream">
      <Header />

      <main className="container mx-auto px-4 py-12">
        <section className="botanical-card mb-16 overflow-hidden rounded-[2rem]">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="px-8 py-12 md:px-12 md:py-16">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-warm-beige px-4 py-2 text-sm font-lato font-semibold text-earth-brown">
                <Sparkles className="h-4 w-4 text-terracotta-clay" />
                Mina on the Map Shop Preview
              </div>
              <h1 className="font-lato text-4xl font-black text-earth-brown md:text-6xl">
                Products
              </h1>
              <p className="mt-6 max-w-2xl font-merriweather text-lg leading-relaxed text-gray-700 md:text-xl">
                A preview of premium downloadable travel guides that are in progress for Mina On The Map.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  className="rounded-full border-sandy-tan px-6 py-6 font-lato font-semibold text-earth-brown hover:bg-warm-beige"
                >
                  Guide Collection Preview
                </Button>
              </div>
            </div>

            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden bg-earth-brown px-8 py-12 text-white">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_55%)]" />
              <div className="absolute -right-12 top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-[#1F5F9F]/25 blur-3xl" />
              <div className="relative w-full max-w-sm rounded-[2rem] border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-full bg-white/15 px-3 py-1 font-lato text-xs font-bold uppercase tracking-[0.2em] text-white/85">
                    Curated Picks
                  </span>
                  <Sparkles className="h-5 w-5 text-[#E1C44A]" />
                </div>
                <div className="rounded-[1.5rem] bg-gradient-to-br from-white/20 via-white/10 to-transparent p-6">
                  <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-3xl bg-white text-earth-brown shadow-lg">
                    <Map className="h-10 w-10" />
                  </div>
                  <p className="font-lato text-2xl font-bold">Complete travel guides</p>
                  <p className="mt-3 font-merriweather text-sm leading-7 text-white/85">
                    Premium downloadable guide products are being prepared in the new botanical travel collection.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-lato text-sm font-bold uppercase tracking-[0.18em] text-terracotta-clay">
                Launching Soon
              </p>
              <h2 className="mt-3 font-lato text-3xl font-bold text-earth-brown md:text-4xl">
                Coming soon travel guides
              </h2>
            </div>
            <p className="max-w-2xl font-merriweather text-gray-600">
              These guide cards are styled as premium products but kept inactive until the downloadable guides are ready.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {products.map((product) => {
              const Icon = product.icon;

              return (
                <Card
                  key={product.title}
                  className="botanical-card overflow-hidden rounded-[1.75rem] border-0 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`relative flex h-64 items-center justify-center bg-gradient-to-br ${product.accent}`}
                  >
                    <div className="absolute inset-x-8 top-8 flex items-center justify-between">
                      <Badge className="rounded-full border border-[#F3E8D6] bg-white/80 px-3 py-1 font-lato text-xs font-bold uppercase tracking-[0.18em] text-earth-brown shadow-sm">
                        {product.badge}
                      </Badge>
                      <Sparkles className="h-4 w-4 text-earth-brown/70" />
                    </div>
                    <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-white shadow-xl">
                      <Icon className="h-12 w-12 text-ocean-blue" />
                    </div>
                    <div className="absolute bottom-8 left-8 right-8 rounded-3xl border border-white/70 bg-white/80 px-4 py-3 backdrop-blur-sm">
                      <p className="font-merriweather text-sm text-gray-600">
                        Premium downloadable guide
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
                    <span className="font-lato text-sm font-semibold uppercase tracking-[0.18em] text-terracotta-clay">
                      Guide preview
                    </span>
                    <Button
                      disabled
                      className="rounded-full bg-earth-brown/80 px-5 font-lato font-semibold text-white opacity-100 hover:bg-earth-brown/80 disabled:cursor-default disabled:opacity-100"
                    >
                      {product.cta}
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
