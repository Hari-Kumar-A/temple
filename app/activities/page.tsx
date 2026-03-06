const activities = [
  {
    title: "Veda Vidya Parayanam",
    category: "Daily Ritual",
    desc: "The core of our Patasala. Students engage in 8 hours of rigorous Vedic recitation, preserving the oral tradition of the Shukla Yajur Veda exactly as it was thousands of years ago.",
    size: "large",
    icon: "📖",
  },
  {
    title: "Gau Samrakshanam",
    category: "Service",
    desc: "Daily care, feeding, and medical support for our indigenous cows (Gir, Hallikar), recognizing their sacred role in Vedic culture.",
    size: "small",
    icon: "🐄",
  },
  {
    title: "Annadanam",
    category: "Community",
    desc: "Serving sanctified Satvic meals to visitors, pilgrims, and the underprivileged every afternoon.",
    size: "small",
    icon: "🍲",
  },
  {
    title: "Sandhyavandanam & Yoga",
    category: "Student Life",
    desc: "Ensuring holistic growth for our Vidyarthees through daily spiritual disciplines, physical yoga, and pranayama sessions at dawn and dusk.",
    size: "large",
    icon: "🧘",
  },
  {
    title: "Environmental Seva",
    category: "Nature",
    desc: "Maintaining our herbal garden (Nandavanam) and practicing organic farming to provide flowers and Bilva leaves for daily Poojas.",
    size: "small",
    icon: "🌿",
  },
];

export default function ActivitiesPage() {
  return (
    <main className="relative min-h-screen pt-20 pb-24 bg-creme">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] z-[-1]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] z-[-1]" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-primary mb-3">
            Living Tradition
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 leading-tight">
            Our Daily <span className="italic text-primary/80">Karmas</span> &
            Seva
          </h1>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Beyond education, the Patasala is a living ecosystem of Vedic
            practices, compassion for nature, and service to the community.
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {activities.map((act, index) => (
            <div
              key={index}
              className={`divine-glass group relative p-8 rounded-[2.5rem] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 ${
                act.size === "large"
                  ? "md:col-span-3 lg:col-span-4"
                  : "md:col-span-3 lg:col-span-2"
              }`}
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl bg-white/50 w-16 h-16 flex items-center justify-center rounded-2xl shadow-inner group-hover:scale-110 transition-transform duration-500">
                    {act.icon}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] py-1 px-3 bg-primary/10 text-primary rounded-full">
                    {act.category}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4">
                  {act.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base flex-grow">
                  {act.desc}
                </p>

                <div className="mt-8 flex items-center gap-2">
                  <div className="h-px flex-grow bg-gradient-to-r from-primary/20 to-transparent" />
                  <button className="text-xs font-bold text-primary group-hover:tracking-[0.2em] transition-all uppercase">
                    Learn More
                  </button>
                </div>
              </div>

              {/* Decorative Corner SVG or Pattern */}
              <div className="absolute -bottom-2 -right-2 w-24 h-24 text-primary/5 pointer-events-none group-hover:text-primary/10 transition-colors">
                <svg viewBox="0 0 100 100" fill="currentColor">
                  <circle cx="90" cy="90" r="40" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Stat */}
        <div className="mt-24 text-center border-t border-accent pt-16">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-5xl font-serif text-primary font-bold">365</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">
                Days of Continuous Veda Dhwani
              </p>
            </div>
            <div>
              <p className="text-5xl font-serif text-primary font-bold">
                5000+
              </p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">
                Meals Served Annually
              </p>
            </div>
            <div>
              <p className="text-5xl font-serif text-primary font-bold">25+</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">
                Native Cows Protected
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
