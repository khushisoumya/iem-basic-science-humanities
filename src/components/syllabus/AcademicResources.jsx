import { FileDown, LayoutGrid, CalendarDays, ClipboardList, ShieldCheck, BookMarked, ArrowRight } from 'lucide-react'

const resources = [
  { icon: FileDown, label: 'Download Syllabus' },
  { icon: LayoutGrid, label: 'Course Structure' },
  { icon: CalendarDays, label: 'Academic Calendar' },
  { icon: ClipboardList, label: 'Examination Rules' },
  { icon: ShieldCheck, label: 'NAAC Documents' },
  { icon: BookMarked, label: 'AICTE Guidelines' },
]

function AcademicResources() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14">
      <div className="bg-gray-50 rounded-2xl border border-gray-100 p-8">
        <h3 className="text-navy font-bold text-xl mb-6">Academic Resources</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {resources.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.label}
                className="group flex items-center gap-3 bg-white rounded-xl border border-gray-100 p-4 hover:border-brand-blue hover:shadow-sm transition-all text-left"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-5 h-5 text-brand-blue" strokeWidth={2} />
                </div>
                <span className="text-navy text-sm font-medium flex-1">{item.label}</span>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-brand-blue transition-colors" strokeWidth={2} />
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default AcademicResources