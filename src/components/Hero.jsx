import building from "../../src/assets/building2.png" 

function Hero() {
  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={building}
        alt="IEM Campus Building"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Navy overlay for text readability */}
      <div className="absolute inset-0 bg-navy/80" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-24 w-full">
        <span className="inline-block bg-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/20">
          Institute of Engineering &amp; Management
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
          Department of{' '}
          <span className="text-blue-400">Basic Science &amp; Humanities</span>
        </h1>

        <p className="text-gray-300 text-base mt-5 max-w-lg">
          Fostering critical thinking, innovation and human values to build a strong academic foundation for future leaders.
        </p>

        <div className="flex items-center gap-4 mt-8">
          {/* <button className="bg-brand-blue hover:bg-blue-700 text-white text-sm font-medium px-5 py-3 rounded-md transition-colors flex items-center gap-2">
            Explore Department
            <span className="text-base leading-none">→</span>
          </button> */}
               <a
  href="https://exam.iem.edu.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="hidden lg:flex items-center gap-1.5 bg-brand-blue hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors"
>
  Admissions Open
  <span className="text-base leading-none">→</span>
</a>
          {/* <button className="bg-white hover:bg-gray-100 text-navy text-sm font-medium px-5 py-3 rounded-md transition-colors">
            Meet Our Faculty
          </button> */}
        </div>
      </div>
    </section>
  )
}

export default Hero