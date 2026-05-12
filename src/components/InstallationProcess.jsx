import { INSTALLATION_STEPS } from "../data/mock";
import { ChevronRight } from "lucide-react";

const InstallationProcess = () => {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Installation Process</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] leading-tight text-slate-900 mt-4">
            From excavation to <span className="brand-gradient-text">go-live.</span>
          </h2>
          <p className="text-slate-600 mt-3 text-[15px]">A streamlined six-step deployment by trained Trek Enviro teams.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
          {INSTALLATION_STEPS.map((s, i) => (
            <div key={i} className="relative bg-white border border-slate-100 rounded-xl p-5 card-hover">
              <div className="font-display text-3xl font-bold text-[#8BC34A] leading-none">{s.num}</div>
              <div className="font-semibold text-slate-900 text-[14px] mt-3">{s.title}</div>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">{s.desc}</p>
              {i < INSTALLATION_STEPS.length - 1 && (
                <div className="hidden xl:block absolute -right-3 top-1/2 -translate-y-1/2 text-[#8BC34A]">
                  <ChevronRight size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationProcess;
