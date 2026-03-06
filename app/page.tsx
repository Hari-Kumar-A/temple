import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Visual Identity Section */}
      <section className="relative py-20 bg-[#faf7f2] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12">
          <div className="z-10">
            <h2 className="text-[var(--primary)] font-bold uppercase tracking-widest text-sm mb-4">
              Sri Vidya Ganapathi Temple
            </h2>
            <h1 className="text-5xl md:text-6xl font-serif text-gray-900 leading-tight mb-6">
              Preserving our <br />
              <span className="italic">Dharma & Heritage</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Established in 1968, the temple stands as a guardian of the
              campus, removing obstacles and fostering spiritual peace through
              Veda Rakshanam and traditional Seva.
            </p>
            <div className="flex gap-4">
              
              <Link
                href="/about"
                className="border border-gray-300 px-8 py-4 font-bold rounded-sm hover:bg-gray-50 transition cursor-pointer"
              >
                VIEW MORE
              </Link>
            </div>
          </div>

          <div className="relative h-[500px] w-full bg-gray-200 rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('/temple.jpg')] bg-cover bg-center" />
            <div className="absolute inset-0 bg-orange-900/10 mix-blend-multiply" />
          </div>
        </div>
      </section>

      {/* Narrative History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-xs uppercase tracking-[0.4em] font-bold text-gray-400 mb-2">
              The Genesis
            </h2>
            <h3 className="text-3xl font-serif font-bold text-gray-900">
              A Legacy Since 1968
            </h3>
          </div>
          <div className="prose prose-lg text-gray-600 font-light leading-relaxed italic">
            <p className="mb-6">
              Way back in 1968, when the first batch of then Regional
              Engineering College, Trichy (RECT) was still studying, a mishap
              occurred that highlighted the need to install the deity of
              <span className="text-gray-900 font-medium"> Ganapathi</span>, the
              remover of all obstacles. This was deeply felt as the college had
              been built by clearing a number of villages and village gods.
            </p>
            <p className="mb-6">
              Led by Mr. GV Raman, a group of dedicated students met the
              Principal and proposed the temple. With immediate clearance and
              space allocated near the garage, the initiative moved forward
              under the leadership of future Captain Srinivasan. The students
              journeyed to Trichy, where they found the perfect Ganesha idol,
              purchased for just{" "}
              <span className="text-gray-900 font-medium">Rs. 300</span>.
            </p>
            <p>
              As Vinayaka Chaturthi approached, Asst. Registrar Mr. Nagashesaiah
              helped build a platform and shed. The original installation
              location remains identified in front of the current Sannidhi. The
              Ucchi Pillaiyar Koil Gurukkal performed the first{" "}
              <span className="text-gray-900 font-medium">
                Sandana Kappu (Sandalwood Paste) Alankaram
              </span>
              for Shri Vidya Ganapathi, beginning a tradition of devotion that
              continues today.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Stats/Services */}
      <section className="py-16 bg-[#faf7f2] border-t border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-3xl font-serif font-bold text-[var(--primary)]">
              1968
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">
              Established
            </p>
          </div>
          <div>
            <p className="text-3xl font-serif font-bold text-[var(--primary)]">
              2026
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">
              Upcoming Events
            </p>
          </div>
          <div>
            <p className="text-3xl font-serif font-bold text-[var(--primary)]">
              Gau
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">
              Samrakshanam
            </p>
          </div>
          <div>
            <p className="text-3xl font-serif font-bold text-[var(--primary)]">
              Dharma
            </p>
            <p className="text-xs uppercase tracking-widest text-gray-500 font-bold mt-2">
              Seva
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
