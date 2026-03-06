import React from "react";

export default function DonatePage() {
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

  return (
    <main className="relative min-h-screen pt-12 pb-40 bg-[#fffefc] text-slate-900 overflow-hidden">
      {/* Soft Ethereal Backgrounds */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[400px] bg-orange-50/40 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <header className="mb-20 text-center md:text-left">
          <h2 className="text-[20px] uppercase tracking-[0.3em] font-bold text-primary/60 mb-3">
            Sacred Offerings
          </h2>
          <h1 className="text-6xl md:text-7xl font-serif font-bold tracking-tight text-gray-950">
            Donations
          </h1>
        </header>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Donation Tiers */}
          <section className="lg:col-span-7 space-y-6">
            {donationTiers.map((tier, i) => (
              <div
                key={i}
                className="group p-8 bg-white rounded-[2.5rem] border border-gray-100 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_-15px_rgba(180,83,9,0.08)] transition-all duration-500"
              >
                <div className="text-3xl font-serif font-bold text-primary mb-3">
                  {tier.amount}
                </div>
                <p className="text-gray-500 leading-relaxed font-light italic">
                  {tier.desc}
                </p>
              </div>
            ))}
          </section>

          {/* SBI Style Bank Card */}
          <section className="lg:col-span-5 sticky top-32">
            <div className="relative w-full max-w-sm mx-auto aspect-[1.586/1] rounded-[1.5rem] bg-gradient-to-br from-[#1c3f95] via-[#2557c5] to-[#1c3f95] p-6 shadow-2xl overflow-hidden border border-white/20 group">
              {/* Card Texture Overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/brushed-alum.png')]" />

              {/* SBI Decorative Circular Logo Element */}
              <div className="absolute top-[-20px] right-[-20px] w-32 h-32 rounded-full border-[10px] border-white/10" />

              {/* Header: Chip and Bank Name */}
              <div className="relative flex justify-between items-start mb-8">
                <div className="w-12 h-9 bg-gradient-to-br from-amber-200 to-amber-500 rounded-md shadow-inner relative overflow-hidden">
                  {/* Chip Lines */}
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

              {/* Account Number Section */}
              <div className="relative mb-6">
                <p className="text-white/50 text-[8px] uppercase tracking-[0.2em] mb-1">
                  Account Number
                </p>
                <p className="text-white text-xl md:text-2xl font-mono tracking-[0.15em] shadow-sm drop-shadow-md">
                  1002 3884 193
                </p>
              </div>

              {/* Footer Section */}
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
                  <p className="text-white text-[20px] font-mono font-bold tracking-widest">
                    SBIN0001617
                  </p>
                </div>
              </div>

              {/* Corner Watermark */}
              <div className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="text-4xl">🪷</span>
              </div>
            </div>

            <p className="mt-6 text-center text-[10px] text-gray-300 uppercase tracking-[0.5em] font-bold">
              Official SBI Sannidhi Account
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
