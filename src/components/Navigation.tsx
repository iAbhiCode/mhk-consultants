"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/demo" },
  { label: "About", href: "/about" },
  { label: "Study Visa", href: "/study-visa" },
  { label: "Coaching", href: "/coaching" },
  { label: "Visitor Visa", href: "/vistor-visa" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/demo" className="flex items-center space-x-2">
          {/* <Image 
            // src="/images/logo.png" 
            src="/images/Tech brand (1).png"
            alt="StartPro Logo" 
            width={100} 
            height={100} 
            priority
          /> */}
          <span className="text-xl font-semibold text-[#0F4C5C]">MHK CONSULTANT</span>
        </Link>



        {/* <Link href="/demo" className="flex items-center space-x-2">
          <div className="w-8 h-8">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 8h16v16H8V8z" fill="#0F4C5C"/>
              <path d="M24 8h-8v8h8V8z" fill="#9FE870"/>
            </svg>
          </div>
          <span className="text-xl font-semibold text-[#0F4C5C]">StartPro</span>
        </Link> */}

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onMouseOver={() => setHoveredPath(item.href)}
              className="relative px-3 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              <span>{item.label}</span>
              {hoveredPath === item.href && (
                <motion.div
                  className="absolute inset-0 bg-slate-100 rounded-md -z-10"
                  layoutId="navbar-hover"
                  transition={{
                    type: "spring",
                    bounce: 0.25,
                    stiffness: 130,
                    damping: 15,
                  }}
                />
              )}
            </Link>
          ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className="hidden md:flex h-9 text-[#0F4C5C] hover:text-[#0F4C5C]/80 hover:bg-slate-100"
          >
            Free consultation
          </Button>
          <Button
            className="h-9 px-4 bg-[#0F4C5C] hover:bg-[#0F4C5C]/90 text-white rounded-full"
          >
            Sign up
          </Button>
        </div>
      </nav>
    </header>
  );
} 