import { Building2, Factory, Hotel, School, Home } from "lucide-react";
import { SECTORS, IMAGES } from "../data/mock";

const icons = [Home, Factory, Hotel, School, Building2];

const SectorsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
        <div className="rounded-xl overflow-hidden">
          <img src={IMAGES.sectors} alt="Sectors served" className="w-full h-[480px] object-cover" />
        </div>
        <div>
          <span className="section-eyebrow">Ideal Applications</span>
          <h2 className="font-display text-3xl md:text-4xl leading-tight text-slate-900 mt-4">
            Sustainable wastewater solutions across <span className="brand-gradient-text">every sector</span>
          </h2>
          <p className="text-slate-600 mt-4 text-[15px] leading-relaxed">
            Our technology adapts to diverse industries and environments across India — from individual villas to township-scale deployments.
          </p>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {SECTORS.map((s, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="bg-white rounded-lg border border-slate-100 p-5 card-hover flex gap-4">
                  <div className="shrink-0 h-10 w-10 rounded bg-[#E3F2FD] text-[#0B4A7F] grid place-items-center">
                    <Icon size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-[14px]">{s.title}</h3>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectorsSection;
