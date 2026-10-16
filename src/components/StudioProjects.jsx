import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "Brand Studio",
    tag: "Identity & Strategy",
    images: [
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800", // NEW 1
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800", // NEW 2
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=800", // kept 3rd
      "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?q=80&w=800", // NEW 4
    ]
  },
  {
    id: 2,
    title: "Editorial",
    tag: "Web & Art Direction",
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=800", // NEW 1
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=800",
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=800",
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=800",
    ]
  },
  {
    id: 3,
    title: "Muse",
    tag: "Photography",
    images: [
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800",
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800",
      "https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=800", // NEW 3
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=800", // NEW 4
    ]
  }
]

function ProjectCard({ project }) {
  const [index, setIndex] = useState(0)
  const next = () => setIndex((p) => (p + 1) % project.images.length)
  const prev = () => setIndex((p) => (p - 1 + project.images.length) % project.images.length)

  return (
    <div className="w-full bg-[#fefefe] pb-10">
      <div className="relative w-full h-[480px] md:h-[520px] overflow-hidden rounded-[4px]">
        <div
          className="flex h-full transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {project.images.map((img, i) => (
            <img key={i} src={img} alt="" className="w-full h-full object-cover flex-shrink-0" />
          ))}
        </div>

        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
          <div className="flex gap-1.5">
            {project.images.map((_, i) => (
              <button key={i} onClick={() => setIndex(i)} className={`h-[2px] transition-all ${i === index? 'w-8 bg-white' : 'w-4 bg-white/40'}`} />
            ))}
          </div>
          <div className="flex gap-2">
            <button onClick={prev} className="w-8 h-8 rounded-full bg-white/90 text-black flex items-center justify-center">‹</button>
            <button onClick={next} className="w-8 h-8 rounded-full bg-white/90 text-black flex items-center justify-center">›</button>
          </div>
        </div>

        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[9px] tracking-widest uppercase">
          {project.tag}
        </div>
      </div>

      <div className="mt-4 flex justify-between items-end">
        <div>
          <p className="text-[11px] tracking-widest uppercase opacity-50">0{project.id} / 03</p>
          <h3 className="font-serif text-[22px] mt-1">{project.title}</h3>
        </div>
        <p className="text-[11px] opacity-60">{index + 1} — {project.images.length}</p>
      </div>
    </div>
  )
}

export default function StudioProjects() {
  return (
    <section className="w-full bg-[#fefefe] border-t border-black/5 overflow-visible">

      {/* This header sticks */}
      <div className="sticky top-0 z-30 bg-white border-b border-black/10">
        <div className="h-[68px] px-6 md:px-10 lg:px-16 xl:px-20 flex justify-between items-center">
          <h3 className="tracking-[0.35em] text-[11px] uppercase font-extralight">Selected Works — Studio</h3>
          <p className="text-[10px] uppercase opacity-40 hidden md:block">Scroll or click</p>
        </div>
      </div>

      {/* MOBILE STICKY STACK - DESKTOP FLEX */}
      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-20 pt-6 pb-20 flex flex-col md:flex-row gap-0 md:gap-6 lg:gap-10 overflow-visible">

        {/* Each wrapper has extra height so sticky can work on mobile */}
        <div className="w-full md:w-1/3 sticky top-[88px] md:static self-start md:self-auto bg-[#fefefe] z-[1] pt-6 md:pt-0">
          <ProjectCard project={projects[0]} />
        </div>

        <div className="w-full md:w-1/3 sticky top-[108px] md:static self-start md:self-auto bg-[#fefefe] z-[2] pt-6 md:pt-0">
          <ProjectCard project={projects[1]} />
        </div>

        <div className="w-full md:w-1/3 sticky top-[128px] md:static self-start md:self-auto bg-[#fefefe] z-[3] pt-6 md:pt-0">
          <ProjectCard project={projects[2]} />
        </div>

      </div>
    </section>
  )
}