import { FlaskConical, IndianRupee, Calendar, User } from 'lucide-react'

const projects = [
  {
    title: 'AI-Based Predictive Models for Structural Health Monitoring',
    agency: 'DST SERB',
    pi: 'Dr. Ananya Roy',
    amount: '₹42 Lakhs',
    duration: '2024 - 2026',
    status: 'Ongoing',
  },
  {
    title: 'Green Synthesis of Nanomaterials for Water Purification',
    agency: 'DST SERB',
    pi: 'Dr. Arindam Ghosh',
    amount: '₹38 Lakhs',
    duration: '2023 - 2025',
    status: 'Ongoing',
  },
  {
    title: 'Statistical Analysis of Renewable Energy Adoption Patterns',
    agency: 'AICTE RPS',
    pi: 'Ms. Pooja Gupta',
    amount: '₹18 Lakhs',
    duration: '2022 - 2024',
    status: 'Completed',
  },
  {
    title: 'Ethical AI Frameworks in Higher Education',
    agency: 'ICSSR',
    pi: 'Dr. Madhurima Sen',
    amount: '₹15 Lakhs',
    duration: '2023 - 2024',
    status: 'Completed',
  },
  {
    title: 'Low-Cost Sensors for Environmental Monitoring',
    agency: 'DST SERB',
    pi: 'Mr. Sandeep Das',
    amount: '₹29 Lakhs',
    duration: '2024 - 2026',
    status: 'Ongoing',
  },
  {
    title: 'Computational Modeling of Quantum Systems',
    agency: 'DAE-BRNS',
    pi: 'Dr. Anil Verma',
    amount: '₹35 Lakhs',
    duration: '2021 - 2023',
    status: 'Completed',
  },
]

const statusColors = {
  Ongoing: 'bg-blue-50 text-brand-blue',
  Completed: 'bg-green-50 text-green-600',
}

function ProjectGrid({ activeFilter = 'All' }) {
  const filtered = projects.filter((p) => activeFilter === 'All' || p.status === activeFilter)

  return (
    <section className="max-w-6xl mx-auto px-6 pt-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <div
            key={project.title}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                <FlaskConical className="w-6 h-6 text-brand-blue" strokeWidth={2} />
              </div>
              <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${statusColors[project.status]}`}>
                {project.status}
              </span>
            </div>

            <h3 className="text-navy font-bold text-base mb-1 leading-snug">{project.title}</h3>
            <p className="text-gray-400 text-xs mb-4">{project.agency}</p>

            <div className="flex flex-col gap-2 text-gray-500 text-xs">
              <span className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                {project.pi}
              </span>
              <span className="flex items-center gap-2">
                <IndianRupee className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                {project.amount}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 shrink-0" strokeWidth={2} />
                {project.duration}
              </span>
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <p className="col-span-full text-center text-gray-400 text-sm py-10">No projects match this filter.</p>
        )}
      </div>
    </section>
  )
}

export default ProjectGrid