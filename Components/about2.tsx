import Image from "next/image";
import { Quote } from "lucide-react";

const leaders = [
  {
    role: "Chairman",
    name: "H.E. Sheikh Mohamed Bin Faisal Al-Thani",
    image: "/chairman.jpg",
    speech:
      "Qatar’s unprecedented development during the last decade has motivated businessmen and entrepreneurs to pursue their business ambitions. Driven by the National Vision 2030, the country has transformed into a field of investment opportunities in multiple sectors. The Government has been committed to encouraging independence from hydrocarbon resources by seeking greater participation and partnership from the private sector to diversify and develop the country’s economy. These factors, along with my passion for business, inspired by being involved in the family business alongside my father from a young age, encouraged me to establish Optimized Holding—a company offering innovative products and services that cater to the evolving and increasingly sophisticated needs of the market.",
  },
  {
    role: "General Manager",
    name: "Mr. Reda Salem",
    image: "/Reda.jpg",
    speech:
      "At Optimized Holding, we are driven by a commitment not only to meet but to exceed the highest standards of excellence, reflecting the values of Qatar’s dynamic business landscape. Embracing the spirit of Qatar’s National Vision 2030 for a diversified and innovative economy, we continuously push the boundaries of what is possible. Through a culture of perseverance, collaboration, creativity, and cutting-edge innovation, we aim to create lasting value for our stakeholders and contribute significantly to the growth of Qatar’s key industries.",
  },
];

export default function About2() {
  return (
    <section id="leadership" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">
            Leadership Messages
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
            Guided by vision and experience
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Messages from the leadership of Optimized Holding reflecting our
            values, ambitions, and commitment to Qatar&apos;s continued growth.
          </p>
        </div>

        <div className="mt-16 space-y-20">
          {leaders.map((leader, index) => (
            <article
              key={leader.name}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={`relative overflow-hidden rounded-[2rem] shadow-2xl ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative h-[520px]">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-7 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-300">
                      {leader.role}
                    </p>

                    <h3 className="mt-2 text-2xl font-bold">
                      {leader.name}
                    </h3>
                  </div>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B91C1C]/10 text-[#B91C1C]">
                  <Quote className="h-7 w-7" />
                </div>

                <p className="mt-8 text-sm font-semibold uppercase tracking-[0.22em] text-[#B91C1C]">
                  {leader.role}&apos;s Message
                </p>

                <h3 className="mt-3 text-3xl font-bold leading-tight text-gray-950 md:text-4xl">
                  {leader.name}
                </h3>

                <blockquote className="mt-7 border-l-4 border-[#B91C1C] pl-6 text-lg leading-9 text-gray-600">
                  “{leader.speech}”
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}