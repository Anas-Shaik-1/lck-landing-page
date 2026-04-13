import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    name: "Finance & Accounting",
    description:
      "Access skilled professionals in financial analysis, auditing, compliance, and accounting operations.",
    jobs: ["Financial Analyst", "Accountant", "Auditor", "Tax Specialist"],
  },
  {
    name: "Technology",
    description:
      "Hire top tech talent across software development, cloud, cybersecurity, and data engineering.",
    jobs: [
      "Frontend Developer",
      "Backend Engineer",
      "DevOps Engineer",
      "Data Scientist",
    ],
  },
  {
    name: "Marketing & Creative",
    description:
      "Build impactful campaigns with experts in branding, digital marketing, and content creation.",
    jobs: [
      "Digital Marketer",
      "UI/UX Designer",
      "Content Strategist",
      "SEO Specialist",
    ],
  },
  {
    name: "Legal",
    description:
      "Find experienced legal professionals for compliance, contracts, and corporate law.",
    jobs: [
      "Legal Assistant",
      "Corporate Lawyer",
      "Paralegal",
      "Compliance Officer",
    ],
  },
  {
    name: "Administrative & Customer Support",
    description:
      "Ensure smooth operations with skilled administrative and customer service professionals.",
    jobs: [
      "Customer Support Rep",
      "Executive Assistant",
      "Office Admin",
      "Call Center Agent",
    ],
  },
];

export default function SpecializedTalent() {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <section className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* CARD */}
        <div className="bg-white rounded-3xl border border-gray-200 p-10 md:p-14 shadow-sm min-h-[650px]">
          {/* HEADER */}
          <h2 className="text-[50px] md:text-4xl font-bold text-gray-900 mb-10 max-w-2xl">
            Add specialized talent across your organization
          </h2>

          {/* TABS (FULL WIDTH) */}
          <div className="w-full flex flex-wrap gap-3 mb-12 border-b border-gray-200 pb-4">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition 
                  ${
                    activeTab.name === tab.name
                      ? "bg-blue-900 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* CONTENT GRID */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* LEFT CONTENT */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-gray-600 text-lg mb-8 max-w-xl">
                  {activeTab.description}
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Trending job titles
                </h3>

                <div className="flex flex-col gap-3">
                  {activeTab.jobs.map((job) => (
                    <a
                      key={job}
                      href="#"
                      className="text-blue-900 text-base hover:underline"
                    >
                      {job}
                    </a>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* RIGHT VISUAL */}
            <div className="relative w-full h-[420px] flex items-center justify-center">
              {/* MAIN CLUSTER */}
              <div className="relative w-[300px] h-[300px]">
                {/* CENTER */}
                <motion.img
                  src="hero.png"
                  className="absolute w-44 h-44 object-cover shadow-xl border border-gray-200 z-30"
                  style={{ borderRadius: "30%" }}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 5, repeat: Infinity }}
                />

                {/* OVERLAYS */}
                <motion.img
                  src="hero.png"
                  className="absolute w-32 h-32 -top-8 -left-10 z-40 object-cover shadow-lg border"
                  style={{ borderRadius: "28%" }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <motion.img
                  src="hero.png"
                  className="absolute w-28 h-28 bottom-0 -left-6 z-20 object-cover shadow-lg border"
                  style={{ borderRadius: "30%" }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                />

                <motion.img
                  src="hero.png"
                  className="absolute w-24 h-24 top-6 -right-6 z-50 object-cover shadow-lg border"
                  style={{ borderRadius: "26%" }}
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                <motion.img
                  src="hero.png"
                  className="absolute w-40 h-40 -bottom-6 -right-6 z-50 object-cover shadow-lg border"
                  style={{ borderRadius: "26%" }}
                  animate={{ y: [0, -7, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                />

                {/* FLOATING SHAPES */}
                <div className="absolute w-14 h-14 bg-gray-200 rounded-[35%] top-6 left-1/2 z-10"></div>
                <div className="absolute w-10 h-10 bg-gray-300 rounded-[35%] bottom-6 right-6 z-0"></div>
                <div className="absolute w-8 h-8 bg-gray-300 rounded-[35%] top-1/3 left-6 z-20"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
