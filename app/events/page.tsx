import { client } from "@/sanity/lib/client";

type Event = {
  _id: string;
  title: string;
  description: string;
  date: string;
  // Slug is no longer strictly needed for navigation but kept in type if needed
};

const QUERY = `*[_type == "event"] | order(date asc)`;

export default async function EventsPage() {
  // Safe fetch to prevent build crashes
  let events: Event[] = [];
  try {
    events = await client.fetch(QUERY);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
  }

  return (
    <div className="relative pt-20 pb-24 px-6 md:px-12 bg-creme overflow-hidden">
      {/* Divine Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] z-[-1]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[70px] z-[-1]" />

      <div className="max-w-7xl mx-auto">
        {/* Aesthetic Header */}
        <div className="text-center mb-16 relative">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-2">
            Sacred Gathering
          </h2>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-maroon tracking-tighter mb-4">
            Temple Events & Poojas
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto leading-relaxed">
            Join us in devotion and community. Stay updated on all our spiritual
            events, Vedic chanting sessions, and special rituals.
          </p>
          <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>

        {/* The Elevated Event Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event._id}
                // Changed from <a> to <div> as it's no longer a link
                // Removed fixed height h-[300px] so all text shows
                className="event-card-glass p-8 flex flex-col border-t-4 border-t-primary"
              >
                <div className="mb-4">
                  <div className="flex justify-between items-start">
                    <h2 className="text-2xl font-serif font-bold text-maroon">
                      {event.title}
                    </h2>
                  </div>

                  <div className="inline-flex items-center gap-2 mt-3 mb-5 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <p className="text-xs font-bold uppercase tracking-widest text-primary">
                      {new Date(event.date).toLocaleDateString("en-IN", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>

                  {/* Removed line-clamp-3 to show full description */}
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                    {event.description}
                  </p>
                </div>

                {/* Decorative Bottom element instead of a link */}
                <div className="mt-auto pt-6 border-t border-orange-50 opacity-30">
                  <div className="w-6 h-6 text-primary">
                    <svg viewBox="0 0 100 100" fill="currentColor">
                      <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 divine-glass rounded-3xl">
              <p className="text-maroon font-serif italic text-xl">
                No upcoming events scheduled at this time.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
