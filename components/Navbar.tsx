"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[var(--primary)] text-white px-8 py-4 flex justify-between">
      <h1 className="font-bold text-xl">Sri Ganapathi</h1>

      <div className="relative">
        <button onClick={() => setOpen(!open)}>Menu ▼</button>

        {open && (
          <div className="absolute right-0 mt-2 bg-white text-black shadow rounded w-60">
            {[
              "About",
              "Temple Staff & Committee",
              "History",
              "Timings",
              "Poojari Services",
              "Special Pooja Calendar 2026",
              "Activities and Events",
              "Balavihar Classes",
              "Articles",
              "Gallery",
              "Donate",
              "Contact",
            ].map((item) => (
              <Link
                key={item}
                href="/"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
