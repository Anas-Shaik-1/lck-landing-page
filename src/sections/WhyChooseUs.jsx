import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        {/* 2 Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-4"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-16"
            >
              Why choose
              <span className="ps-4 text-[#1c398e]">LCK</span>
            </motion.h2>
            <h3 className="text-3xl md:text-5xl text-gray-900 leading-tight">
              #1
            </h3>

            {/* <p className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight"> */}
            <p className="font-bold text-2xl text-cyan-600 font-semibold">
              On Forbes’ List of America’s Best Professional Recruiting Firms
              for 7 consecutive years
            </p>

            <p className="text-gray-600 text-sm">
              Recognized globally for excellence, trust, and consistent delivery
              of top talent solutions.
            </p>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid gap-8"
          >
            {/* Stat 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-md transition">
              <p className="text-4xl md:text-5xl font-bold text-blue-900">
                2M+
              </p>
              <p className="mt-2 text-gray-600 text-lg">
                Contract and permanent placements and counting
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:shadow-md transition">
              <p className="text-4xl md:text-5xl font-bold text-blue-900">
                300+
              </p>
              <p className="mt-2 text-gray-600 text-lg">
                Locations to access local expertise near you, or around the
                world
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
