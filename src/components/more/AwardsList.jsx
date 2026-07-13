import { Trophy, Calendar, User } from 'lucide-react'

const awards = [
  { title: 'Best Research Paper Award', recipient: 'Dr. Ananya Roy', body: 'International Conference on Applied Mathematics', year: '2026' },
  { title: 'Young Scientist Award', recipient: 'Dr. Arindam Ghosh', body: 'Indian Chemical Society', year: '2025' },
  { title: 'Excellence in Teaching Award', recipient: 'Dr. Madhurima Sen', body: 'Institute of Engineering & Management', year: '2025' },
  { title: 'Best Student Paper Award', recipient: 'Rahul Bose (Scholar)', body: 'National Conference on Green Energy', year: '2025' },
  { title: 'Outstanding Contribution to Statistics', recipient: 'Ms. Pooja Gupta', body: 'Indian Statistical Association', year: '2024' },
  { title: 'Innovation in Physics Education', recipient: 'Dr. Anil Verma', body: 'Physics Education Review Board', year: '2024' },
]

function AwardsList() {
  return (
    <section className="max-w-5xl mx-auto px-6 pt-14 pb-16">
      <div className="flex flex-col gap-4">
        {awards.map((award) => (
          <div key={award.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-navy flex items-center justify-center shrink-0">
              <Trophy className="w-6 h-6 text-white" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-navy font-bold text-base mb-1">{award.title}</h3>
              <p className="text-gray-500 text-sm mb-2">{award.body}</p>
              <div className="flex items-center gap-4 text-gray-400 text-xs flex-wrap">
                <span className="flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5" strokeWidth={2} />
                  {award.recipient}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
                  {award.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default AwardsList