import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  Ticket,
  Star,
  ArrowRight,
  Sparkles,
  Music,
  Dog,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { getEvents } from "@/lib/data";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Events | Fort Wayne Pit Bull Coalition",
  description:
    "Join us at FWPBC events including our annual Pits In The Park celebration. Upcoming and past events in Fort Wayne, Indiana.",
};

// ---------------------------------------------------------------------------
// Style helpers (index-based cycling for events from JSON that have no color field)
// ---------------------------------------------------------------------------

// Ordered style presets — cycled through for non-featured upcoming events
const eventStylePresets = [
  {
    gradient: "from-[oklch(0.85_0.2_195/0.15)] to-[oklch(0.7_0.25_300/0.15)]",
    border: "border-[oklch(0.85_0.2_195/0.4)]",
    accentText: "text-[oklch(0.85_0.2_195)]",
    glow: "glow-cyan",
    tagColorKey: "cyan",
  },
  {
    gradient: "from-[oklch(0.75_0.25_350/0.1)] to-[oklch(0.7_0.25_300/0.1)]",
    border: "border-[oklch(0.75_0.25_350/0.3)]",
    accentText: "text-[oklch(0.75_0.25_350)]",
    glow: "glow-pink",
    tagColorKey: "pink",
  },
  {
    gradient: "from-[oklch(0.7_0.25_300/0.1)] to-[oklch(0.85_0.2_195/0.1)]",
    border: "border-[oklch(0.7_0.25_300/0.3)]",
    accentText: "text-[oklch(0.7_0.25_300)]",
    glow: "glow-purple",
    tagColorKey: "purple",
  },
];

