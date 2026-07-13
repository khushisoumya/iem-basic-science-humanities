import { Calculator, FlaskConical, BookOpenText, Leaf, Mic, Palette } from 'lucide-react'

const clubs = [
  { icon: Calculator, name: 'Mathematics Club', description: 'Weekly problem-solving sessions and math olympiad training.', members: '60+', coordinator: 'Dr. Ananya Roy' },
  { icon: FlaskConical, name: 'Science Society', description: 'Experiments, science exhibitions, and quiz competitions.', members: '55+', coordinator: 'Dr. Anil Verma' },
  { icon: BookOpenText, name: 'Literary & Debate Club', description: 'Debates, creative writing, and public speaking workshops.', members: '48+', coordinator: 'Dr. Madhurima Sen' },
  { icon: Leaf, name: 'Green Campus Chapter', description: 'Sustainability drives, tree plantation, and eco-awareness campaigns.', members: '40+', coordinator: 'Mr. Sandeep Das' },
  { icon: Mic, name: 'Cultural Committee', description: 'Organizes cultural fests, music, and dance events.', members: '65+', coordinator: 'Ms. Pooja Gupta' },
  { icon: Palette, name: 'Art & Design Circle', description: 'Painting, design, and creative arts workshops for students.', members: '32+', coordinator: 'Dr. Neha Singh' },
]

function ClubsGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-14 pb-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {clubs.map((club) => {
          const Icon = club.icon
          return (
            <div key={club.name} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-navy flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-navy font-bold text-base mb-2">{club.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{club.description}</p>
              <div className="flex items-center justify-between text-xs text-gray-400 border-t border-gray-100 pt-3">
                <span>{club.members} members</span>
                <span>{club.coordinator}</span>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
export default ClubsGrid