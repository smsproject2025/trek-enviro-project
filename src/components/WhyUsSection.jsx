import { Globe2, Lightbulb, Award, Layers, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { WHY_US } from "../data/mock";

const icons = [Globe2, Lightbulb, Award, Layers, Leaf];

const WhyUsSection = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container-x">
        <div className="max-w-3xl">
          <span className="section-eyebrow">Why Trek Enviro</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] leading-tight text-slate-900 mt-4">
            Why Trek Enviro leads in <span className="brand-gradient-text">wastewater innovation</span>
          </h2>
          <p className="text-slate-600 mt-4 text-[15px] leading-relaxed">
            Every Trek Enviro solution is backed by proven technology, rigorous engineering, and a deep commitment to protecting water — our most precious resource — for a sustainable Indian future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
          {WHY_US.map((w, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="bg-white border border-slate-100 rounded-xl p-6 card-hover">
                <div className="h-11 w-11 rounded-md grid place-items-center bg-[#E3F2FD] text-[#0B4A7F] mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-semibold text-slate-900 text-[15px]">{w.title}</h3>
                <p className="text-sm text-slate-600 mt-2 leading-relaxed">{w.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10">
          <Link to="/services" className="btn-primary">Explore Our Services</Link>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
