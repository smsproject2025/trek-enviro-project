import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import { PRODUCTS } from "../data/mock";

const ProductShowcase = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container-x">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="section-eyebrow">Capacity Tiers</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] leading-tight text-slate-900 mt-4">
              Capacity tiers — <span className="brand-gradient-text">for every project size.</span>
            </h2>
            <p className="text-slate-600 mt-3 text-[15px] leading-relaxed">
              Ready-to-install Packaged FRP STPs from <strong>5 KLD to 100+ KLD</strong> — tailored to site, regulation, and reuse requirements.
            </p>
          </div>
          {/* <a href="#" className="btn-primary">
            <Download size={16} /> Download Catalogue
          </a> */}
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {PRODUCTS.map((p, i) => (
            <div key={i} className="group bg-white border border-slate-100 rounded-xl overflow-hidden card-hover">
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-[#E3F2FD] via-white to-[#F1F8E9] p-6 grid place-items-center">
                <img src={p.image} alt={p.name} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="text-[11px] tracking-[0.18em] uppercase text-[#4CAF50] font-semibold">{p.tagline}</div>
                <h3 className="font-display text-xl font-bold text-slate-900 mt-2">{p.name}</h3>
                <p className="text-sm text-slate-600 mt-3 leading-relaxed">{p.desc}</p>
                <Link to="/products" className="inline-flex items-center gap-2 mt-5 text-[#0B4A7F] font-semibold text-sm hover:text-[#08385f]">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
