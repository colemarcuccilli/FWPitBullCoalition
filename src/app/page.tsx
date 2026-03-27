import Link from "next/link";
import Image from "next/image";
import {
  Heart,
  Users,
  DollarSign,
  Calendar,
  ArrowRight,
  Sparkles,
  Star,
  Shield,
  Dog,
  Mail,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { HeroParticles } from "@/components/hero-particles";
import { StatsCounter } from "@/components/stats-counter";
import { getDogs, getEvents, getContent } from "@/lib/data";
import type { Dog as DogType } from "@/lib/data";

export const dynamic = "force-dynamic";

// ---------------------------------------------------------------------------
// Paw print SVG watermark
// ---------------------------------------------------------------------------
function PawWatermark() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      className="pointer-events-none absolute right-[-4rem] bottom-[-4rem] w-[36rem] opacity-[0.04] text-[#116dff]"
      fill="currentColor"
    >
      {/* Main pad */}
      <ellipse cx="100" cy="140" rx="42" ry="36" />
      {/* Toes */}
      <ellipse cx="54" cy="98" rx="18" ry="22" transform="rotate(-15 54 98)" />
      <ellipse cx="82" cy="74" rx="16" ry="20" transform="rotate(-5 82 74)" />
      <ellipse
        cx="118"
        cy="74"
        rx="16"
        ry="20"
        transform="rotate(5 118 74)"
      />
      <ellipse
        cx="146"
        cy="98"
        rx="18"
        ry="22"
        transform="rotate(15 146 98)"
      />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Dog placeholder card
// ---------------------------------------------------------------------------

const accentStyles: Record<string, { border: string; text: string; btn: string }> = {
  cyan: {
    border: "border-[#116dff]/50",
    text: "text-[#116dff]",
    btn: "border-[#116dff]/60 text-[#116dff] hover:bg-[#116dff]/15",
  },
  pink: {
    border: "border-[#EE610E]/50",
    text: "text-[#EE610E]",
    btn: "border-[#EE610E]/60 text-[#EE610E] hover:bg-[#EE610E]/15",
  },
  purple: {
    border: "border-[#116dff]/50",
    text: "text-[#116dff]",
    btn: "border-[#116dff]/60 text-[#116dff] hover:bg-[#116dff]/15",
  },
  green: {
    border: "border-[#116dff]/50",
    text: "text-[#116dff]",
    btn: "border-[#116dff]/60 text-[#116dff] hover:bg-[#116dff]/15",
  },
  orange: {
    border: "border-[#EE610E]/50",
    text: "text-[#EE610E]",
    btn: "border-[#EE610E]/60 text-[#EE610E] hover:bg-[#EE610E]/15",
  },
};

function DogCard({ dog }: { dog: DogType }) {
  const styles = accentStyles[dog.accent] ?? accentStyles.cyan;
  return (
    <div
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${styles.border}`}
    >
      {/* Image or gradient placeholder */}
      <div
        className={`relative flex h-48 items-center justify-center bg-gradient-to-br ${dog.gradient} overflow-hidden`}
      >
        {dog.image ? (
          <img
            src={dog.image}
            alt={dog.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <Dog
            className={`h-20 w-20 opacity-40 transition-opacity group-hover:opacity-60 ${styles.text}`}
          />
        )}
        <Badge
          className={`absolute top-3 right-3 border bg-white/90 text-xs ${styles.border} ${styles.text}`}
        >
          {dog.age}
        </Badge>
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className={`text-xl font-bold tracking-wide ${styles.text}`}>
          {dog.name}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {dog.description}
        </p>
        <Link href="/adopt" className="mt-auto w-full">
          <Button
            variant="outline"
            size="sm"
            className={`w-full ${styles.btn}`}
          >
            Meet Me <ArrowRight className="ml-1 h-3 w-3" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page (Server Component)
// ---------------------------------------------------------------------------
export default function HomePage() {
  const content = getContent();
  const featuredDogs = getDogs()
    .filter((d) => d.featured && d.status === "available")
    .slice(0, 6);
  const featuredEvent = getEvents().find((e) => e.featured && e.status === "upcoming") ?? null;

  return (
    <div className="flex flex-col">
      {/* ------------------------------------------------------------------ */}
      {/* HERO                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
        {/* Brand gradient hero background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#232323] via-[#1a1a2e] to-[#0d1b3e]"
        />
        {/* Radial glows — brand orange + blue */}
        <div
          aria-hidden="true"
          className="absolute top-[-10%] left-[-10%] h-[60vw] w-[60vw] rounded-full bg-[#EE610E]/15 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[-10%] right-[-10%] h-[60vw] w-[60vw] rounded-full bg-[#116dff]/15 blur-3xl"
        />
        {/* Grid overlay */}
        <div aria-hidden="true" className="absolute inset-0 grid-bg opacity-60" />

        {/* Floating particles (client component) */}
        <HeroParticles />

        {/* Paw watermark */}
        <PawWatermark />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center gap-8 px-6 text-center">
          <div className="flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white">
            <Sparkles className="h-4 w-4" />
            Fort Wayne Pit Bull Coalition
            <Sparkles className="h-4 w-4" />
          </div>

          <h1
            className="max-w-5xl text-5xl font-extrabold uppercase leading-tight tracking-tighter sm:text-7xl lg:text-8xl text-white drop-shadow-lg"
          >
            {content.hero.title1}
            <br />
            <span className="text-white/90">
              {content.hero.title2}
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            {content.hero.subtitle}
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href="/adopt">
              <Button
                size="lg"
                className="group relative overflow-hidden rounded-full bg-[#116dff] px-8 py-6 text-white font-bold text-base hover:bg-[#116dff]/90 shadow-lg transition-all duration-300 hover:scale-105"
                style={{ boxShadow: "0 0 30px rgba(17,109,255,0.4)" }}
              >
                <Dog className="mr-2 h-5 w-5" />
                Adopt a Pit Bull
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>

            <Link href="/donate">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-[#EE610E] bg-[#EE610E] px-8 py-6 text-white font-semibold text-base hover:bg-[#EE610E]/90 transition-all duration-300 hover:scale-105 shadow-md"
                style={{ boxShadow: "0 0 30px rgba(238,97,14,0.3)" }}
              >
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Button>
            </Link>
          </div>

          {/* Scroll indicator */}
          <div className="mt-8 flex flex-col items-center gap-2 text-white/70">
            <p className="text-xs uppercase tracking-widest">Scroll to explore</p>
            <div className="h-10 w-[2px] rounded-full bg-gradient-to-b from-white/60 to-transparent" />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* MISSION                                                             */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative py-16 px-6 overflow-hidden">
        {/* Pitbull photo mosaic backdrop */}
        <div className="absolute inset-0 grid grid-cols-3" aria-hidden="true">
          {["/assets/pitbull-1.avif", "/assets/pitbull-2.avif", "/assets/pitbull-3.avif"].map((src, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover"
                sizes="33vw"
              />
            </div>
          ))}
        </div>
        {/* Dark overlay so text is legible */}
        <div className="absolute inset-0 bg-[#232323]/80 backdrop-blur-sm" aria-hidden="true" />
        {/* Brand color bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-[3px] gradient-border" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-10 flex items-center gap-3">
            <Shield className="h-6 w-6 text-[#EE610E]" />
            <span className="text-sm font-medium uppercase tracking-widest text-[#EE610E]">
              Our Purpose
            </span>
          </div>

          <h2 className="mb-8 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {content.mission.heading.replace("FWPBC?", "").trim()}{" "}
            <span
              className="text-[#EE610E]"
              style={{ textShadow: "0 0 20px rgba(238,97,14,0.6)" }}
            >
              FWPBC?
            </span>
          </h2>

          {/* Mission card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 shadow-xl p-8 sm:p-12 backdrop-blur-md">
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] gradient-border" />

            <p className="text-xl leading-relaxed text-white/90 sm:text-2xl">
              {content.mission.text}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Link href="/about">
                <Button
                  variant="outline"
                  className="rounded-full border-[#EE610E]/60 text-white bg-[#EE610E]/20 hover:bg-[#EE610E]/40 hover:border-[#EE610E]"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* STATS                                                               */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 px-6 bg-gradient-to-r from-[#EE610E]/5 via-[#116dff]/5 to-[#EE610E]/5">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#116dff]/30 bg-[#116dff]/08 px-4 py-2 text-sm text-[#116dff]">
              <Star className="h-4 w-4" />
              Impact by the Numbers
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Making a Real{" "}
              <span className="text-[#116dff]">Difference</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {content.stats.map((stat) => (
              <StatsCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                color={stat.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* FEATURED DOGS                                                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 px-6 bg-white grid-bg">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 flex flex-col items-start gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#116dff]/30 bg-[#116dff]/08 px-4 py-2 text-sm text-[#116dff]">
                <Dog className="h-4 w-4" />
                Available for Adoption
              </div>
              <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Ready For Their{" "}
                <span
                  className="text-[#116dff]"
                  style={{ textShadow: "0 0 20px rgba(17,109,255,0.4)" }}
                >
                  Forever Home
                </span>
              </h2>
            </div>
            <Link href="/adopt">
              <Button
                variant="outline"
                className="shrink-0 rounded-full border-[#116dff]/50 text-[#116dff] hover:bg-[#116dff]/10"
              >
                View All Dogs <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDogs.map((dog) => (
              <DogCard key={dog.id} dog={dog} />
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* EVENTS                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 px-6 bg-gray-50/80">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#EE610E]/30 bg-[#EE610E]/08 px-4 py-2 text-sm text-[#EE610E]">
              <Calendar className="h-4 w-4" />
              Community Events
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Upcoming{" "}
              <span className="text-[#EE610E]">Events</span>
            </h2>
          </div>

          {/* Featured event card */}
          {featuredEvent && (
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
              {/* Top gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-[#EE610E] via-[#116dff] to-[#EE610E]" />

              <div className="flex flex-col gap-8 p-8 sm:flex-row sm:items-center sm:p-12">
                {/* Date badge */}
                <div
                  className="flex shrink-0 flex-col items-center justify-center rounded-2xl border border-[#EE610E]/40 bg-[#EE610E]/10 p-6 text-center min-w-[120px]"
                  style={{ boxShadow: "0 0 20px rgba(238,97,14,0.2)" }}
                >
                  <span className="text-xs font-bold uppercase tracking-widest text-[#EE610E]">
                    {featuredEvent.tag}
                  </span>
                  <span className="mt-1 text-4xl font-black text-foreground">
                    {featuredEvent.year}
                  </span>
                  <span className="mt-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {featuredEvent.day}
                  </span>
                </div>

                {/* Info */}
                <div className="flex flex-1 flex-col gap-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge className="border border-[#EE610E]/40 bg-[#EE610E]/10 text-[#EE610E]">
                      Featured Event
                    </Badge>
                    <Badge className="border border-[#116dff]/40 bg-[#116dff]/10 text-[#116dff]">
                      {featuredEvent.date}
                    </Badge>
                  </div>

                  <h3 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
                    {featuredEvent.name}
                  </h3>

                  <p className="text-base leading-relaxed text-muted-foreground max-w-xl">
                    {featuredEvent.description}
                  </p>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {featuredEvent.ticketLink ? (
                      <Link href={featuredEvent.ticketLink} target="_blank" rel="noopener noreferrer">
                        <Button
                          className="rounded-full bg-[#EE610E] font-bold text-white hover:bg-[#EE610E]/90"
                          style={{ boxShadow: "0 0 20px rgba(238,97,14,0.3)" }}
                        >
                          Get Tickets <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    ) : null}
                    <Link href="/events">
                      <Button
                        variant="outline"
                        className="rounded-full border-[#EE610E]/40 text-[#EE610E] hover:bg-[#EE610E]/10"
                      >
                        View All Events
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* HOW TO HELP                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 px-6 bg-white grid-bg">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#EE610E]/30 bg-[#EE610E]/08 px-4 py-2 text-sm text-[#EE610E]">
              <Heart className="h-4 w-4" />
              Get Involved
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              How You Can{" "}
              <span className="text-[#EE610E]">Help</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {/* Foster */}
            <Card className="group relative overflow-hidden rounded-2xl border-[#EE610E]/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#EE610E] to-transparent" />
              <CardContent className="flex flex-col gap-5 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EE610E]/40 bg-[#EE610E]/10">
                  <Heart className="h-7 w-7 text-[#EE610E]" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">Foster</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Open your home temporarily to a dog in need. Fostering saves
                    lives and helps dogs learn the skills they need to thrive in
                    a family.
                  </p>
                </div>
                <Link href="/volunteer" className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-[#EE610E]/50 text-[#EE610E] hover:bg-[#EE610E]/15"
                  >
                    Become a Foster <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Volunteer */}
            <Card className="group relative overflow-hidden rounded-2xl border-[#116dff]/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#116dff] to-transparent" />
              <CardContent className="flex flex-col gap-5 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#116dff]/40 bg-[#116dff]/10">
                  <Users className="h-7 w-7 text-[#116dff]" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">Volunteer</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Give your time and talent to help our mission. From events to
                    outreach and transport, there are countless ways to make an
                    impact.
                  </p>
                </div>
                <Link href="/volunteer" className="mt-auto">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-[#116dff]/50 text-[#116dff] hover:bg-[#116dff]/15"
                  >
                    Join the Team <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Donate */}
            <Card className="group relative overflow-hidden rounded-2xl border-[#116dff]/40 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#116dff] to-transparent" />
              <CardContent className="flex flex-col gap-5 p-8">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#116dff]/40 bg-[#116dff]/10">
                  <DollarSign className="h-7 w-7 text-[#116dff]" />
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold text-foreground">Donate</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Your financial support funds medical care, education
                    programs, and community outreach for Pit Bulls across
                    Northern Indiana.
                  </p>
                </div>
                <Link href="/donate" className="mt-auto">
                  <Button
                    className="w-full rounded-full bg-[#116dff] font-bold text-white hover:bg-[#116dff]/90"
                  >
                    Donate Now <ArrowRight className="ml-1 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* PARTNERS                                                            */}
      {/* ------------------------------------------------------------------ */}
      <section className="py-16 px-6 bg-gray-50/80">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#116dff]/30 bg-[#116dff]/8 px-4 py-2 text-sm text-[#116dff]">
              <Star className="h-4 w-4" />
              Community Partners
            </div>
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Supported By{" "}
              <span className="text-[#116dff]">Partners</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              We are grateful for the organizations that stand with us.
            </p>
          </div>

          {/* Partner cards — horizontal scroll on mobile */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {content.partners.map((partner) => (
              <div
                key={partner.name}
                className="flex min-w-[220px] flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-white shadow-sm p-6 text-center transition-all duration-300 hover:border-[#116dff]/40 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              >
                <span className="text-4xl">{partner.icon}</span>
                <div>
                  <p className="font-bold text-foreground text-sm">{partner.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* NEWSLETTER / JOIN THE PACK CTA                                      */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative overflow-hidden py-20 px-6">
        {/* Gradient background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-[#232323] via-[#1a1a2e] to-[#0d1b3e]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 grid-bg opacity-40"
        />
        {/* Glow blobs */}
        <div
          aria-hidden="true"
          className="absolute top-[-20%] left-[-20%] h-[80vw] w-[80vw] rounded-full bg-[#EE610E]/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="absolute bottom-[-20%] right-[-20%] h-[80vw] w-[80vw] rounded-full bg-[#116dff]/10 blur-3xl"
        />
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-[2px] gradient-border" />

        <div className="relative z-10 mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white">
            <Mail className="h-4 w-4" />
            Stay Connected
          </div>

          <h2 className="mb-6 text-5xl font-extrabold uppercase tracking-tight text-white sm:text-6xl">
            Join The{" "}
            <span className="text-[#EE610E]">Pack</span>
          </h2>

          <p className="mb-10 text-lg leading-relaxed text-white/80">
            Get updates on adoptable dogs, upcoming events, and ways to help
            delivered right to your inbox.
          </p>

          {/* Email form (static placeholder — hook up to a server action or form provider) */}
          <form className="flex flex-col gap-4 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-full border border-white/30 bg-white/15 px-6 py-3 text-white placeholder:text-white/60 outline-none focus:border-white/60 focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-sm"
            />
            <Button
              type="submit"
              className="shrink-0 rounded-full bg-[#EE610E] px-8 py-3 font-bold text-white hover:bg-[#EE610E]/90 shadow-md transition-all duration-300 hover:scale-105"
            >
              Subscribe
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </form>

          <p className="mt-4 text-xs text-white/60">
            No spam, ever. Unsubscribe at any time.
          </p>
        </div>
      </section>
    </div>
  );
}
