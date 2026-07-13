import { Cpu, FlaskConical, Leaf, GraduationCap } from 'lucide-react'

const services = [
  {
    icon: Cpu,
    title: 'Data & Technology Consulting',
    description: 'Statistical analysis, data modeling, and software consultancy for industry partners.',
  },
  {
    icon: FlaskConical,
    title: 'Material Testing & Analysis',
    description: 'Chemistry and physics lab-based testing services for local industries.',
  },
  {
    icon: Leaf,
    title: 'Environmental Assessment',
    description: 'Environmental impact studies and sustainability audits for organizations.',
  },
  {
    icon: GraduationCap,
    title: 'Training & Workshops',
    description: 'Customized training programs in communication, mathematics, and applied sciences.',
  },
]

function ConsultancyServices() {
  return (
    <section className="bg-blue-50/40 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-white text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4 border border-blue-100">
            Services
          </span>
          <h2 className="text-2xl font-bold text-navy">Consultancy Services Offered</h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.title}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex gap-4 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-blue to-navy flex items-center justify-center shrink-0">
                  <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <h3 className="text-navy font-bold text-base mb-1.5">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ConsultancyServices