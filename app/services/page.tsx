import React from "react";

const standardServices = [
  { name: "Archanai (One Sannidhi)", price: "Rs. —" },
  { name: "Abishegam (One Sannidhi)", price: "Rs. —" },
];

const specialPoojas = [
  {
    deity: "Shri Vidya Ganapathi",
    occasion: "Sankatahara Chathurthi",
    timing: "Every Evening",
    sponsorship: "Rs. —",
  },
  {
    deity: "Lord Sivan (Chandramouleeswarar)",
    occasion: "Pradosham",
    timing: "Twice Monthly",
    sponsorship: "Rs. —",
  },
  {
    deity: "Ambal (Tripurasundari)",
    occasion: "Pournami",
    timing: "Full Moon Evening",
    sponsorship: "Rs. —",
  },
  {
    deity: "Subramanyar",
    occasion: "Sashti",
    timing: "Monthly Occurrence",
    sponsorship: "Rs. —",
  },
  {
    deity: "Durgai Amman",
    occasion: "Friday Special",
    timing: "Every Friday",
    sponsorship: "Rs. —",
  },
];

const donationTiers = [
  {
    amount: "Rs. 1,000",
    desc: "An Archanai will be performed and Prasadam sent based on the address given.",
  },
  {
    amount: "Rs. 5,000",
    desc: "An Archanai will be performed and Prasadam sent based on the address given.",
  },
];

