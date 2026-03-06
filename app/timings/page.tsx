import React from "react";

const sessions = [
  {
    title: "Morning Hours", 
    gradient: "from-amber-50 to-orange-100/50",
    border: "border-orange-400",
    icon: "🌅",
    time: "07:00 AM — 10:00 AM",
    highlight:
      "Milk Abishegam will be performed daily in the morning between 7:30 to 9:00 AM",
  },
  {
    title: "Evening Hours", 
    gradient: "from-indigo-50 to-purple-100/30",
    border: "border-indigo-400",
    icon: "🌙",
    time: "05:00 PM — 08:00 PM",
    highlight: null,  
  },
];

const mainDeities = [
  { name: "Shri Vidya Ganapathi", role: "The Presiding Deity" },
  { name: "Shri Chandramouleeswarar", role: "The Sacred Banalingam" },
  { name: "Shri Tripurasundari", role: "Divine Mother (Ambal)" },
  { name: "Shri Valli Devasena Sametha Subramanyar", role: "Lord Murugan" },
  { name: "Shri Hanuman", role: "Anjaneya Swami" },
];

const parivaraDevathas = [
  "Dakshinamurthy",
  "Durgai",
  "Lingodbhavar",
  "Brahma",
  "Chandikeshwarar",
  "Navagraham",
];

export default function TimingsPage() {
  return (
    <main className="relative min-h-screen pt-20 pb-24 px-6 bg-[#fffdfa]">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-100/40 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/30 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-primary mb-3">
            Darshan & Deities
          </h2>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 tracking-tighter">
            Temple <span className="italic text-primary/80">Timings</span>
          </h1>
          <p className="mt-4 text-gray-500 font-medium max-w-lg mx-auto leading-relaxed">
            Experience the divine vibrations of the NIT Trichy Sannidhi.
          </p>
        </div>

        {/* Timings Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-24">
          {sessions.map((session, idx) => (
            <div
              key={idx}
              className={`divine-glass rounded-[2.5rem] p-10 border-t-8 ${session.border} shadow-lg transition-transform hover:scale-[1.02] flex flex-col`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{session.icon}</span>
                <div>
                  <h3 className="text-2xl font-serif font-bold text-gray-800 leading-none">
                    {session.title}
                  </h3>
                   
                </div>
              </div>

              <div className="text-3xl font-medium text-gray-700 my-8 flex items-center gap-3">
                {session.time}
              </div>

              {/* Conditional Highlight Rendering */}
              {session.highlight ? (
                <div
                  className={`mt-auto p-4 rounded-2xl bg-gradient-to-br ${session.gradient} border border-white/50`}
                >
                  <p className="text-sm font-bold text-gray-600 italic flex items-start gap-3">
                    <span className="bg-primary mt-1.5 shrink-0" />
                    {session.highlight}
                  </p>
                </div>
              ) : (
                <div className="mt-auto h-[76px] opacity-0" />
                /* Spacer to keep cards same height if desired, remove h-[76px] if you want cards to shrink */
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
