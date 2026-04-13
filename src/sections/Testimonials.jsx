import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Finance Manager",
    text: "LCK helped us quickly find highly skilled finance professionals who perfectly matched our requirements.",
  },
  {
    name: "Anita Verma",
    role: "HR Director",
    text: "The hiring process became seamless and efficient. Their expertise in talent sourcing is unmatched.",
  },
  {
    name: "David Lee",
    role: "Tech Lead",
    text: "We scaled our engineering team faster than ever with top-quality candidates from LCK.",
  },
  {
    name: "Priya Nair",
    role: "Marketing Head",
    text: "Exceptional service and great understanding of our marketing needs. Highly recommend LCK.",
  },
  {
    name: "Arjun Patel",
    role: "Operations Manager",
    text: "Their ability to find the right talent quickly made a huge difference to our business.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Explore testimonials
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            See how companies and professionals trust LCK to build stronger
            teams and careers.
          </p>
        </div>

        {/* Scroll Area */}
        <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar scroll-smooth">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="min-w-[320px] max-w-[320px] bg-white rounded-3xl p-6 border border-gray-200 shadow-sm hover:shadow-xl transition relative overflow-hidden"
            >
              {/* subtle gradient glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-40"></div>

              {/* Quote mark */}
              <div className="text-5xl text-blue-900 opacity-10 font-bold absolute top-4 right-6">
                “”
              </div>

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed mb-6 relative z-10">
                {item.text}
              </p>

              {/* User */}
              <div className="flex items-center gap-3 relative z-10">
                {/* Avatar */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-semibold text-sm">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-gray-900">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-500">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
