import { Users, GraduationCap, BookOpen, Award } from 'lucide-react'

const defaultStats = [
  { icon: Users, value: '35+', label: 'Faculty Members' },
  { icon: GraduationCap, value: '20+', label: 'Years of Excellence' },
  { icon: BookOpen, value: '500+', label: 'Research Publications' },
  { icon: Award, value: 'Grade A', label: 'NAAC Accreditation' },
]

function StatsBar({ stats = defaultStats }) {
  return (
    <section className="relative z-10 -mt-10 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <div
              key={stat.label}
              className="flex items-center gap-3 px-6 py-6 justify-center md:justify-start"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Icon className="w-5 h-5 text-brand-blue" strokeWidth={2} />
              </div>
              <div>
                <div className="text-navy font-bold text-lg leading-tight">{stat.value}</div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default StatsBar