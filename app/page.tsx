export const revalidate = 30;

import { client } from "@/sanity/lib/client";

type Event = {
  _id: string;
  title: string;
  description: string;
  date: string;
};

const EVENTS_QUERY = `
  *[_type == "event" && date >= now()]
  | order(date asc)
`;

export default async function Home() {
  const events: Event[] = await client.fetch(EVENTS_QUERY);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-[var(--primary)] text-white">
        <h1 className="text-4xl font-bold mb-4">Sri Ganapathi Temple</h1>
        <p className="text-lg">
          Divine Grace • Veda Rakshanam • Goh Samrakshanam
        </p>
      </section>

      {/* About Section */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[var(--primary)]">
          About the Temple
        </h2>
        <p className="max-w-2xl mx-auto">
          This sacred temple is dedicated to Lord Sri Ganapathi, promoting Vedic
          traditions and spiritual activities.
        </p>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-white px-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[var(--primary)]">
          Upcoming Events
        </h2>

        {events.length === 0 ? (
          <p className="text-center text-gray-500">
            No upcoming events at the moment.
          </p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event._id}
                className="p-6 border rounded-lg shadow hover:shadow-lg transition"
              >
                <h3 className="font-bold text-lg mb-2">{event.title}</h3>

                <p className="text-sm text-gray-500 mb-2">
                  {new Date(event.date).toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </p>

                <p className="text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