const tagColorMap: Record<string, string> = {
  cyan: "bg-[oklch(0.85_0.2_195/0.1)] text-[oklch(0.85_0.2_195)] border-[oklch(0.85_0.2_195/0.3)]",
  purple: "bg-[oklch(0.7_0.25_300/0.1)] text-[oklch(0.7_0.25_300)] border-[oklch(0.7_0.25_300/0.3)]",
  pink: "bg-[oklch(0.75_0.25_350/0.1)] text-[oklch(0.75_0.25_350)] border-[oklch(0.75_0.25_350/0.3)]",
};

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function EventsPage() {
  const allEvents = getEvents();
  const upcomingEvents = allEvents.filter((e) => e.status === "upcoming");
  const pastEvents = allEvents.filter((e) => e.status === "past");
  const featuredEvent = upcomingEvents.find((e) => e.featured) ?? null;
  const nonFeaturedUpcoming = upcomingEvents.filter((e) => !e.featured);

  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/3 left-1/4 h-72 w-72 rounded-full bg-[oklch(0.85_0.2_195/0.05)] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/3 h-64 w-64 rounded-full bg-[oklch(0.7_0.25_300/0.05)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-6 border-[oklch(0.85_0.2_195/0.4)] bg-[oklch(0.85_0.2_195/0.08)] text-[oklch(0.85_0.2_195)] px-4 py-1.5 text-xs tracking-widest uppercase"
          >
            <Calendar className="mr-1.5 h-3 w-3" />
            Mark Your Calendar
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
            <span className="text-[oklch(0.85_0.2_195)] text-glow-cyan">Events</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-foreground/70 md:text-xl max-w-2xl mx-auto">
            From our beloved Pits In The Park celebration to adoption drives and community
            walks — join us and help change the story for pit bulls in Fort Wayne.
          </p>
        </div>
      </section>

      {/* ── Featured: Pits In The Park ────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.85_0.2_195)] mb-3">
              Featured Event
            </p>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">
              Pits In The{" "}
              <span className="text-[oklch(0.85_0.2_195)] text-glow-cyan">Park</span>
            </h2>
          </div>

          {/* Featured card */}
          {featuredEvent && (
            <div
              className="relative overflow-hidden rounded-2xl border border-[oklch(0.85_0.2_195/0.4)] bg-gradient-to-br from-[oklch(0.85_0.2_195/0.15)] to-[oklch(0.7_0.25_300/0.15)] p-8 backdrop-blur-sm glow-cyan md:p-10"
            >
              {/* Year badge */}
              {featuredEvent.year && (
                <div className="absolute top-6 right-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[oklch(0.85_0.2_195/0.5)] bg-[oklch(0.85_0.2_195/0.1)]">
                    <div className="text-center">
                      <p className="text-xs font-bold text-[oklch(0.85_0.2_195)] leading-none">{featuredEvent.year}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-col gap-6 md:flex-row md:gap-10">
                {/* Left — info */}
                <div className="flex-1">
                  <Badge variant="outline" className={`mb-4 text-xs ${tagColorMap.cyan}`}>
                    <Star className="mr-1 h-3 w-3" />
                    {featuredEvent.tag}
                  </Badge>

                  <h3 className="text-2xl font-bold mb-2 text-[oklch(0.85_0.2_195)]">
                    {featuredEvent.name}
                  </h3>

                  <div className="flex flex-wrap gap-4 mb-5 text-sm text-foreground/70">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="h-4 w-4 text-[oklch(0.85_0.2_195)]" />
                      {featuredEvent.date}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-[oklch(0.85_0.2_195)]" />
                      {featuredEvent.time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-[oklch(0.85_0.2_195)]" />
                      {featuredEvent.location}
                    </span>
                  </div>

                  <p className="text-foreground/80 leading-relaxed mb-6">{featuredEvent.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredEvent.highlights.map((h) => (
                      <Badge key={h} variant="outline" className="bg-[oklch(0.85_0.2_195/0.06)] border-[oklch(0.85_0.2_195/0.2)] text-foreground/70 text-xs">
                        <Sparkles className="mr-1 h-2.5 w-2.5 text-[oklch(0.85_0.2_195)]" />
                        {h}
                      </Badge>
                    ))}
                  </div>

                  {featuredEvent.ticketLink && (
                    <Link href={featuredEvent.ticketLink} target="_blank" rel="noopener noreferrer">
                      <Button className="bg-[oklch(0.85_0.2_195/0.15)] border border-[oklch(0.85_0.2_195/0.5)] text-[oklch(0.85_0.2_195)] hover:bg-[oklch(0.85_0.2_195/0.3)] glow-cyan font-semibold" variant="ghost">
                        <Ticket className="mr-2 h-4 w-4" />
                        Get Tickets
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  )}
                </div>

                {/* Right — visual placeholder */}
                <div className="md:w-72 shrink-0">
                  <div className="relative h-56 md:h-full min-h-[200px] rounded-xl border border-[oklch(0.85_0.2_195/0.2)] bg-gradient-to-br from-[oklch(0.85_0.2_195/0.1)] to-[oklch(0.7_0.25_300/0.1)] overflow-hidden flex flex-col items-center justify-center gap-3">
                    <Dog className="h-16 w-16 text-[oklch(0.85_0.2_195/0.5)]" />
                    <p className="text-sm text-foreground/40 font-mono tracking-wider">{featuredEvent.location.split(",")[0]}</p>
                    <p className="text-xs text-foreground/30">{featuredEvent.location.split(",").slice(1).join(",").trim()}</p>
                    {/* Grid overlay */}
                    <div className="absolute inset-0 grid-bg opacity-40" />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ── Upcoming Events Grid ──────────────────────────────────────────── */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              More <span className="text-[oklch(0.7_0.25_300)] text-glow-purple">Upcoming Events</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {nonFeaturedUpcoming.map((event, i) => {
              const style = eventStylePresets[i % eventStylePresets.length];
              return (
                <Card
                  key={event.id}
                  className={`group relative overflow-hidden border ${style.border} bg-gradient-to-br ${style.gradient} backdrop-blur-sm hover:-translate-y-1 transition-all duration-300`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className={`text-xs ${tagColorMap[style.tagColorKey]}`}>
                        {event.tag}
                      </Badge>
                      <div className="text-right">
                        <p className={`text-sm font-bold ${style.accentText}`}>{event.date}</p>
                      </div>
                    </div>

                    <h3 className={`text-lg font-bold mb-2 ${style.accentText}`}>{event.name}</h3>

                    <div className="flex flex-col gap-1.5 mb-4 text-xs text-foreground/60">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" />
                        {event.location}
                      </span>
                    </div>

                    <p className="text-sm text-foreground/70 leading-relaxed mb-5">{event.description}</p>

                    <Separator className="mb-4 bg-foreground/10" />

                    <div className="flex flex-wrap gap-2 mb-5">
                      {event.highlights.map((h) => (
                        <Badge key={h} variant="outline" className="text-xs bg-foreground/5 border-foreground/10 text-foreground/60">
                          {h}
                        </Badge>
                      ))}
                    </div>

                    {event.ticketLink ? (
                      <Link href={event.ticketLink} target="_blank" rel="noopener noreferrer">
                        <Button
                          size="sm"
                          variant="ghost"
                          className={`border ${style.border} ${style.accentText} hover:bg-foreground/5 text-xs font-semibold`}
                        >
                          <Ticket className="mr-1.5 h-3.5 w-3.5" />
                          Learn More
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        size="sm"
                        variant="ghost"
                        disabled
                        className={`border ${style.border} ${style.accentText} text-xs font-semibold opacity-60`}
                      >
                        <Ticket className="mr-1.5 h-3.5 w-3.5" />
                        Details TBD
                      </Button>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Past Events ──────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.75_0.25_350)] mb-3">
              Looking Back
            </p>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Past <span className="text-[oklch(0.75_0.25_350)]">Events Gallery</span>
            </h2>
            <p className="mt-3 text-foreground/60 text-sm max-w-lg mx-auto">
              A decade of community, love, and advocacy — one event at a time.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm divide-y divide-gray-100">
            {pastEvents.map((e, i) => {
              const colorKeys = ["cyan", "purple", "pink"] as const;
              const c = colorKeys[i % colorKeys.length];
              const textColor =
                c === "cyan"
                  ? "text-[oklch(0.85_0.2_195)]"
                  : c === "purple"
                  ? "text-[oklch(0.7_0.25_300)]"
                  : "text-[oklch(0.75_0.25_350)]";
              return (
                <div
                  key={e.id}
                  className="flex items-center justify-between px-6 py-4 hover:bg-foreground/5 transition-colors duration-150"
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-sm font-bold ${textColor} w-10`}>
                      {e.year}
                    </span>
                    <span className="text-foreground/80 text-sm">{e.name}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-foreground/50">
                    <Calendar className="h-3.5 w-3.5" />
                    {e.date}
                  </div>
                </div>
              );
            })}
            {pastEvents.length === 0 && (
              <div className="px-6 py-8 text-center text-sm text-foreground/40">
                No past events yet.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Stay Informed CTA ─────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-sky-50 to-purple-50 p-10 shadow-md">
            <Music className="mx-auto mb-4 h-10 w-10 text-[oklch(0.85_0.2_195/0.6)]" />
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Never Miss an Event
            </h2>
            <p className="text-foreground/70 mb-8 leading-relaxed max-w-lg mx-auto">
              Follow us on social media and sign up for updates to be the first to know
              about upcoming events, adoption days, and community gatherings.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-[oklch(0.85_0.2_195/0.15)] border border-[oklch(0.85_0.2_195/0.4)] text-[oklch(0.85_0.2_195)] hover:bg-[oklch(0.85_0.2_195/0.25)] glow-cyan" variant="ghost">
                  Stay Connected
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/volunteer">
                <Button className="bg-[oklch(0.7_0.25_300/0.15)] border border-[oklch(0.7_0.25_300/0.4)] text-[oklch(0.7_0.25_300)] hover:bg-[oklch(0.7_0.25_300/0.25)]" variant="ghost">
                  Volunteer at Events
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
