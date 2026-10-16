export default function MidBar() {
  return (
    <div className="sticky top-0 z-[999] w-full bg-white border-y border-black/10 backdrop-blur-sm">
      <div className="w-full h-[68px] px-6 md:px-10 lg:px-16 xl:px-20 flex justify-between items-center">
        <h3 className="font-extralight tracking-[0.35em] text-[11px] md:text-[12px] uppercase text-black">
          Featured Projects
        </h3>
        <button className="bg-black text-white px-6 py-2.5 rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.2em] hover:bg-black/80 transition-colors">
          Our Work
        </button>
      </div>
    </div>
  )
}