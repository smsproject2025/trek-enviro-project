import { Link } from "react-router-dom";
import { ArrowRight, Droplet, Volume2, Wallet, Lightbulb, ClipboardCheck, Activity } from "lucide-react";
import { FEATURE_HIGHLIGHTS } from "../data/mock";

const icons = [Droplet, Volume2, Wallet, Lightbulb, ClipboardCheck, Activity];

const FeatureSection = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Features</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] leading-tight text-slate-900 mt-4">
            DESIGNED TO PROTECT. <br /> <span className="brand-gradient-text">BUILT TO SUSTAIN.</span>
          </h2>
          <p className="text-slate-600 mt-4 text-[15px] leading-relaxed">
            Every Trek Enviro packaged STP combines durable FRP construction with multi-stage MBBR biology — engineered specifically for Indian conditions and statutory norms.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {FEATURE_HIGHLIGHTS.map((f, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="text-center bg-white border border-slate-100 rounded-xl p-7 card-hover">
                <div className="mx-auto h-20 w-20 rounded-2xl border-2 border-[#8BC34A] bg-[#F1F8E9] grid place-items-center">
                  <Icon size={32} className="text-[#0B4A7F]" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0B4A7F] mt-5">{f.title}</h3>
                <p className="text-[13.5px] text-slate-600 mt-3 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link to="/products" className="btn-primary">
            Learn About Our STPs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
