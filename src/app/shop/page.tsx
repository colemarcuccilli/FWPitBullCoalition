import Link from "next/link";
import {
  ShoppingBag,
  Heart,
  Star,
  ArrowRight,
  Tag,
  Package,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Shop | Fort Wayne Pit Bull Coalition",
  description:
    "Shop FWPBC merchandise. All proceeds support pit bulls in need in Fort Wayne, Indiana.",
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const products = [
  {
    name: "FWPBC Classic Tee",
    category: "Apparel",
    price: "$25.00",
    desc: "Soft, comfortable unisex tee featuring the FWPBC logo. Show your support everywhere you go.",
    gradient: "from-[oklch(0.85_0.2_195/0.3)] to-[oklch(0.7_0.25_300/0.3)]",
    accent: "cyan",
    badge: "Best Seller",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    name: "Pit Bull Pride Hoodie",
    category: "Apparel",
    price: "$45.00",
    desc: "Stay warm and spread awareness with this cozy hoodie. Perfect for chilly walk days with your pup.",
    gradient: "from-[oklch(0.7_0.25_300/0.3)] to-[oklch(0.75_0.25_350/0.3)]",
    accent: "purple",
    badge: "Fan Favorite",
    sizes: ["S", "M", "L", "XL", "2XL"],
  },
  {
    name: "Sticker Pack",
    category: "Accessories",
    price: "$10.00",
    desc: "5-pack of waterproof vinyl stickers. Slap them on your water bottle, laptop, or car — spread the love!",
    gradient: "from-[oklch(0.75_0.25_350/0.3)] to-[oklch(0.85_0.2_195/0.3)]",
    accent: "pink",
    badge: "Great Gift",
    sizes: null,
  },
  {
    name: "FWPBC Coffee Mug",
    category: "Drinkware",
    price: "$18.00",
    desc: "Start every morning with pit bull advocacy. 11 oz ceramic mug with the FWPBC logo.",
    gradient: "from-[oklch(0.8_0.15_150/0.25)] to-[oklch(0.85_0.2_195/0.25)]",
    accent: "cyan",
    badge: null,
    sizes: null,
  },
  {
    name: "Dog Bandana",
    category: "Accessories",
    price: "$12.00",
    desc: "Let your pup rep the coalition! Soft fabric bandana in multiple sizes. Perfect for events.",
    gradient: "from-[oklch(0.85_0.2_80/0.2)] to-[oklch(0.75_0.25_350/0.2)]",
    accent: "pink",
    badge: "Dog Approved",
    sizes: ["S", "M", "L"],
  },
  {
    name: "Advocacy Tote Bag",
    category: "Accessories",
    price: "$20.00",
    desc: "Heavy-duty canvas tote printed with our mission statement. Great for farmers markets, the grocery run, or beach days.",
    gradient: "from-[oklch(0.7_0.25_300/0.2)] to-[oklch(0.8_0.15_150/0.2)]",
    accent: "purple",
    badge: null,
    sizes: null,
  },
];

const colorMap: Record<string, { text: string; border: string; badge: string; bg: string; btn: string }> = {
  cyan: {
    text: "text-[oklch(0.85_0.2_195)]",
    border: "border-[oklch(0.85_0.2_195/0.4)]",
    badge: "bg-[oklch(0.85_0.2_195/0.1)] text-[oklch(0.85_0.2_195)] border-[oklch(0.85_0.2_195/0.3)]",
    bg: "bg-[oklch(0.85_0.2_195/0.08)]",
    btn: "border-[oklch(0.85_0.2_195/0.5)] text-[oklch(0.85_0.2_195)] hover:bg-[oklch(0.85_0.2_195/0.15)]",
  },
  purple: {
    text: "text-[oklch(0.7_0.25_300)]",
    border: "border-[oklch(0.7_0.25_300/0.4)]",
    badge: "bg-[oklch(0.7_0.25_300/0.1)] text-[oklch(0.7_0.25_300)] border-[oklch(0.7_0.25_300/0.3)]",
    bg: "bg-[oklch(0.7_0.25_300/0.08)]",
    btn: "border-[oklch(0.7_0.25_300/0.5)] text-[oklch(0.7_0.25_300)] hover:bg-[oklch(0.7_0.25_300/0.15)]",
  },
  pink: {
    text: "text-[oklch(0.75_0.25_350)]",
    border: "border-[oklch(0.75_0.25_350/0.4)]",
    badge: "bg-[oklch(0.75_0.25_350/0.1)] text-[oklch(0.75_0.25_350)] border-[oklch(0.75_0.25_350/0.3)]",
    bg: "bg-[oklch(0.75_0.25_350/0.08)]",
    btn: "border-[oklch(0.75_0.25_350/0.5)] text-[oklch(0.75_0.25_350)] hover:bg-[oklch(0.75_0.25_350/0.15)]",
  },
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function ShopPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-[oklch(0.85_0.2_195/0.06)] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[oklch(0.75_0.25_350/0.05)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-6 border-[oklch(0.85_0.2_195/0.4)] bg-[oklch(0.85_0.2_195/0.08)] text-[oklch(0.85_0.2_195)] px-4 py-1.5 text-xs tracking-widest uppercase"
          >
            <ShoppingBag className="mr-1.5 h-3 w-3" />
            Merch & More
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
            <span className="text-[oklch(0.85_0.2_195)] text-glow-cyan">FWPBC</span>{" "}
            Shop
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-foreground/70 md:text-xl max-w-2xl mx-auto">
            Wear your love for pit bulls proudly. Every purchase directly supports our
            rescue, education, and advocacy programs.
          </p>

          {/* Notice */}
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-[oklch(0.75_0.25_350/0.3)] bg-[oklch(0.75_0.25_350/0.08)] px-5 py-2 text-sm text-[oklch(0.75_0.25_350)]">
            <Heart className="h-4 w-4" />
            All proceeds support pit bulls in need
          </div>
        </div>
      </section>

      {/* ── Products Grid ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.85_0.2_195)] mb-1">
                Available Items
              </p>
              <h2 className="text-2xl font-bold text-foreground">
                Shop the <span className="text-[oklch(0.85_0.2_195)] text-glow-cyan">Collection</span>
              </h2>
            </div>
            <Badge variant="outline" className="border-[oklch(0.85_0.2_195/0.3)] bg-[oklch(0.85_0.2_195/0.05)] text-foreground/60 text-xs">
              <Package className="mr-1.5 h-3 w-3 text-[oklch(0.85_0.2_195)]" />
              {products.length} Items
            </Badge>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => {
              const c = colorMap[product.accent];
              return (
                <Card
                  key={product.name}
                  className="group relative overflow-hidden border-gray-200 bg-white shadow-sm hover:border-[oklch(0.85_0.2_195/0.5)] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Product image area */}
                  <div className={`relative h-52 w-full bg-gradient-to-br ${product.gradient} flex flex-col items-center justify-center overflow-hidden`}>
                    <ShoppingBag className={`h-16 w-16 ${c.text} opacity-40`} />
                    <p className={`mt-2 text-xs font-mono ${c.text} opacity-60`}>{product.category}</p>
                    <div className="absolute inset-0 grid-bg opacity-20" />

                    {/* Badge overlay */}
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <Badge variant="outline" className={`text-[10px] ${c.badge}`}>
                          <Star className="mr-1 h-2.5 w-2.5" />
                          {product.badge}
                        </Badge>
                      </div>
                    )}

                    {/* Price tag */}
                    <div className="absolute top-3 right-3">
                      <div className={`flex items-center gap-1 rounded-lg border px-2.5 py-1 text-sm font-bold backdrop-blur-sm ${c.badge}`}>
                        <Tag className="h-3 w-3" />
                        {product.price}
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-5">
                    <h3 className={`text-base font-bold mb-1 ${c.text}`}>{product.name}</h3>
                    <p className="text-xs text-foreground/50 mb-3">{product.category}</p>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-4">{product.desc}</p>

                    {/* Size selector placeholder */}
                    {product.sizes && (
                      <>
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {product.sizes.map((size) => (
                            <button
                              key={size}
                              className={`h-7 w-9 rounded border text-xs font-medium transition-colors hover:${c.bg} ${c.border} text-foreground/60 hover:${c.text}`}
                            >
                              {size}
                            </button>
                          ))}
                        </div>
                        <Separator className="mb-4 bg-foreground/10" />
                      </>
                    )}

                    <Button
                      size="sm"
                      variant="ghost"
                      className={`w-full border ${c.btn} font-semibold text-xs`}
                    >
                      <ShoppingBag className="mr-1.5 h-3.5 w-3.5" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Mission notice ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-pink-50 to-purple-50 p-8 text-center shadow-md">
            <Heart className="mx-auto mb-4 h-10 w-10 text-[oklch(0.75_0.25_350/0.7)]" />
            <h2 className="text-xl font-bold text-foreground mb-3">
              Shopping with Purpose
            </h2>
            <p className="text-foreground/70 text-sm leading-relaxed max-w-2xl mx-auto mb-6">
              When you buy from the FWPBC shop, 100% of the proceeds go directly toward
              our programs — emergency vet care, foster support, education events, and
              advocacy resources. Thank you for making a difference with every purchase.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate">
                <Button className="bg-[oklch(0.75_0.25_350/0.15)] border border-[oklch(0.75_0.25_350/0.4)] text-[oklch(0.75_0.25_350)] hover:bg-[oklch(0.75_0.25_350/0.25)] glow-pink" variant="ghost">
                  Make a Direct Donation
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button className="bg-[oklch(0.85_0.2_195/0.1)] border border-[oklch(0.85_0.2_195/0.3)] text-[oklch(0.85_0.2_195)] hover:bg-[oklch(0.85_0.2_195/0.2)]" variant="ghost">
                  Volunteer With Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
