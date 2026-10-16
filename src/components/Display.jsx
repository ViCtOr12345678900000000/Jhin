import { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Midsection from './Midsection'
import MidBar from './MidBar'
import FeaturedProjects from './FeaturedProjects'
import Message from './Message'
import StudioProjects from './StudioProjects'
import Bottom from './Bottom'

export default function Display() {
  const [img1, setImg1] = useState('')
  const [img2, setImg2] = useState('')

  useEffect(() => {
    const random1 = Math.floor(Math.random() * 1000)
    const random2 = Math.floor(Math.random() * 1000) + 1000
    setImg1(`https://picsum.photos/seed/arch${random1}/800/1200`)
    setImg2(`https://picsum.photos/seed/arch${random2}/800/1200`)
  }, [])

  return (
    <>
      {/* SCROLLING CONTENT - has z-10 so it covers Bottom */}
      <div className="relative z-10 bg-[#fefefe]">
        <div className="relative w-full h-screen bg-white overflow-hidden">
          <div className="absolute inset-0 w-full h-full grid grid-cols-2">
            <div className="w-full h-full overflow-hidden">
              <img src={img1} alt="architecture 1" className="w-full h-full object-cover" />
            </div>
            <div className="w-full h-full overflow-hidden">
              <img src={img2} alt="architecture 2" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 md:p-10 lg:p-12">
            <div className="w-full">
              <h1 className="text-white text-[12px] md:text-[13px] tracking-[0.4em] font-extralight uppercase">
                Jhinora Studios
              </h1>
            </div>
            <div className="w-full">
              <h2 className="text-white font-serif font-light text-[32px] md:text-[56px] lg:text-[72px] leading-[0.9] tracking-tight">
                Capturing <br />
                <span className="font-serif italic font-extralight opacity-80">the unseen moments.</span>
              </h2>
              <p className="text-white/60 text-[11px] md:text-[12px] mt-4 tracking-widest font-light max-w-[280px] leading-relaxed">
                A PHOTO STUDIO FOR THE MODERN EYE — MINIMAL, RAW, AND TIMELESS.
              </p>
            </div>
            <div className="w-full flex justify-between items-end">
              <p className="text-white text-[11px] md:text-[12px] font-extralight tracking-[0.2em] uppercase opacity-70">
                Light is our language — we just frame it.
              </p>
              <p className="text-white/40 text-[10px] tracking-widest hidden md:block">
                ©2026 • LAGOS — PARIS
              </p>
            </div>
          </div>
        </div>

        <div className="sticky top-0 z-[100] bg-white">
          <Navbar />
        </div>

        <Midsection />

        {/* WRAPPER = MidBar only sticks inside here, then unsticks */}
        <section className="relative w-full bg-[#fcfcfc]">
          <MidBar />
          <FeaturedProjects />
        </section>

        <Message />
        <StudioProjects />
      </div>

      {/* STICKY FOOTER - stays at bottom and gets revealed */}
      <Bottom />
    </>
  )
}