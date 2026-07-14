import { FileText, Users, Calendar, ExternalLink } from 'lucide-react'

const publications = [
  {
    title: 'Machine Learning Approaches for Predictive Analytics in Engineering Education',
    authors: 'Dr. Ananya Roy, Dr. Subhankar Das',
    venue: 'International Journal of Applied Mathematics',
    year: '2026',
    type: 'Journal',
  },
  {
    title: 'Sustainable Green Chemistry Practices in Undergraduate Curriculum',
    authors: 'Dr. Arindam Ghosh, Dr. Neha Singh',
    venue: 'National Conference on Green Energy Solutions',
    year: '2025',
    type: 'Conference',
  },
  {
    title: 'Ethical Frameworks in Technical Communication',
    authors: 'Dr. Madhurima Sen',
    venue: 'Handbook of Engineering Humanities, Springer',
    year: '2025',
    type: 'Book Chapter',
  },
  {
    title: 'Statistical Modeling of Renewable Energy Systems',
    authors: 'Ms. Pooja Gupta, Dr. Priya Sharma',
    venue: 'Journal of Data Science and Statistics',
    year: '2025',
    type: 'Journal',
  },
  {
    title: 'Environmental Impact Assessment Using GIS Tools',
    authors: 'Mr. Sandeep Das',
    venue: 'International Conference on Environmental Sustainability',
    year: '2024',
    type: 'Conference',
  },
  {
    title: 'Foundations of Applied Physics for Engineers',
    authors: 'Dr. Anil Verma',
    venue: 'Physics Education Review',
    year: '2024',
    type: 'Journal',
  },
]

const typeColors = {
  Journal: 'bg-blue-50 text-brand-blue',
  Conference: 'bg-orange-50 text-orange-500',
  'Book Chapter': 'bg-green-50 text-green-600',
}

function PublicationList({ activeFilter = 'All', searchTerm = '' }) {
  const filtered = publications.filter((pub) => {
    const matchesFilter = activeFilter === 'All' || pub.type === activeFilter
    const matchesSearch =
      pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesFilter && matchesSearch
  })

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-navy font-bold text-base sm:text-lg">
          Showing {filtered.length} of {publications.length} publications
        </h2>
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map((pub) => (
          <div
            key={pub.title}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-brand-blue" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between gap-3 flex-wrap">
                  <h3 className="text-navy font-semibold text-base leading-snug">{pub.title}</h3>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${typeColors[pub.type]}`}>
                    {pub.type}
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-3 text-gray-500 text-xs flex-wrap">
                  <span className="flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5" strokeWidth={2} />
                    {pub.authors}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
                    {pub.year}
                  </span>
                </div>

                <p className="text-gray-400 text-xs mt-1 italic">{pub.venue}</p>

                <button className="flex items-center gap-1.5 text-brand-blue text-xs font-medium mt-3 hover:gap-2.5 transition-all">
                  View Publication
                  <ExternalLink className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="text-center text-gray-400 text-sm py-10">No publications match your search.</p>
        )}
      </div>
    </section>
  )
}

export default PublicationList