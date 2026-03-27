"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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
  { label: "Shop", href: "/shop" },
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
          ? "text-[#EE610E]"
          : "text-gray-600 hover:text-[#EE610E]"
      )}
    >
      {label}
      <span
        className={cn(
          "absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-[#EE610E] transition-transform duration-300 group-hover:scale-x-100",
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
          <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/assets/fwpbc-logo.avif"
              alt="FWPBC Logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
          </div>
          <span
            className={cn(
              "font-mono text-base font-bold tracking-[0.15em] uppercase",
              "text-[#EE610E]"
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
              className="font-semibold tracking-wide text-xs uppercase bg-[#EE610E]/10 border border-[#EE610E]/40 text-[#EE610E] hover:bg-[#EE610E]/20 hover:border-[#EE610E]/70 transition-all duration-200"
              variant="ghost"
            >
              Donate
            </Button>
          </Link>
          <Link href="/adopt">
            <Button
              size="sm"
              className="font-semibold tracking-wide text-xs uppercase bg-[#116dff]/10 border border-[#116dff]/40 text-[#116dff] hover:bg-[#116dff]/20 hover:border-[#116dff]/70 transition-all duration-200"
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
                  className="border border-[#EE610E]/30 text-[#EE610E] hover:bg-[#EE610E]/10 hover:border-[#EE610E]/60"
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
                  <div className="relative h-8 w-8">
                    <Image
                      src="/assets/fwpbc-logo.avif"
                      alt="FWPBC Logo"
                      fill
                      sizes="32px"
                      className="object-contain"
                    />
                  </div>
                  <span className="font-mono text-sm font-bold tracking-[0.15em] uppercase text-[#EE610E]">
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
                          ? "bg-[#EE610E]/10 text-[#EE610E] border border-[#EE610E]/30"
                          : "text-gray-600 hover:bg-[#EE610E]/5 hover:text-[#EE610E] border border-transparent"
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
                    className="w-full font-semibold tracking-wide text-xs uppercase bg-[#EE610E]/15 border border-[#EE610E]/40 text-[#EE610E] hover:bg-[#EE610E]/25 hover:border-[#EE610E]/70"
                    variant="ghost"
                  >
                    Donate Now
                  </Button>
                </Link>
                <Link href="/adopt" className="w-full" onClick={() => setMobileOpen(false)}>
                  <Button
                    className="w-full font-semibold tracking-wide text-xs uppercase bg-[#116dff]/15 border border-[#116dff]/40 text-[#116dff] hover:bg-[#116dff]/25 hover:border-[#116dff]/70"
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
