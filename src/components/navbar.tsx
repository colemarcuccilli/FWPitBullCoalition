"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dog, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Events", href: "/events" },
  { label: "Adopt", href: "/adopt" },
  { label: "Shop", href: "/shop" },
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Resources", href: "/resources" },
  { label: "Honor Page", href: "/honor" },
  { label: "Contact Us", href: "/contact" },
];

function NavLink({
  href,
  label,
  active,
  onClick,
}: {
  href: string;
  label: string;
  active: boolean;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={cn(
        "relative text-sm font-medium tracking-wide transition-colors duration-200 group",
        active
          ? "text-neon-cyan"
          : "text-gray-600 hover:text-neon-cyan"
      )}
    >
      {label}
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-neon-cyan transition-transform duration-300 group-hover:scale-x-100",
          active && "scale-x-100"
        )}
      />
    </Link>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50",
        "bg-white/90 backdrop-blur-xl backdrop-saturate-150",
        "border-b border-gray-200",
        "shadow-sm"
      )}
    >
      {/* Top accent line — animated gradient */}
      <div className="h-px w-full gradient-border" />

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 group shrink-0"
          aria-label="Fort Wayne Pit Bull Coalition — Home"
        >
          <div
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-lg",
              "bg-neon-cyan/10 border border-neon-cyan/30",
              "transition-all duration-300 group-hover:bg-neon-cyan/20 group-hover:border-neon-cyan/60",
              "glow-cyan"
            )}
          >
            <Dog className="h-5 w-5 text-neon-cyan" strokeWidth={1.75} />
          </div>
          <span
            className={cn(
              "font-mono text-base font-bold tracking-[0.15em] uppercase",
              "text-neon-cyan"
            )}
          >
            FWPBC
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8"
          aria-label="Primary navigation"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              href={link.href}
              label={link.label}
              active={
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href)
              }
            />
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          <Link href="/donate">
            <Button
              size="sm"
              className={cn(
                "font-semibold tracking-wide text-xs uppercase",
                "bg-neon-cyan/15 border border-neon-cyan/40 text-neon-cyan",
                "hover:bg-neon-cyan/25 hover:border-neon-cyan/70 hover:text-neon-cyan",
                "transition-all duration-200 glow-cyan"
              )}
              variant="ghost"
            >
              Donate
            </Button>
          </Link>
          <Link href="/adopt">
            <Button
              size="sm"
              className={cn(
                "font-semibold tracking-wide text-xs uppercase",
                "bg-neon-purple/15 border border-neon-purple/40 text-neon-purple",
                "hover:bg-neon-purple/25 hover:border-neon-purple/70 hover:text-neon-purple",
                "transition-all duration-200 glow-purple"
              )}
              variant="ghost"
            >
              Adopt
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="lg:hidden">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <Button
                  variant="ghost"
                  size="icon-sm"
                  aria-label="Open navigation menu"
                  className="border border-neon-cyan/30 text-neon-cyan hover:bg-neon-cyan/10 hover:border-neon-cyan/60"
                />
              }
            >
              <Menu className="h-5 w-5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              className={cn(
                "w-[280px] sm:max-w-[320px]",
                "bg-white backdrop-blur-xl border-l border-gray-200",
                "flex flex-col"
              )}
            >
              <SheetHeader className="border-b border-gray-200 pb-4">
                <SheetTitle className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neon-cyan/10 border border-neon-cyan/30">
                    <Dog className="h-4 w-4 text-neon-cyan" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-sm font-bold tracking-[0.15em] uppercase text-neon-cyan">
                    FWPBC
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav
                className="flex flex-col gap-1 py-4 px-2 flex-1"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link) => {
                  const active =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium",
                        "transition-all duration-150",
                        active
                          ? "bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30"
                          : "text-gray-600 hover:bg-neon-cyan/5 hover:text-neon-cyan border border-transparent"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </nav>

              {/* Mobile CTA buttons */}
              <div className="flex flex-col gap-2 px-2 pb-4 pt-2 border-t border-gray-200">
                <Link href="/donate" className="w-full" onClick={() => setMobileOpen(false)}>
                  <Button
                    className={cn(
                      "w-full font-semibold tracking-wide text-xs uppercase",
                      "bg-neon-cyan/15 border border-neon-cyan/40 text-neon-cyan",
                      "hover:bg-neon-cyan/25 hover:border-neon-cyan/70"
                    )}
                    variant="ghost"
                  >
                    Donate Now
                  </Button>
                </Link>
                <Link href="/adopt" className="w-full" onClick={() => setMobileOpen(false)}>
                  <Button
                    className={cn(
                      "w-full font-semibold tracking-wide text-xs uppercase",
                      "bg-neon-purple/15 border border-neon-purple/40 text-neon-purple",
                      "hover:bg-neon-purple/25 hover:border-neon-purple/70"
                    )}
                    variant="ghost"
                  >
                    Adopt a Dog
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
