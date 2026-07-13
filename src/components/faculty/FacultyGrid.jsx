import { Mail, User, GraduationCap, FileText, ArrowRight } from 'lucide-react'

const facultyMembers = [
  {
    name: 'Dr. Rajesh Kumar',
    title: 'Professor & HOD',
    tags: ['Applied Mathematics', 'Data Science'],
    photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400',
  },
  {
    name: 'Dr. Priya Sharma',
    title: 'Associate Professor',
    tags: ['English Literature', 'Communication'],
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
  },
  {
    name: 'Dr. Anil Verma',
    title: 'Assistant Professor',
    tags: ['Physics', 'Material Science'],
    photo: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=400',
  },
  {
    name: 'Dr. Neha Singh',
    title: 'Associate Professor',
    tags: ['Chemistry', 'Green Energy'],
    photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400',
  },
  {
    name: 'Mr. Sandeep Das',
    title: 'Assistant Professor',
    tags: ['Environmental Science', 'Sustainability'],
    photo: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=400',
  },
  {
    name: 'Ms. Pooja Gupta',
    title: 'Assistant Professor',
    tags: ['Statistics', 'Machine Learning'],
    photo: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?q=80&w=400',
  },
]

function FacultyGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 pb-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {facultyMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-56 object-cover"
            />
            <div className="p-5">
              <h3 className="text-navy font-bold text-base">{member.name}</h3>
              <p className="text-brand-blue text-sm font-medium mt-0.5">{member.title}</p>

              <div className="flex flex-wrap gap-x-2 gap-y-1 mt-3 text-gray-500 text-xs">
                {member.tags.map((tag, i) => (
                  <span key={tag} className="flex items-center gap-2">
                    {tag}
                    {i < member.tags.length - 1 && <span className="text-gray-300">|</span>}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 mt-4">
                {[Mail, User, GraduationCap, FileText].map((Icon, i) => (
                  <button
                    key={i}
                    className="w-9 h-9 rounded-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors"
                    aria-label="Faculty action"
                  >
                    <Icon className="w-4 h-4 text-gray-500" strokeWidth={2} />
                  </button>
                ))}
                <button
                  className="w-9 h-9 rounded-lg bg-navy hover:bg-navy-light flex items-center justify-center transition-colors ml-auto"
                  aria-label="View profile"
                >
                  <ArrowRight className="w-4 h-4 text-white" strokeWidth={2} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FacultyGrid