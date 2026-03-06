export default function CalendarPage() {
  const festivals = [
    { name: "Maha Shivaratri", date: "February 26, 2026" },
    { name: "Sri Rama Navami", date: "April 5, 2026" },
    { name: "Ganesh Chaturthi", date: "September 14, 2026" },
  ];

  return (
    <div className="section-container">
      <h1 className="text-4xl pt-12 font-serif text-center text-primary mb-12">
        Special Pooja Calendar 2026
      </h1>
      <div className="space-y-4 max-w-3xl mx-auto">
        {festivals.map((f, i) => (
          <div
            key={i}
            className="flex justify-between items-center p-6 bg-white border-l-4 border-primary shadow-sm rounded-r-lg"
          >
            <span className="font-bold text-gray-800">{f.name}</span>
            <span className="text-primary font-medium">{f.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
