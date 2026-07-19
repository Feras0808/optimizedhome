import Image from "next/image";
import { ArrowUpRight, Sparkles, UsersRound, Sofa, Wrench} from "lucide-react";

const services = [
  {
    title: "Furniture Supply & Installation",
    description:
      "End-to-end furniture procurement, delivery, and professional installation services tailored to offices, hotels, commercial spaces, and residential properties.",
    image: "/_HMD0601.JPG",
    icon: Sofa,
  },
  {
    title: "MEP Services",
    description:
      "Reliable mechanical, electrical, and plumbing solutions including installation, maintenance, repairs, and system optimization for all types of facilities.",
    image: "/_HMD1888.JPG",
    icon: Wrench,
  },
  {
    title: "Housekeeping",
    description:
      "Reliable housekeeping professionals committed to cleanliness, attention to detail, safety, and consistently high standards.",
    image: "/_HMD1539.JPG",
    icon: Sparkles,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">
            Our Services
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Professional solutions tailored
            <span className="block text-[#B91C1C]">
              to your requirements
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our trained teams provide dependable service solutions for
            businesses, hospitality environments, residential properties, and
            events throughout Qatar.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="relative h-[360px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#B91C1C] shadow-lg">
                    <Icon className="h-7 w-7" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <h3 className="text-3xl font-bold">{service.title}</h3>
                  </div>
                </div>

                <div className="p-7">
                  <p className="leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 font-semibold text-[#B91C1C] transition hover:gap-3"
                  >
                    Request This Service
                    <ArrowUpRight className="h-5 w-5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        </div>
    </section>
  );
}