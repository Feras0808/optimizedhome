import Image from "next/image";
import {
  BadgeDollarSign,
  BadgeCheck,
  Clock3,
  Leaf,
  Settings2,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

const features = [
  {
    title: "Punctuality",
    description:
      "We value our clients' time and ensure that every assignment is carried out according to the agreed schedule.",
    icon: Clock3,
  },
  {
    title: "Professionally Trained Staff",
    description:
      "Our personnel are carefully selected, trained, and supervised to maintain consistently high service standards.",
    icon: Users,
  },
  {
    title: "Affordable",
    description:
      "We provide competitive and practical service solutions without compromising quality or professionalism.",
    icon: BadgeDollarSign,
  },
  {
    title: "Reliable",
    description:
      "Our clients can depend on our teams to perform their duties with care, consistency, and responsibility.",
    icon: BadgeCheck,
  },
  {
    title: "Highest Level of Service Guarantee",
    description:
      "We are committed to maintaining excellent service quality and achieving complete client satisfaction.",
    icon: Star,
  },
  {
    title: "Flexibility and Customization",
    description:
      "Our solutions are adapted to each client's operational requirements, schedule, and service expectations.",
    icon: Settings2,
  },
  {
    title: "Safety and Eco-Friendliness",
    description:
      "We prioritize safe working practices and responsible methods that support cleaner and healthier environments.",
    icon: Leaf,
  },
  {
    title: "Trustworthiness and Security",
    description:
      "Our staff operate with integrity, discretion, and respect for every client's property and privacy.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="whychooseus"
      className="scroll-mt-28 overflow-hidden bg-[#F7F7F7] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">
            What Distinguishes Us
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            The standards behind
            <span className="block text-[#B91C1C]">
              every service we provide
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our reputation is built on disciplined service, trained personnel,
            flexible solutions, and a strong commitment to quality, safety,
            and client satisfaction.
          </p>
        </div>

        <div className="mt-14 grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative lg:sticky lg:top-28">
            <div className="relative min-h-[720px] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/_HMD0579.JPG"
                alt="Optimized Home professionally trained staff member"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-8 text-white md:p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-300">
                  Service Excellence
                </p>

                <h3 className="mt-3 max-w-md text-3xl font-bold leading-tight">
                  Professional people delivering dependable results.
                </h3>

                <p className="mt-4 max-w-md leading-7 text-white/90">
                  Every team member is selected, trained, and supervised to
                  represent the values and standards of Optimized Home.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="group flex min-h-[250px] flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#B91C1C]/30 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#B91C1C]/10 text-[#B91C1C] transition group-hover:bg-[#B91C1C] group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-bold leading-6 text-gray-900">
                    {feature.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-gray-600">
                    {feature.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}