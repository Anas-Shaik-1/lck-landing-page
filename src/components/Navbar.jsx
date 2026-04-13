import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const menuData = {
  "Find Jobs": {
    left: "Find your next opportunity with top employers",
    middle: [
      "Contract Talent",
      "Permanent Talent",
      "Learn how we work with you",
      "Retained services",
      "Executive search",
    ],
    right: [
      "Finance and Accounting",
      "Technology",
      "Marketing and Creative",
      "Legal",
      "Administrative & Customer Support",
    ],
  },

  "Hire Talent": {
    left: "Build your team with skilled professionals",
    middle: [
      "Contract staffing",
      "Permanent hiring",
      "Project-based hiring",
      "Executive search",
    ],
    right: [
      "Finance and Accounting",
      "Technology",
      "Marketing and Creative",
      "Legal",
      "Administrative & Customer Support",
    ],
  },

  "Explore Consulting Solutions": {
    left: "Expert consulting to transform your business",
    middle: [
      "Business transformation",
      "Technology consulting",
      "Finance optimization",
      "HR advisory",
    ],
    right: [
      "Digital transformation",
      "Cloud solutions",
      "Data & analytics",
      "Risk & compliance",
    ],
  },

  "Discover Insights": {
    left: "Trends, reports, and insights",
    middle: ["Salary Guide", "Job Market Trends", "AI in Recruiting"],
    right: ["Tech insights", "Finance insights", "Marketing trends"],
  },
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="relative z-50 bg-white border-b border-gray-200">
      {/* NAVBAR */}
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between">
        <div className="flex items-center ">
          <img src="logo.png" alt="" />
          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-stretch gap-2">
            {Object.keys(menuData).map((item) => (
              <div
                key={item}
                onMouseEnter={() => setActiveMenu(item)}
                onMouseLeave={() => setActiveMenu(null)}
              >
                {/* FULL HEIGHT BUTTON */}
                <button className="h-20 px-4 flex items-center hover:text-blue-900 transition relative whitespace-nowrap">
                  {item}
                  <span className="ml-1 text-xs">⌄</span>
                </button>

                {/* HOVER BRIDGE (IMPORTANT FIX) */}
                {activeMenu === item && (
                  <div className="absolute top-full left-0 w-full h-6" />
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="hidden xl:flex items-center gap-4">
          <button className="text-gray-600 hover:text-blue-900">Sign In</button>
          <button className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800">
            Get Started
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* MEGA MENU */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 top-full w-full bg-white border-t border-gray-200 shadow-xl "
            onMouseEnter={() => setActiveMenu(activeMenu)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-3 gap-12">
              {/* LEFT */}
              <div>
                <h3 className="text-lg font-semibold mb-3">{activeMenu}</h3>

                <p className="text-gray-600 text-sm">
                  {menuData[activeMenu].left}
                </p>

                <div className="mt-6 h-40 bg-gray-100 rounded-xl overflow-hidden">
                  <img src="hero.png" className="w-full h-full object-cover" />
                </div>
              </div>

              {/* MIDDLE */}
              <div>
                <h4 className="font-semibold mb-4">Staffing</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  {menuData[activeMenu].middle.map((i) => (
                    <li key={i} className="hover:text-blue-900 cursor-pointer">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              {/* RIGHT */}
              <div>
                <h4 className="font-semibold mb-4">Areas of expertise</h4>
                <ul className="space-y-3 text-sm text-gray-600">
                  {menuData[activeMenu].right.map((i) => (
                    <li key={i} className="hover:text-blue-900 cursor-pointer">
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t overflow-hidden bg-white"
          >
            <div className="px-6 py-4 flex flex-col gap-4 text-gray-700">
              {Object.keys(menuData).map((item) => (
                <div key={item} className="border-b pb-2">
                  {item}
                </div>
              ))}

              <button className="mt-2 bg-blue-900 text-white py-2 rounded-md">
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
