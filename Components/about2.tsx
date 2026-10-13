
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
    role: "Group General Manager",
    name: "Mr. Reda Salem",
    image: "/Reda3 copy.jpg",
    speech:
      "At Optimized Holding, we are driven by a commitment not only to meet but to exceed the highest standards of excellence, reflecting the values of Qatar’s dynamic business landscape. Embracing the spirit of Qatar’s National Vision 2030 for a diversified and innovative economy, we continuously push the boundaries of what is possible. Through a culture of perseverance, collaboration, creativity, and cutting-edge innovation, we aim to create lasting value for our stakeholders and contribute significantly to the growth of Qatar’s key industries.",
  },
];

export default function About2() {
  return (
    <section
      id="leadership"
      className="overflow-hidden bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">
            Leadership Messages
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-950 sm:text-4xl md:text-5xl">
            Guided by vision and experience
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-600 md:text-lg md:leading-8">
            Messages from the leadership of Optimized Holding reflecting our
            values, ambitions, and commitment to Qatar&apos;s continued growth.
          </p>
        </div>

        {/* Leadership cards */}
        <div className="mt-14 space-y-20 md:mt-20 md:space-y-28">
          {leaders.map((leader, index) => (
            <article
              key={leader.name}
              className="grid items-center gap-9 lg:grid-cols-2 lg:gap-14 xl:gap-20"
            >
              {/* Portrait */}
              <div
                className={`relative min-w-0 ${
                  index % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative isolate overflow-hidden rounded-[1.5rem] bg-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.14)] sm:rounded-[2rem]">
                  {/* Consistent portrait proportions */}
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={leader.image}
                      alt={`Portrait of ${leader.name}`}
                      fill
                      sizes="(max-width: 1023px) 100vw, (max-width: 1279px) 50vw, 600px"
                      priority={index === 0}
                      className={
                        index === 1
                          ? "object-cover object-[center_20%]"
                          : "object-cover object-[center_15%]"
                      }
                    />

                    {/* Readable text overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7 md:p-8">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-red-300 sm:text-sm sm:tracking-[0.2em]">
                        {leader.role}
                      </p>

                      <h3 className="mt-2 max-w-lg text-xl font-bold leading-snug text-white sm:text-2xl">
                        {leader.name}
                      </h3>
                    </div>
                  </div>
                </div>
              </div>

              {/* Leadership message */}
              <div
                className={`min-w-0 ${
                  index % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#B91C1C]/10 text-[#B91C1C] sm:h-14 sm:w-14">
                  <Quote className="h-6 w-6 sm:h-7 sm:w-7" />
                </div>

                <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-[#B91C1C] sm:mt-7 sm:text-sm sm:tracking-[0.22em]">
                  {leader.role}&apos;s Message
                </p>

                <h3 className="mt-3 text-2xl font-bold leading-tight text-gray-950 sm:text-3xl md:text-4xl">
                  {leader.name}
                </h3>

                <blockquote className="mt-6 border-l-[3px] border-[#B91C1C] pl-5 text-base leading-8 text-gray-600 sm:pl-6 sm:text-[17px] sm:leading-9">
                  &ldquo;{leader.speech}&rdquo;
                </blockquote>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
