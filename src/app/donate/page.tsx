import Link from "next/link";
import {
  Heart,
  Sparkles,
  DollarSign,
  RefreshCw,
  ShieldCheck,
  Star,
  Zap,
  Award,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Donate | Fort Wayne Pit Bull Coalition",
  description:
    "Support the Fort Wayne Pit Bull Coalition's mission. Every dollar saves a life. Tax-deductible donations fund rescue, education, and advocacy for pit bull-type dogs.",
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const tiers = [
  {
    amount: "$25",
    label: "Supporter",
    impact: "Feeds a dog for a week",
    desc: "Your $25 covers a full week of quality food for a dog in our foster program, giving them the energy to play, heal, and find their forever home.",
    icon: Star,
    color: "cyan",
    popular: false,
  },
  {
    amount: "$50",
    label: "Advocate",
    impact: "Covers a vet visit",
    desc: "A $50 donation funds a routine vet check-up — vaccines, wellness exam, heartworm test — keeping our fosters healthy and adoption-ready.",
    icon: Heart,
    color: "purple",
    popular: true,
  },
  {
    amount: "$100",
    label: "Rescuer",
    impact: "Funds an emergency rescue",
    desc: "Your $100 enables us to respond to an emergency call — pulling a dog from a dangerous situation, transporting them to safety, and beginning their healing journey.",
    icon: Zap,
    color: "pink",
    popular: false,
  },
  {
    amount: "$250",
    label: "Champion",
    impact: "Full rehabilitation support",
    desc: "A $250 gift covers the full cost of rehabilitating a dog in need — medical care, behavioral support, food, supplies, and more — from intake to adoption.",
    icon: Award,
    color: "cyan",
    popular: false,
  },
];

const otherWays = [
  {
    title: "Bissell Partners for Pets",
    code: "ADOPT",
    desc: "When you shop Bissell.com and enter code ADOPT at checkout, a portion of your purchase is donated to FWPBC at no extra cost to you.",
    link: "https://www.bissell.com",
    color: "purple",
  },
  {
    title: "Kroger Community Rewards",
    code: "NPO #WQ674",
    desc: "Link your Kroger Plus card to FWPBC using NPO #WQ674. Every time you shop, Kroger donates to us — automatically and for free.",
    link: "https://www.kroger.com/communityrewards",
    color: "pink",
  },
  {
    title: "Amazon Smile",
    code: "Fort Wayne Pit Bull Coalition",
    desc: "Set FWPBC as your charity on Amazon Smile and 0.5% of eligible purchases are donated to us every time you shop.",
    link: "https://smile.amazon.com",
    color: "cyan",
  },
];

const colorMap: Record<string, { text: string; border: string; badge: string; bg: string; glow: string; gradient: string }> = {
  cyan: {
    text: "text-[oklch(0.85_0.2_195)]",
    border: "border-[oklch(0.85_0.2_195/0.4)]",
    badge: "bg-[oklch(0.85_0.2_195/0.1)] text-[oklch(0.85_0.2_195)] border-[oklch(0.85_0.2_195/0.3)]",
    bg: "bg-[oklch(0.85_0.2_195/0.08)]",
    glow: "glow-cyan",
    gradient: "from-[oklch(0.85_0.2_195/0.1)] to-transparent",
  },
  purple: {
    text: "text-[oklch(0.7_0.25_300)]",
    border: "border-[oklch(0.7_0.25_300/0.4)]",
    badge: "bg-[oklch(0.7_0.25_300/0.1)] text-[oklch(0.7_0.25_300)] border-[oklch(0.7_0.25_300/0.3)]",
    bg: "bg-[oklch(0.7_0.25_300/0.08)]",
    glow: "glow-purple",
    gradient: "from-[oklch(0.7_0.25_300/0.1)] to-transparent",
  },
  pink: {
    text: "text-[oklch(0.75_0.25_350)]",
    border: "border-[oklch(0.75_0.25_350/0.4)]",
    badge: "bg-[oklch(0.75_0.25_350/0.1)] text-[oklch(0.75_0.25_350)] border-[oklch(0.75_0.25_350/0.3)]",
    bg: "bg-[oklch(0.75_0.25_350/0.08)]",
    glow: "glow-pink",
    gradient: "from-[oklch(0.75_0.25_350/0.1)] to-transparent",
  },
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function DonatePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-[oklch(0.75_0.25_350/0.07)] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[oklch(0.85_0.2_195/0.05)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-6 border-[oklch(0.75_0.25_350/0.4)] bg-[oklch(0.75_0.25_350/0.08)] text-[oklch(0.75_0.25_350)] px-4 py-1.5 text-xs tracking-widest uppercase"
          >
            <Heart className="mr-1.5 h-3 w-3" />
            Make an Impact
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
            Support Our{" "}
            <span className="text-[oklch(0.75_0.25_350)]" style={{ textShadow: "0 0 10px oklch(0.75 0.25 350 / 0.5), 0 0 40px oklch(0.75 0.25 350 / 0.2)" }}>
              Mission
            </span>
          </h1>

          <p className="mt-6 text-2xl font-light italic text-foreground/60">
            Every dollar saves a life.
          </p>

          <p className="mt-4 text-base leading-relaxed text-foreground/60 max-w-2xl mx-auto">
            Your generosity directly funds rescue operations, medical care, educational
            programs, and advocacy work that changes the lives of pit bull-type dogs in
            Fort Wayne and beyond.
          </p>

          {/* Tax notice */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-[oklch(0.85_0.2_195/0.25)] bg-[oklch(0.85_0.2_195/0.06)] px-4 py-2 text-xs text-foreground/60">
            <ShieldCheck className="h-3.5 w-3.5 text-[oklch(0.85_0.2_195)]" />
            FWPBC is a 501(c)(3) nonprofit — all donations are tax-deductible
          </div>
        </div>
      </section>

      {/* ── Donation Tiers ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.85_0.2_195)] mb-3">
              Choose Your Impact
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Donation <span className="text-[oklch(0.85_0.2_195)] text-glow-cyan">Tiers</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {tiers.map((tier) => {
              const c = colorMap[tier.color];
              const Icon = tier.icon;
              return (
                <div key={tier.amount} className="relative">
                  {tier.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                      <Badge className="bg-[oklch(0.7_0.25_300)] text-white border-none text-[10px] px-3">
                        <Sparkles className="mr-1 h-2.5 w-2.5" />
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <Card
                    className={`relative overflow-hidden border-2 ${c.border} bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full`}
                  >
                    {/* Top gradient streak */}
                    <div className={`h-1 w-full bg-gradient-to-r ${c.gradient}`} />

                    <CardContent className="p-6 flex flex-col h-full">
                      <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${c.badge}`}>
                        <Icon className={`h-6 w-6 ${c.text}`} />
                      </div>

                      <div className={`text-4xl font-extrabold mb-1 ${c.text}`}>
                        {tier.amount}
                      </div>
                      <div className="text-xs font-semibold uppercase tracking-widest text-foreground/50 mb-3">
                        {tier.label}
                      </div>

                      <div className={`mb-4 rounded-lg px-3 py-2 text-sm font-semibold ${c.badge}`}>
                        {tier.impact}
                      </div>

                      <p className="text-sm text-foreground/65 leading-relaxed flex-1 mb-6">
                        {tier.desc}
                      </p>

                      <Button
                        className={`w-full border ${c.border} ${c.text} hover:${c.bg} font-semibold`}
                        variant="ghost"
                      >
                        <DollarSign className="mr-1.5 h-4 w-4" />
                        Give {tier.amount}
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Custom amount */}
          <div className="mt-8 text-center">
            <p className="text-sm text-foreground/50 mb-3">Want to give a custom amount?</p>
            <Button
              className="border border-gray-300 text-foreground/70 hover:border-[oklch(0.85_0.2_195/0.4)] hover:text-[oklch(0.85_0.2_195)]"
              variant="ghost"
            >
              <DollarSign className="mr-2 h-4 w-4" />
              Custom Donation Amount
            </Button>
          </div>
        </div>
      </section>

      {/* ── Monthly Giving ────────────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-sky-50 to-purple-50 p-8 md:p-10 shadow-md">
            {/* Corner lines */}
            <div className="absolute top-0 left-0 h-12 w-12 overflow-hidden rounded-tl-2xl">
              <div className="absolute top-0 left-0 h-px w-12 bg-[oklch(0.85_0.2_195)]" />
              <div className="absolute top-0 left-0 h-12 w-px bg-[oklch(0.85_0.2_195)]" />
            </div>

            <div className="flex flex-col gap-6 md:flex-row md:items-center md:gap-10">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-[oklch(0.85_0.2_195/0.4)] bg-[oklch(0.85_0.2_195/0.1)]">
                <RefreshCw className="h-8 w-8 text-[oklch(0.85_0.2_195)]" />
              </div>
              <div className="flex-1">
                <Badge variant="outline" className="mb-3 border-[oklch(0.85_0.2_195/0.4)] bg-[oklch(0.85_0.2_195/0.1)] text-[oklch(0.85_0.2_195)] text-xs">
                  Recurring Support
                </Badge>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Become a Monthly Giver
                </h2>
                <p className="text-foreground/70 leading-relaxed">
                  Monthly donors are the backbone of our rescue operations. A recurring
                  gift — even $10/month — gives us the predictable funding we need to
                  rescue more dogs, respond to emergencies faster, and plan long-term
                  educational programming.
                </p>
              </div>
              <div className="shrink-0">
                <Button className="bg-[oklch(0.85_0.2_195/0.2)] border border-[oklch(0.85_0.2_195/0.5)] text-[oklch(0.85_0.2_195)] hover:bg-[oklch(0.85_0.2_195/0.3)] glow-cyan font-semibold whitespace-nowrap" variant="ghost">
                  Set Up Monthly Giving
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Other Ways to Give ────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.7_0.25_300)] mb-3">
              No Cost to You
            </p>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Other Ways to{" "}
              <span className="text-[oklch(0.7_0.25_300)] text-glow-purple">Give</span>
            </h2>
            <p className="mt-3 text-foreground/60 text-sm max-w-lg mx-auto">
              Support FWPBC while you shop — at zero extra cost to you.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {otherWays.map((way) => {
              const c = colorMap[way.color];
              return (
                <Card
                  key={way.title}
                  className={`group border ${c.border} bg-white shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <h3 className={`text-base font-bold mb-2 ${c.text}`}>{way.title}</h3>
                    <div className={`mb-3 inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-mono font-bold ${c.badge}`}>
                      Code: {way.code}
                    </div>
                    <p className="text-sm text-foreground/65 leading-relaxed mb-5">{way.desc}</p>
                    <Separator className="mb-4 bg-foreground/10" />
                    <Link href={way.link} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="ghost"
                        className={`border ${c.border} ${c.text} hover:${c.bg} text-xs font-semibold w-full`}
                      >
                        Visit Site
                        <ExternalLink className="ml-1.5 h-3 w-3" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Footer note ──────────────────────────────────────────────────── */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <ShieldCheck className="mx-auto mb-4 h-8 w-8 text-[oklch(0.85_0.2_195/0.5)]" />
          <p className="text-foreground/50 text-sm leading-relaxed">
            The Fort Wayne Pit Bull Coalition is a 501(c)(3) tax-exempt nonprofit
            organization. All donations are tax-deductible to the fullest extent
            allowed by law. Please consult your tax advisor. EIN available upon request.
          </p>
          <p className="mt-4 text-foreground/40 text-xs">
            Questions about donating?{" "}
            <Link href="/contact" className="text-[oklch(0.85_0.2_195)] hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
