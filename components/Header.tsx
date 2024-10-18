"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

type Props = {};

type NavProps = {
  text: string;
  href: string;
};

const navLinks: NavProps[] = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "/about" },
  { text: "Tutorials", href: "/tutorials" },
];

const Header = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-gray-900 text-white`}
    >
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center" prefetch={false}>
          <h1 className="flex items-center">LOGO</h1>
        </Link>
        <nav className="hidden items-center gap-4 lg:gap-16 md:flex">
          {navLinks.map((link: NavProps) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors duration-200"
            >
              {link.text}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Link href="/calculator" className="px-8 py-2 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 text-white focus:ring-2 focus:ring-orange-400 hover:shadow-xl transition duration-200">
            Start Calculating!
          </Link>
        </div>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="md:hidden"
              aria-label="Toggle Navigation"
            >
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle Navigation</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="top"
            className="bg-background max-h-screen overflow-y-scroll"
          >
            <div className="grid gap-4 py-6 px-4 md:px-6">
              {navLinks.map((link: NavProps) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors duration-100"
                  onClick={handleLinkClick}
                >
                  {link.text}
                </Link>
              ))}
              <div className="mt-auto flex items-center gap-2">
                <Link href="/calculator" className="px-8 py-2 rounded-full bg-gradient-to-b from-orange-500 to-orange-600 text-white focus:ring-2 focus:ring-orange-400 hover:shadow-xl transition duration-200">
                  Start Calculating!
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;

function MenuIcon({ className }: { className: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}