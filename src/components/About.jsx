import { Quote, Award, TrendingUp } from 'lucide-react'
import hod from "../../src/assets/bsh12.jpg"

function About() {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-3xl font-bold text-navy">Welcome to BSH Department</h2>
          <div className="w-16 h-1 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-3 gap-6">
         {/* HOD Message Card */}
<div className="md:col-span-2 bg-white rounded-2xl border-l-4 border-brand-blue shadow-sm p-6 flex items-center gap-6">

  <img
    src={hod}
    alt="Head of Department"
    className="w-44 h-40 object-cover rounded-xl"
  />

  <div className="flex-1">
    <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold mb-2">
      <Quote className="w-4 h-4" />
      MESSAGE FROM HOD
    </div>

    <h3 className="text-2xl font-bold text-navy mb-3">
      Head of Department
    </h3>

    <p className="text-gray-600 leading-7 mb-5">
      Our vision is to create a dynamic learning environment that nurtures curiosity, promotes interdisciplinary thinking, and empowers students to excel in a rapidly evolving world.
    </p>

    <button className="text-brand-blue font-medium hover:underline">
      Read Full Message →
    </button>
  </div>

</div>

          {/* Right column - two stacked cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-navy rounded-2xl p-6 text-white">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4">
                <Award className="w-5 h-5 text-white" strokeWidth={2} />
              </div>
              <h4 className="font-bold mb-1.5">NAAC Accredited</h4>
              <p className="text-gray-300 text-sm leading-relaxed">
                Grade A accreditation by National Assessment and Accreditation Council
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center mb-4">
                <TrendingUp className="w-5 h-5 text-orange-500" strokeWidth={2} />
              </div>
              <h4 className="font-bold text-navy mb-1.5">Research Excellence</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                DST SERB funded projects and cutting-edge research initiatives
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About