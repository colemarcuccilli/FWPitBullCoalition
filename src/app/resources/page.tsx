import Link from "next/link";
import {
  BookOpen,
  Heart,
  Shield,
  DollarSign,
  Car,
  Database,
  ExternalLink,
  FileText,
  Scissors,
  ArrowRight,
  AlertTriangle,
  Info,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "Resources | Fort Wayne Pit Bull Coalition",
  description:
    "Resources for pit bull owners — training tips, BSL information, low-cost vet services, spay/neuter programs, pet insurance, and more.",
};

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const ownerResources = [
  {
    title: "Training Tips & Positive Reinforcement",
    desc: "Pit bull-type dogs are incredibly intelligent and eager to please. Positive reinforcement training is the most effective method — and it deepens your bond. We recommend the resources from the Karen Pryor Academy and APDT.",
    links: [
      { label: "APDT — Find a Trainer", href: "https://www.apdt.com" },
      { label: "Karen Pryor Academy", href: "https://karenpryoracademy.com" },
    ],
  },
  {
    title: "Vet Resources & Finding Care",
    desc: "Regular veterinary care is essential. We maintain a list of pit bull-friendly vets in the Fort Wayne area, as well as low-cost clinics and mobile vet services. Contact us to receive our local vet guide.",
    links: [
      { label: "ASPCA Pet Care Tips", href: "https://www.aspca.org/pet-care/dog-care" },
    ],
  },
  {
    title: "Breed-Specific Legislation (BSL) Info",
    desc: "BSL refers to laws that restrict or ban specific breeds. Many cities in Indiana and across the country have BSL targeting pit bull-type dogs. We provide up-to-date information and resources to help owners navigate, fight, and appeal BSL in their communities.",
    links: [
      { label: "BSL FAQ — Animal Farm Foundation", href: "https://animalfarmfoundation.org" },
      { label: "NCSL Breed-Specific Info", href: "https://www.ncsl.org" },
    ],
  },
];

const assistanceInfo = {
  title: "Low Cost Services & Assistance Application",
  desc: "We understand that financial hardship shouldn't mean a dog goes without care. FWPBC offers a limited assistance program for qualifying families in the Fort Wayne area. Our assistance fund can help cover emergency vet costs, spay/neuter procedures, and essential supplies.",
  eligibility: [
    "Must reside in Allen County or surrounding areas",
    "Income-based eligibility requirements",
    "Dog must be spayed/neutered or scheduled for procedure",
    "Owner must demonstrate commitment to responsible pet ownership",
  ],
};

const spayNeuter = {
  title: "The Importance of Spay & Neuter",
  stats: [
    "Over 1 million pit bull-type dogs are euthanized in U.S. shelters every year",
    "Spaying/neutering reduces the risk of certain cancers and health issues",
    "A spayed female cannot contribute to overpopulation",
    "Neutered males are less likely to roam, fight, or display aggression",
  ],
  resources: [
    { label: "SNAP (Spay/Neuter Assistance Program)", href: "#" },
    { label: "ASPCA Spay/Neuter Alliance", href: "https://www.aspca.org/nyc/aspca-spayneuter-alliance" },
  ],
};

const petInsurance = {
  title: "Pet Insurance — Healthy Paws",
  desc: "We recommend Healthy Paws pet insurance as an affiliate partner. Pet insurance can help offset the cost of unexpected vet bills — giving you peace of mind and ensuring your dog always gets the care they need. When you sign up through FWPBC's affiliate link, a portion supports our programs.",
  link: "https://www.healthypawspetinsurance.com",
  bullet: "No annual or lifetime limits on claims",
};

const licensePlate = {
  title: "Pet Friendly License Plate — Indiana",
  desc: "Indiana offers a specialty Pet Friendly license plate. A portion of the proceeds from plate purchases and renewals is distributed to qualifying animal welfare organizations — including FWPBC. Show your love on the road and help fund animal welfare at the same time.",
  link: "https://www.in.gov/bmv/2445.htm",
};

const shelterCount = {
  title: "Shelter Animals Count",
  desc: "Shelter Animals Count is the National Database for animal sheltering statistics. This resource provides critical data that helps organizations like FWPBC track intake, outcomes, and trends for dogs across the country — informing our advocacy work.",
  link: "https://www.shelteranimalscount.org",
};

