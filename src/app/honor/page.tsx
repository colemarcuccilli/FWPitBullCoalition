import Link from "next/link";
import { Heart, Star, Feather, PlusCircle, Dog } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Honor Page | Fort Wayne Pit Bull Coalition",
  description:
    "In loving memory of the dogs who touched our hearts. A tribute to the pit bulls we have loved and lost.",
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const memorials = [
  { name: "Butch", years: "2010 – 2022", note: "Forever our gentle giant. You showed us what pure love looks like.", color: "purple" },
  { name: "Rosie", years: "2015 – 2023", note: "Your smile could light up any room. We miss you every day, sweet girl.", color: "pink" },
  { name: "Tank", years: "2009 – 2021", note: "Twelve years of loyalty, laughter, and the best cuddles. Sleep well, buddy.", color: "purple" },
  { name: "Honey", years: "2017 – 2024", note: "You came to us broken and left us whole. Thank you for trusting us.", color: "pink" },
  { name: "Biscuit", years: "2013 – 2023", note: "The softest soul in the roughest-looking body. Heaven gained a good boy.", color: "purple" },
  { name: "Pearl", years: "2016 – 2024", note: "Our little fighter who never gave up. You fought harder than we ever could.", color: "pink" },
  { name: "Diesel", years: "2011 – 2022", note: "A rescue who rescued all of us in return. You will never be forgotten.", color: "purple" },
  { name: "Clover", years: "2018 – 2024", note: "Lucky to have had you for six beautiful years. Run free, sweet one.", color: "pink" },
];

const colorMap: Record<string, { text: string; border: string; badge: string; bg: string }> = {
  purple: {
    text: "text-[oklch(0.7_0.25_300)]",
    border: "border-[oklch(0.7_0.25_300/0.3)]",
    badge: "bg-[oklch(0.7_0.25_300/0.08)] text-[oklch(0.7_0.25_300)] border-[oklch(0.7_0.25_300/0.25)]",
    bg: "bg-[oklch(0.7_0.25_300/0.05)]",
  },
  pink: {
    text: "text-[oklch(0.75_0.25_350)]",
    border: "border-[oklch(0.75_0.25_350/0.3)]",
    badge: "bg-[oklch(0.75_0.25_350/0.08)] text-[oklch(0.75_0.25_350)] border-[oklch(0.75_0.25_350/0.25)]",
    bg: "bg-[oklch(0.75_0.25_350/0.05)]",
  },
};

