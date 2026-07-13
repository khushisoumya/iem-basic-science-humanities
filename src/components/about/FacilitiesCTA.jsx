import { Building2 } from 'lucide-react'

function FacilitiesCTA() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1600"
        alt="Laboratory facilities"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/90" />

      <div className="relative max-w-2xl mx-auto text-center">
        <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center mx-auto mb-6">
          <Building2 className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          World-Class Facilities
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed mb-8">
          Explore our state-of-the-art infrastructure designed for comprehensive learning, research, and innovation. From modern laboratories to advanced computing facilities, we provide everything you need to excel.
        </p>
        <button className="bg-white hover:bg-gray-100 text-navy text-sm font-medium px-6 py-3 rounded-md transition-colors inline-flex items-center gap-2">
          Explore All Facilities
          <span>→</span>
        </button>
      </div>
    </section>
  )
}

export default FacilitiesCTA