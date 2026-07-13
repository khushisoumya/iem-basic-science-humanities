const facilities = [
  {
    name: 'Modern Classrooms',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=400',
  },
  {
    name: 'Advanced Laboratories',
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=400',
  },
  {
    name: 'Research Centers',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400',
  },
  {
    name: 'Digital Library',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=400',
  },
]

function Facilities() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[minmax(0,1fr)_2fr] gap-10 items-center">
        {/* Left: heading + CTA */}
        <div>
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            Infrastructure
          </span>
          <h2 className="text-3xl font-bold text-navy leading-snug mb-3">
            World-Class Facilities
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            State-of-the-art infrastructure designed for comprehensive learning and innovation
          </p>
          <div className="w-16 h-1 bg-brand-blue rounded-full mb-6" />
          <button className="border border-gray-200 text-navy text-sm font-medium px-5 py-2.5 rounded-md hover:bg-gray-50 transition-colors flex items-center gap-2">
            View All Facilities
            <span>→</span>
          </button>
        </div>

        {/* Right: image grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {facilities.map((facility) => (
            <div
              key={facility.name}
              className="relative rounded-xl overflow-hidden aspect-[3/4] group"
            >
              <img
                src={facility.image}
                alt={facility.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 text-white text-xs font-medium">
                {facility.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Facilities