import Link from "next/link";
import { Dog, Mail, MapPin, Facebook, Youtube, Instagram } from "lucide-react";
import { cn } from "@/lib/utils";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Upcoming Events", href: "/events" },
  { label: "Adopt a Dog", href: "/adopt" },
  { label: "Shop", href: "/shop" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Resources", href: "/resources" },
  { label: "Honor Page", href: "/honor" },
  { label: "Contact Us", href: "/contact" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/FWPitBullCoalition",
    icon: Facebook,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@FWPitBullCoalition",
    icon: Youtube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/fwpitbullcoalition",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 border-t border-slate-800">
      {/* Ambient glow blobs */}
      <div
        className="absolute -top-24 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.85 0.2 195 / 0.06) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute -top-16 right-1/4 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, oklch(0.7 0.25 300 / 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Top neon accent line */}
      <div className="h-px w-full gradient-border" />

      <div className="relative mx-auto max-w-7xl px-4 pt-12 pb-8 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Column 1 — Brand */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="flex items-center gap-2.5 group w-fit"
              aria-label="Fort Wayne Pit Bull Coalition — Home"
            >
              <div
                className={cn(
                  "flex h-10 w-10 items-center justify-center rounded-lg",
                  "bg-neon-cyan/10 border border-neon-cyan/30",
                  "transition-all duration-300 group-hover:bg-neon-cyan/20 group-hover:border-neon-cyan/60",
                  "glow-cyan"
                )}
              >
                <Dog className="h-5 w-5 text-neon-cyan" strokeWidth={1.75} />
              </div>
              <span className="font-mono text-base font-bold tracking-[0.15em] uppercase text-neon-cyan text-glow-cyan">
                FWPBC
              </span>
            </Link>

            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              The Fort Wayne Pit Bull Coalition is a community-driven 501(c)(3)
              nonprofit championing pit bull-type dogs through education,
              advocacy, and love — because every dog deserves a chance.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg",
                    "bg-slate-800 border border-slate-700",
                    "text-slate-400",
                    "transition-all duration-200",
                    "hover:bg-neon-cyan/10 hover:border-neon-cyan/40 hover:text-neon-cyan hover:scale-105"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            {/* 501(c)(3) badge */}
            <div
              className={cn(
                "inline-flex w-fit items-center gap-2 rounded-lg px-3 py-1.5",
                "bg-neon-purple/10 border border-neon-purple/30",
                "text-xs font-medium text-neon-purple"
              )}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-neon-purple pulse-glow" />
              501(c)(3) Nonprofit Organization
            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div className="flex flex-col gap-5">
            <h3
              className={cn(
                "text-xs font-bold uppercase tracking-[0.2em]",
                "text-neon-cyan text-glow-cyan"
              )}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className={cn(
                      "group flex items-center gap-2 text-sm text-slate-400",
                      "transition-colors duration-150 hover:text-neon-cyan"
                    )}
                  >
                    <span
                      className={cn(
                        "h-px w-4 bg-slate-600 transition-all duration-200",
                        "group-hover:w-6 group-hover:bg-neon-cyan"
                      )}
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div className="flex flex-col gap-5">
            <h3
              className={cn(
                "text-xs font-bold uppercase tracking-[0.2em]",
                "text-neon-cyan text-glow-cyan"
              )}
            >
              Contact & Location
            </h3>

            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-neon-cyan/10 border border-neon-cyan/20">
                  <MapPin className="h-3.5 w-3.5 text-neon-cyan" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Mailing Address
                  </span>
                  <address className="not-italic text-sm text-slate-300 leading-relaxed">
                    P.O. Box 13064
                    <br />
                    Fort Wayne, IN 46867
                  </address>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-neon-cyan/10 border border-neon-cyan/20">
                  <Mail className="h-3.5 w-3.5 text-neon-cyan" />
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="text-xs font-medium uppercase tracking-wide text-slate-400">
                    Email
                  </span>
                  <a
                    href="mailto:fwpitbullcoalition@gmail.com"
                    className="text-sm text-slate-300 hover:text-neon-cyan transition-colors duration-150 break-all"
                  >
                    fwpitbullcoalition@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            {/* Donate CTA */}
            <Link
              href="/donate"
              className={cn(
                "mt-2 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5",
                "bg-neon-pink/10 border border-neon-pink/30 text-neon-pink",
                "text-xs font-bold uppercase tracking-widest",
                "transition-all duration-200",
                "hover:bg-neon-pink/20 hover:border-neon-pink/60",
                "glow-pink"
              )}
            >
              Support Our Mission
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px w-full bg-gradient-to-r from-transparent via-slate-600 to-transparent" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-slate-400 text-center sm:text-left">
            &copy; {new Date().getFullYear()} Fort Wayne Pit Bull Coalition.
            All rights reserved.
          </p>
          <p className="text-xs text-slate-400 text-center sm:text-right">
            A 501(c)(3) tax-exempt nonprofit &mdash; EIN on file.
            <br className="sm:hidden" />{" "}
            Donations may be tax-deductible.
          </p>
        </div>
      </div>
    </footer>
  );
}
