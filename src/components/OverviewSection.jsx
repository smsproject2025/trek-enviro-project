import { Droplets } from "lucide-react";
import { IMAGES } from "../data/mock";

const OverviewSection = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container-x grid lg:grid-cols-5 gap-10 items-center">
        <div className="lg:col-span-3">
          <span className="section-eyebrow"><Droplets size={12} /> Overview</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] leading-tight text-slate-900 mt-4">
            Water is the most important <span className="brand-gradient-text">commodity for life.</span>
          </h2>
          <p className="text-slate-600 mt-5 text-[15px] leading-relaxed">
            Since water is limited in availability, its conservation, preservation, recycling, and reuse becomes vital. Apart from agriculture, water is used majorly in industries and by society on a daily basis. Almost all water that is let out as waste from buildings and industries can be recycled and reused.
          </p>
          <p className="text-slate-600 mt-4 text-[15px] leading-relaxed">
            For a sustainable environment, Trek Enviro — along with our valued associations — offers an exclusive range of decentralized advanced FRP <strong className="text-slate-900">Advanced MBBR(Anaerobic + Aerobic)</strong> technology. The treatment process utilizes activated sludge technology to treat domestic sewage water and reuse it for flushing, gardening, cooling towers, and washing applications.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              { v: "5–100+", l: "KLD Capacity Range" },
              { v: "70-80%", l: "Less Electricity" },
              { v: "Plug & Play", l: "Pre-Fab Modules" },
              { v: "Zero", l: "Sludge Generation(No Daily Requirements)" },
            ].map((s, i) => (
              <div key={i} className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                <div className="font-display text-xl font-bold text-[#0B4A7F]">{s.v}</div>
                <div className="text-[11px] tracking-wider uppercase text-slate-500 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-2 relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img src={IMAGES.engineering} alt="Wastewater treatment" className="w-full h-[480px] object-cover" />
          </div>
          <div className="absolute -bottom-5 -left-5 bg-white rounded-xl p-4 shadow-lg border border-slate-100 hidden md:block">
            <div className="text-[11px] tracking-[0.18em] uppercase text-[#4CAF50] font-semibold">Hybrid Japanese</div>
            <div className="font-display text-lg font-bold text-slate-900 mt-1">ADVANCED MBBR(Anaerobic + Aerobic)</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
