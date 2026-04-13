const footerLinks = [
  {
    title: "Services",
    links: [
      "Browse Jobs",
      "Contract Talent",
      "Permanent Talent",
      "Consulting Solutions",
    ],
  },
  {
    title: "Areas of Expertise",
    links: [
      "Finance & Accounting",
      "Technology",
      "Marketing & Creative",
      "Legal",
      "Administrative & Customer Support",
    ],
  },
  {
    title: "Resources & Tools",
    links: [
      "Discover Insights",
      "Invoice",
      "Job Directory",
      "Salary Guide",
      "Time Reports",
      "Create a job alert",
      "Contact Us",
    ],
  },
  {
    title: "About",
    links: [
      "About LCK",
      "Leadership",
      "Careers With Us",
      "Locations",
      "Investor Center",
      "Press",
      "Our Brands",
      "Supplier Relations",
    ],
  },
];

export default function PreFooter() {
  return (
    <section className="bg-white border-t border-gray-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {footerLinks.map((section) => (
            <div key={section.title}>
              {/* Title */}
              <h3 className="text-sm font-semibold text-gray-900 mb-5 tracking-wide">
                {section.title}
              </h3>

              {/* Links */}
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-gray-600 hover:text-blue-900 hover:underline transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom subtle line */}
        {/* <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} LCK. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-blue-900">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-900">
              Terms of Use
            </a>
            <a href="#" className="hover:text-blue-900">
              Cookie Policy
            </a>
          </div>
        </div> */}
      </div>
    </section>
  );
}
