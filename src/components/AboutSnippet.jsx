import { ArrowRight, Award, Leaf, ShieldCheck, Wrench } from "lucide-react";
import { Link } from "react-router-dom";
import { CORE_VALUES, IMAGES } from "../data/mock";

const icons = [Award, ShieldCheck, Leaf, Wrench];

const AboutSnippet = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <span className="section-eyebrow">About Trek Enviro</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] leading-tight text-slate-900 mt-4">
            At Trek Enviro, we protect what sustains life — <span className="brand-gradient-text">water.</span>
          </h2>
          <p className="text-slate-600 mt-5 text-[15px] leading-relaxed">
            With <strong className="text-slate-900">more than 15 years of extensive experience</strong> in conventional sewage treatment plants, the leadership at Trek Enviro Infrastructure Pvt Ltd proudly introduces its Packaged Advanced MBBR FRP Sewage Treatment Plants, built on reliable Japanese technology. Specifically designed for Indian operating conditions, these robust, compact, and energy-efficient systems deliver superior performance, consistent high-quality effluent, and long-term reliability — redefining sustainable wastewater management.
          </p>
          <p className="text-slate-600 mt-4 text-[15px] leading-relaxed">
            Our strategic partner <span className="text-[#0B4A7F] font-semibold">SUSBIO</span> brings advanced MBBR expertise that combines anaerobic and aerobic treatment in a packaged FRP construction — adapted from proven Japanese engineering for Indian conditions, with a <strong className="text-slate-900">PAN-India service footprint</strong>.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/about" className="btn-primary">
              Our Story <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 text-[#0B4A7F] font-semibold text-sm hover:text-[#08385f]">
              Explore Services <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {CORE_VALUES.map((v, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="card-hover bg-white border border-slate-100 rounded-lg p-6">
                <div className="h-11 w-11 rounded-md grid place-items-center bg-[#E8F5E9] text-[#4CAF50] mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-[15px] text-slate-900">{v.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Stats band */}
      {/* <div className="container-x mt-16">
        <div className="rounded-xl overflow-hidden relative">
          <img src={IMAGES.drop} alt="sustainability" className="w-full h-[220px] md:h-[200px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B4A7F]/92 to-[#0B4A7F]/70"></div>
          <div className="absolute inset-0 grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-10 items-center text-GREEN">
            {[
              { v: "70–80%", l: "Sewage untreated across India" },
              { v: "15+ yrs", l: "Expected system life" },
              { v: "50–70%", l: "Lower energy than conventional STP" },
              { v: "<20 mg/L", l: "BOD effluent quality" },
            ].map((s, i) => (
              <div key={i}>
                <div className="font-display text-2xl md:text-3xl font-bold text-[#8BC34A]">{s.v}</div>
                <div className="text-xs md:text-[13px] text-white/80 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default AboutSnippet;
