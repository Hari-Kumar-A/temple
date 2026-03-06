import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-16 px-8 relative overflow-hidden">
      {/* Subtle background glow to match the rest of the site */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">
        {/* Brand Section */}
        <div className="space-y-4">
          <h3 className="text-white text-2xl font-serif font-bold tracking-tight">
            NIT Trichy{" "}
            <span className="text-orange-500/80 italic font-medium">
              Temple 
            </span>
          </h3>
          <p className="text-sm leading-relaxed font-light max-w-xs">
            Founded in 1968. A spiritual beacon preserving Vedic traditions
            within the NIT Trichy community.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-4">
          <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em]">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm font-light">
            <li>
              <Link
                href="/about"
                className="hover:text-orange-400 transition-colors duration-300"
              >
                About the Temple
              </Link>
            </li>
            <li>
              <Link
                href="/events"
                className="hover:text-orange-400 transition-colors duration-300"
              >
                Upcoming Events
              </Link>
            </li>
            <li>
              <Link
                href="/donate"
                className="hover:text-orange-400 transition-colors duration-300"
              >
                Donations
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Section with Vertical Divider */}
        <div className="relative md:pl-12">
          {/* Vertical Divider - Visible on medium screens and up */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gray-700 to-transparent" />

          <h4 className="text-white font-bold text-xs uppercase tracking-[0.3em] mb-4">
            Contact Us
          </h4>
          <div className="space-y-4">
            <div className="group">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">
                Location
              </p>
              <p className="text-sm font-light">
                Shri Vidya Ganapathi Temple, NIT Trichy
              </p>
            </div>
            <div className="group">
              <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold mb-1">
                Email
              </p>
              <p className="text-sm font-light truncate">
                srividyaganapathitemplenitt@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-900 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-[0.2em] font-medium text-gray-600">
        <p>© 2026 NIT Trichy Temple. All Rights Reserved.</p>
        <p className="italic">Loka Samasta Sukhino Bhavantu</p>
      </div>
    </footer>
  );
}
