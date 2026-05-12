import { CheckCircle2, Settings, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PRODUCT_DETAILS } from "../data/mock";

const ProductDetailSection = () => {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="section-eyebrow">Detailed Specifications</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] leading-tight text-slate-900 mt-4">
            Every product, <span className="brand-gradient-text">in depth.</span>
          </h2>
          <p className="text-slate-600 mt-3 text-[15px]">
            Specifications, ideal applications, and key benefits — everything you need to evaluate the right Trek Enviro solution for your project.
          </p>
        </div>

        <div className="mt-14 space-y-16">
          {PRODUCT_DETAILS.map((p, idx) => {
            const reverse = idx % 2 === 1;
            return (
              <div
                key={p.name}
                className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image */}
                <div className={`lg:col-span-5 ${reverse ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="rounded-2xl bg-gradient-to-br from-[#E3F2FD] via-white to-[#F1F8E9] border border-slate-100 p-6 md:p-8 grid place-items-center min-h-[280px] md:min-h-[340px] relative overflow-hidden">
                    <span className="absolute top-4 left-4 text-[10px] tracking-[0.22em] uppercase font-semibold text-[#0B4A7F] bg-white/70 backdrop-blur px-3 py-1 rounded-full border border-slate-100">
                      Product 0{idx + 1}
                    </span>
                    <img src={p.image} alt={p.name} className="max-h-[260px] md:max-h-[300px] max-w-full object-contain" />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 ${reverse ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="text-[11px] tracking-[0.2em] uppercase text-[#4CAF50] font-semibold">{p.tagline}</div>
                  <h3 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900 mt-2">{p.name}</h3>
                  <p className="text-slate-600 mt-4 text-[15px] leading-relaxed">{p.intro}</p>

                  {/* Specs */}
                  <div className="mt-6 grid sm:grid-cols-2 gap-3">
                    {p.specs.map((s, i) => (
                      <div key={i} className="flex items-start gap-3 bg-slate-50 rounded-md px-4 py-3 border border-slate-100">
                        <Settings size={15} className="text-[#0B4A7F] mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[10px] uppercase tracking-[0.16em] text-slate-500 font-semibold">{s.k}</div>
                          <div className="text-[13.5px] text-slate-900 font-semibold mt-0.5">{s.v}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Ideal applications */}
                  <div className="mt-6">
                    <div className="text-[11px] tracking-[0.18em] uppercase text-slate-600 font-semibold flex items-center gap-2">
                      <Sparkles size={13} className="text-[#4CAF50]" /> Ideal Applications
                    </div>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {p.ideal.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1.5 rounded-full bg-[#E3F2FD] text-[#0B4A7F] font-medium border border-[#B3D4F4]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Benefits */}
                  <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                    {p.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                        <CheckCircle2 size={15} className="text-[#4CAF50] shrink-0 mt-0.5" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <Link to="/contact" className="btn-primary mt-7">
                    Enquire About {p.name} <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductDetailSection;
