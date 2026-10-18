export default function ParisBridge() {
  return (
    <section className="w-full bg-white text-black py-20 md:py-28 px-6 md:px-12 lg:px-20">
      
      {/* Top label + divider */}
      <div className="flex items-center gap-4 mb-12">
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-50">01 — Field Study</span>
        <div className="h-[1px] flex-1 bg-black/10"></div>
        <span className="text-[10px] tracking-[0.3em] uppercase opacity-50">Paris, 2024</span>
      </div>

      {/* Main statement */}
      <div className="grid md:grid-cols-12 gap-8">
        
        {/* Left - sticky label */}
        <div className="md:col-span-4">
          <p className="text-[11px] uppercase tracking-widest opacity-40 sticky top-10">
            Why Paris?<br/>
            The city that<br/>teaches taste.
          </p>
        </div>

        {/* Right - big editorial text */}
        <div className="md:col-span-8 flex flex-col gap-10">
          <h2 className="font-serif text-[32px] md:text-[46px] lg:text-[52px] leading-[1.05] tracking-tight text-[#3D3C26]">
            We didn&apos;t go to Paris to take pictures of the 
            <span className="italic font-light"> Arc de Triomphe.</span><br/>
            We went to study how <span className="bg-black text-white px-2">luxury lingers</span> when everything else moves.
          </h2>

          {/* 3 mini stats - fits luxury studio vibe */}
          <div className="grid grid-cols-3 border-t border-black/10 pt-8 mt-4">
            <div>
              <p className="font-serif text-[28px]">12</p>
              <p className="text-[10px] uppercase tracking-widest opacity-50 leading-tight mt-1">Days on the<br/>ground</p>
            </div>
            <div>
              <p className="font-serif text-[28px]">4.3km</p>
              <p className="text-[10px] uppercase tracking-widest opacity-50 leading-tight mt-1">Walked daily<br/>in Le Marais</p>
            </div>
            <div>
              <p className="font-serif text-[28px]">∞</p>
              <p className="text-[10px] uppercase tracking-widest opacity-50 leading-tight mt-1">Espressos &<br/>observations</p>
            </div>
          </div>

          {/* Sub paragraph that leads into founder note */}
          <p className="font-sans text-[14px] leading-6 opacity-60 max-w-[480px] pt-6">
            Every brand we build at Jhinora starts with this kind of obsession. 
            Not moodboards. Not trends. But watching how a city that has 
            sold luxury for 300 years still makes you feel something.
          </p>
        </div>

      </div>
    </section>
  )
}