import {
  Wrench, Search, PenTool, Cpu, ShieldCheck, MessageSquare,
  Users, Award, FlaskConical, Lightbulb, TrendingUp, Globe2,
} from 'lucide-react'

const outcomes = [
  { number: 'PO1', icon: Wrench, title: 'Engineering Knowledge', description: 'Apply mathematics, science and engineering fundamentals.' },
  { number: 'PO2', icon: Search, title: 'Problem Analysis', description: 'Identify and analyse engineering problems.' },
  { number: 'PO3', icon: PenTool, title: 'Design Solutions', description: 'Design effective engineering solutions.' },
  { number: 'PO4', icon: Cpu, title: 'Modern Tool Usage', description: 'Use modern engineering software and tools.' },
  { number: 'PO5', icon: ShieldCheck, title: 'Ethics', description: 'Practice professional ethics.' },
  { number: 'PO6', icon: MessageSquare, title: 'Communication', description: 'Communicate effectively.' },
  { number: 'PO7', icon: Users, title: 'Teamwork', description: 'Work successfully in multidisciplinary teams.' },
  { number: 'PO8', icon: Award, title: 'Leadership', description: 'Demonstrate leadership.' },
  { number: 'PO9', icon: FlaskConical, title: 'Research', description: 'Apply scientific research methods.' },
  { number: 'PO10', icon: Lightbulb, title: 'Innovation', description: 'Develop innovative engineering solutions.' },
  { number: 'PO11', icon: TrendingUp, title: 'Life-long Learning', description: 'Adapt to emerging technologies.' },
  { number: 'PO12', icon: Globe2, title: 'Society & Environment', description: 'Understand social and environmental responsibilities.' },
]

function OutcomeGrid() {
  return (
    <section className="max-w-6xl mx-auto px-6 pt-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {outcomes.map((outcome) => {
          const Icon = outcome.icon
          return (
            <div
              key={outcome.number}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-navy flex items-center justify-center">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <span className="text-gray-200 font-bold text-3xl leading-none">{outcome.number}</span>
              </div>

              <h3 className="text-navy font-bold text-base mb-2">{outcome.title}</h3>
              <div className="w-8 h-1 bg-brand-blue rounded-full mb-3" />
              <p className="text-gray-500 text-sm leading-relaxed">{outcome.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default OutcomeGrid