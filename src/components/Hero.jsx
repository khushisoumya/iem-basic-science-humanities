import building from "../../src/assets/building2.png" 

function Hero() {
  return (
    <section className="relative min-h-[520px] sm:min-h-[560px] lg:min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <img
        src={building}
        alt="IEM Campus Building"
        className="hero-image-in absolute inset-0 w-full h-full object-cover"
      />
      {/* Navy overlay for text readability */}
      <div className="absolute inset-0 bg-navy/80" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 w-full">
        <span className="hero-enter inline-block bg-white/10 text-white text-[11px] sm:text-xs font-medium px-3 py-1.5 rounded-full mb-5 sm:mb-6 border border-white/20">
          Institute of Engineering &amp; Management
        </span>

        <h1 className="hero-enter hero-enter-delay-1 text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight max-w-2xl">
          Department of{' '}
          <span className="text-blue-400">Basic Science &amp; Humanities</span>
        </h1>

        <p className="hero-enter hero-enter-delay-2 text-sm sm:text-base text-gray-300 mt-4 sm:mt-5 max-w-xl leading-relaxed">
          Fostering critical thinking, innovation and human values to build a strong academic foundation for future leaders.
        </p>

        <div className="hero-enter hero-enter-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8">
          {/* <button className="bg-brand-blue hover:bg-blue-700 text-white text-sm font-medium px-5 py-3 rounded-md transition-colors flex items-center gap-2">
            Explore Department
            <span className="text-base leading-none">→</span>
          </button> */}
               <a
  href="https://exam.iem.edu.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex w-full sm:w-auto items-center justify-center gap-1.5 bg-brand-blue hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg text-white text-sm font-medium px-4 py-3 rounded-md transition-all duration-200"
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