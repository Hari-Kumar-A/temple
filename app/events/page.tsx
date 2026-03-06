import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Link from "next/link";

type Props = {
  params: { slug: string };
};

// 1. THIS FIXES THE BUILD ERROR
// It fetches all available slugs so Next.js can pre-render the pages
export async function generateStaticParams() {
  const query = `*[_type == "event"]{ "slug": slug.current }`;
  const events = await client.fetch(query);

  return events.map((event: { slug: string }) => ({
    slug: event.slug,
  }));
}

export default async function EventDetail({ params }: Props) {
  // 2. Pass the params.slug explicitly to the query
  const event = await client.fetch(
    `*[_type == "event" && slug.current == $slug][0]`,
    { slug: params.slug }, // The $slug in your query maps to this object
  );

  // 3. Handle 404 gracefully
  if (!event) {
    return notFound();
  }

  return (
    <main className="relative min-h-screen pt-24 pb-20 bg-creme">
      <div className="max-w-3xl mx-auto px-6">
        <Link
          href="/events"
          className="text-primary text-xs font-bold uppercase tracking-widest hover:text-maroon transition-all flex items-center gap-2 mb-12"
        >
          <span>←</span> Back to Events
        </Link>

        <article className="divine-glass p-8 md:p-12 rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[5rem] -z-1" />

          <p className="text-primary font-bold text-[10px] uppercase tracking-[0.3em] mb-4">
            Event Details
          </p>

          <h1 className="text-4xl md:text-5xl font-serif font-bold text-maroon mb-6 leading-tight">
            {event.title}
          </h1>

          <div className="flex items-center gap-4 mb-10 pb-6 border-b border-orange-100">
            <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-bold text-sm">
              {new Date(event.date).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </div>
          </div>

          <p className="text-gray-700 leading-relaxed text-lg italic font-serif">
            {event.description}
          </p>
        </article>
      </div>
    </main>
  );
}
