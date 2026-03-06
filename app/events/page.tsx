import { client } from "@/sanity/lib/client";

type Event = {
  _id: string;
  title: string;
  description: string;
  date: string;
  slug?: { current: string };
};

const QUERY = `*[_type == "event"] | order(date asc)`;

export default async function EventsPage() {
  const events: Event[] = await client.fetch(QUERY);

  return (
    <main className="relative min-h-screen pt-16 pb-20 bg-creme overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[80px] z-[-1]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[80px] z-[-1]" />

      <div className="max-w-5xl mx-auto px-6">
        {/* Aesthetic Header */}
        <div className="max-w-2xl mb-12 text-center md:text-left">
          <h2 className="text-[10px] uppercase tracking-[0.5em] font-bold text-primary mb-2">
            Sacred Gathering
          </h2>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 leading-tight">
            Temple Events
          </h1>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-lg">
            Join our community in devotion. From monthly Pradosham rituals to
            annual Veda Parayanam festivals, find our upcoming spiritual
            schedule here.
          </p>
        </div>

        {/* Unified Event Grid - Static Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event) => {
            const eventDate = new Date(event.date);
            const day = eventDate.getDate();
            const month = eventDate.toLocaleString("en-IN", { month: "short" });

            return (
              <div
                key={event._id}
                className="divine-glass relative p-6 md:p-8 rounded-[2rem] transition-all duration-500 flex flex-col min-h-[250px]"
              >
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-start mb-6">
                    {/* Calendar Style Date Icon */}
                    <div className="flex flex-col items-center justify-center bg-white w-14 h-14 rounded-xl shadow-sm border border-primary/10">
                      <span className="text-primary font-bold text-lg leading-none">
                        {day}
                      </span>
                      <span className="text-[9px] uppercase font-bold text-gray-400">
                        {month}
                      </span>
                    </div>

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] py-0.5 px-2 bg-primary/10 text-primary rounded-full">
                      Upcoming
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-3">
                    {event.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-xs md:text-sm line-clamp-3">
                    {event.description}
                  </p>
                </div>

                {/* Decorative Bottom Pattern */}
                <div className="absolute bottom-2 right-2 w-16 h-16 text-primary/5 pointer-events-none">
                  <svg viewBox="0 0 100 100" fill="currentColor">
                    <path d="M50 0 L100 50 L50 100 L0 50 Z" />
                  </svg>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
