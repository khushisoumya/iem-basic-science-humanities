import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import faculty1 from "../assets/bsh13.jpg"
import faculty2 from "../assets/bsh17.webp"
import faculty3 from "../assets/bsh15.jpg"
import faculty4 from "../assets/bsh16.webp"
import faculty5 from "../assets/bsh14.jpg"

const facultyMembers = [
  {
    name: 'Dr. Ananya Roy',
    role: 'Professor & HOD',
    qualification: 'Ph.D. in Mathematics',
    photo: faculty1,
  },
  {
    name: 'Dr. Subhankar Das',
    role: 'Associate Professor',
    qualification: 'Ph.D. in Physics',
    photo: faculty2,
  },
  {
    name: 'Dr. Madhurima Sen',
    role: 'Associate Professor',
    qualification: 'Ph.D. in English',
    photo: faculty3,
  },
  {
    name: 'Dr. Arindam Ghosh',
    role: 'Assistant Professor',
    qualification: 'Ph.D. in Chemistry',
    photo: faculty4,
  },
  {
    name: 'Dr. Priyanka Saha',
    role: 'Assistant Professor',
    qualification: 'Ph.D. in Economics',
    photo: faculty5,
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

        {/* View All button
        <div className="text-center mt-10">
          <button className="bg-brand-blue hover:bg-blue-700 text-white text-sm font-medium px-6 py-3 rounded-md transition-colors">
            View All Faculty
          </button>
        </div> */}
      </div>
    </section>
  )
}

export default Faculty