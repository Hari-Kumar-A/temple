import Link from "next/link";

const articles = [
  {
    id: "shukla-yajur-veda-modern-age",
    category: "Vedic Wisdom",
    title: "The Significance of Shukla Yajur Veda in the Modern Age",
    excerpt:
      "Exploring how ancient vibrations and rhythmic chanting continue to influence psychological well-being and cosmic harmony today.",
    author: "Brahmasri K. Santhanam",
    readTime: "8 min read",
    date: "Feb 24, 2026",
    accent: "border-amber-400",
  },
  {
    id: "science-of-sandhyavandanam",
    category: "Tradition",
    title: "Understanding the Science Behind Sandhyavandanam",
    excerpt:
      "A deep dive into the physiological and spiritual benefits of the thrice-daily ritual performed at the junctions of time.",
    author: "Sri R. Vasudevan",
    readTime: "12 min read",
    date: "Feb 10, 2026",
    accent: "border-orange-400",
  },
  {
    id: "gau-seva-connection",
    category: "Lifestyle",
    title: "Gau Seva: The Spiritual and Ecological Connection",
    excerpt:
      "Why the protection of indigenous cows is not just a religious duty, but a vital necessity for sustainable agriculture and health.",
    author: "Trust Committee",
    readTime: "6 min read",
    date: "Jan 28, 2026",
    accent: "border-yellow-400",
  },
];

export default function ArticlesPage() {
  return (
    <main className="relative min-h-screen pt-20 pb-24 bg-[#fffdfa]">
      {/* Soft Ethereal Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/5 blur-[120px] rounded-full z-[-1]" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-primary mb-4">
            The Knowledge Center
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tighter">
            Vedic <span className="italic text-primary/80">Insights</span>
          </h1>
          <div className="mt-8 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-accent"></span>
            <p className="text-gray-500 font-medium tracking-wide">
              Reflections on Dharma, Vedas, and Seva
            </p>
            <span className="h-px w-12 bg-accent"></span>
          </div>
        </div>

        {/* Articles List */}
        <div className="grid gap-10">
          {articles.map((post) => (
            <Link
              key={post.id}
              href={`/articles/${post.id}`}
              className={`group divine-glass block p-8 md:p-12 rounded-[3rem] border-l-8 ${post.accent} transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1`}
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                <div className="flex-1 space-y-4">
                  <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    <span>{post.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                    <span className="text-gray-400">{post.date}</span>
                  </div>

                  <h3 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-lg leading-relaxed max-w-3xl line-clamp-2">
                    {post.excerpt}
                  </p>

                  {/* Metadata Row */}
                  <div className="flex items-center gap-6 pt-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-1">
                        Author
                      </span>
                      <span className="text-sm font-bold text-gray-800">
                        {post.author}
                      </span>
                    </div>
                    <div className="w-px h-8 bg-gray-200/50"></div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase text-gray-400 font-bold tracking-widest mb-1">
                        Reading Time
                      </span>
                      <span className="text-sm font-bold text-gray-800">
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>

                {/* The Functional Arrow Button */}
                <div className="flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 rounded-full border border-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-500 shadow-sm">
                    <span className="text-2xl transform group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Informational Footer (No Subscribe) */}
        <div className="mt-24 p-12 divine-glass rounded-[4rem] text-center border-none relative overflow-hidden">
          <div className="relative z-10">
            <div className="text-primary text-4xl mb-4 font-serif">ॐ</div>
            <h4 className="text-2xl font-serif text-gray-800 mb-4 font-bold tracking-tight">
              Accessing Ancient Wisdom
            </h4>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed italic">
              Our digital library is a humble effort to document the profound
              depth of our Vedic heritage. New insights are added regularly as
              our Acharyas continue to transcribe oral traditions.
            </p>
          </div>
          {/* Subtle watermark background icon */}
          <div className="absolute -bottom-10 -left-10 text-[12rem] text-primary/5 select-none font-serif">
            📖
          </div>
        </div>
      </div>
    </main>
  );
}
