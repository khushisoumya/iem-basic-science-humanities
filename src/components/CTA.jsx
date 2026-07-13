
import { GraduationCap } from "lucide-react";

function CTA() {
  return (
    <section className="relative py-20 px-6 overflow-hidden">
      {/* Background */}
      <img
        src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=1600"
        alt="IEM Campus"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-navy/90" />

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center">
        <div className="w-14 h-14 rounded-full bg-brand-blue flex items-center justify-center mx-auto mb-6 shadow-lg">
          <GraduationCap
            className="w-6 h-6 text-white"
            strokeWidth={2}
          />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-5">
          Ready to Begin Your Journey?
        </h2>

        <p className="text-gray-300 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
          Join the IEM family and become part of a legacy of academic
          excellence, innovation, and industry-focused education. Take the
          first step towards building a successful engineering career with us.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-white hover:bg-gray-100 text-navy font-semibold px-7 py-3 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl">
            Contact Us
          </button>

          <button className="border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold px-7 py-3 rounded-md transition-all duration-300">
            Visit IEM Website
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTA;