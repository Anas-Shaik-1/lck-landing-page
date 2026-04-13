import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <div>
          {/* Badge */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-sm font-medium text-cyan-600 mb-4"
          >
            Trusted by thousands of companies worldwide
          </motion.p>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
          >
            Find the right talent or job faster with confidence
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-5 text-lg text-gray-600"
          >
            Connect with top employers and skilled professionals across
            industries. Build teams or careers that move you forward.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button className="bg-blue-900 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition">
              Find Jobs
            </button>

            <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-md hover:border-blue-800 hover:text-blue-800 transition">
              Hire Talent
            </button>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-10 bg-gray-50 border border-gray-200 rounded-xl p-4 flex flex-col md:flex-row gap-3"
          >
            <input
              type="text"
              placeholder="Job title or keyword"
              className="flex-1 bg-white border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />

            <input
              type="text"
              placeholder="Location"
              className="flex-1 bg-white border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-900"
            />

            <button className="bg-cyan-600 text-white px-6 py-3 rounded-md hover:bg-cyan-500 transition">
              Search
            </button>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl shadow-lg flex items-center justify-center">
            {/* <p className="text-gray-500">Hero Illustration / Image</p> */}
            <img src="hero.png" className="w-full h-full object-cover" alt="" />
          </div>

          {/* Floating card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-6 left-6 bg-white shadow-md rounded-xl p-4"
          >
            <p className="text-sm font-medium text-gray-800">
              10,000+ Jobs matched today
            </p>
            <p className="text-xs text-gray-500">Across multiple industries</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