const colorMap: Record<string, { text: string; border: string; badge: string }> = {
  cyan: {
    text: "text-[oklch(0.85_0.2_195)]",
    border: "border-[oklch(0.85_0.2_195/0.3)]",
    badge: "bg-[oklch(0.85_0.2_195/0.1)] text-[oklch(0.85_0.2_195)] border-[oklch(0.85_0.2_195/0.3)]",
  },
  purple: {
    text: "text-[oklch(0.7_0.25_300)]",
    border: "border-[oklch(0.7_0.25_300/0.3)]",
    badge: "bg-[oklch(0.7_0.25_300/0.1)] text-[oklch(0.7_0.25_300)] border-[oklch(0.7_0.25_300/0.3)]",
  },
  pink: {
    text: "text-[oklch(0.75_0.25_350)]",
    border: "border-[oklch(0.75_0.25_350/0.3)]",
    badge: "bg-[oklch(0.75_0.25_350/0.1)] text-[oklch(0.75_0.25_350)] border-[oklch(0.75_0.25_350/0.3)]",
  },
};

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
function SectionHeader({ label, title, accent }: { label: string; title: string; accent: string }) {
  const c = colorMap[accent];
  return (
    <div className="mb-8">
      <p className={`text-xs font-semibold uppercase tracking-widest ${c.text} mb-2`}>{label}</p>
      <h2 className={`text-2xl font-bold text-foreground md:text-3xl ${c.text} text-glow-${accent === "cyan" ? "cyan" : "purple"}`}>
        {title}
      </h2>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-[oklch(0.7_0.25_300/0.06)] blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 h-64 w-64 rounded-full bg-[oklch(0.85_0.2_195/0.05)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-6 border-[oklch(0.7_0.25_300/0.4)] bg-[oklch(0.7_0.25_300/0.08)] text-[oklch(0.7_0.25_300)] px-4 py-1.5 text-xs tracking-widest uppercase"
          >
            <BookOpen className="mr-1.5 h-3 w-3" />
            Knowledge Base
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
            <span className="text-[oklch(0.7_0.25_300)] text-glow-purple">Resources</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-foreground/70 md:text-xl max-w-2xl mx-auto">
            Everything a pit bull owner, advocate, or animal welfare supporter needs — in
            one place. From training guides to legislation info, we&apos;ve got you covered.
          </p>
        </div>
      </section>

      {/* ── Pit Bull Owner Resources ──────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader label="For Pit Bull Owners" title="Owner Resources" accent="cyan" />

          <div className="flex flex-col gap-5">
            {ownerResources.map((res, i) => {
              const colors = ["cyan", "purple", "pink"];
              const c = colorMap[colors[i % colors.length]];
              return (
                <Card
                  key={res.title}
                  className={`border-gray-200 bg-white shadow-sm hover:${c.border} hover:shadow-md transition-all duration-200`}
                >
                  <CardContent className="p-6">
                    <h3 className={`text-base font-bold mb-3 ${c.text}`}>{res.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed mb-4">{res.desc}</p>
                    {res.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {res.links.map((link) => (
                          <Link key={link.label} href={link.href} target="_blank" rel="noopener noreferrer">
                            <Button
                              size="sm"
                              variant="ghost"
                              className={`border ${c.border} ${c.text} hover:bg-foreground/5 text-xs font-medium`}
                            >
                              {link.label}
                              <ExternalLink className="ml-1.5 h-3 w-3" />
                            </Button>
                          </Link>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Assistance Application ────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-5xl">
          <SectionHeader label="Financial Assistance" title="Low Cost Services" accent="purple" />

          <div className="relative overflow-hidden rounded-2xl border border-[oklch(0.7_0.25_300/0.3)] bg-white shadow-md p-8">
            <div className="flex flex-col gap-6 md:flex-row md:gap-10">
              <div className="flex-1">
                <h3 className="text-lg font-bold text-[oklch(0.7_0.25_300)] mb-3">
                  {assistanceInfo.title}
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed mb-6">
                  {assistanceInfo.desc}
                </p>
                <h4 className="text-sm font-semibold text-foreground/80 mb-3">Eligibility Requirements:</h4>
                <div className="flex flex-col gap-2">
                  {assistanceInfo.eligibility.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-sm text-foreground/65">
                      <Info className="h-4 w-4 shrink-0 mt-0.5 text-[oklch(0.7_0.25_300/0.7)]" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="shrink-0 flex flex-col justify-center">
                <Link href="/contact">
                  <Button className="w-full md:w-auto bg-[oklch(0.7_0.25_300/0.2)] border border-[oklch(0.7_0.25_300/0.5)] text-[oklch(0.7_0.25_300)] hover:bg-[oklch(0.7_0.25_300/0.3)] glow-purple font-semibold" variant="ghost">
                    <FileText className="mr-2 h-4 w-4" />
                    Assistance Application
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Spay / Neuter ─────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeader label="Population Control" title="Spay & Neuter" accent="pink" />

          <div className="grid gap-6 md:grid-cols-2">
            {/* Why it matters */}
            <Card className="border-[oklch(0.75_0.25_350/0.3)] bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Scissors className="h-5 w-5 text-[oklch(0.75_0.25_350)]" />
                  <h3 className="text-base font-bold text-[oklch(0.75_0.25_350)]">Why It Matters</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {spayNeuter.stats.map((stat) => (
                    <div key={stat} className="flex items-start gap-2.5 text-sm text-foreground/70">
                      <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5 text-[oklch(0.75_0.25_350/0.6)]" />
                      {stat}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Resources */}
            <Card className="border-gray-200 bg-white shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-base font-bold text-foreground/80 mb-4">Spay/Neuter Resources</h3>
                <p className="text-sm text-foreground/65 leading-relaxed mb-5">
                  We partner with local clinics to offer reduced-cost spay/neuter
                  services for qualifying owners. Financial assistance is available through
                  our assistance program. Contact us for a current list of low-cost clinics
                  in the Fort Wayne area.
                </p>
                <div className="flex flex-col gap-2">
                  {spayNeuter.resources.map((r) => (
                    <Link key={r.label} href={r.href} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="w-full justify-start border border-[oklch(0.75_0.25_350/0.3)] text-[oklch(0.75_0.25_350)] hover:bg-[oklch(0.75_0.25_350/0.05)] text-xs"
                      >
                        {r.label}
                        <ExternalLink className="ml-auto h-3 w-3" />
                      </Button>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── Additional Resources Grid ─────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-5xl">
          <SectionHeader label="More Resources" title="Additional Links" accent="cyan" />

          <div className="grid gap-5 md:grid-cols-3">
            {/* Pet Insurance */}
            <Card className="border-[oklch(0.85_0.2_195/0.3)] bg-white shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="h-5 w-5 text-[oklch(0.85_0.2_195)]" />
                  <h3 className="text-sm font-bold text-[oklch(0.85_0.2_195)]">Pet Insurance</h3>
                </div>
                <p className="text-xs text-foreground/65 leading-relaxed mb-3">
                  {petInsurance.desc}
                </p>
                <Badge variant="outline" className="mb-4 text-[10px] bg-[oklch(0.85_0.2_195/0.08)] border-[oklch(0.85_0.2_195/0.3)] text-[oklch(0.85_0.2_195/0.8)]">
                  Affiliate Partner — Healthy Paws
                </Badge>
                <Separator className="mb-3 bg-foreground/10" />
                <Link href={petInsurance.link} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="ghost" className="w-full text-xs border border-[oklch(0.85_0.2_195/0.3)] text-[oklch(0.85_0.2_195)] hover:bg-[oklch(0.85_0.2_195/0.08)]">
                    Get a Quote <ExternalLink className="ml-1.5 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* License Plate */}
            <Card className="border-[oklch(0.7_0.25_300/0.3)] bg-white shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Car className="h-5 w-5 text-[oklch(0.7_0.25_300)]" />
                  <h3 className="text-sm font-bold text-[oklch(0.7_0.25_300)]">Pet Friendly Plate</h3>
                </div>
                <p className="text-xs text-foreground/65 leading-relaxed mb-4">
                  {licensePlate.desc}
                </p>
                <Separator className="mb-3 bg-foreground/10" />
                <Link href={licensePlate.link} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="ghost" className="w-full text-xs border border-[oklch(0.7_0.25_300/0.3)] text-[oklch(0.7_0.25_300)] hover:bg-[oklch(0.7_0.25_300/0.08)]">
                    Indiana BMV Info <ExternalLink className="ml-1.5 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Shelter Animals Count */}
            <Card className="border-[oklch(0.75_0.25_350/0.3)] bg-white shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Database className="h-5 w-5 text-[oklch(0.75_0.25_350)]" />
                  <h3 className="text-sm font-bold text-[oklch(0.75_0.25_350)]">Shelter Animals Count</h3>
                </div>
                <p className="text-xs text-foreground/65 leading-relaxed mb-4">
                  {shelterCount.desc}
                </p>
                <Separator className="mb-3 bg-foreground/10" />
                <Link href={shelterCount.link} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="ghost" className="w-full text-xs border border-[oklch(0.75_0.25_350/0.3)] text-[oklch(0.75_0.25_350)] hover:bg-[oklch(0.75_0.25_350/0.08)]">
                    Visit Database <ExternalLink className="ml-1.5 h-3 w-3" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-sky-50 to-purple-50 p-10 shadow-md">
            <Shield className="mx-auto mb-4 h-10 w-10 text-[oklch(0.85_0.2_195/0.6)]" />
            <h2 className="text-xl font-bold text-foreground mb-3">
              Can&apos;t Find What You Need?
            </h2>
            <p className="text-foreground/65 text-sm leading-relaxed mb-6 max-w-md mx-auto">
              Our team is here to help. Reach out directly and we&apos;ll connect you with
              the right resources for your situation.
            </p>
            <Link href="/contact">
              <Button className="bg-[oklch(0.85_0.2_195/0.15)] border border-[oklch(0.85_0.2_195/0.4)] text-[oklch(0.85_0.2_195)] hover:bg-[oklch(0.85_0.2_195/0.25)] glow-cyan font-semibold" variant="ghost">
                Contact FWPBC
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
