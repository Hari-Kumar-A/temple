export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 bg-[var(--primary)] text-white">
        <h1 className="text-4xl font-bold mb-4">Sri Ganapathi Temple</h1>
        <p className="text-lg">
          Divine Grace • Veda Rakshanam • Goh Samrakshanam
        </p>
      </section>

      {/* About Preview */}
      <section className="py-16 px-8 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-[var(--primary)]">
          About the Temple
        </h2>
        <p className="max-w-2xl mx-auto">
          This is dummy content describing the temple history, divine
          traditions, vedic learning and spiritual activities.
        </p>
      </section>

      {/* Events Preview */}
      <section className="py-16 bg-white px-8">
        <h2 className="text-3xl font-semibold text-center mb-8 text-[var(--primary)]">
          Upcoming Events
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg shadow">
            <h3 className="font-bold">Special Pooja</h3>
            <p>Dummy description for event.</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h3 className="font-bold">Veda Parayanam</h3>
            <p>Dummy description for event.</p>
          </div>
          <div className="p-6 border rounded-lg shadow">
            <h3 className="font-bold">Goshala Activity</h3>
            <p>Dummy description for event.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
