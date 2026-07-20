import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const features = [
  "Established in 2014",
  "Professional & Certified Staff",
  "Customized Facility Solutions",
  "International Quality Standards",
];

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl">
          <Image
            src="/_HMD1696.JPG"
            alt="Optimized Home"
            width={700}
            height={800}
            className="h-[600px] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">
            About Us
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
            Excellence in Fit-Out, Facility Management &
            <span className="block text-[#B91C1C]">
              Hospitality
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Optimized Home for Trading & Services offers a comprehensive range
            of professional housekeeping and facility management solutions
            tailored to meet the requirements of hospitality, residential,
            commercial, and corporate sectors throughout Qatar.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Since our establishment in 2014 as a subsidiary of Optimized
            Holding, we have built our reputation by providing reliable,
            customized, and high-quality services delivered by highly trained
            professionals who operate according to local and international
            standards.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="h-6 w-6 text-[#B91C1C]" />

                <span className="font-medium text-gray-700">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex gap-10">
            <div>
              <h3 className="text-4xl font-bold text-[#B91C1C]">
                10+
              </h3>
              <p className="mt-1 text-gray-600">
                Years Experience
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#B91C1C]">
                100%
              </h3>
              <p className="mt-1 text-gray-600">
                Client Satisfaction
              </p>
            </div>

            <div>
              <h3 className="text-4xl font-bold text-[#B91C1C]">
                24/7
              </h3>
              <p className="mt-1 text-gray-600">
                Support
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}