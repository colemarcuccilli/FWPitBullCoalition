import Link from "next/link";
import {
  Heart,
  Star,
  Shield,
  Users,
  BookOpen,
  Megaphone,
  HandHeart,
  Award,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "About | Fort Wayne Pit Bull Coalition",
  description:
    "Learn about the Fort Wayne Pit Bull Coalition's mission, history, and the dedicated team behind our advocacy for pit bull-type dogs.",
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const milestones = [
  {
    year: "2012",
    title: "FWPBC Founded",
    desc: "A small group of passionate advocates came together in Fort Wayne, Indiana to stand up for misunderstood pit bull-type dogs.",
    color: "cyan",
  },
  {
    year: "2014",
    title: "First Pits In The Park",
    desc: "Our flagship annual community celebration launched, drawing hundreds of pit bull lovers and their pups for a day of education and fun.",
    color: "purple",
  },
  {
    year: "2016",
    title: "501(c)(3) Status Granted",
    desc: "FWPBC officially became a federally recognized nonprofit, opening the door to grants, partnerships, and expanded programming.",
    color: "pink",
  },
  {
    year: "2018",
    title: "Stand Up For Pits Grant",
    desc: "Received a significant grant from the Stand Up For Pits Foundation, funding outreach, education, and emergency medical care.",
    color: "cyan",
  },
  {
    year: "2021",
    title: "Low-Cost Resources Program",
    desc: "Launched our assistance program providing low-cost vet services, spay/neuter support, and owner resources to families in need.",
    color: "purple",
  },
  {
    year: "2024",
    title: "10th Annual Pits In The Park",
    desc: "Celebrated a decade of community building, rescue success stories, and continued advocacy for pit bulls across northeast Indiana.",
    color: "pink",
  },
];

const colorMap: Record<string, { dot: string; line: string; badge: string; text: string }> = {
  cyan: {
    dot: "bg-[oklch(0.85_0.2_195)] shadow-[0_0_12px_oklch(0.85_0.2_195/0.7)]",
    line: "border-[oklch(0.85_0.2_195/0.3)]",
    badge: "bg-[oklch(0.85_0.2_195/0.1)] text-[oklch(0.85_0.2_195)] border-[oklch(0.85_0.2_195/0.3)]",
    text: "text-[oklch(0.85_0.2_195)]",
  },
  purple: {
    dot: "bg-[oklch(0.7_0.25_300)] shadow-[0_0_12px_oklch(0.7_0.25_300/0.7)]",
    line: "border-[oklch(0.7_0.25_300/0.3)]",
    badge: "bg-[oklch(0.7_0.25_300/0.1)] text-[oklch(0.7_0.25_300)] border-[oklch(0.7_0.25_300/0.3)]",
    text: "text-[oklch(0.7_0.25_300)]",
  },
  pink: {
    dot: "bg-[oklch(0.75_0.25_350)] shadow-[0_0_12px_oklch(0.75_0.25_350/0.7)]",
    line: "border-[oklch(0.75_0.25_350/0.3)]",
    badge: "bg-[oklch(0.75_0.25_350/0.1)] text-[oklch(0.75_0.25_350)] border-[oklch(0.75_0.25_350/0.3)]",
    text: "text-[oklch(0.75_0.25_350)]",
  },
};

const values = [
  {
    icon: BookOpen,
    title: "Education",
    desc: "We combat myths and misinformation about pit bull-type dogs through community education, breed awareness events, and partnerships with local schools and organizations.",
    color: "cyan",
  },
  {
    icon: Megaphone,
    title: "Public Awareness",
    desc: "From social media campaigns to local events, we amplify the voices of pit bulls and the people who love them — changing minds one story at a time.",
    color: "purple",
  },
  {
    icon: HandHeart,
    title: "Resources for Those in Need",
    desc: "We provide real, tangible support: low-cost vet care, spay/neuter assistance, owner resources, and emergency help for pit bulls and their families.",
    color: "pink",
  },
];

const team = [
  { name: "Sarah M.", role: "Executive Director & Founder", initial: "S" },
  { name: "Jake T.", role: "Events Coordinator", initial: "J" },
  { name: "Maria L.", role: "Rescue & Foster Director", initial: "M" },
  { name: "Devon K.", role: "Community Outreach", initial: "D" },
  { name: "Priya N.", role: "Social Media & Marketing", initial: "P" },
  { name: "Chris B.", role: "Volunteer Coordinator", initial: "C" },
];

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg py-24 md:py-32">
        {/* Ambient glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-64 w-64 rounded-full bg-[oklch(0.85_0.2_195/0.06)] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[oklch(0.7_0.25_300/0.06)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-6 border-[oklch(0.85_0.2_195/0.4)] bg-[oklch(0.85_0.2_195/0.08)] text-[oklch(0.85_0.2_195)] px-4 py-1.5 text-xs tracking-widest uppercase"
          >
            <Heart className="mr-1.5 h-3 w-3" />
            Our Story
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
            About{" "}
            <span className="text-[oklch(0.85_0.2_195)] text-glow-cyan">FWPBC</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-foreground/70 md:text-xl max-w-2xl mx-auto">
            The Fort Wayne Pit Bull Coalition is a 501(c)(3) nonprofit dedicated to
            advocating for pit bull-type dogs through education, community outreach,
            rescue, and responsible ownership in Fort Wayne, Indiana and beyond.
          </p>
        </div>
      </section>

      {/* ── Mission ──────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative rounded-2xl border border-gray-200 bg-white shadow-lg p-8 md:p-12">
            {/* Corner accent */}
            <div className="absolute top-0 left-0 h-16 w-16 overflow-hidden rounded-tl-2xl">
              <div className="absolute top-0 left-0 h-px w-16 bg-gradient-to-r from-[oklch(0.85_0.2_195)] to-transparent" />
              <div className="absolute top-0 left-0 h-16 w-px bg-gradient-to-b from-[oklch(0.85_0.2_195)] to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 h-16 w-16 overflow-hidden rounded-br-2xl">
              <div className="absolute bottom-0 right-0 h-px w-16 bg-gradient-to-l from-[oklch(0.7_0.25_300)] to-transparent" />
              <div className="absolute bottom-0 right-0 h-16 w-px bg-gradient-to-t from-[oklch(0.7_0.25_300)] to-transparent" />
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl border border-[oklch(0.85_0.2_195/0.3)] bg-[oklch(0.85_0.2_195/0.1)]">
                <Star className="h-8 w-8 text-[oklch(0.85_0.2_195)]" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-foreground/80 leading-relaxed text-lg">
                  To advocate for pit bull-type dogs through education, public awareness,
                  and providing resources to pit bulls in need. We believe every dog
                  deserves a loving home and a fair chance — regardless of breed. Through
                  community events, rescue partnerships, and relentless advocacy, we are
                  changing the narrative one dog at a time.
                </p>
                <Separator className="my-6 bg-[oklch(0.85_0.2_195/0.15)]" />
                <div className="flex flex-wrap gap-3">
                  {["Advocacy", "Education", "Rescue", "Community", "501(c)(3)"].map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[oklch(0.85_0.2_195/0.3)] bg-[oklch(0.85_0.2_195/0.08)] text-[oklch(0.85_0.2_195)] text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stand Up For Pits Grant ───────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.75_0.25_350/0.3)] bg-gradient-to-r from-[oklch(0.75_0.25_350/0.05)] to-[oklch(0.7_0.25_300/0.05)] p-6 shadow-sm md:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[oklch(0.75_0.25_350/0.4)] bg-[oklch(0.75_0.25_350/0.15)]">
                <Award className="h-6 w-6 text-[oklch(0.75_0.25_350)]" />
              </div>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.75_0.25_350)] mb-1">
                  Grant Recognition
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  FWPBC is a proud recipient of a grant from the{" "}
                  <strong className="text-foreground">Stand Up For Pits Foundation</strong>,
                  helping us fund education programs, emergency medical care, and community
                  outreach that directly saves lives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Timeline ─────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.7_0.25_300)] mb-3">
              Our Journey
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Key <span className="text-[oklch(0.7_0.25_300)] text-glow-purple">Milestones</span>
            </h2>
          </div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[oklch(0.85_0.2_195/0.5)] via-[oklch(0.7_0.25_300/0.3)] to-transparent md:left-1/2" />

            <div className="flex flex-col gap-10">
              {milestones.map((m, i) => {
                const c = colorMap[m.color];
                const isRight = i % 2 === 0;
                return (
                  <div
                    key={m.year}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isRight ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 pl-10 md:pl-0 ${isRight ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"}`}>
                      <Card className="border-gray-200 bg-white shadow-sm hover:border-[oklch(0.85_0.2_195/0.5)] hover:shadow-md transition-all duration-300">
                        <CardContent className="p-5">
                          <Badge
                            variant="outline"
                            className={`mb-3 text-xs font-mono font-bold ${c.badge}`}
                          >
                            {m.year}
                          </Badge>
                          <h3 className={`text-base font-bold mb-2 ${c.text}`}>{m.title}</h3>
                          <p className="text-sm text-foreground/70 leading-relaxed">{m.desc}</p>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 mt-6 h-3 w-3 rounded-full z-10 shrink-0">
                      <div className={`h-3 w-3 rounded-full ${c.dot}`} />
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block flex-1" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.75_0.25_350)] mb-3">
              What We Stand For
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Our <span className="text-[oklch(0.75_0.25_350)] text-glow-purple">Core Values</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v) => {
              const c = colorMap[v.color];
              const Icon = v.icon;
              return (
                <Card
                  key={v.title}
                  className="group relative overflow-hidden border-gray-200 bg-white shadow-sm hover:border-[oklch(0.85_0.2_195/0.5)] hover:shadow-md transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl border ${c.badge}`}>
                      <Icon className={`h-6 w-6 ${c.text}`} />
                    </div>
                    <h3 className={`text-lg font-bold mb-3 ${c.text}`}>{v.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">{v.desc}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Team ─────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.85_0.2_195)] mb-3">
              The People Behind the Paws
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Meet Our <span className="text-[oklch(0.85_0.2_195)] text-glow-cyan">Team</span>
            </h2>
            <p className="mt-4 text-foreground/60 max-w-xl mx-auto text-sm">
              Our all-volunteer team is fueled by passion, coffee, and unconditional love
              from very good dogs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
            {team.map((member, i) => {
              const colors = ["cyan", "purple", "pink", "cyan", "purple", "pink"];
              const c = colorMap[colors[i % colors.length]];
              return (
                <Card
                  key={member.name}
                  className="group border-gray-200 bg-white shadow-sm hover:border-[oklch(0.85_0.2_195/0.5)] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <CardContent className="p-6 flex items-center gap-4">
                    {/* Avatar */}
                    <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 text-lg font-bold ${c.badge} ${c.text}`}>
                      {member.initial}
                    </div>
                    <div>
                      <p className={`font-semibold ${c.text}`}>{member.name}</p>
                      <p className="text-xs text-foreground/60 mt-0.5">{member.role}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-sky-50 to-purple-50 p-10 shadow-md">
            <Shield className="mx-auto mb-4 h-10 w-10 text-[oklch(0.85_0.2_195)]" />
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Join the Coalition
            </h2>
            <p className="text-foreground/70 mb-8 leading-relaxed">
              Whether you volunteer, foster, donate, or simply spread the word — every
              action makes a difference in the lives of pit bulls in our community.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/volunteer">
                <Button className="bg-[oklch(0.85_0.2_195/0.15)] border border-[oklch(0.85_0.2_195/0.4)] text-[oklch(0.85_0.2_195)] hover:bg-[oklch(0.85_0.2_195/0.25)] glow-cyan" variant="ghost">
                  Get Involved
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/donate">
                <Button className="bg-[oklch(0.7_0.25_300/0.15)] border border-[oklch(0.7_0.25_300/0.4)] text-[oklch(0.7_0.25_300)] hover:bg-[oklch(0.7_0.25_300/0.25)] glow-purple" variant="ghost">
                  Donate Now
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
