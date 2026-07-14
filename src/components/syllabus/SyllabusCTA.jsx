import { FileDown, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

function SyllabusCTA() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 sm:py-14 lg:py-16">
      <div className="max-w-6xl mx-auto relative bg-brand-blue rounded-2xl overflow-hidden border border-brand-blue shadow-sm shadow-blue-300/40">
        <FileDown
          className="absolute right-6 top-1/2 -translate-y-1/2 w-40 h-40 text-white/10 hidden sm:block"
          strokeWidth={1}
        />

        <div className="relative flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 lg:p-10">
          <div className="max-w-lg text-center sm:text-left">
            <h2 className="text-white font-bold text-xl sm:text-2xl mb-2">Download Complete Curriculum</h2>
            <p className="text-blue-50 text-sm leading-relaxed">
              Get the full semester-wise course structure, credit distribution, and syllabus details in one document.
            </p>
          </div>

          <Link
            to="/contact"
            className="shrink-0 w-full sm:w-auto bg-white hover:bg-blue-50 hover:-translate-y-0.5 hover:shadow-xl text-brand-blue text-sm font-medium px-6 py-3 rounded-md transition-all duration-200 inline-flex items-center justify-center gap-2 shadow-lg shadow-blue-900/10"
          >
            Request Curriculum
            <ArrowRight className="w-4 h-4" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default SyllabusCTA