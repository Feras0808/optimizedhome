import {
  Eye,
  Flag,
  History,
  Target,
} from "lucide-react";

const items = [
  {
    title: "Our History",
    icon: History,
    content: [
      `Optimized Home for Trading & Services is a duly registered and licensed company offering housekeeping and other services, founded in 2012 as a subsidiary of Optimized Holding. As a reputable provider of housekeeping and other services, the company is well-positioned to offer comprehensive facility management solutions that cater to the unique needs of its esteemed clients.`,
      `At Optimized Home for Trading & Services, we recognize the critical importance of resources, time management, and diligence in today's fast-paced environment. We are fully equipped and qualified to manage these demands with expertise. Our primary focus is client satisfaction, and we are equally committed to upholding and respecting the expectations of our clients.`,
    ],
  },
  {
    title: "Our Goals",
    icon: Target,
    content: [
      `Optimized Home for Trading & Services is a leading provider of premium housekeeping and other services in Qatar. We aim to offer comprehensive and tailored solutions, with all of our staff highly trained and certified according to internationally recognized standards in the housekeeping industry.`,
      `Our housekeeping team operates under the close supervision of experienced managers and directors, ensuring the highest levels of service quality. Our recruitment process is rigorous, selecting only top-tier candidates. Our goal is to lead the industry by delivering exceptional value and maintaining unwavering adherence to ethical and legal standards.`,
    ],
  },
  {
    title: "Our Vision",
    icon: Eye,
    content: [
      `Our vision is to become the premier provider of housekeeping services in Qatar, setting the standard for excellence, professionalism, and reliability in the industry.`,
      `We aim to continuously elevate the quality of our services through innovation, attention to detail, and a commitment to customer satisfaction. By fostering a team of highly skilled and certified professionals, we aspire to create a lasting impact on the lives of our clients, ensuring that their homes and spaces are maintained to the highest standards.`,
    ],
  },
  {
    title: "Our Mission",
    icon: Flag,
    content: [
      `Our mission is to deliver exceptional housekeeping solutions that exceed client expectations by providing personalized, reliable, and high-quality service.`,
      `We are dedicated to maintaining the highest standards of cleanliness, professionalism, and integrity while ensuring that our team is consistently trained and equipped with the best tools and knowledge in the industry. By fostering a culture of excellence and attention to detail, we aim to create comfortable, safe, and pristine environments for our clients and staff members, contributing to their overall well-being and satisfaction.`,
    ],
  },
];

export default function CompanyOverview() {
  return (
    <section
      id="company-overview"
      className="bg-[#F7F7F7] py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-[#B91C1C]">
            Who We Are
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
            Built on experience, guided by purpose
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our history, goals, vision, and mission reflect our commitment to
            delivering dependable and professional housekeeping and facility
            support services across Qatar.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className={`rounded-3xl border p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl md:p-10 ${
                  index === 0
                    ? "border-gray-200 bg-white"
                    : index === 1
                    ? "border-[#B91C1C]/20 bg-[#FFF7F7]"
                    : index === 2
                    ? "border-gray-800 bg-gray-900 text-white"
                    : "border-[#B91C1C] bg-[#B91C1C] text-white"
                }`}
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    index === 2
                      ? "bg-white/10 text-white"
                      : index === 3
                      ? "bg-white/15 text-white"
                      : "bg-[#B91C1C]/10 text-[#B91C1C]"
                  }`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-7 text-3xl font-bold">
                  {item.title}
                </h3>

                <div className="mt-6 space-y-5">
                  {item.content.map((paragraph) => (
                    <p
                      key={paragraph}
                      className={`leading-8 ${
                        index === 2 || index === 3
                          ? "text-white/85"
                          : "text-gray-600"
                      }`}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}