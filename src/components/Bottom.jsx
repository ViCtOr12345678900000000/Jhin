export default function Bottom() {
  return (
    <section className="w-full h-[100svh] bg-white text-black flex flex-col justify-between px-6 md:px-10 lg:px-16 xl:px-20 py-8 md:py-12 overflow-hidden sticky bottom-0 z-0">

      {/* Top small nav */}
      <div className="w-full flex justify-between items-center text-[10px] tracking-[0.3em] uppercase opacity-40">
        <p className="text-black">Based in Lagos — Worldwide</p>
        <p className="text-black hidden md:block">Available for Q1 2026</p>
      </div>

      {/* CENTER */}
      <div className="w-full flex-1 flex flex-col justify-center items-start">
        <h1 className="font-serif font-extralight leading-[0.85] tracking-[-0.04em] text-[25vw] md:text-[14vw] lg:text-[12vw]">
          jhinora
          <br />
          <span className="flex items-center gap-4 text-black/50">
            Studios<span className="text-[#e68eaf]">.</span>
          </span>
        </h1>

        <div className="mt-8 md:mt-10 flex flex-col md:flex-row gap-4 md:gap-10">
          <p className="text-[12px] md:text-[14px] tracking-wide leading-relaxed max-w-[320px] opacity-60 font-light">
            Building influential brands that refuse to be ignored. Strategy, Identity, Web & Photography.
          </p>
        </div>
      </div>

      {/* BOTTOM - Email */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end gap-8 border-t border-black/10 pt-8">

        <div className="flex flex-col gap-2">
          <p className="text-[10px] tracking-[0.35em] uppercase opacity-40">Say hello</p>
          <a href="mailto:hello@jhinorastudios.com" className="text-[#9ac4a3] font-serif text-[24px] md:text-[36px] lg:text-[42px] leading-none tracking-tight hover:text-[#e68eaf] transition-colors duration-300">
            hello@jhinorastudios.com
          </a>
        </div>

        <div className="flex gap-8 text-[11px] tracking-widest uppercase opacity-50">
          <a href="#" className="hover:opacity-100 hover:text-black transition">Instagram</a>
          <a href="#" className="hover:opacity-100 hover:text-black transition">Are.na</a>
          <p>©2025</p>
        </div>

      </div>

    </section>
  )
}