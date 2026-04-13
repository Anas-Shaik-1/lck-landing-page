import { motion } from "framer-motion";

const insights = [
  {
    title: "2026 Salary Guide",
    description:
      "Explore the latest data for roles across 7 professional fields and what you should pay or earn in local and national markets.",
    image: "salary-guide.png",
  },
  {
    title: "Demand for Skilled Talent",
    description:
      "Check out our Demand for Skilled Talent report to learn about employers’ hiring plans and needs.",
    image: "demand-for-skill-talent.png",
  },
  {
    title: "AI in recruiting",
    description:
      "AI is transforming hiring by adding complexity. Navigate the changing landscape with our AI in Recruiting insights.",
    image: "ai-in-recruiting.png",
  },
  {
    title: "Tech insights and talent strategies",
    description:
      "Discover how to navigate emerging tech skills trends to deliver on critical business priorities.",
    image: "tech-insight-talent-strategies.png",
  },
];

export default function InsightsSection() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Hiring trends and insights
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            Stay ahead with expert insights, research, and hiring trends shaping
            the future of work.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {insights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-200 hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="h-40 overflow-hidden">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-900 transition">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>

                {/* Optional CTA */}
                <div className="mt-4">
                  <span className="text-blue-900 text-sm font-medium group-hover:underline cursor-pointer">
                    Learn more →
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
