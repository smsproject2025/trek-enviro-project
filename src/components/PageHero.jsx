import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { IMAGES } from "../data/mock";

const PageHero = ({ title, subtitle, image = IMAGES.heroAlt, crumbs = [] }) => {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B4A7F]/92 to-[#0B4A7F]/55"></div>
      </div>
      <div className="relative container-x py-24 md:py-28 text-white">
        <div className="flex items-center gap-2 text-xs text-white/70">
          <Link to="/" className="hover:text-[#8BC34A]">Home</Link>
          {crumbs.map((c, i) => (
            <span key={i} className="flex items-center gap-2"><ChevronRight size={12} /> <span className="text-[#8BC34A]">{c}</span></span>
          ))}
        </div>
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-3 max-w-3xl leading-tight">{title}</h1>
        {subtitle && <p className="text-white/80 mt-4 max-w-2xl text-[15px] leading-relaxed">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
