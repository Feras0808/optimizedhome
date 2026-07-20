import Image from "next/image";
import Link from "next/link";
import { Button } from "@/Components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src="/_HMD0601.JPG"
        alt="Optimized Home professional service team"
        fill
        priority
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/25" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 py-28 lg:px-10">
        <div className="max-w-3xl">
          <Image
  src="/Home.png"
  alt="Optimized Home"
  width={500}
  height={180}
  priority
  className="h-28 w-auto object-contain drop-shadow-2xl md:h-36 lg:h-44"
/>

          <h1 className="mt-7 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
             Fit-out, Facility Management &
            <span className="block text-[#DC2626]">
             Premium Hospitality
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-gray-100 md:text-xl">
           Providing professional Housekeeping, 
           MEP Services, and Furniture Supply & Installation solutions with a 
           commitment to quality, efficiency, and exceptional service across Qatar.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="#services">
              <Button className="h-auto rounded-md bg-[#B91C1C] px-8 py-4 text-base font-semibold text-white hover:bg-[#991B1B]">
                Our Services
              </Button>
            </Link>

            <Link href="#contact">
              <Button
                variant="outline"
                className="h-auto rounded-md border-white/60 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-md hover:bg-white hover:text-black"
              >
                Get a Free Quote
              </Button>
            </Link>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-1 gap-6 border-t border-white/20 pt-8 sm:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold text-[#DC2626]">10+</h2>
              <p className="mt-1 text-sm text-gray-300">Years Experience</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#DC2626]">500+</h2>
              <p className="mt-1 text-sm text-gray-300">
                Projects Completed
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[#DC2626]">24/7</h2>
              <p className="mt-1 text-sm text-gray-300">
                Customer Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}