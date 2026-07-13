import { GraduationCap } from 'lucide-react'

function CTA() {
  return (
    <section className="bg-navy py-16 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        <div className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center mx-auto mb-6">
          <GraduationCap className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Ready to Begin Your Journey?
        </h2>
        <p className="text-gray-300 text-sm mb-8">
          Join the IEM family and be part of a legacy of excellence in engineering education
        </p>
        <div className="flex items-center justify-center gap-4">
          <button className="bg-white hover:bg-gray-100 text-navy text-sm font-medium px-6 py-3 rounded-md transition-colors">
            Contact Us
          </button>
          <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white text-sm font-medium px-6 py-3 rounded-md transition-colors">
            Visit IEM Website
          </button>
        </div>
      </div>
    </section>
  )
}

export default CTA