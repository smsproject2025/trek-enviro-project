import PageHero from "../components/PageHero";
import { PRODUCTS, IMAGES, COMPARISON_ROWS, EFFLUENT_PARAMS } from "../data/mock";
import { CheckCircle2, Download, Ruler, ArrowDownToLine, Layers } from "lucide-react";
import CtaSection from "../components/CtaSection";
import ProcessFlowAnimation from "../components/ProcessFlowAnimation";
import ProductDetailSection from "../components/ProductDetailSection";
import InstallationProcess from "../components/InstallationProcess";
import { Link } from "react-router-dom";

const specRows = [
  { capacity: "5 KLD", area: "~4 sqm", power: "0.75 kW", users: "25–30", app: "Villas, small restaurants" },
  { capacity: "10 KLD", area: "~7 sqm", power: "1.1 kW", users: "50–60", app: "Gated villas, farmhouses" },
  { capacity: "25 KLD", area: "~12 sqm", power: "1.5 kW", users: "150–180", app: "Apartments, boutique hotels" },
  { capacity: "50 KLD", area: "~23 sqm", power: "2.2 kW", users: "350–400", app: "Schools, mid hotels" },
  { capacity: "100 KLD", area: "~40 sqm", power: "3.7 kW", users: "750+", app: "Large residential, institutions" },
];

