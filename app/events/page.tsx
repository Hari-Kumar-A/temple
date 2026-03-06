import { client } from "@/sanity/lib/client";

type Event = {
  _id: string;
  title: string;
  description: string;
  date: string;
};

// Use this query to get all events
const QUERY = `*[_type == "event"] | order(date asc)`;

export default async function EventsPage() {
  // 1. Fetch data safely to avoid build crashes
  let events: Event[] = [];
  try {
    events = await client.fetch(QUERY);
  } catch (error) {
    console.error("Sanity fetch failed during build:", error);
    // Returning an empty array allows the build to finish even if Sanity is down
    events = [];
  }

  return (
    <div className="relative pt-20 pb-24 px-6 md:px-12 bg-creme min-h-screen overflow-hidden">
      {/* Background Accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] z-[-1]" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-xs uppercase tracking-[0.3em] font-bold text-primary mb-2">
            Sacred Gathering
          </h2>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-maroon mb-4">
            Temple Events & Poojas
          </h1>
          <div className="w-32 h-0.5 bg-primary mx-auto mt-6" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.length > 0 ? (
            events.map((event) => (
              <div
                key={event._id}
                className="event-card-glass p-8 flex flex-col border-t-4 border-t-primary bg-white shadow-sm"
              >
                <h2 className="text-2xl font-serif font-bold text-maroon mb-3">
                  {event.title}
                </h2>

                <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 bg-orange-50 border border-orange-100 rounded-full w-fit">
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    {new Date(event.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                  {event.description}
                </p>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-white/50 rounded-3xl border border-dashed border-gray-300">
              <p className="text-gray-500 font-serif italic">
                No upcoming events scheduled at this time.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
