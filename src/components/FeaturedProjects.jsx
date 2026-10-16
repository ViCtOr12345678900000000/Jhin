const projects = [
  {
    id: 1,
    title: "AURA",
    category: "Brand Identity / 2024",
    color: "#15151d",
    desc: "Minimal skincare brand for modern women"
  },
  {
    id: 2,
    title: "LUNE",
    category: "Web Design / 2024",
    color: "#c49a9a",
    desc: "Fashion editorial e-commerce experience"
  },
  {
    id: 3,
    title: "NORD",
    category: "Photography / 2023",
    color: "#9ac4a3",
    desc: "Wedding story — Lagos to London"
  },
  {
    id: 4,
    title: "FORM",
    category: "Strategy / 2024",
    color: "#2dd4bf",
    desc: "Architecture studio rebrand"
  },
]

export default function FeaturedProjects() {
  return (
    <section className="w-full bg-[#fcfcfc] py-12 md:py-20 px-6 md:px-10 lg:px-16 xl:px-20">

      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">

        {projects.map((p) => (
          <div key={p.id} className="group cursor-pointer">

            {/* IMAGE PLACEHOLDER - looks like a project */}
            <div
              className="w-full h-[380px] md:h-[480px] lg:h-[520px] rounded-[4px] flex flex-col justify-between p-8 transition-all duration-500 group-hover:scale-[0.98]"
              style={{ background: p.color }}
            >
              <div className="flex justify-between items-start">
                <span className="text-white/60 text-[10px] tracking-widest uppercase border border-white/20 px-3 py-1 rounded-full">
                  0{p.id}
                </span>
                <span className="text-white/60 text-[10px] tracking-widest uppercase">
                  {p.category}
                </span>
              </div>

              <div>
                <h3 className="text-white font-serif text-[42px] md:text-[56px] leading-[0.9] tracking-tight">
                  {p.title}
                </h3>
                <p className="text-white/70 text-[11px] tracking-wide mt-3 max-w-[240px] leading-relaxed">
                  {p.desc}
                </p>
              </div>
            </div>

            {/* BOTTOM INFO */}
            <div className="flex justify-between items-center mt-4 px-1">
              <p className="text-[11px] tracking-[0.2em] uppercase">{p.title} — {p.category}</p>
              <span className="w-6 h-6 rounded-full border border-black/20 flex items-center justify-center text-[12px] group-hover:bg-black group-hover:text-white group-hover:border-black transition-all">→</span>
            </div>

          </div>
        ))}

      </div>

      <div className="w-full flex justify-center mt-20">
        <button className="w-full md:w-auto px-10 py-4 rounded-full bg-black text-white text-[11px] uppercase tracking-[0.2em] hover:bg-black/80 transition-colors">
          View All Projects — 12
        </button>
      </div>

    </section>
  )
}