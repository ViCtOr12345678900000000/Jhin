import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'

const data = [
  { value: 100, name: 'Referrals', fill: '#15151d' },
  { value: 80, name: 'Gatherings', fill: '#c49a9a' },
  { value: 50, name: 'Socials', fill: '#2dd4bf' },
  { value: 30, name: 'Invites', fill: '#9ac4a3' },
]

const services = [
  { id: 1, num: '01', desc: 'Brand Strategy & Copywriting' },
  { id: 2, num: '02', desc: 'Brand Identity & Graphic Design' },
  { id: 3, num: '03', desc: 'Web-design & Development' },
  { id: 4, num: '04', desc: 'Wedding Photography' },
]

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-black text-white text-[11px] tracking-widest uppercase px-4 py-2 rounded-full">
        {payload[0].name}: {payload[0].value}%
      </div>
    )
  }
  return null
}

export default function Midsection() {
  return (
    <div className="w-full bg-[#fefefe]">

      {/* TOP - YOUR EXISTING 2 COLUMNS */}
      <div className="w-full py-16 md:py-20 lg:py-28 px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div className="w-full">
            <div className="w-full bg-[#c49a9a] py-3.5 flex justify-center items-center">
              <h2 className="font-serif text-[16px] md:text-[19px] lg:text-[20px] font-extralight tracking-wide text-black uppercase text-center leading-none">
                AT JHINORA WE BUILD INFLUENTIAL BRANDS
              </h2>
            </div>
            <p className="font-extralight mt-5 text-center lg:text-left font-serif text-[22px] md:text-[26px] lg:text-[30px] text-black tracking-tight">
              that are <span className="text-[#e68eaf] italic font-light">difficult</span> to ignore
            </p>
          </div>

          <div className="w-full flex flex-col items-center">
            <div className="w-[300px] h-[300px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<CustomTooltip />} />
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius="62%"
                    outerRadius="90%"
                    paddingAngle={4}
                    cornerRadius={12}
                    isAnimationActive={true}
                    animationDuration={1200}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} stroke="none" className="hover:opacity-80 transition-opacity cursor-pointer outline-none" />
                    ))}
                  </Pie>
                  <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="fill-black font-serif text-[11px] tracking-[0.3em] uppercase">JHINORA</text>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 w-full max-w-[340px] grid grid-cols-2 gap-4">
              {data.map((item) => (
                <div key={item.name} className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full" style={{ background: item.fill }}></span>
                  <span className="text-[10px] tracking-[0.15em] uppercase opacity-70">{item.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM - OUR SERVICES - REDESIGNED */}
      <section className="w-full bg-white border-t border-black/5 py-20 md:py-28 px-6 md:px-10 lg:px-16 xl:px-20">

        <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-4">
          <h2 className="font-serif font-light text-[36px] md:text-[48px] lg:text-[56px] leading-[0.9] tracking-tight uppercase">
            Our <br className="hidden md:block" /><span className="italic font-extralight opacity-60">services</span>
          </h2>
          <p className="text-[11px] tracking-widest uppercase opacity-50 max-w-[240px] leading-relaxed">
            Crafted for brands that refuse to blend in — minimal, raw, timeless.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {services.map((s) => (
            <div key={s.id} className="group border-t border-black/10 pt-6 flex flex-col justify-between h-[160px] hover:border-black/30 transition-colors duration-300">
              <div className="flex justify-between items-start">
                <span className="text-[11px] tracking-widest text-[#e68eaf] border border-[#e68eaf]/30 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[#e68eaf] group-hover:text-white transition-all duration-300">
                  {s.num}
                </span>
                <span className="text-[10px] tracking-widest uppercase opacity-30">0{s.id} / 04</span>
              </div>
              <h3 className="font-serif text-[20px] md:text-[22px] leading-[1.1] tracking-tight pr-4">
                {s.desc}
              </h3>
            </div>
          ))}
        </div>

        <div className="w-full flex justify-center mt-16 md:mt-24">
          <button className="px-8 py-3.5 rounded-full border border-black/20 text-[11px] uppercase tracking-[0.2em] hover:bg-black hover:text-white hover:border-black transition-all duration-300">
            View our services
          </button>
        </div>

      </section>

    </div>
  )
}