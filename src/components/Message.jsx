export default function Message() {
  return (
    <section className="w-full bg-[#fefefe] border-t border-black/5 py-20 md:py-28 lg:py-36 px-6 md:px-10 lg:px-16 xl:px-20">

      <div className="w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1.9fr] gap-12 lg:gap-20 items-start">

        {/* LEFT - SMALL META */}
        <div className="w-full lg:sticky lg:top-32">
          <p className="text-[11px] tracking-[0.35em] uppercase opacity-40 mb-6">A note from the founder</p>

          <div className="w-[90px] h-[90px] rounded-full bg-[#c49a9a] flex items-center justify-center">
            <span className="font-serif text-[24px] tracking-widest text-black">J</span>
          </div>

          <div className="mt-6">
            <p className="font-serif text-[16px] leading-tight">Jhinora O.</p>
            <p className="text-[11px] tracking-widest uppercase opacity-50 mt-1">Founder & Creative Director</p>
          </div>
        </div>

        {/* RIGHT - THE MESSAGE */}
        <div className="w-full">
          <h2 className="font-serif font-extralight text-[28px] md:text-[36px] lg:text-[44px] leading-[1.1] tracking-tight">
            I didn't start Jhinora to build <span className="italic text-[#e68eaf]">pretty brands.</span><br />
            I started it to build brands that <span className="bg-black text-white px-2 py-0.5">refuse to be ignored.</span>
          </h2>

          <div className="mt-10 md:mt-14 space-y-6 text-[15px] md:text-[17px] leading-[1.7] font-light opacity-80 max-w-[620px]">
            <p>
              For years, I watched brilliant women build brilliant businesses — and then wrap them in identities that made them invisible. Too soft. Too safe. Too much like everyone else.
            </p>
            <p>
              At Jhinora, we don't do safe. We do <strong className="font-medium text-black">influential</strong>. We build brands with a point of view, a presence, and a power that makes people stop scrolling.
            </p>
            <p>
              Whether it's strategy, identity, web, or photography — we craft every touchpoint to make you unforgettable. Because in a world full of noise, being liked is not enough.
            </p>
            <p className="font-serif text-[20px] md:text-[22px] leading-[1.3] text-black pt-4">
              You deserve to be <span className="italic">difficult to ignore.</span>
            </p>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="w-12 h-[1px] bg-black/20"></div>
            <p className="font-serif italic text-[13px] tracking-wide">— Jhinora</p>
          </div>

          <button className="mt-12 px-8 py-3.5 rounded-full border border-black/15 text-[11px] uppercase tracking-[0.2em] hover:bg-black hover:text-white hover:border-black transition-all duration-300">
            Work with me
          </button>
        </div>

      </div>
    </section>
  )
}