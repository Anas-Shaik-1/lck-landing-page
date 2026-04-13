import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#1c398e] text-gray-300 px-8 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          {/* Logo */}
          {/* <div className="w-10 h-10 bg-red-600 flex items-center justify-center font-bold text-white text-lg">
            rh
          </div> */}
          <img src="logo.png" className="w-20" alt="" />

          {/* Social Icons */}
          <div className="flex gap-5 text-lg">
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaLinkedinIn className="hover:text-white cursor-pointer" />
            <FaXTwitter className="hover:text-white cursor-pointer" />
            <FaYoutube className="hover:text-white cursor-pointer" />
            <FaInstagram className="hover:text-white cursor-pointer" />
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap items-center gap-3 text-sm">
            {[
              "Fraud Alert",
              "Government Notice",
              "Privacy Notice",
              "Terms of Use",
            ].map((item, i) => (
              <span key={i} className="flex items-center gap-3">
                <a href="#" className="hover:text-white">
                  {item}
                </a>
                {i !== 3 && <span className="text-gray-500">|</span>}
              </span>
            ))}
          </div>

          {/* Bottom Text */}
          <div className="text-sm text-gray-400 space-y-1">
            <p>© 2026 Robert Half Inc.</p>
            <a href="#" className="block hover:text-white underline">
              An Equal Opportunity Employer
            </a>
            <a href="#" className="block hover:text-white underline">
              M/F/Disability/Veterans.
            </a>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-start md:items-end justify-center gap-6"
        >
          {/* Region */}
          <p className="text-sm text-gray-300">United States (English)</p>

          {/* Button */}
          <button className="border border-gray-400 rounded-full px-8 py-4 text-sm flex items-center gap-3 hover:bg-white hover:text-black transition">
            Select a region and language →
          </button>
        </motion.div>
      </div>
    </footer>
  );
}
