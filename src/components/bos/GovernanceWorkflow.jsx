import { MessageSquare, Landmark, GraduationCap, CheckCircle2, Rocket, ArrowRight } from 'lucide-react'

const steps = [
  { icon: MessageSquare, label: 'Faculty Feedback' },
  { icon: Landmark, label: 'Board of Studies' },
  { icon: GraduationCap, label: 'Academic Council' },
  { icon: CheckCircle2, label: 'Approval' },
  { icon: Rocket, label: 'Implementation' },
]

function GovernanceWorkflow() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
      <div className="text-center mb-10">
        <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
          Process
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-navy">Governance Workflow</h2>
      </div>

      <div className="flex flex-col lg:flex-row items-stretch gap-4">
        {steps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="flex items-center gap-4 flex-1">
              <div className="flex-1 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-6 h-6 text-brand-blue" strokeWidth={2} />
                </div>
                <h4 className="text-navy font-semibold text-sm">{step.label}</h4>
              </div>

              {i < steps.length - 1 && (
                <ArrowRight className="w-5 h-5 text-gray-300 shrink-0 hidden lg:block" strokeWidth={2} />
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default GovernanceWorkflow