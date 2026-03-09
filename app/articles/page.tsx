"use client";

import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);
function urlFor(source: any) {
  return builder.image(source);
}

export type Article = {
  _id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  role: string;
  accent: string;
  content: any;
  image?: any;
};

const QUERY = `*[_type == "article"] | order(_createdAt desc) {
  _id,
  title,
  category,
  excerpt,
  author,
  role,
  accent,
  content,
  image
}`;

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const data = await client.fetch(QUERY);
        setArticles(data);
      } catch (error) {
        console.error("Sanity fetch failed:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  // Handle Background Scroll Lock AND Footer Visibility
  useEffect(() => {
    const footer = document.querySelector("footer"); // Targets your global footer

    if (selectedArticle) {
      // 1. Lock scroll
      document.body.style.overflow = "hidden";
      // 2. Hide footer
      if (footer) footer.style.display = "none";
    } else {
      // 1. Restore scroll
      document.body.style.overflow = "unset";
      // 2. Restore footer
      if (footer) footer.style.display = "block";
    }

    // Cleanup to ensure footer is restored if component unmounts
    return () => {
      document.body.style.overflow = "unset";
      if (footer) footer.style.display = "block";
    };
  }, [selectedArticle]);

  const portableTextComponents = {
    block: {
      h2: ({ children }: any) => (
        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-8 mb-4">
          {children}
        </h2>
      ),
      normal: ({ children }: any) => (
        <p className="mb-6 text-slate-700 leading-relaxed font-light italic md:not-italic">
          {children}
        </p>
      ),
      blockquote: ({ children }: any) => (
        <blockquote className="text-xl leading-relaxed text-slate-700 font-light italic border-l-4 border-primary/30 bg-slate-50 p-6 rounded-r-2xl my-8 whitespace-pre-line">
          {children}
        </blockquote>
      ),
    },
  };

  return (
    <main className="relative min-h-screen pt-20 pb-24 bg-[#fffdfa] isolate">
      {/* Aesthetic Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-primary/5 blur-[120px] rounded-full z-[-1]" />

      <div className="max-w-6xl mx-auto px-6">
        <header className="text-center mb-24">
          <h2 className="text-xs uppercase tracking-[0.5em] font-bold text-primary mb-4">
            The Knowledge Center
          </h2>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-900 tracking-tighter">
            Articles &<span className="italic text-primary/80"> Blogs</span>
          </h1>
        </header>

        {loading ? (
          <div className="text-center py-20 opacity-50 font-serif italic animate-pulse">
            Gathering stories...
          </div>
        ) : (
          <div className="grid gap-10">
            {articles.map((post) => (
              <div
                key={post._id}
                onClick={() => setSelectedArticle(post)}
                className={`cursor-pointer group block p-8 md:p-12 rounded-[3rem] border-l-8 ${post.accent || "border-primary"} transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 bg-white shadow-sm border border-slate-100`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                  <div className="flex-1 space-y-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                      {post.category}
                    </span>
                    <h3 className="text-2xl md:text-4xl font-serif font-bold text-gray-900 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2 font-light italic md:not-italic">
                      {post.excerpt}
                    </p>
                  </div>
                  <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-45">
                    <span className="text-2xl">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Overlay Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-[99999] flex justify-center items-start p-4 md:p-6 overflow-hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-xl cursor-zoom-out"
            onClick={() => setSelectedArticle(null)}
          />

          {/* Modal Content */}
          <div className="relative bg-white w-full max-w-6xl max-h-[85vh] mt-20 overflow-hidden rounded-[2.5rem] shadow-2xl flex flex-col animate-in fade-in slide-in-from-bottom-4 duration-500">
            {/* Modal Header */}
            <div className="flex justify-between items-center px-8 py-5 border-b border-slate-50 bg-white sticky top-0 z-[100]">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary/60">
                {selectedArticle.category}
              </p>
              <button
                onClick={() => setSelectedArticle(null)}
                className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-all hover:rotate-90"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="overflow-y-auto p-8 md:p-16 flex-1 custom-scrollbar scroll-smooth bg-white">
              <header className="mb-12">
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-950 mb-8 leading-tight">
                  {selectedArticle.title}
                </h2>

                {/* Author Info */}
                <div className="flex items-center gap-4 py-8 border-y border-slate-100 mb-10">
                  <div className="w-14 h-14 rounded-full bg-indigo-50 flex items-center justify-center font-serif text-indigo-600 font-bold text-xl border border-indigo-100">
                    {selectedArticle.author.charAt(0)}
                  </div>
                  <div>
                    <p className="text-lg font-bold text-slate-900 leading-none mb-1">
                      {selectedArticle.author}
                    </p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide font-medium">
                      {selectedArticle.role}
                    </p>
                  </div>
                </div>

                {/* Contained Image */}
                {selectedArticle.image && (
                  <div className="relative mb-12 rounded-3xl overflow-hidden shadow-sm border border-slate-100 bg-slate-50/50 flex justify-center items-center p-2">
                    <img
                      src={urlFor(selectedArticle.image).width(1600).url()}
                      alt={selectedArticle.title}
                      className="w-auto max-w-full h-auto max-h-[60vh] object-contain rounded-2xl"
                    />
                  </div>
                )}
              </header>

              <article className="prose prose-slate prose-lg max-w-none">
                <PortableText
                  value={selectedArticle.content}
                  components={portableTextComponents}
                />
              </article>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
