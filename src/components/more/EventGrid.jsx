import { Clock, MapPin } from 'lucide-react'

import event1 from "../../assets/bsh19.webp"
import event2 from "../../assets/bsh20.jpg"
import event3 from "../../assets/bsh21.jpg"
import event4 from "../../assets/bsh27.jpeg"
import event5 from "../../assets/bsh24.jpg"
import event6 from "../../assets/bsh26.jpg"
const events = [
  {
    month: 'AUG',
    day: '15',
    title: 'Independence Day Celebration',
    description: 'Flag hoisting ceremony followed by cultural performances.',
    time: '09:00 AM - 11:00 AM',
    location: 'Main Auditorium',
    status: 'Upcoming',
    image: event1,
  },
  {
    month: 'SEP',
    day: '05',
    title: 'Teachers Day Felicitation',
    description: 'Honoring faculty contributions with a special program.',
    time: '11:00 AM - 01:00 PM',
    location: 'BSH Seminar Hall',
    status: 'Upcoming',
    image: event2,
  },
  {
    month: 'MAY',
    day: '20',
    title: 'National Science Day Celebration',
    description: 'Interactive sessions, exhibitions and workshops.',
    time: '10:00 AM - 04:00 PM',
    location: 'BSH Auditorium',
    status: 'Past',
    image: event3,
  },
  {
    month: 'MAY',
    day: '28',
    title: 'Research Methodology Workshop',
    description: 'Hands-on workshop for research scholars.',
    time: '11:00 AM - 01:00 PM',
    location: 'Seminar Hall',
    status: 'Past',
    image: event4,
  },
  {
    month: 'MAR',
    day: '08',
    title: 'International Women\'s Day Program',
    description: 'Panel discussion on women in STEM fields.',
    time: '10:00 AM - 12:00 PM',
    location: 'Conference Room',
    status: 'Past',
    image: event5,
  },
  {
    month: 'FEB',
    day: '14',
    title: 'Annual Departmental Fest',
    description: 'Student-led technical and cultural showcase.',
    time: '09:00 AM - 06:00 PM',
    location: 'Campus Grounds',
    status: 'Past',
    image: event6,
  },
]

function EventGrid({ activeFilter = 'All' }) {
  const filtered = events.filter((e) => activeFilter === 'All' || e.status === activeFilter)

  return (
    <section className="max-w-6xl mx-auto px-6 pt-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((event) => (
          <div
            key={event.title}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image with overlay */}
            <div className="relative h-44">
              <img
                src={event.image}
                alt={event.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />

              {/* Date badge */}
              <div className="absolute top-3 left-3 bg-white/95 rounded-lg w-12 h-12 flex flex-col items-center justify-center">
                <span className="text-brand-blue text-[10px] font-semibold">{event.month}</span>
                <span className="text-navy text-base font-bold leading-none">{event.day}</span>
              </div>

              {/* Status badge */}
              <span
                className={`absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full ${
                  event.status === 'Upcoming' ? 'bg-brand-blue text-white' : 'bg-white/90 text-gray-600'
                }`}
              >
                {event.status}
              </span>

              {/* Title on image */}
              <h3 className="absolute bottom-3 left-4 right-4 text-white font-bold text-base leading-snug">
                {event.title}
              </h3>
            </div>

            {/* Body */}
            <div className="p-6 pt-4">
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{event.description}</p>

              <div className="flex flex-col gap-2 text-gray-400 text-xs">
                <span className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                  {event.time}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                  {event.location}
                </span>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-400 text-sm py-10">No events match this filter.</p>
        )}
      </div>
    </section>
  )
}

export default EventGrid