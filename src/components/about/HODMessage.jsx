

import { Quote } from 'lucide-react';
import hod from "../../../src/assets/bsh12.jpg";

function HODMessage() {
  return (
    <section className="bg-gradient-to-b from-white via-blue-50/30 to-white py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4">
            Leadership
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">Message from HOD</h2>
          <div className="w-16 h-1 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        {/* Card */}
        <div className="relative bg-white rounded-2xl border border-gray-100 shadow-xl shadow-blue-100/50 p-6 sm:p-8 lg:p-10 overflow-hidden">
          {/* Top accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue via-navy to-brand-blue" />

          {/* Giant faded background quote mark */}
          <Quote
            className="absolute -top-2 right-4 sm:right-6 w-24 h-24 sm:w-32 sm:h-32 text-blue-50 -scale-x-100"
            strokeWidth={0}
            fill="currentColor"
          />

          <div className="relative flex flex-col sm:flex-row gap-8">
            {/* Avatar + caption */}
            <div className="flex flex-col items-center shrink-0 text-center">
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden ring-4 ring-blue-50">
                <img src={hod} alt="Head of Department" className="h-full w-full object-cover" />
              </div>
              <span className="text-navy font-semibold text-sm mt-4 text-center">Head of Department</span>
              <span className="text-gray-400 text-xs mt-0.5">Dept. of Basic Science &amp; Humanities</span>
            </div>

            {/* Message */}
            <div className="flex-1 flex flex-col justify-center">
              <Quote className="w-9 h-9 text-brand-blue mb-4" strokeWidth={1.5} fill="currentColor" />
              <p className="text-navy text-sm sm:text-base leading-relaxed mb-4 font-medium">
                We strive to build a strong foundation for our students through quality teaching, research, and innovation. Our goal is to develop competent individuals who contribute meaningfully to society and the nation.
              </p>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                I welcome you to explore our department and the opportunities it offers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HODMessage