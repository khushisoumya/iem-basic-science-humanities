import { FileDown } from 'lucide-react'

const meetings = [
  {
    date: 'March 2026',
    title: 'Curriculum Revision Meeting',
    description: 'Reviewed Semester VI curriculum.',
  },
  {
    date: 'January 2026',
    title: 'Industry Advisory Meeting',
    description: 'AI & Data Science curriculum discussion.',
  },
  {
    date: 'November 2025',
    title: 'Research Curriculum Review',
    description: 'Approved revised electives.',
  },
  {
    date: 'August 2025',
    title: 'Academic Planning Meeting',
    description: 'CBCS implementation discussion.',
  },
]

function MeetingTimeline() {
  return (
    <section className="max-w-4xl mx-auto px-6 pt-14">
      <div className="text-center mb-10">
        <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
          Timeline
        </span>
        <h2 className="text-2xl font-bold text-navy">Meeting Timeline</h2>
      </div>

      <div className="relative pl-8 sm:pl-10">
        {/* Connecting line */}
        <div className="absolute left-[11px] sm:left-[15px] top-2 bottom-2 w-0.5 bg-gray-200" />

        <div className="flex flex-col gap-8">
          {meetings.map((meeting) => (
            <div key={meeting.title} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-8 sm:-left-10 top-1.5 w-6 h-6 rounded-full bg-brand-blue border-4 border-blue-50 flex items-center justify-center" />

              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow">
                <span className="inline-block text-brand-blue text-xs font-semibold mb-2">
                  {meeting.date}
                </span>
                <h3 className="text-navy font-bold text-base mb-1.5">{meeting.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{meeting.description}</p>
                <button className="flex items-center gap-1.5 text-brand-blue text-sm font-medium hover:gap-2.5 transition-all">
                  <FileDown className="w-4 h-4" strokeWidth={2} />
                  Download Minutes
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetingTimeline