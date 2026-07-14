import { BookMarked, Mic2, ExternalLink } from 'lucide-react'

const items = [
  { icon: BookMarked, type: 'Journal', title: 'International Journal of Applied Mathematics', detail: 'Quarterly publication, ISSN 2456-1234' },
  { icon: BookMarked, type: 'Journal', title: 'Journal of Data Science and Statistics', detail: 'Bi-annual publication, ISSN 2456-5678' },
  { icon: Mic2, type: 'Conference', title: 'International Conference on Environmental Sustainability', detail: 'Hosted March 2026, 120+ delegates' },
  { icon: Mic2, type: 'Conference', title: 'National Conference on Green Energy Solutions', detail: 'Hosted Nov 2025, 80+ delegates' },
  { icon: BookMarked, type: 'Journal', title: 'Physics Education Review', detail: 'Annual publication, ISSN 2456-9012' },
  { icon: Mic2, type: 'Conference', title: 'AICTE Sponsored FDP on Modern Pedagogy', detail: 'Hosted Jan 2026, 45 participants' },
]

const typeColors = {
  Journal: 'bg-blue-50 text-brand-blue',
  Conference: 'bg-orange-50 text-orange-500',
}

function JournalsGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14 pb-12 sm:pb-14 lg:pb-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <div key={item.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-brand-blue" strokeWidth={2} />
                </div>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${typeColors[item.type]}`}>{item.type}</span>
              </div>
              <h3 className="text-navy font-bold text-base mb-2 leading-snug">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-4">{item.detail}</p>
              <button className="flex items-center gap-1.5 text-brand-blue text-xs font-medium hover:gap-2.5 transition-all">
                View Details
                <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
              </button>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default JournalsGrid