// ---------------------------------------------------------------------------
// Page — intentionally quieter, more reverent tone
// ---------------------------------------------------------------------------
export default function HonorPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-24 md:py-32">
        {/* Softer, more subtle background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-50/60 via-transparent to-transparent" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-purple-100/40 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          {/* Soft paw icon */}
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-[oklch(0.7_0.25_300/0.2)] bg-[oklch(0.7_0.25_300/0.06)]">
            <Heart className="h-8 w-8 text-[oklch(0.7_0.25_300/0.7)]" />
          </div>

          <Badge
            variant="outline"
            className="mb-6 border-[oklch(0.7_0.25_300/0.3)] bg-[oklch(0.7_0.25_300/0.06)] text-[oklch(0.7_0.25_300/0.8)] px-4 py-1.5 text-xs tracking-widest uppercase"
          >
            <Feather className="mr-1.5 h-3 w-3" />
            Memorial Tribute
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-6xl">
            In Loving{" "}
            <span
              className="text-[oklch(0.7_0.25_300)]"
              style={{ textShadow: "0 0 20px oklch(0.7 0.25 300 / 0.3), 0 0 60px oklch(0.7 0.25 300 / 0.1)" }}
            >
              Memory
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-foreground/55 md:text-lg max-w-xl mx-auto">
            This page is dedicated to the dogs who blessed our lives and left paw prints
            on our hearts. Though they are no longer with us, they are never forgotten.
          </p>
        </div>
      </section>

      {/* ── Rainbow Bridge ────────────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-8 text-center shadow-sm">
            <Star className="mx-auto mb-4 h-8 w-8 text-[oklch(0.7_0.25_300/0.5)]" />
            <h2 className="text-lg font-semibold text-foreground/80 mb-4">The Rainbow Bridge</h2>
            <p className="text-sm text-foreground/55 leading-relaxed italic max-w-lg mx-auto">
              &ldquo;Just this side of heaven is a place called Rainbow Bridge. When an animal
              dies that has been especially close to someone here, that pet goes to Rainbow
              Bridge. There are meadows and hills for all of our special friends so they can
              run and play together. There is plenty of food, water and sunshine, and our
              friends are warm and comfortable.&rdquo;
            </p>
            <Separator className="my-6 bg-[oklch(0.7_0.25_300/0.15)]" />
            <p className="text-xs text-foreground/40 italic">
              — Author Unknown
            </p>
          </div>
        </div>
      </section>

      {/* ── Memorial Cards ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase text-foreground/40 mb-2">
              Forever in our hearts
            </p>
            <h2 className="text-2xl font-semibold text-foreground/70">
              Those We&apos;ve Loved & Lost
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {memorials.map((dog) => {
              const c = colorMap[dog.color];
              return (
                <Card
                  key={dog.name}
                  className={`group border ${c.border} bg-white shadow-sm hover:shadow-md transition-all duration-500`}
                >
                  <CardContent className="p-5">
                    {/* Photo placeholder */}
                    <div className={`relative mb-4 h-32 w-full overflow-hidden rounded-xl ${c.bg} border ${c.border} flex flex-col items-center justify-center gap-2`}>
                      <Dog className={`h-12 w-12 ${c.text} opacity-25`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/30 to-transparent" />
                    </div>

                    {/* Candle / star icon */}
                    <div className="flex items-center gap-2 mb-1">
                      <Star className={`h-3.5 w-3.5 ${c.text} opacity-60`} />
                      <h3 className={`text-base font-semibold ${c.text}`}>{dog.name}</h3>
                    </div>

                    <p className="text-xs text-foreground/40 font-mono mb-3">{dog.years}</p>

                    <p className="text-xs text-foreground/55 leading-relaxed italic">
                      &ldquo;{dog.note}&rdquo;
                    </p>

                    <Separator className="mt-4 bg-foreground/10" />
                    <p className="mt-3 text-center text-[10px] text-foreground/30 italic tracking-wide">
                      Forever in our hearts
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Add a Tribute ─────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <div className="relative overflow-hidden rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-10 text-center shadow-sm">
            <PlusCircle className="mx-auto mb-4 h-10 w-10 text-[oklch(0.7_0.25_300/0.5)]" />
            <h2 className="text-xl font-semibold text-foreground/80 mb-3">
              Add a Tribute
            </h2>
            <p className="text-foreground/55 text-sm leading-relaxed mb-8 max-w-md mx-auto">
              Would you like to add a memorial for a dog who was special to you? We welcome
              tributes for dogs from our rescue family and the wider pit bull community.
              Please reach out to us and we&apos;ll be honored to include them here.
            </p>
            <Link href="/contact">
              <Button
                variant="ghost"
                className="border border-[oklch(0.7_0.25_300/0.35)] text-[oklch(0.7_0.25_300/0.8)] hover:bg-[oklch(0.7_0.25_300/0.08)] hover:text-[oklch(0.7_0.25_300)] font-medium"
              >
                <Heart className="mr-2 h-4 w-4" />
                Submit a Tribute
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Closing note ─────────────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 pb-20">
        <div className="mx-auto max-w-2xl text-center">
          <Feather className="mx-auto mb-4 h-6 w-6 text-foreground/20" />
          <p className="text-foreground/35 text-sm leading-relaxed italic">
            Every dog on this page left this world knowing they were loved.
            That is the promise we make to every animal in our care —
            and it is the promise we carry forward in their honor.
          </p>
        </div>
      </section>
    </div>
  );
}
