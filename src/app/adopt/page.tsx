import Link from "next/link";
import {
  Heart,
  Dog,
  ArrowRight,
  CheckCircle2,
  FileText,
  Home,
  ClipboardList,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getDogs } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Adopt | Fort Wayne Pit Bull Coalition",
  description:
    "Find your forever friend. Browse adoptable pit bull-type dogs and learn about our adoption process at the Fort Wayne Pit Bull Coalition.",
};

const steps = [
  {
    num: "01",
    icon: ClipboardList,
    title: "Apply",
    desc: "Fill out our online adoption application so we can learn about your lifestyle and find the best match for your family.",
    color: "cyan",
  },
  {
    num: "02",
    icon: Heart,
    title: "Meet & Greet",
    desc: "Schedule a meet & greet with your potential new dog. If you have resident pets, we encourage you to bring them along!",
    color: "purple",
  },
  {
    num: "03",
    icon: Home,
    title: "Home Check",
    desc: "We do a brief, friendly home check to ensure the environment is safe and a good fit for your new family member.",
    color: "pink",
  },
  {
    num: "04",
    icon: Star,
    title: "Welcome Home",
    desc: "Congratulations! Take your new best friend home and begin your adventure together. We're here every step of the way.",
    color: "cyan",
  },
];

const colorMap: Record<string, { text: string; border: string; badge: string; bg: string }> = {
  cyan: {
    text: "text-[oklch(0.85_0.2_195)]",
    border: "border-[oklch(0.85_0.2_195/0.4)]",
    badge: "bg-[oklch(0.85_0.2_195/0.1)] text-[oklch(0.85_0.2_195)] border-[oklch(0.85_0.2_195/0.3)]",
    bg: "bg-[oklch(0.85_0.2_195/0.08)]",
  },
  purple: {
    text: "text-[oklch(0.7_0.25_300)]",
    border: "border-[oklch(0.7_0.25_300/0.4)]",
    badge: "bg-[oklch(0.7_0.25_300/0.1)] text-[oklch(0.7_0.25_300)] border-[oklch(0.7_0.25_300/0.3)]",
    bg: "bg-[oklch(0.7_0.25_300/0.08)]",
  },
  pink: {
    text: "text-[oklch(0.75_0.25_350)]",
    border: "border-[oklch(0.75_0.25_350/0.4)]",
    badge: "bg-[oklch(0.75_0.25_350/0.1)] text-[oklch(0.75_0.25_350)] border-[oklch(0.75_0.25_350/0.3)]",
    bg: "bg-[oklch(0.75_0.25_350/0.08)]",
  },
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function AdoptPage() {
  const dogs = getDogs().filter((d) => d.status === "available");

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-[oklch(0.75_0.25_350/0.06)] blur-3xl" />
          <div className="absolute bottom-1/3 left-1/3 h-64 w-64 rounded-full bg-[oklch(0.85_0.2_195/0.05)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-6 border-[oklch(0.75_0.25_350/0.4)] bg-[oklch(0.75_0.25_350/0.08)] text-[oklch(0.75_0.25_350)] px-4 py-1.5 text-xs tracking-widest uppercase"
          >
            <Heart className="mr-1.5 h-3 w-3" />
            Adoption
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-6xl">
            Find Your{" "}
            <span className="text-[oklch(0.75_0.25_350)]" style={{ textShadow: "0 0 10px oklch(0.75 0.25 350 / 0.5), 0 0 40px oklch(0.75 0.25 350 / 0.2)" }}>
              Forever Friend
            </span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-foreground/70 md:text-xl max-w-2xl mx-auto">
            Every dog here is waiting for a loving home. Our foster families know them
            best — their quirks, their joys, and the ways they&apos;ll change your life forever.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="#apply">
              <Button className="bg-[oklch(0.75_0.25_350/0.15)] border border-[oklch(0.75_0.25_350/0.5)] text-[oklch(0.75_0.25_350)] hover:bg-[oklch(0.75_0.25_350/0.25)] glow-pink font-semibold" variant="ghost">
                <FileText className="mr-2 h-4 w-4" />
                Fill Out Adoption Application
              </Button>
            </Link>
            <Link href="#foster">
              <Button className="bg-[oklch(0.85_0.2_195/0.15)] border border-[oklch(0.85_0.2_195/0.4)] text-[oklch(0.85_0.2_195)] hover:bg-[oklch(0.85_0.2_195/0.25)] glow-cyan font-semibold" variant="ghost">
                <Home className="mr-2 h-4 w-4" />
                Become a Foster
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Dog Grid ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.85_0.2_195)] mb-3">
              Available Now
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Adoptable <span className="text-[oklch(0.85_0.2_195)] text-glow-cyan">Dogs</span>
            </h2>
            <p className="mt-3 text-foreground/60 text-sm max-w-lg mx-auto">
              All dogs are spayed/neutered, vaccinated, microchipped, and living in loving
              foster homes while they wait for you.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {dogs.map((dog) => {
              const c = colorMap[dog.accent] ?? colorMap.cyan;
              return (
                <Card
                  key={dog.id}
                  className={`group relative overflow-hidden border-gray-200 bg-white shadow-sm hover:${c.border} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                >
                  {/* Image or gradient placeholder */}
                  <div className={`relative h-44 w-full bg-gradient-to-br ${dog.gradient} flex items-center justify-center overflow-hidden`}>
                    {dog.image ? (
                      <img
                        src={dog.image}
                        alt={dog.name}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <>
                        <Dog className={`h-20 w-20 ${c.text} opacity-40`} />
                        <div className="absolute inset-0 grid-bg opacity-20" />
                      </>
                    )}
                    {/* Sex badge */}
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className={`text-[10px] ${c.badge}`}>
                        {dog.sex}
                      </Badge>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className={`text-lg font-bold ${c.text}`}>{dog.name}</h3>
                      <span className="text-xs text-foreground/50">{dog.weight}</span>
                    </div>

                    <p className="text-xs text-foreground/60 mb-3">{dog.age} old</p>
                    <p className="text-xs text-foreground/70 leading-relaxed mb-4 line-clamp-3">{dog.description}</p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {dog.traits.map((t) => (
                        <Badge key={t} variant="outline" className={`text-[10px] ${c.badge}`}>
                          {t}
                        </Badge>
                      ))}
                    </div>

                    <Button
                      size="sm"
                      variant="ghost"
                      className={`w-full border ${c.border} ${c.text} hover:${c.bg} text-xs font-semibold`}
                    >
                      <Heart className="mr-1.5 h-3.5 w-3.5" />
                      Meet Me
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Adoption Process ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.7_0.25_300)] mb-3">
              How It Works
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              The Adoption{" "}
              <span className="text-[oklch(0.7_0.25_300)] text-glow-purple">Process</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => {
              const c = colorMap[step.color];
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative flex flex-col items-center text-center">
                  {/* Step number */}
                  <div className={`relative mb-4 flex h-16 w-16 items-center justify-center rounded-2xl border-2 ${c.border} ${c.bg}`}>
                    <Icon className={`h-7 w-7 ${c.text}`} />
                    <span className={`absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-bold border ${c.badge}`}>
                      {step.num}
                    </span>
                  </div>
                  <h3 className={`text-base font-bold mb-2 ${c.text}`}>{step.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Requirements list */}
          <div className="mt-14 rounded-2xl border border-gray-200 bg-white shadow-sm p-6 md:p-8">
            <h3 className="text-base font-bold text-foreground mb-4 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[oklch(0.85_0.2_195)]" />
              Adoption Requirements
            </h3>
            <div className="grid gap-2 sm:grid-cols-2">
              {[
                "Must be 21 years of age or older",
                "Landlord approval if renting (no BSL restrictions)",
                "All household members must meet the dog",
                "Resident pets should be up-to-date on vaccinations",
                "$75–$150 adoption fee (covers spay/neuter, vaccines, microchip)",
                "Agreement to return dog to FWPBC if unable to keep",
              ].map((req) => (
                <div key={req} className="flex items-start gap-2 text-sm text-foreground/70">
                  <CheckCircle2 className="h-4 w-4 shrink-0 mt-0.5 text-[oklch(0.85_0.2_195/0.6)]" />
                  {req}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Apply & Foster CTAs ───────────────────────────────────────────── */}
      <section id="apply" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Adoption Application */}
            <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.75_0.25_350/0.3)] bg-gradient-to-br from-[oklch(0.75_0.25_350/0.08)] to-[oklch(0.7_0.25_300/0.08)] p-8 glow-pink">
              <FileText className="mb-4 h-10 w-10 text-[oklch(0.75_0.25_350)]" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                Adoption Application
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                Ready to open your heart and home? Fill out our adoption application and
                let&apos;s find your perfect match.
              </p>
              <Link href="https://www.fwpitbullcoalition.org/adopt" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[oklch(0.75_0.25_350/0.2)] border border-[oklch(0.75_0.25_350/0.5)] text-[oklch(0.75_0.25_350)] hover:bg-[oklch(0.75_0.25_350/0.3)] font-semibold glow-pink" variant="ghost">
                  Fill Out Adoption Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Foster Application */}
            <div id="foster" className="relative overflow-hidden rounded-2xl border border-[oklch(0.85_0.2_195/0.3)] bg-gradient-to-br from-[oklch(0.85_0.2_195/0.08)] to-[oklch(0.7_0.25_300/0.08)] p-8 glow-cyan">
              <Home className="mb-4 h-10 w-10 text-[oklch(0.85_0.2_195)]" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                Become a Foster
              </h3>
              <p className="text-foreground/70 text-sm leading-relaxed mb-6">
                Fostering saves lives. Open your home temporarily to a dog in need and
                help them thrive while they wait for their forever family.
              </p>
              <Link href="https://www.fwpitbullcoalition.org/foster" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-[oklch(0.85_0.2_195/0.2)] border border-[oklch(0.85_0.2_195/0.5)] text-[oklch(0.85_0.2_195)] hover:bg-[oklch(0.85_0.2_195/0.3)] font-semibold glow-cyan" variant="ghost">
                  Foster Application
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
