import { GraduationCap, ArrowRight } from 'lucide-react'

function FacultyCTA() {
  return (
    <section className="px-6 pb-20">
      <div className="max-w-6xl mx-auto relative bg-navy rounded-2xl overflow-hidden border-l-4 border-brand-blue">
        {/* Decorative faded icon */}
        <GraduationCap
          className="absolute right-6 top-1/2 -translate-y-1/2 w-40 h-40 text-white/5 hidden sm:block"
          strokeWidth={1}
        />

        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 p-8 sm:p-10">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="text-white font-bold text-2xl mb-2">Join Our Academic Community</h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Meet our talented faculty members who are dedicated to excellence in teaching, research and innovation.
            </p>
          </div>

          <button className="shrink-0 bg-white hover:bg-gray-100 text-navy text-sm font-medium px-6 py-3 rounded-md transition-colors flex items-center gap-2">
            Learn More
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FacultyCTA