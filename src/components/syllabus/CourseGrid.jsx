import { Code2, Calculator, Atom, Beaker, Leaf, MessageSquare, PenTool, Cpu, Zap, Cog, Eye, Download } from 'lucide-react'

const courses = [
  { icon: Code2, title: 'Programming Fundamentals', credits: 4, semester: 'Semester I', type: 'Theory' },
  { icon: Calculator, title: 'Engineering Mathematics', credits: 4, semester: 'Semester I', type: 'Theory' },
  { icon: Atom, title: 'Engineering Physics', credits: 3, semester: 'Semester I', type: 'Theory' },
  { icon: Beaker, title: 'Engineering Chemistry', credits: 3, semester: 'Semester I', type: 'Laboratory' },
  { icon: Leaf, title: 'Environmental Science', credits: 2, semester: 'Semester II', type: 'Theory' },
  { icon: MessageSquare, title: 'Communication Skills', credits: 2, semester: 'Semester II', type: 'Theory' },
  { icon: PenTool, title: 'Engineering Graphics', credits: 3, semester: 'Semester II', type: 'Laboratory' },
  { icon: Cpu, title: 'Digital Fundamentals', credits: 4, semester: 'Semester III', type: 'Theory' },
  { icon: Zap, title: 'Basic Electronics', credits: 3, semester: 'Semester III', type: 'Laboratory' },
  { icon: Cog, title: 'Engineering Mechanics', credits: 4, semester: 'Semester III', type: 'Theory' },
]

function CourseGrid() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          const Icon = course.icon
          return (
            <div
              key={course.title}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-brand-blue" strokeWidth={2} />
                </div>
                <span className="text-navy font-bold text-sm">{course.credits} Credits</span>
              </div>

              <h3 className="text-navy font-bold text-base mb-3">{course.title}</h3>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-blue-50 text-brand-blue text-xs font-medium px-2.5 py-1 rounded-full">
                  {course.semester}
                </span>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    course.type === 'Laboratory'
                      ? 'bg-orange-50 text-orange-500'
                      : 'bg-green-50 text-green-600'
                  }`}
                >
                  {course.type}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button className="flex-1 flex items-center justify-center gap-1.5 border border-gray-200 text-navy text-xs font-medium px-3 py-2.5 rounded-lg hover:bg-gray-50 transition-colors">
                  <Eye className="w-3.5 h-3.5" strokeWidth={2} />
                  View Details
                </button>
                <button className="flex-1 flex items-center justify-center gap-1.5 bg-brand-blue hover:bg-blue-700 text-white text-xs font-medium px-3 py-2.5 rounded-lg transition-colors">
                  <Download className="w-3.5 h-3.5" strokeWidth={2} />
                  Download
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default CourseGrid