import { Landmark } from 'lucide-react'

function AboutIntro() {
  return (
    <section className="bg-gray-50">
      {/* Navy strip — separate, not overlapped */}
      {/* <div className="bg-navy h-16" /> */}

      {/* Intro card — normal flow, no negative margin */}
      <div className="px-6 py-14">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl shadow-gray-200/60 border border-gray-100 p-8 sm:p-10 flex flex-col sm:flex-row items-start gap-7">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-blue to-navy flex items-center justify-center shrink-0">
            <Landmark className="w-7 h-7 text-white" strokeWidth={1.8} />
          </div>
          <div>
            <h2 className="text-navy font-bold text-2xl mb-3">About Our Department</h2>
            <div className="w-12 h-1 bg-brand-blue rounded-full mb-4" />
            <p className="text-gray-500 text-sm leading-relaxed max-w-2xl">
              The Department of Basic Science &amp; Humanities provides the foundational knowledge that empowers future engineers and leaders with analytical, ethical and communication excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutIntro