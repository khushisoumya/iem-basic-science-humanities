

import { Eye, Target } from 'lucide-react'

const items = [
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be a centre of excellence in Basic Sciences and Humanities, fostering critical thinking, creativity, and ethical values.',
    borderColor: 'border-l-brand-blue',
    iconBg: 'bg-blue-50',
    iconColor: 'text-brand-blue',
  },
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To empower students with a strong foundation in fundamental sciences and humanities for holistic development and lifelong learning.',
    borderColor: 'border-l-orange-400',
    iconBg: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
]

function VisionMission() {
  return (
    <section className="relative bg-blue-50/40 py-16 px-6 overflow-hidden">
      <div className="relative max-w-5xl mx-auto grid sm:grid-cols-2 gap-6">
        {items.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.title}
              className={`bg-white rounded-2xl shadow-sm border-t border-r border-b border-gray-100 border-l-4 ${item.borderColor} p-7 flex gap-5`}
            >
              <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center shrink-0`}>
                <Icon className={`w-6 h-6 ${item.iconColor}`} strokeWidth={2} />
              </div>
              <div>
                <h3 className="text-navy font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default VisionMission