const Products = () => {
  return (
    <main>
      <PageHero
        title="Product & Technology"
        subtitle="ADVANCED MBBR(Anaerobic + Aerobic) — packaged FRP units based on proven decentralized wastewater treatment, adapted and manufactured for Indian conditions."
        image={IMAGES.product}
        crumbs={["Product & Technology"]}
      />

      <section className="py-16 md:py-20 bg-white">
        <div className="container-x">
          <ProcessFlowAnimation />
        </div>
      </section>

      {/* Technical Scheme GIF */}
      <section className="pb-16 md:pb-20 bg-white">
        <div className="container-x">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="section-eyebrow">Technical Scheme</span>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-slate-900 mt-3">
              ADVANCED MBBR(Anaerobic + Aerobic) — <span className="brand-gradient-text">live schematic</span>
            </h3>
            <p className="text-slate-600 mt-2 text-sm">An animated walkthrough of the multi-stage treatment process inside a single packaged FRP unit.</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-100 bg-gradient-to-br from-[#E3F2FD] via-white to-[#F1F8E9] shadow-sm">
            <img
              src="./images/technical-scheme.png"
              alt="Hybrid Japanese  STP technical scheme animation"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl">
              <span className="section-eyebrow">Capacity Tiers</span>
              <h2 className="font-display text-3xl md:text-4xl leading-tight text-slate-900 mt-4">
                Packaged STPs for every <span className="brand-gradient-text">scale of project</span>
              </h2>
            </div>
            {/* <a href="#" className="btn-primary"><Download size={16} /> Download Brochure</a> */}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {PRODUCTS.map((p, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-xl overflow-hidden card-hover group">
                <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#E3F2FD] via-white to-[#F1F8E9] p-6 grid place-items-center">
                  <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="text-[11px] tracking-[0.18em] uppercase text-[#4CAF50] font-semibold">{p.tagline}</div>
                  <h3 className="font-display text-xl font-bold text-slate-900 mt-2">{p.name}</h3>
                  <p className="text-sm text-slate-600 mt-3 leading-relaxed">{p.desc}</p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#4CAF50]" /> 100% FRP Construction</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#4CAF50]" /> Multi-stage MBBR Process</li>
                    <li className="flex items-center gap-2"><CheckCircle2 size={14} className="text-[#4CAF50]" /> CPCB / SPCB Compliant</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductDetailSection />

      {/* Product Details Card from PDF */}
      <section className="pb-20">
        <div className="container-x">
          <div className="bg-gradient-to-br from-[#0B4A7F] to-[#1E88E5] rounded-2xl p-8 md:p-12 text-white grid md:grid-cols-4 gap-6">
            {[
              { icon: Layers, label: "Plant Capacity", value: "5 KLD – 100+ KLD*" },
              { icon: Ruler, label: "Area Required", value: "As per scheme & capacity" },
              { icon: ArrowDownToLine, label: "Installation Location", value: "Above or Underground" },
              { icon: CheckCircle2, label: "Treatment Capacity", value: "Refer Effluent Parameters" },
            ].map((d, i) => {
              const Icon = d.icon;
              return (
                <div key={i} className="border-l-2 border-[#8BC34A] pl-5">
                  <div className="h-10 w-10 rounded grid place-items-center bg-white/10 mb-3"><Icon size={18} /></div>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#C8E6C9]">{d.label}</div>
                  <div className="font-display text-lg font-bold mt-1">{d.value}</div>
                </div>
              );
            })}
          </div>
          <div className="text-xs text-slate-500 mt-3">*Higher capacity plants are designed as per client requirement.</div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Technical Specifications</span>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-slate-900 mt-4">
              Capacity vs footprint, <span className="brand-gradient-text">at a glance</span>
            </h2>
            <p className="text-slate-600 mt-3 text-[15px]">Indicative ranges — final specifications tailored to site, effluent target, and reuse application.</p>
          </div>

          <div className="mt-10 overflow-x-auto bg-white rounded-xl border border-slate-100">
            <table className="min-w-full text-left">
              <thead className="bg-[#0B4A7F] text-white text-xs tracking-widest uppercase">
                <tr>
                  <th className="px-6 py-4">Capacity</th>
                  <th className="px-6 py-4">Area Required</th>
                  <th className="px-6 py-4">Power Load</th>
                  <th className="px-6 py-4">User Equivalent</th>
                  <th className="px-6 py-4">Typical Application</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {specRows.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-4 font-semibold text-slate-900">{r.capacity}</td>
                    <td className="px-6 py-4 text-slate-700">{r.area}</td>
                    <td className="px-6 py-4 text-slate-700">{r.power}</td>
                    <td className="px-6 py-4 text-slate-700">{r.users}</td>
                    <td className="px-6 py-4 text-slate-700">{r.app}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div style={{ margin: '20px', padding: '10px' }}>Note: These are indicative ranges — final specifications tailored to site, effluent target, and reuse application.</div>
        </div>
      </section>

      {/* Effluent Parameters from PDF */}
      <section className="py-20">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Effluent Parameters</span>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-slate-900 mt-4">
              Verified water-quality <span className="brand-gradient-text">performance</span>
            </h2>
            <p className="text-slate-600 mt-3 text-[15px]">Tested treatment outputs from inlet to polished reuse — meeting CPCB norms.</p>
          </div>
          <div className="mt-10 overflow-x-auto bg-white rounded-xl border border-slate-100">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-[#0B4A7F] text-white text-xs tracking-widest uppercase">
                <tr>
                  <th className="px-6 py-4">Parameter</th>
                  <th className="px-6 py-4">STP Inlet</th>
                  <th className="px-6 py-4">STP Outlet</th>
                  <th className="px-6 py-4">After TTP + UF</th>
                </tr>
              </thead>
              <tbody>
                {EFFLUENT_PARAMS.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-4 font-semibold text-slate-900">{r.param}</td>
                    <td className="px-6 py-4 text-slate-700">{r.inlet}</td>
                    <td className="px-6 py-4 text-[#0B4A7F] font-semibold">{r.outlet}</td>
                    <td className="px-6 py-4 text-[#4CAF50] font-semibold">{r.polished}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Comparison from PDF */}
      <section className="py-20 bg-slate-50">
        <div className="container-x">
          <div className="max-w-2xl">
            <span className="section-eyebrow">The MBBR Difference</span>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-slate-900 mt-4">
              ADVANCED MBBR(Anaerobic + Aerobic) vs <span className="brand-gradient-text">Conventional STP</span>
            </h2>
            <p className="text-slate-600 mt-3 text-[15px]">A side-by-side look at why packaged Hybrid Japanese systems are replacing conventional STPs.</p>
          </div>
          <div className="mt-10 overflow-x-auto bg-white rounded-xl border border-slate-100">
            <table className="min-w-full text-left text-sm">
              <thead className="bg-slate-100 text-[11px] tracking-widest uppercase text-slate-600">
                <tr>
                  <th className="px-6 py-4">Parameter</th>
                  <th className="px-6 py-4">Conventional STP</th>
                  <th className="px-6 py-4 text-[#0B4A7F]">ADVANCED MBBR(Anaerobic + Aerobic)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50"}>
                    <td className="px-6 py-4 font-semibold text-slate-900">{r.param}</td>
                    <td className="px-6 py-4 text-slate-700">{r.conv}</td>
                    <td className="px-6 py-4 font-semibold text-[#0B4A7F]">{r.johk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-10"><Link to="/contact" className="btn-primary">Get a Custom Proposal</Link></div>
        </div>
      </section>

      <InstallationProcess />
      <CtaSection />
    </main>
  );
};

export default Products;
