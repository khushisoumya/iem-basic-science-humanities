import { User, UserCog, BookOpen, Calendar } from 'lucide-react'

const scholars = [
  {
    name: 'Rahul Bose',
    topic: 'Machine Learning Approaches for Structural Fault Detection',
    supervisor: 'Dr. Ananya Roy',
    area: 'Applied Mathematics',
    year: '2022 - Present',
    status: 'Ongoing',
  },
  {
    name: 'Sneha Chatterjee',
    topic: 'Green Nanomaterials for Sustainable Water Treatment',
    supervisor: 'Dr. Arindam Ghosh',
    area: 'Chemistry',
    year: '2021 - Present',
    status: 'Ongoing',
  },
  {
    name: 'Dr. Amit Banerjee',
    topic: 'Statistical Modeling of Renewable Energy Adoption',
    supervisor: 'Ms. Pooja Gupta',
    area: 'Statistics',
    year: '2019 - 2024',
    status: 'Awarded',
  },
  {
    name: 'Dr. Ritika Sen',
    topic: 'Ethical Frameworks in AI-Driven Higher Education',
    supervisor: 'Dr. Madhurima Sen',
    area: 'English & Communication',
    year: '2018 - 2023',
    status: 'Awarded',
  },
  {
    name: 'Vikram Nair',
    topic: 'Low-Cost Environmental Sensor Networks',
    supervisor: 'Mr. Sandeep Das',
    area: 'Environmental Science',
    year: '2023 - Present',
    status: 'Ongoing',
  },
  {
    name: 'Dr. Meera Iyer',
    topic: 'Computational Modeling of Quantum Transport Systems',
    supervisor: 'Dr. Anil Verma',
    area: 'Physics',
    year: '2019 - 2023',
    status: 'Awarded',
  },
]

const statusColors = {
  Ongoing: 'bg-blue-50 text-brand-blue',
  Awarded: 'bg-green-50 text-green-600',
}

function PhdGrid({ activeFilter = 'All' }) {
  const filtered = scholars.filter((s) => activeFilter === 'All' || s.status === activeFilter)

  return (
    <section className="max-w-6xl mx-auto px-6 pt-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((scholar) => (
          <div
            key={scholar.name}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <User className="w-6 h-6 text-brand-blue" strokeWidth={2} />
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[scholar.status]}`}>
                {scholar.status}
              </span>
            </div>

            <h3 className="text-navy font-bold text-base mb-1">{scholar.name}</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{scholar.topic}</p>

            <div className="flex flex-col gap-2 text-gray-500 text-xs">
              <span className="flex items-center gap-2">
                <UserCog className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                Supervisor: {scholar.supervisor}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                {scholar.area}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                {scholar.year}
              </span>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-400 text-sm py-10">No scholars match this filter.</p>
        )}
      </div>
    </section>
  )
}

export default PhdGrid