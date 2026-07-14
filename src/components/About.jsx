import { useState } from 'react'
import { Quote, Award, TrendingUp, X } from 'lucide-react'
import hod from "../../src/assets/bsh12.jpg"

const fullMessage = `Our vision is to create a dynamic learning environment that nurtures curiosity, promotes interdisciplinary thinking, and empowers students to excel in a rapidly evolving world.

The Department of Basic Science & Humanities forms the bedrock of engineering education at IEM. We believe that strong fundamentals in mathematics, physics, chemistry, and humanities are essential for producing well-rounded engineers who can think critically and adapt to emerging challenges.

Our faculty are committed to not just teaching, but mentoring — helping students discover their potential through research opportunities, interdisciplinary projects, and a curriculum that balances rigor with real-world relevance.

I invite you to explore our department further and be part of a community that values knowledge, innovation, and integrity above all.`

function About() {
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="bg-gray-50 py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-50 text-brand-blue text-xs font-medium px-3 py-1.5 rounded-full mb-4">
            About Us
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-navy">Welcome to BSH Department</h2>
          <div className="w-16 h-1 bg-brand-blue rounded-full mx-auto mt-4" />
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* HOD Message Card */}
          <div className="md:col-span-2 h-full bg-white rounded-2xl border-l-4 border-brand-blue shadow-sm p-5 sm:p-6 flex flex-col lg:flex-row items-stretch gap-5 sm:gap-6">

            <div className="flex-shrink-0 flex flex-col items-center justify-center self-center gap-3">
              <img
                src={hod}
                alt="Head of Department"
                className="w-full max-w-[220px] sm:max-w-[240px] lg:w-44 lg:max-w-none h-56 sm:h-60 lg:h-40 object-cover rounded-xl"
              />
              <div className="flex flex-col items-center gap-1 text-center">
                <p className="text-sm font-semibold text-navy">
                  Prof. (Dr.) Prabir Kumar Das
                </p>
                <p className="text-xs text-gray-500">
                  Professor & HOD, BSH
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <div className="flex items-center gap-2 text-brand-blue text-xs font-semibold mb-2">
                <Quote className="w-4 h-4" />
                MESSAGE FROM HOD
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-navy mb-3">
                Head of Department
              </h3>

              <p className="text-sm sm:text-base text-gray-600 leading-7 mb-5">
                Our vision is to create a dynamic learning environment that nurtures curiosity, promotes interdisciplinary thinking, and empowers students to excel in a rapidly evolving world.
              </p>

              <button
                onClick={() => setShowModal(true)}
                className="mt-1 text-brand-blue font-medium hover:underline"
              >
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

      {/* Full Message Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-navy/60 flex items-center justify-center z-50 px-4"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-5 sm:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-600"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={hod}
                alt="Head of Department"
                className="w-16 h-16 object-cover rounded-full"
              />
              <div>
                <p className="font-semibold text-navy">Prof. (Dr.) Prabir Kumar Das</p>
                <p className="text-sm text-gray-500">Professor & HOD, BSH</p>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-navy mb-4">Message from the HOD</h3>

            <div className="text-sm sm:text-base text-gray-600 leading-7 whitespace-pre-line">
              {fullMessage}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default About