export default function PoojariServices() {
  return (
    <main className="relative min-h-screen pt-10 pb-40 bg-[#fffefc] text-slate-900 overflow-hidden">
      {/* --- Ambient Background Glows --- */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-orange-200/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-amber-100/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        {/* --- Header Section --- */}
        <header className="max-w-4xl mb-24">
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/5 border border-primary/10 shadow-[0_0_20px_rgba(180,83,9,0.05)]">
            <h2 className="text-[11px] uppercase tracking-[0.6em] font-bold text-primary">
              Rituals & Offerings
            </h2>
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight mb-8 text-gray-950">
            Pooja{" "}
            <span className="italic text-primary/80 font-medium">Services</span>
          </h1>
          <p className="text-gray-500 text-xl md:text-2xl leading-relaxed font-light max-w-2xl">
            Experience traditional Vedic ceremonies performed with precision,
            devotion, and absolute adherence to sacred Shastras.
          </p>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-start mb-40">
          {/* --- Daily Offerings (Left - Sticky Card) --- */}
          <section className="lg:col-span-5">
            <div className="sticky top-32 p-10 rounded-[3rem] bg-white border border-white shadow-[0_30px_60px_-15px_rgba(180,83,9,0.08)] backdrop-blur-xl">
              <h3 className="text-lg font-serif font-bold text-gray-950 mb-5 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary/30"></span>
                Daily Seva
              </h3>

              <div className="space-y-10">
                {standardServices.map((s, i) => (
                  <div key={i} className="group cursor-default">
                    <h4 className="text-2xl font-serif font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-500">
                      {s.name}
                    </h4>
                    <div className="flex items-baseline gap-4">
                      <span className="text-4xl font-light text-primary/40 group-hover:text-primary/90 transition-all duration-700">
                        {s.price}
                      </span>
                      <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                        per sannidhi
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-2 pt-8 border-t border-gray-50">
                <p className="text-[11px] leading-relaxed text-gray-400 uppercase tracking-[0.2em] font-semibold italic">
                  * Conducted during regular darshan timings.
                </p>
              </div>
            </div>
          </section>

          {/* --- Special Poojas (Right - Floating Grid) --- */}
          <section className="lg:col-span-7">
            <h3 className="text-sm uppercase tracking-[0.4em] font-bold text-gray-400 mb-10 pl-4">
              Special Pooja Schedule
            </h3>

            <div className="grid gap-6">
              {specialPoojas.map((p, i) => (
                <div
                  key={i}
                  className="group relative p-8 bg-white/60 hover:bg-white rounded-[2.5rem] border border-gray-100 hover:border-primary/20 transition-all duration-700 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_-20px_rgba(180,83,9,0.12)] hover:-translate-y-1 flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="max-w-md">
                    <p className="text-[10px] text-primary uppercase tracking-[0.3em] font-bold mb-3 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                      {p.timing}
                    </p>
                    <h4 className="text-3xl font-serif font-bold text-gray-950 mb-2 group-hover:text-primary transition-colors duration-500">
                      {p.occasion}
                    </h4>
                    <p className="text-sm text-gray-400 font-medium italic">
                      {p.deity}
                    </p>
                  </div>

                  <div className="md:text-right border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-10 min-w-[140px]">
                    <span className="block text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">
                      Sponsorship
                    </span>
                    <span className="text-2xl font-light text-gray-900 group-hover:scale-110 block transition-transform duration-500">
                      {p.sponsorship}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* --- Unified Donation & Bank Details Section --- */}
        <section className="relative pt-8 border-t border-gray-300">
          <div className="mb-16">
            <h2 className="text-[13px] uppercase tracking-[0.4em] font-bold text-primary/60 mb-4">
              Sacred Contributions
            </h2>
            <h3 className="text-5xl font-serif font-bold text-gray-950">
              Support the{" "}
              <span className="italic font-medium text-primary/80">
                Sannidhi
              </span>
            </h3>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Donation Tiers */}
            <div className="lg:col-span-7 space-y-6">
              {donationTiers.map((tier, i) => (
                <div
                  key={i}
                  className="group p-8 bg-white/50 hover:bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-[0_20px_40px_-10px_rgba(180,83,9,0.05)] transition-all duration-500"
                >
                  <div className="text-3xl font-serif font-bold text-primary mb-2">
                    {tier.amount}
                  </div>
                  <p className="text-gray-500 leading-relaxed font-light italic">
                    {tier.desc}
                  </p>
                </div>
              ))}
              <p className="pl-4 text-sm text-gray-400 italic">
                * Please share your transaction details with the temple office
                to receive your Prasadam.
              </p>
            </div>

            {/* SBI Bank Card */}
            <div className="lg:col-span-5">
              <div className="relative w-full max-w-sm mx-auto aspect-[1.586/1] rounded-[1.5rem] bg-gradient-to-br from-[#1c3f95] via-[#2557c5] to-[#1c3f95] p-6 shadow-2xl overflow-hidden border border-white/20 group">
                <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />
                <div className="absolute top-[-20px] right-[-20px] w-32 h-32 rounded-full border-[10px] border-white/10" />

                <div className="relative flex justify-between items-start mb-8">
                  <div className="w-12 h-9 bg-gradient-to-br from-amber-200 to-amber-500 rounded-md shadow-inner relative overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-2 gap-1 opacity-30 border border-black/10">
                      <div className="border-r border-b border-black/20"></div>
                      <div className="border-b border-black/20"></div>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-white text-xs font-bold tracking-widest leading-none">
                      SBI
                    </p>
                    <p className="text-white/60 text-[15px] uppercase tracking-tighter">
                      NITT Branch
                    </p>
                  </div>
                </div>

                <div className="relative mb-6">
                  <p className="text-white/50 text-[8px] uppercase tracking-[0.2em] mb-1">
                    Account Number
                  </p>
                  <p className="text-white text-xl md:text-2xl font-mono tracking-[0.15em]">
                    1002 3884 193
                  </p>
                </div>

                <div className="relative flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-white/50 text-[8px] uppercase tracking-[0.2em]">
                      Beneficiary
                    </p>
                    <p className="text-white text-[10px] font-bold tracking-wide uppercase">
                      Sri Vidya Ganapathi <br /> Seva Samithi
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-white/50 text-[8px] uppercase tracking-[0.2em] mb-1">
                      IFSC Code
                    </p>
                    <p className="text-white text-[18px] font-mono font-bold tracking-widest uppercase">
                      SBIN0001617
                    </p>
                  </div>
                </div>
              </div>
              <p className="mt-6 text-center text-[10px] text-gray-400 uppercase tracking-[0.4em] font-bold">
                Official Sannidhi Account
              </p>
            </div>
          </div>
        </section>

        {/* --- Footer Accent --- */}
        <footer className="mt-20 text-center relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          <div className="pt-12 flex flex-col items-center gap-4">
            <div className="text-5xl font-serif text-primary/10 select-none hover:text-primary/30 transition-colors duration-1000">
              ॐ
            </div>
            <p className="text-[11px] text-gray-400 uppercase tracking-[0.5em] font-bold">
              NIT Trichy Sannidhi
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
