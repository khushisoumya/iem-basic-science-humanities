import { Clock, MapPin, CalendarDays } from 'lucide-react'

const events = [
  {
    month: 'AUG',
    day: '15',
    title: 'Independence Day Celebration',
    description: 'Flag hoisting ceremony followed by cultural performances.',
    time: '09:00 AM - 11:00 AM',
    location: 'Main Auditorium',
    status: 'Upcoming',
  },
  {
    month: 'SEP',
    day: '05',
    title: 'Teachers Day Felicitation',
    description: 'Honoring faculty contributions with a special program.',
    time: '11:00 AM - 01:00 PM',
    location: 'BSH Seminar Hall',
    status: 'Upcoming',
  },
  {
    month: 'MAY',
    day: '20',
    title: 'National Science Day Celebration',
    description: 'Interactive sessions, exhibitions and workshops.',
    time: '10:00 AM - 04:00 PM',
    location: 'BSH Auditorium',
    status: 'Past',
  },
  {
    month: 'MAY',
    day: '28',
    title: 'Research Methodology Workshop',
    description: 'Hands-on workshop for research scholars.',
    time: '11:00 AM - 01:00 PM',
    location: 'Seminar Hall',
    status: 'Past',
  },
  {
    month: 'MAR',
    day: '08',
    title: 'International Women\'s Day Program',
    description: 'Panel discussion on women in STEM fields.',
    time: '10:00 AM - 12:00 PM',
    location: 'Conference Room',
    status: 'Past',
  },
  {
    month: 'FEB',
    day: '14',
    title: 'Annual Departmental Fest',
    description: 'Student-led technical and cultural showcase.',
    time: '09:00 AM - 06:00 PM',
    location: 'Campus Grounds',
    status: 'Past',
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
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-blue-50 rounded-xl w-14 h-14 flex flex-col items-center justify-center shrink-0">
                <span className="text-brand-blue text-[10px] font-semibold">{event.month}</span>
                <span className="text-navy text-lg font-bold leading-none">{event.day}</span>
              </div>
              <span
                className={`text-xs font-medium px-2.5 py-1 rounded-full ml-auto ${
                  event.status === 'Upcoming' ? 'bg-blue-50 text-brand-blue' : 'bg-gray-100 text-gray-500'
                }`}
              >
                {event.status}
              </span>
            </div>

            <h3 className="text-navy font-bold text-base mb-1.5">{event.title}</h3>
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
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-400 text-sm py-10">No events match this filter.</p>
        )}
      </div>
    </section>
  )
}

export default EventGrid