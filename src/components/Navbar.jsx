import { useState } from "react"

export default function Navbar(){
  const [open, setOpen] = useState(false)
  const closeMenu = () => setOpen(false)

  return(
    <header className="relative w-full h-[90px] xl:h-[70px] px-5 md:px-8 lg:px-10 xl:px-20 flex justify-between items-center bg-white border-t border-black/5">
      <a href="/" onClick={closeMenu} className="font-extralight tracking-[0.4em] text-[11px] xl:text-[12px] text-black uppercase">
        Jhinora Studios
      </a>

      <nav className="hidden md:flex items-center gap-6 xl:gap-8 text-[11px] xl:text-[12px] uppercase tracking-widest text-black">
        <button className="hover:opacity-60">Work</button>
        <a href="/about" className="hover:opacity-60">About</a>
        <a href="/services" className="hover:opacity-60">Services</a>
        <a href="/contact" className="bg-black text-white px-4 py-2 rounded-full normal-case tracking-normal">Contact</a>
      </nav>

      <button onClick={()=>setOpen(!open)} className="md:hidden w-8 h-8 flex flex-col justify-center gap-1.5">
        <span className={`w-full h-[1px] bg-black transition ${open? "rotate-45 translate-y-[2.5px]" : ""}`}></span>
        <span className={`w-full h-[1px] bg-black transition ${open? "-rotate-45 -translate-y-[2.5px]" : ""}`}></span>
      </button>

      {open && (
        <div className="absolute top-[90px] left-0 w-full bg-white p-5 flex flex-col gap-4 md:hidden border-b border-black/10">
          <button className="text-left text-black text-[13px] uppercase tracking-widest py-2">Work</button>
          <a href="/about" onClick={closeMenu} className="text-black text-[13px] uppercase py-2">About</a>
          <a href="/services" onClick={closeMenu} className="text-black text-[13px] uppercase py-2">Services</a>
          <a href="/contact" onClick={closeMenu} className="text-black text-[13px] uppercase py-2">Contact</a>
        </div>
      )}
    </header>
  )
}