import Image from "next/image";

const committee = [
  {
    name: "Prof. R Gururaj",
    role: "President",
    desc: "A visionary dedicated to Veda Rakshanam for over 30 years.",
    image: "/Gururaj.jpg", // Add these to public/ or use placeholders
  },
  {
    name: "Dr. P Kalaichelvi ",
    role: "Vice President",
    desc: "Expert in Shukla Yajur Veda, guiding our Vidyarthees with wisdom.",
    image: "/kalaichelvi.png",
  },
  {
    name: "Dr. C Sathyanarayanan",
    role: "Vice President",
    desc: "Overseeing the Annadanam and Gau Samrakshana initiatives.",
    image: "/csathya.jpg",
  },
  {
    name: "Dr. S Vinoth",
    role: "Secretary",
    desc: "Overseeing the Annadanam and Gau Samrakshana initiatives.",
    image: "/Vinodh.jpg",
  },
  {
    name: "Dr. R Raghavan",
    role: "Treasurer",
    desc: "Overseeing the Annadanam and Gau Samrakshana initiatives.",
    image: "/raghavanr.jpg",
  },
  {
    name: "Prof K Pudhuma Bharathi",
    role: "Member",
    desc: "Overseeing the Annadanam and Gau Samrakshana initiatives.",
    image: "/Pudhuma.jpg",
  },
  {
    name: "Shri. P Ganesan",
    role: "Member",
    desc: "Overseeing the Annadanam and Gau Samrakshana initiatives.",
    image: "/gallery1.jpg",
  },
  {
    name: "M Jayaram Gurukkal",
    role: "Gurukkal",
    desc: "Overseeing the Annadanam and Gau Samrakshana initiatives.",
    image: "/gallery1.jpg",
  },
];

export default function StaffPage() {
  return (
    <main className="relative min-h-screen pt-10 pb-24 px-6 bg-creme">
      {/* Divine background glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] z-[-1]" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-3">
            Our Guardians
          </h2>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 tracking-tighter">
            Temple Staff & <br />
            <span className="italic text-primary/80 font-medium text-4xl md:text-5xl">
              Committee Members
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-6"></div>
        </div>

        {/* Grid System */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {committee.map((member, index) => (
            <div
              key={index}
              className="group divine-glass rounded-3xl p-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10"
            >
              {/* Profile Image Wrapper */}
              <div className="relative h-80 w-full overflow-hidden rounded-2xl mb-6">
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                {/* Note: Replace src with actual image path. 
                  If image is missing, it will show the bg-accent color.
                */}
                <div className="w-full h-full bg-accent/40 animate-pulse absolute inset-0 -z-10" />
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content Area */}
              <div className="px-4 pb-6 text-center">
                <h3 className="text-2xl font-serif font-bold text-gray-950 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-4">
                  {member.role}
                </p>
                <div className="w-12 h-0.5 bg-accent mx-auto mb-4" />
                <p className="text-gray-600 text-sm leading-relaxed px-4 italic">
                  {member.desc}
                </p>
              </div>

              {/* Subtle Decorative Corner */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-100 transition-opacity">
                <div className="w-8 h-8 border-t-2 border-r-2 border-primary rounded-tr-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
