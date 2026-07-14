const attributes = [
  'Critical Thinking',
  'Innovation',
  'Communication',
  'Research',
  'Leadership',
  'Ethics',
  'Professionalism',
  'Teamwork',
  'Life-long Learning',
  'Problem Solving',
]

function GraduateAttributes() {
  return (
    <section className="bg-blue-50/40 py-12 sm:py-14 lg:py-16 px-4 sm:px-6 lg:px-8 mt-10 sm:mt-12 lg:mt-14">
      <div className="max-w-4xl mx-auto text-center">
        <span className="inline-block bg-white text-brand-blue text-xs font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full mb-4 border border-blue-100">
          Attributes
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-navy mb-8">Graduate Attributes</h2>

        <div className="flex flex-wrap justify-center gap-3">
          {attributes.map((attribute) => (
            <span
              key={attribute}
              className="bg-white text-navy text-sm font-medium px-5 py-2.5 rounded-full border border-gray-100 shadow-sm hover:border-brand-blue hover:text-brand-blue hover:-translate-y-0.5 transition-all duration-200"
            >
              {attribute}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default GraduateAttributes