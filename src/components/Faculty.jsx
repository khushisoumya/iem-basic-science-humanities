import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const facultyMembers = [
  {
    name: 'Dr. Ananya Roy',
    role: 'Professor & HOD',
    qualification: 'Ph.D. in Mathematics',
    photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=300',
  },
  {
    name: 'Dr. Subhankar Das',
    role: 'Associate Professor',
    qualification: 'Ph.D. in Physics',
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=300',
  },
  {
    name: 'Dr. Madhurima Sen',
    role: 'Associate Professor',
    qualification: 'Ph.D. in English',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300',
  },
  {
    name: 'Dr. Arindam Ghosh',
    role: 'Assistant Professor',
    qualification: 'Ph.D. in Chemistry',
    photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=300',
  },
  {
    name: 'Dr. Priyanka Saha',
    role: 'Assistant Professor',
    qualification: 'Ph.D. in Economics',
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300',
  },
]

function Faculty() {
  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return
    const amount = 260
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            Our Team
          </span>
          <h2 className="text-3xl font-bold text-navy">Distinguished Faculty</h2>
          <p className="text-gray-500 text-sm mt-3">
            Meet the experts who guide and nurture our students towards excellence
          </p>
        </div>

        {/* Carousel */}
        <div className="relative flex items-center gap-3">
          <button
            onClick={() => scroll('left')}
            className="hidden sm:flex w-9 h-9 rounded-full border border-gray-200 items-center justify-center shrink-0 hover:bg-gray-50 transition-colors"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-navy" strokeWidth={2} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {facultyMembers.map((member) => (
              <div
                key={member.name}
                className="shrink-0 w-[220px] rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-navy font-semibold text-sm">{member.name}</h4>
                  <p className="text-gray-500 text-xs mt-1">{member.role}</p>
                  <p className="text-gray-400 text-xs">{member.qualification}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="hidden sm:flex w-9 h-9 rounded-full border border-gray-200 items-center justify-center shrink-0 hover:bg-gray-50 transition-colors"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-navy" strokeWidth={2} />
          </button>
        </div>

        {/* View All button */}
        <div className="text-center mt-10">
          <button className="bg-brand-blue hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-md transition-colors">
            View All Faculty
          </button>
        </div>
      </div>
    </section>
  )
}

export default Faculty