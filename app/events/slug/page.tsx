import { client } from "@/sanity/lib/client";

type Props = {
  params: { slug: string };
};

export default async function EventDetail({ params }: Props) {
  const event = await client.fetch(
    `*[_type == "event" && slug.current == $slug][0]`,
    { slug: params.slug },
  );

  if (!event) return <div>Event not found</div>;

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{event.title}</h1>

      <p className="text-gray-500 mb-4">
        {new Date(event.date).toLocaleDateString("en-IN")}
      </p>

      <p>{event.description}</p>
    </div>
  );
}
