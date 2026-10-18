export default function DreamParis(){
    return(
        <div className="w-full min-h-[400px]  text-[#3D3C26]">
            
            {/* MAIN CONTAINER: Left + Right */}
            <div className="p-8 md:p-12 lg:p-16 w-full flex flex-col md:flex-row md:justify-between gap-12">

                {/* LEFT - a: Title */}
                <div className="w-full md:w-[55%] lg:w-[60%] flex flex-col gap-6">
                    <h1 className="font-serif italic text-[48px] md:text-[64px] lg:text-[84px] leading-[0.9] tracking-tight">
                        Dream Paris
                    </h1>
                    <p className="font-serif text-[28px] md:text-[36px] lg:text-[48px] leading-[1.1] tracking-tight max-w-[480px]">
                        A timeless studio brand for luxury visionaries
                    </p>
                </div>

                {/* RIGHT - holds b + c - STACKED on desktop like image */}
                <div className="w-full md:w-[35%] lg:w-[25%] flex flex-col gap-10 md:items-start lg:ml-auto">

                    {/* c: Sector - TOP in image */}
                    <div className="flex flex-col gap-1">
                        <p className="uppercase font-sans text-[11px] tracking-widest opacity-80">Sector</p>
                        <p className="font-sans text-[13px] font-light leading-5 opacity-70">Luxury Travel Planning & Concierge</p>
                    </div>

                    {/* b: What We Did - BOTTOM in image */}
                    <div className="flex flex-col gap-1">
                        <p className="uppercase font-sans text-[11px] tracking-widest opacity-80">What We Did</p>
                        <div className="flex flex-col font-sans text-[13px] font-light leading-6 opacity-70">
                            <p>Brand strategy & positioning</p>
                            <p>Art Direction</p>
                            <p>Visual Identity</p>
                            <p>Brand Identity</p>
                            <p>Videography</p>
                            <p>Web Design & Development</p>
                        </div>
                    </div>

                </div>

            </div>

            <div className=" border/50  mx-auto w-[90vw] h-[50vh] md:h-[150vh] overflow-hidden">
                <img 
                    src="https://www.familinparis.fr/wp-content/uploads/Monuments/arc-de-trimphe/arc-de-triomphe-PLD.jpg" 
                    alt="Paris" 
                    className="w-full h-full object-cover"
                />
                <div>
                    <span className="uppercase absolute text-right  overflow-hidden h-5 w-[90vw] tracking-widest text-[9px] text-stone-500/50 scale-y-80">Paris France</span>
                </div>

            </div>
           

            <div>
                
            </div>

        </div>
    )
}