import Link from "next/link";
import {
  Heart,
  Home,
  Car,
  Share2,
  DollarSign,
  Calendar,
  Clock,
  ArrowRight,
  Users,
  Star,
  Quote,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Volunteer | Fort Wayne Pit Bull Coalition",
  description:
    "Make a difference with the Fort Wayne Pit Bull Coalition. Volunteer opportunities include fostering, event help, transport, social media, and fundraising.",
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const opportunities = [
  {
    icon: Home,
    title: "Fostering",
    tagline: "The heartbeat of our rescue",
    desc: "Open your home to a dog in transition. Foster families provide love, stability, and critical insight that helps us find the perfect forever home for each dog.",
    commitment: "Flexible — days to months",
    requirements: ["Dog-friendly home", "Patience & love", "Vet communication"],
    color: "cyan",
    highlight: true,
  },
  {
    icon: Calendar,
    title: "Event Help",
    tagline: "Be the face of FWPBC",
    desc: "Assist at Pits In The Park, adoption events, fundraisers, and community outreach days. From setup to tear-down — every hand counts.",
    commitment: "4–8 hours per event",
    requirements: ["Friendly demeanor", "Reliable attendance", "Team player"],
    color: "purple",
    highlight: false,
  },
  {
    icon: Car,
    title: "Transport",
    tagline: "Every mile is a lifeline",
    desc: "Drive dogs to vet appointments, rescue pickups, adoption meet & greets, or transfer them to foster homes. Your car and your time save lives.",
    commitment: "1–4 hours per transport",
    requirements: ["Valid driver's license", "Reliable vehicle", "Crate or harness"],
    color: "pink",
    highlight: false,
  },
  {
    icon: Share2,
    title: "Social Media",
    tagline: "Pixels that save lives",
    desc: "Help us tell the stories of dogs in our care, grow our online community, and reach potential adopters through compelling content and engagement.",
    commitment: "2–5 hours per week",
    requirements: ["Social media savvy", "Good writing skills", "Eye for photos"],
    color: "cyan",
    highlight: false,
  },
  {
    icon: DollarSign,
    title: "Fundraising",
    tagline: "Fuel the mission",
    desc: "Help plan and execute fundraising campaigns — from online peer-to-peer drives to grant writing, merchandise sales, and community sponsorships.",
    commitment: "Varies by project",
    requirements: ["Organized & motivated", "Creative thinking", "Networking skills"],
    color: "purple",
    highlight: false,
  },
];

const testimonials = [
  {
    quote: "Fostering changed my life as much as it changed theirs. I've fostered seven dogs and found families for every single one — and learned something new from each of them.",
    name: "Amanda R.",
    role: "Foster Volunteer, 3 Years",
    color: "cyan",
  },
  {
    quote: "I started out helping at events and now I run our transport network. FWPBC gave me a community of people who care as deeply as I do about these dogs.",
    name: "Marcus T.",
    role: "Transport Coordinator",
    color: "purple",
  },
  {
    quote: "The social media team lets me combine my marketing background with my passion. Watching shares lead to adoptions — there's no better feeling.",
    name: "Jessica L.",
    role: "Social Media Volunteer",
    color: "pink",
  },
];

const colorMap: Record<string, { text: string; border: string; badge: string; bg: string; glow: string }> = {
  cyan: {
    text: "text-[oklch(0.85_0.2_195)]",
    border: "border-[oklch(0.85_0.2_195/0.4)]",
    badge: "bg-[oklch(0.85_0.2_195/0.1)] text-[oklch(0.85_0.2_195)] border-[oklch(0.85_0.2_195/0.3)]",
    bg: "bg-[oklch(0.85_0.2_195/0.08)]",
    glow: "glow-cyan",
  },
  purple: {
    text: "text-[oklch(0.7_0.25_300)]",
    border: "border-[oklch(0.7_0.25_300/0.4)]",
    badge: "bg-[oklch(0.7_0.25_300/0.1)] text-[oklch(0.7_0.25_300)] border-[oklch(0.7_0.25_300/0.3)]",
    bg: "bg-[oklch(0.7_0.25_300/0.08)]",
    glow: "glow-purple",
  },
  pink: {
    text: "text-[oklch(0.75_0.25_350)]",
    border: "border-[oklch(0.75_0.25_350/0.4)]",
    badge: "bg-[oklch(0.75_0.25_350/0.1)] text-[oklch(0.75_0.25_350)] border-[oklch(0.75_0.25_350/0.3)]",
    bg: "bg-[oklch(0.75_0.25_350/0.08)]",
    glow: "glow-pink",
  },
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function VolunteerPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-[oklch(0.85_0.2_195/0.06)] blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 h-64 w-64 rounded-full bg-[oklch(0.7_0.25_300/0.05)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-6 border-[oklch(0.85_0.2_195/0.4)] bg-[oklch(0.85_0.2_195/0.08)] text-[oklch(0.85_0.2_195)] px-4 py-1.5 text-xs tracking-widest uppercase"
          >
            <Users className="mr-1.5 h-3 w-3" />
            Join Our Team
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
            Make A{" "}
            <span className="text-[oklch(0.85_0.2_195)] text-glow-cyan">Difference</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-foreground/70 md:text-xl max-w-2xl mx-auto">
            FWPBC is powered entirely by volunteers. Whether you have an hour a month or
            a day a week, your time and talent can change a dog&apos;s life — and your own.
          </p>
        </div>
      </section>

      {/* ── Foster Quote Banner ──────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-r from-sky-50 to-purple-50 px-8 py-6 shadow-sm">
            <Quote className="mb-3 h-8 w-8 text-[oklch(0.85_0.2_195/0.4)]" />
            <p className="text-lg italic text-foreground/80 leading-relaxed">
              &ldquo;Our fosters are the engine that drives this rescue. Without them, there
              is no FWPBC. Every dog we save passes through the hands of a foster family —
              and we are endlessly grateful for each and every one.&rdquo;
            </p>
            <p className="mt-4 text-sm text-[oklch(0.85_0.2_195)] font-semibold">
              — FWPBC Leadership Team
            </p>
          </div>
        </div>
      </section>

      {/* ── Opportunities ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.7_0.25_300)] mb-3">
              How You Can Help
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Volunteer{" "}
              <span className="text-[oklch(0.7_0.25_300)] text-glow-purple">Opportunities</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {opportunities.map((opp) => {
              const c = colorMap[opp.color];
              const Icon = opp.icon;
              return (
                <Card
                  key={opp.title}
                  className={`group relative overflow-hidden border-gray-200 bg-white shadow-sm hover:${c.border} hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                >
                  {opp.highlight && (
                    <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[oklch(0.85_0.2_195)] to-transparent`} />
                  )}
                  <CardContent className="p-6">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border ${c.badge}`}>
                      <Icon className={`h-6 w-6 ${c.text}`} />
                    </div>

                    {opp.highlight && (
                      <Badge variant="outline" className={`mb-3 text-[10px] ${c.badge}`}>
                        <Star className="mr-1 h-2.5 w-2.5" />
                        Most Needed
                      </Badge>
                    )}

                    <h3 className={`text-lg font-bold mb-1 ${c.text}`}>{opp.title}</h3>
                    <p className="text-xs text-foreground/50 italic mb-3">{opp.tagline}</p>

                    <p className="text-sm text-foreground/70 leading-relaxed mb-4">{opp.desc}</p>

                    <Separator className="mb-4 bg-foreground/10" />

                    <div className="flex items-center gap-1.5 text-xs text-foreground/50 mb-4">
                      <Clock className={`h-3.5 w-3.5 ${c.text}`} />
                      <span className="font-medium">{opp.commitment}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {opp.requirements.map((req) => (
                        <Badge key={req} variant="outline" className="text-[10px] bg-foreground/5 border-foreground/10 text-foreground/55">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.75_0.25_350)] mb-3">
              From Our Volunteers
            </p>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Hear Their{" "}
              <span className="text-[oklch(0.75_0.25_350)]">Stories</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => {
              const c = colorMap[t.color];
              return (
                <Card
                  key={t.name}
                  className={`border ${c.border} bg-white shadow-sm`}
                >
                  <CardContent className="p-6">
                    <Quote className={`mb-4 h-6 w-6 ${c.text} opacity-60`} />
                    <p className="text-sm text-foreground/75 leading-relaxed italic mb-6">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                    <Separator className="mb-4 bg-foreground/10" />
                    <div>
                      <p className={`text-sm font-semibold ${c.text}`}>{t.name}</p>
                      <p className="text-xs text-foreground/50">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Application CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-sky-50 to-purple-50 p-10 shadow-md">
            <Heart className="mx-auto mb-4 h-10 w-10 text-[oklch(0.85_0.2_195/0.7)]" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-foreground/70 leading-relaxed mb-8 max-w-lg mx-auto">
              Fill out our volunteer application and a member of our team will reach out
              to find the perfect role for you. No experience required — just passion.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="https://www.fwpitbullcoalition.org/volunteer" target="_blank" rel="noopener noreferrer">
                <Button className="bg-[oklch(0.85_0.2_195/0.2)] border border-[oklch(0.85_0.2_195/0.5)] text-[oklch(0.85_0.2_195)] hover:bg-[oklch(0.85_0.2_195/0.3)] glow-cyan font-semibold" variant="ghost">
                  Volunteer Application
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-foreground/5 border border-foreground/20 text-foreground/70 hover:bg-foreground/10 hover:text-foreground" variant="ghost">
                  Ask Us a Question
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
