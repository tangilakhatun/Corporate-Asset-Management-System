// Footer.jsx
import React from "react";
import {
  Linkedin,
  Facebook,
  X,
  Search,
  Mail,
  Phone,
  MapPin,
  Home,
  UserPlus,
  Briefcase,
  Info
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-cyan-500 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-3">AssetVerse</h2>
          <p className="text-sm text-white/80 leading-relaxed">
            A modern B2B HR & Asset Management platform to track, assign,
            and manage company assets efficiently.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-2 hover:text-white">
              <Home size={16} />
              <a href="/">Home</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <UserPlus size={16} />
              <a href="/employee-register">Join as Employee</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <Briefcase size={16} />
              <a href="/hr-register">Join as HR</a>
            </li>
            <li className="flex items-center gap-2 hover:text-white">
              <Info size={16} />
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm text-white/85">
            <li className="flex items-center gap-2">
              <Mail size={16} />
              support@assetverse.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} />
              +1 (234) 567-890
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} />
              Business City, Corporate Street
            </li>
          </ul>
        </div>

        {/* Social & Search */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mb-5">
            {/* LinkedIn */}
            <a className="p-2 rounded-full bg-white hover:scale-110 transition">
              <Linkedin size={18} className="text-[#0A66C2]" />
            </a>

            {/* X (Twitter) */}
            <a className="p-2 rounded-full bg-white hover:scale-110 transition">
              <X size={18} className="text-black" />
            </a>

            {/* Facebook */}
            <a className="p-2 rounded-full bg-white hover:scale-110 transition">
              <Facebook size={18} className="text-[#1877F2]" />
            </a>
          </div>

          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search AssetVerse..."
              className="input input-bordered w-full pr-10 text-sm bg-white text-gray-800"
            />
            <Search
              size={18}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4 text-center text-sm text-white/80">
        © {new Date().getFullYear()} AssetVerse. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
