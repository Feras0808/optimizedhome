"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/Components/ui/button";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-white/20 bg-white/30 px-6 py-2 shadow-sm backdrop-blur-md md:px-12 md:py-3">
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Optimized Home Logo"
          width={120}
          height={60}
          priority
        />
      </Link>

      <div className="flex flex-wrap gap-4 font-medium text-gray-800 md:gap-6">
        <Link href="#about" className="transition hover:text-red-500">
          About
        </Link>

        <Link href="#whychooseus" className="transition hover:text-red-500">
          Mission & Vision
        </Link>

        <Link href="#services" className="transition hover:text-red-500">
          Services
        </Link>

        <Link href="#contact" className="transition hover:text-red-500">
          Contact
        </Link>
      </div>

      <Button className="transition-shadow duration-300 hover:shadow-lg hover:shadow-red-400/50">
        <a href="mailto:info@optimizedholding.com.qa?subject=Get%20Quote">
          Get Quote
        </a>
      </Button>
    </nav>
  );
}