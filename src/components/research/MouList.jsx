import { Building2, Calendar, ArrowRight } from 'lucide-react'

const mous = [
  {
    partner: 'TCS Research & Innovation',
    purpose: 'Collaborative research on applied data science and internship program.',
    signed: 'April 2024',
  },
  {
    partner: 'IIT Kharagpur, Dept. of Chemistry',
    purpose: 'Joint research on green nanomaterials and shared lab facilities.',
    signed: 'January 2023',
  },
  {
    partner: 'National Institute of Environmental Sciences',
    purpose: 'Environmental impact assessment training and field research.',
    signed: 'August 2023',
  },
  {
    partner: 'Bengal Chamber of Commerce',
    purpose: 'Industry-academia interaction and consultancy services for local SMEs.',
    signed: 'June 2022',
  },
]

function MouList() {
  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14">
      <div className="text-center mb-10">
        <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
          Partnerships
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-navy">Memorandums of Understanding</h2>
      </div>

      <div className="flex flex-col gap-4">
        {mous.map((mou) => (
          <div
            key={mou.partner}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 flex flex-col sm:flex-row items-start gap-4 hover:shadow-md transition-shadow"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
              <Building2 className="w-5 h-5 text-brand-blue" strokeWidth={2} />
            </div>
            <div className="flex-1">
              <h3 className="text-navy font-bold text-base mb-1">{mou.partner}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-2">{mou.purpose}</p>
              <span className="flex items-center gap-1.5 text-gray-400 text-xs">
                <Calendar className="w-3.5 h-3.5" strokeWidth={2} />
                Signed: {mou.signed}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default MouList