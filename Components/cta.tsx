import Link from "next/link";

export default function CTA() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="rounded-[2rem] bg-gray-950 px-7 py-10 text-white md:flex md:items-center md:justify-between md:px-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-400">
              Customized Service Plans
            </p>

            <h2 className="mt-3 text-3xl font-bold">
              Need a service package designed for your business?
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-gray-300">
              Contact our operations team to discuss staffing requirements,
              schedules, service scope, and customized solutions. We are ready
              to provide reliable, flexible, and professional services tailored
              to your business needs.
            </p>
          </div>

          <div className="mt-7 md:ml-10 md:mt-0">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-[#B91C1C] px-7 py-4 font-semibold text-white transition hover:bg-[#991B1B]"
            >
              Contact Our Team
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}