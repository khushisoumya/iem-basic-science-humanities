import { useState } from 'react'
import { FileText, Calendar, Download } from 'lucide-react'

const categories = ['All', 'Academic', 'Examination', 'Event', 'General']

const notices = [
  { title: 'Internal Assessment Schedule (Even Sem)', date: 'May 15, 2026', category: 'Examination' },
  { title: 'Submission of Project Reports', date: 'May 10, 2026', category: 'Academic' },
  { title: 'Departmental Seminar Series', date: 'Every Friday, 3:00 PM', category: 'Event' },
  { title: 'Revised Class Timetable - Semester IV', date: 'April 28, 2026', category: 'Academic' },
  { title: 'Mid-Semester Examination Guidelines', date: 'April 20, 2026', category: 'Examination' },
  { title: 'Holiday Notice - Summer Break', date: 'April 10, 2026', category: 'General' },
  { title: 'Guest Lecture on AI Ethics', date: 'April 5, 2026', category: 'Event' },
  { title: 'Library Fine Waiver Notice', date: 'March 30, 2026', category: 'General' },
]

const categoryColors = {
  Academic: 'bg-blue-50 text-brand-blue',
  Examination: 'bg-orange-50 text-orange-500',
  Event: 'bg-green-50 text-green-600',
  General: 'bg-gray-100 text-gray-500',
}

function NoticeList() {
  const [active, setActive] = useState('All')
  const filtered = notices.filter((n) => active === 'All' || n.category === active)

  return (
    <section className="max-w-5xl mx-auto px-6 pt-14">
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors ${
              active === cat
                ? 'bg-brand-blue text-white border-brand-blue'
                : 'bg-white text-gray-600 border-gray-200 hover:border-brand-blue hover:text-brand-blue'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm divide-y divide-gray-100">
        {filtered.map((notice) => (
          <div key={notice.title} className="flex items-center gap-4 p-5 hover:bg-gray-50/60 transition-colors">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
              <FileText className="w-4.5 h-4.5 text-brand-blue" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h4 className="text-navy font-medium text-sm">{notice.title}</h4>
              <div className="flex items-center gap-3 mt-1">
                <span className="flex items-center gap-1 text-gray-400 text-xs">
                  <Calendar className="w-3 h-3" strokeWidth={2} />
                  {notice.date}
                </span>
                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${categoryColors[notice.category]}`}>
                  {notice.category}
                </span>
              </div>
            </div>
            <button className="w-9 h-9 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center shrink-0 transition-colors" aria-label="Download">
              <Download className="w-4 h-4 text-gray-500" strokeWidth={2} />
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-center text-gray-400 text-sm py-10">No notices in this category.</p>
        )}
      </div>
    </section>
  )
}
export default NoticeList