import {
  Building2,
  Mail,
  Phone,
  Send,
  UserRound,
} from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f7f7f7] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#B91C1C]">
            Contact Us
          </p>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-gray-950 md:text-5xl">
            Contact Us For More Information
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            Speak with our operations team about housekeeping, hospitality
            staffing, valet services, and customized service plans.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden rounded-[2rem] bg-gray-950 p-8 text-white shadow-xl md:p-10">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#B91C1C]/20 blur-3xl" />

            <div className="relative">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-red-400">
                Optimized Home
              </p>

              <h3 className="mt-4 text-3xl font-bold leading-tight">
                Trading & Services
              </h3>

              <p className="mt-5 max-w-md leading-7 text-gray-300">
                Our team is ready to provide reliable and customized service
                solutions based on your operational requirements.
              </p>

              <div className="mt-10 space-y-7">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-red-400">
                    <Building2 className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Company</p>
                    <p className="mt-1 font-semibold leading-6 text-white">
                      Optimized Home for Trading & Services
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-red-400">
                    <UserRound className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Contact Person</p>
                    <p className="mt-1 font-semibold text-white">
                      Ms. Ayat Jebrel
                    </p>
                    <p className="mt-1 text-sm text-gray-400">
                      Sales Executive
                    </p>
                  </div>
                </div>

                <a
                  href="tel:+97455671626"
                  className="flex gap-4 rounded-2xl transition hover:bg-white/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-red-400">
                    <Phone className="h-5 w-5" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-400">Phone</p>
                    <p className="mt-1 font-semibold text-white">
                      +974 5021 2072
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@optimizedholding.com.qa"
                  className="flex gap-4 rounded-2xl transition hover:bg-white/5"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-red-400">
                    <Mail className="h-5 w-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="mt-1 break-all font-semibold text-white">
                     ayat.jebrel@optimizedhome.com.qa
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-lg md:p-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#B91C1C]">
                Send an Inquiry
              </p>

              <h3 className="mt-3 text-3xl font-bold text-gray-950">
                Tell us how we can help
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                Complete the form and our team will contact you as soon as
                possible.
              </p>
            </div>

            <form className="mt-8 space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#B91C1C] focus:bg-white focus:ring-4 focus:ring-[#B91C1C]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+974"
                    className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#B91C1C] focus:bg-white focus:ring-4 focus:ring-[#B91C1C]/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@company.com"
                  className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#B91C1C] focus:bg-white focus:ring-4 focus:ring-[#B91C1C]/10"
                />
              </div>

              <div>
                <label
                  htmlFor="service"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Required Service
                </label>

                <select
                  id="service"
                  name="service"
                  defaultValue=""
                  className="h-14 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 text-sm text-gray-900 outline-none transition focus:border-[#B91C1C] focus:bg-white focus:ring-4 focus:ring-[#B91C1C]/10"
                >
                  <option value="" disabled>
                    Select a service
                  </option>
                  <option value="housekeeping">Housekeeping</option>
                  <option value="valet">Valet Services</option>
                  <option value="hospitality">
                    Hospitality Staff for Events
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your requirements"
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#B91C1C] focus:bg-white focus:ring-4 focus:ring-[#B91C1C]/10"
                />
              </div>

              <button
                type="submit"
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-[#B91C1C] px-6 font-semibold text-white transition hover:bg-[#991B1B]"
              >
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}