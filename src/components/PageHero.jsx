import building1 from "../../src/assets/building2.png"

function PageHero({ badge, title, subtitle }) {
  return (
    <section className="relative min-h-[380px] flex items-center overflow-hidden">
      <img
        src={building1}
        alt="IEM Campus Building"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-navy/80" />

      <div className="relative max-w-7xl mx-auto px-6 py-16 w-full">
        <span className="inline-block bg-white/10 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6 border border-white/20">
          {badge}
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-xl">
          {title}
        </h1>

        <div className="w-14 h-1 bg-yellow-400 rounded-full my-5" />

        <p className="text-gray-300 text-base max-w-lg">
          {subtitle}
        </p>
      </div>
    </section>
  )
}

export default PageHero