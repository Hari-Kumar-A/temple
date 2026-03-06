const timelineEvents = [
  {
    year: "1968",
    title: "Founding & First Installation",
    desc: "Following a campus mishap, the first batch of RECT students, led by Mr. GV Raman and future Capt. Srinivasan, proposed the installation of Ganapathi. With clearance from the Principal, a Ganesha idol was purchased for ₹300. Assisted by Asst. Registrar Mr. Nagashesaiah, a platform was built near the garage, and the Ucchi Pillaiyar Koil Gurukkal performed the first Sandana Kappu Alankaram.",
  },
  {
    year: "1970",
    title: "First Kumbhabishegam",
    desc: "Held on 13.09.1970. Through the efforts of Prof. Kunjidapadam (Civil Dept), the ceremony featured Sri Kripananda Variyar and was conducted by Shri Allur Viswanatha Sivacharya for a fee of ₹5000.",
  },
  {
    year: "1972",
    title: "Navagraha Sannidhi",
    desc: "The temple's first major expansion. Led by Mr. Sambasivam, the Navagraha Sannidhi was installed, supported by student collections of ₹1 or ₹2 and the Garden Club's dedication.",
  },
  {
    year: "1981 - 1983",
    title: "The Banalingam & Second Kumbhabishegam",
    desc: "Prof. Manisundaram initiated the Sivan, Ambal, and Subramanyar Sannidhis. The plan was blessed by Kanchi Mahaperiyava in Gulbarga. A sacred Banalingam—a Swayambu stone representing the blend of knowledge and wisdom—was brought from Kashi. The Kumbhabishegam took place on 26.10.1983, installing Sivan, Ambal, Subramanyar, Hanuman, and Durgai.",
  },
  {
    year: "1987 - 1999",
    title: "Chandikeshwarar & Third Kumbhabishegam",
    desc: "In 1987, the Chandikeshwarar Prathishtai was completed and consecrated. This era of growth culminated in the Third Kumbhabishegam conducted in 1999.",
  },
  {
    year: "2014",
    title: "Fourth Kumbhabishegam",
    desc: "Conducted in February 2014, reaffirming the temple's status as the spiritual heart of the NIT Trichy campus for thousands of student devotees.",
  },
  {
    year: "2026",
    title: "Fifth Kumbhabishegam & Expansion",
    desc: "Scheduled for April 6th, 2026. This milestone adds Lingodhbavar and Brahma as Parivara Devathas. Ambal receives a separate Sannidhi, and the Saraswati Mandapam (cultural hall), Library, and Madapalli are inaugurated in the presence of Paramapujya Shri Shri Samanan Saraswati.",
  },
];

export default function HistoryPage() {
  return (
    <main className="relative min-h-screen pt-20 pb-24 bg-creme">
      {/* Background Decorative Accents */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-primary mb-3">
            Our Journey
          </h2>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-900 tracking-tighter">
            A Legacy of <br />
            <span className="italic text-primary/80 font-medium">
              Tradition & Devotion
            </span>
          </h1>
        </div>

        {/* Timeline Section */}
        <div className="relative">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary/10 via-primary/40 to-primary/10 hidden md:block" />

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center justify-between w-full group ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="w-full md:w-[45%]">
                  <div className="divine-glass p-8 rounded-3xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/5 group-hover:-translate-y-1 border border-white/40">
                    <span className="text-3xl font-serif font-bold text-primary mb-2 block tracking-tight">
                      {event.year}
                    </span>
                    <h3 className="text-xl font-bold text-gray-950 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {event.desc}
                    </p>
                  </div>
                </div>

                <div className="relative flex items-center justify-center w-12 h-12 my-4 md:my-0 z-10">
                  <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_15px_rgba(180,83,9,0.5)] outline outline-8 outline-accent/20" />
                </div>

                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>

        {/* Banalingam Highlight Section */}
        <div className="mt-24 text-center">
          <div className="divine-glass inline-block px-10 py-12 rounded-[3rem] max-w-3xl border-2 border-dashed border-primary/10">
            <h4 className="text-2xl font-serif text-primary mb-4">
              The Sacred Banalingam
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our Sivalingam is a <strong>Banalingam</strong>, a Swayambu stone
              from the Narmada River. Representing the form of the formless,
              it blend&apos;s male energy (knowledge) with female energy (wisdom).
              Worshipping this single linga is said to grant the benefits of
              worshipping a crore of others, bringing success to all tasks of
              the day.
            </p>
            <div className="font-bold text-xs uppercase tracking-[0.2em] text-primary">
              — Established 1983
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
