"use client";

import * as React from "react";
import Link from "next/link";
import {
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Send,
  MessageSquare,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const faqs = [
  {
    q: "How do I adopt a dog from FWPBC?",
    a: "Start by browsing our available dogs on the Adopt page, then fill out our online adoption application. Our team will review your application and reach out to schedule a meet & greet.",
  },
  {
    q: "Do you take owner surrenders?",
    a: "We understand that life circumstances change. Please contact us directly to discuss your situation. We evaluate surrender requests on a case-by-case basis based on our foster capacity.",
  },
  {
    q: "How can I become a foster?",
    a: "Fill out our foster application on the Adopt page. We provide all the supplies, vet care, and support you need — you just provide the love and temporary home.",
  },
  {
    q: "Is my donation tax-deductible?",
    a: "Yes! FWPBC is a registered 501(c)(3) nonprofit organization. All donations are tax-deductible to the fullest extent allowed by law.",
  },
  {
    q: "Do you work with dogs other than pit bulls?",
    a: "Our primary focus is pit bull-type dogs, but we occasionally assist with mixes and related breeds depending on our capacity and circumstances. Contact us to discuss.",
  },
  {
    q: "How do I report a dog in need?",
    a: "Email us at fwpitbullcoalition@gmail.com with as much detail as possible including location, the dog's condition, and any photos. For immediate danger, please also contact Fort Wayne Animal Care & Control.",
  },
];

// ---------------------------------------------------------------------------
// FAQ Item — interactive sub-component
// ---------------------------------------------------------------------------
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-150"
        aria-expanded={open}
      >
        <span>{q}</span>
        {open ? (
          <ChevronUp className="h-4 w-4 shrink-0 text-[oklch(0.85_0.2_195)]" />
        ) : (
          <ChevronDown className="h-4 w-4 shrink-0 text-foreground/40" />
        )}
      </button>
      {open && (
        <div className="pb-4">
          <p className="text-sm text-foreground/60 leading-relaxed">{a}</p>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Contact form — client component for interactivity
// ---------------------------------------------------------------------------
function ContactForm() {
  const [status, setStatus] = React.useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    // Simulate send — replace with real form submission logic
    setTimeout(() => setStatus("sent"), 1500);
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[oklch(0.85_0.2_195/0.4)] bg-[oklch(0.85_0.2_195/0.1)] glow-cyan">
          <Send className="h-8 w-8 text-[oklch(0.85_0.2_195)]" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Message Sent!</h3>
        <p className="text-foreground/60 text-sm max-w-xs">
          Thank you for reaching out. We&apos;ll get back to you as soon as possible —
          usually within 1–2 business days.
        </p>
        <Button
          variant="ghost"
          className="border border-[oklch(0.85_0.2_195/0.3)] text-[oklch(0.85_0.2_195)] hover:bg-[oklch(0.85_0.2_195/0.08)] text-xs"
          onClick={() => setStatus("idle")}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium text-foreground/70">
            Full Name <span className="text-[oklch(0.75_0.25_350)]">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Jane Smith"
            className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-foreground placeholder-gray-400 outline-none focus:border-[oklch(0.85_0.2_195/0.6)] focus:ring-1 focus:ring-[oklch(0.85_0.2_195/0.3)] transition-colors duration-150"
          />
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium text-foreground/70">
            Email Address <span className="text-[oklch(0.75_0.25_350)]">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jane@example.com"
            className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-foreground placeholder-gray-400 outline-none focus:border-[oklch(0.85_0.2_195/0.6)] focus:ring-1 focus:ring-[oklch(0.85_0.2_195/0.3)] transition-colors duration-150"
          />
        </div>
      </div>

      {/* Subject */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-medium text-foreground/70">
          Subject <span className="text-[oklch(0.75_0.25_350)]">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-foreground outline-none focus:border-[oklch(0.85_0.2_195/0.6)] focus:ring-1 focus:ring-[oklch(0.85_0.2_195/0.3)] transition-colors duration-150"
        >
          <option value="" disabled className="text-foreground/30">
            Select a topic...
          </option>
          <option value="adoption">Adoption Inquiry</option>
          <option value="foster">Fostering Interest</option>
          <option value="volunteer">Volunteer Interest</option>
          <option value="surrender">Owner Surrender</option>
          <option value="donation">Donation / Partnership</option>
          <option value="events">Events</option>
          <option value="media">Media / Press</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-foreground/70">
          Message <span className="text-[oklch(0.75_0.25_350)]">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Tell us how we can help..."
          className="resize-none rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-foreground placeholder-gray-400 outline-none focus:border-[oklch(0.85_0.2_195/0.6)] focus:ring-1 focus:ring-[oklch(0.85_0.2_195/0.3)] transition-colors duration-150"
        />
      </div>

      <Button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[oklch(0.85_0.2_195/0.2)] border border-[oklch(0.85_0.2_195/0.5)] text-[oklch(0.85_0.2_195)] hover:bg-[oklch(0.85_0.2_195/0.3)] glow-cyan font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
        variant="ghost"
      >
        {status === "sending" ? (
          <>Sending...</>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden grid-bg py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-[oklch(0.85_0.2_195/0.06)] blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 h-64 w-64 rounded-full bg-[oklch(0.7_0.25_300/0.05)] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Badge
            variant="outline"
            className="mb-6 border-[oklch(0.85_0.2_195/0.4)] bg-[oklch(0.85_0.2_195/0.08)] text-[oklch(0.85_0.2_195)] px-4 py-1.5 text-xs tracking-widest uppercase"
          >
            <MessageSquare className="mr-1.5 h-3 w-3" />
            Get In Touch
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
            Contact{" "}
            <span className="text-[oklch(0.85_0.2_195)] text-glow-cyan">Us</span>
          </h1>

          <p className="mt-6 text-lg leading-relaxed text-foreground/70 md:text-xl max-w-2xl mx-auto">
            Have a question, want to get involved, or need support for a dog in need?
            We&apos;d love to hear from you. Our all-volunteer team does its best to
            respond within 1–2 business days.
          </p>
        </div>
      </section>

      {/* ── Form + Sidebar ────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">

            {/* ── Contact Form ── */}
            <div>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-foreground">
                  Send Us a <span className="text-[oklch(0.85_0.2_195)] text-glow-cyan">Message</span>
                </h2>
                <p className="mt-2 text-sm text-foreground/55">
                  All fields marked with <span className="text-[oklch(0.75_0.25_350)]">*</span> are required.
                </p>
              </div>

              <Card className="border-gray-200 bg-white shadow-md">
                <CardContent className="p-6 md:p-8">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* ── Sidebar ── */}
            <div className="flex flex-col gap-5">
              {/* Contact Info */}
              <Card className="border-[oklch(0.85_0.2_195/0.4)] bg-white shadow-md">
                <CardContent className="p-6">
                  <h3 className="text-sm font-bold text-[oklch(0.85_0.2_195)] mb-4 uppercase tracking-widest">
                    Contact Info
                  </h3>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-[oklch(0.85_0.2_195/0.7)]" />
                      <div>
                        <p className="text-xs font-semibold text-foreground/80 mb-0.5">Mailing Address</p>
                        <p className="text-sm text-foreground/60">
                          P.O. Box 13064<br />
                          Fort Wayne, IN 46867
                        </p>
                      </div>
                    </div>

                    <Separator className="bg-[oklch(0.85_0.2_195/0.1)]" />

                    <div className="flex items-start gap-3">
                      <Mail className="h-4 w-4 shrink-0 mt-0.5 text-[oklch(0.85_0.2_195/0.7)]" />
                      <div>
                        <p className="text-xs font-semibold text-foreground/80 mb-0.5">Email</p>
                        <a
                          href="mailto:fwpitbullcoalition@gmail.com"
                          className="text-sm text-[oklch(0.85_0.2_195)] hover:underline"
                        >
                          fwpitbullcoalition@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="border-gray-200 bg-white shadow-sm">
                <CardContent className="p-6">
                  <h3 className="text-sm font-bold text-foreground/70 mb-4 uppercase tracking-widest">
                    Follow Us
                  </h3>
                  <div className="flex flex-col gap-3">
                    <Link
                      href="https://www.facebook.com/fwpitbullcoalition"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 text-sm text-foreground/70 hover:border-[oklch(0.85_0.2_195/0.4)] hover:text-[oklch(0.85_0.2_195)] transition-all duration-150"
                    >
                      <Facebook className="h-4 w-4 text-[oklch(0.6_0.1_240)]" />
                      Facebook
                      <ArrowRight className="ml-auto h-3.5 w-3.5 opacity-40" />
                    </Link>
                    <Link
                      href="https://www.instagram.com/fwpitbullcoalition"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-lg border border-gray-200 p-3 text-sm text-foreground/70 hover:border-[oklch(0.75_0.25_350/0.4)] hover:text-[oklch(0.75_0.25_350)] transition-all duration-150"
                    >
                      <Instagram className="h-4 w-4 text-[oklch(0.75_0.25_350/0.8)]" />
                      Instagram
                      <ArrowRight className="ml-auto h-3.5 w-3.5 opacity-40" />
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="border-gray-200 bg-white shadow-sm overflow-hidden">
                <div className="relative h-48 bg-gradient-to-br from-sky-50 to-purple-50 flex flex-col items-center justify-center gap-2">
                  <div className="absolute inset-0 grid-bg opacity-30" />
                  <MapPin className="relative h-10 w-10 text-[oklch(0.85_0.2_195/0.5)] float-animation" />
                  <p className="relative text-xs text-foreground/40 font-mono">Fort Wayne, IN</p>
                  <p className="relative text-[10px] text-foreground/25">P.O. Box 13064 — 46867</p>
                </div>
                <CardContent className="p-4">
                  <p className="text-xs text-foreground/50 text-center">
                    We are a foster-based organization — no physical shelter location.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-widest text-[oklch(0.7_0.25_300)] mb-3">
              Quick Answers
            </p>
            <h2 className="text-2xl font-bold text-foreground md:text-3xl">
              Frequently Asked{" "}
              <span className="text-[oklch(0.7_0.25_300)] text-glow-purple">Questions</span>
            </h2>
          </div>

          <Card className="border-gray-200 bg-white shadow-sm">
            <CardContent className="px-6 py-2 md:px-8">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </CardContent>
          </Card>

          <p className="mt-6 text-center text-sm text-foreground/45">
            Still have questions?{" "}
            <a
              href="mailto:fwpitbullcoalition@gmail.com"
              className="text-[oklch(0.85_0.2_195)] hover:underline"
            >
              Email us directly
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
