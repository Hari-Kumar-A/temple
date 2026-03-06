import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const sannidhis = [
    { name: "Shri Vidya Ganapathi", icon: "🕉️" },
    { name: "Shri Chandramouleeswarar", icon: "🐚" },
    { name: "Shri Tripurasundari", icon: "🌺" },
    { name: "Shri Valli Devasena sametha Subramanyar", icon: "🪶" },
    { name: "Shri Hanuman", icon: "🚩" },
    { name: "Navagraham", icon: "☀️" },
  ];

  const parivaraDevathas = [
    "Dakshinamurthy",
    "Durgai",
    "Lingodbhavar",
    "Brahma",
    "Chandikeshwarar",
  ];

  return (
    <main className="relative min-h-screen pt-20 pb-24 px-6 bg-creme">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] z-[-1]" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-3">
            Our Heritage
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-950 tracking-tighter">
            NIT Trichy <br />
            <span className="italic text-primary/80 font-medium text-4xl md:text-6xl tracking-normal">
              Shri Vidya Ganapathi
            </span>
          </h1>
        </div>

        {/* Top Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="relative group">
            <div className="absolute -inset-4 bg-accent/30 rounded-2xl blur-2xl group-hover:bg-accent/50 transition duration-500"></div>
            <div className="relative overflow-hidden rounded-2xl border border-white/50 shadow-2xl">
              <Image
                src="/temple.jpg"
                alt="Shri Vidya Ganapathi Temple"
                width={800}
                height={1000}
                className="object-cover hover:scale-105 transition duration-700 ease-in-out"
                priority
              />
               
            </div>
          </div>

          <div className="space-y-8">
            <div className="divine-glass p-8 md:p-12 rounded-3xl space-y-6">
              <h3 className="text-3xl font-serif text-gray-900 border-b border-accent pb-4">
                A Legacy of Faith
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                Born in 1968 from the devotion of the first batch of REC Trichy
                students, this temple stands as a spiritual beacon on campus.
                What began as a simple ₹300 Ganapathi idol has grown into a
                magnificent Sannidhi housing the rare Banalingam, serving as a
                sanctuary of peace for generations of students and faculty.
              </p>
              <Link href="/history">
                <button className="px-8 py-3 bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-primary/90 transition-all cursor-pointer">
                  View Temple History
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* --- NEW SECTION: Sannidhis & Deities --- */}
        <section className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-3">
              Sacred Abodes
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif font-bold text-gray-900">
              Current Sannidhis{" "}
              <span className="italic text-primary/80">& Deities</span>
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Primary Deities */}
            {sannidhis.map((deity, index) => (
              <div
                key={index}
                className="divine-glass p-6 rounded-2xl flex items-center gap-5 hover:border-primary/30 transition-colors group"
              >
                <span className="text-3xl grayscale group-hover:grayscale-0 transition-all">
                  {deity.icon}
                </span>
                <span className="text-lg font-serif font-semibold text-gray-800 tracking-tight">
                  {deity.name}
                </span>
              </div>
            ))}

            {/* Specialized Card for Sivan Sannidhi Parivara Devathas */}
            <div className="md:col-span-2 lg:col-span-3 mt-4">
              <div className="divine-glass p-8 rounded-[2.5rem] relative overflow-hidden group">
                {/* Decorative Pattern Background */}
                <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
                  <svg
                    width="120"
                    height="120"
                    viewBox="0 0 100 100"
                    fill="currentColor"
                    className="text-primary"
                  >
                    <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                  </svg>
                </div>

                <div className="flex flex-col md:flex-row gap-10 items-center">
                  <div className="flex-shrink-0 text-center md:text-left">
                    <p className="text-primary font-bold text-[10px] uppercase tracking-widest mb-2">
                      Sivan Sannidhi
                    </p>
                    <h4 className="text-3xl font-serif font-bold text-gray-950">
                      Parivara Devathas
                    </h4>
                  </div>

                  <div className="flex-grow flex flex-wrap justify-center md:justify-start gap-4">
                    {parivaraDevathas.map((name, idx) => (
                      <div
                        key={idx}
                        className="px-5 py-2 rounded-full bg-white/50 border border-primary/10 text-primary font-bold text-xs uppercase tracking-tighter shadow-sm hover:bg-primary hover:text-white transition-all cursor-default"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* --- END OF NEW SECTION --- */}
      </div>
    </main>
  );
}
