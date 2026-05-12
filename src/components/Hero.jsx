import { Link } from "react-router-dom";
import { Droplets, ArrowRight, Play } from "lucide-react";
import { IMAGES, HERO_STATS } from "../data/mock";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={IMAGES.heroMain} alt="Wastewater treatment plant" className="w-full h-full object-cover" />
        <div className="absolute inset-0 hero-veil"></div>
      </div>

      <div className="relative container-x py-28 md:py-36 lg:py-44 text-white">
        <div className="flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase text-[#C8E6C9] mb-6">
          <Droplets size={14} className="text-[#8BC34A]" /> A Journey Towards Sustainability
        </div>

        <h1 className="font-display text-4xl md:text-5xl lg:text-[64px] font-bold leading-[1.05] max-w-4xl">
          PACKAGED TYPE
          <br />
          <span className="text-[#8BC34A]">ADVANCED MBBR</span>
          <br />
          <span className="text-white text-3xl md:text-4xl lg:text-5xl">(Anaerobic + Aerobic)</span>
        </h1>

        <p className="mt-6 max-w-2xl text-[15px] md:text-base leading-relaxed text-white/85">
          Based on proven <strong className="text-white">Japanese technology</strong> — compact, energy-efficient, and compliant decentralized sewage treatment plants for homes, apartments, hotels, hospitals, schools, and industries across India.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link to="/products" className="btn-green">
            Discover Our STPs <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-outline">
            <Play size={14} /> Free Site Assessment
          </Link>
        </div>

        {/* stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
          {HERO_STATS.map((s, i) => (
            <div key={i} className="border-l-2 border-[#8BC34A] pl-4">
              <div className="font-display text-3xl md:text-4xl font-bold">{s.value}</div>
              <div className="text-[11px] md:text-xs tracking-[0.2em] uppercase text-white/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* bottom curve */}
      <div className="absolute bottom-0 left-0 right-0 h-10 bg-white" style={{ clipPath: "ellipse(60% 100% at 50% 100%)" }}></div>
    </section>
  );
};

export default Hero;
