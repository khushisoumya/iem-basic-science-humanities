import { UserCog, FileSignature, Users, Building2, Briefcase, CalendarClock, Bell } from 'lucide-react'

const committeeDetails = [
  { icon: UserCog, label: 'Chairperson', value: 'Head of Department' },
  { icon: FileSignature, label: 'Secretary', value: 'Senior Faculty Coordinator' },
  { icon: Users, label: 'Internal Members', value: '8 Faculty Members' },
  { icon: Building2, label: 'External Experts', value: '2 Academic Experts' },
  { icon: Briefcase, label: 'Industry Representative', value: '1 Industry Partner' },
  { icon: CalendarClock, label: 'Meeting Frequency', value: 'Twice a Year' },
]

function CommitteeInfo() {
  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14">
      <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 sm:p-8">
        <div className="flex items-center gap-2 mb-6">
          <Bell className="w-5 h-5 text-brand-blue" strokeWidth={2} />
          <h3 className="text-navy font-bold text-lg sm:text-xl">Committee Information</h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          {committeeDetails.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.label}
                className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-4"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-brand-blue" strokeWidth={2} />
                </div>
                <div>
                  <div className="text-gray-500 text-xs">{item.label}</div>
                  <div className="text-navy text-sm font-semibold">{item.value}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CommitteeInfo