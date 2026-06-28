"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { WordmarkLink } from "./wordmark";
import { cn } from "@/lib/utils";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  const close = () => setOpen(false);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full bg-bg/85 backdrop-blur-md transition-colors duration-300",
        scrolled ? "border-b border-line" : "border-b border-transparent"
      )}
    >
      <div className="container-locked flex h-[68px] items-center justify-between lg:h-[80px]">
        <WordmarkLink />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              data-active={isActive(item.href)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link href="/contact" className="btn btn-outline">
            Start a project
            <span className="btn-arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>

        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-ink"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <div className="flex flex-col gap-[5px] w-6">
            <span
              className={cn(
                "block h-px bg-ink transition-transform duration-300",
                open && "translate-y-[6px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-px bg-ink transition-opacity duration-300",
                open && "opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-px bg-ink transition-transform duration-300",
                open && "-translate-y-[6px] -rotate-45"
              )}
            />
          </div>
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden border-t border-line bg-bg transition-[max-height,opacity] duration-300",
          open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav
          className="container-locked flex flex-col py-4"
          aria-label="Mobile"
        >
          {NAV.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={close}
              className="flex items-baseline justify-between border-b border-line py-4 text-ink"
              data-active={isActive(item.href)}
            >
              <span className="font-display text-2xl">{item.label}</span>
              <span className="text-eyebrow text-ink-3">
                0{i + 1}
              </span>
            </Link>
          ))}
          <Link href="/contact" onClick={close} className="btn mt-6 w-full">
            Start a project →
          </Link>
        </nav>
      </div>
    </header>
  );
}
