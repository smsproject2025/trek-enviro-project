import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT_INFO, IMAGES } from "../data/mock";

const CtaSection = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container-x">
        <div className="relative rounded-2xl overflow-hidden">
          <img src={IMAGES.cleanWater} alt="Clean water" className="w-full h-[340px] md:h-[300px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B4A7F]/95 via-[#0B4A7F]/85 to-[#0B4A7F]/50"></div>
          <div className="absolute inset-0 flex items-center">
            <div className="container-x text-white">
              <div className="max-w-xl">
                <div className="text-[11px] tracking-[0.24em] uppercase text-[#8BC34A]">Next step towards excellence</div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mt-3 leading-tight">
                  Hydrate your life. <br /> Refresh your <span className="text-[#8BC34A]">world.</span>
                </h3>
                <div className="mt-6 flex flex-wrap gap-4">
                  <Link to="/contact" className="btn-green">Contact Us <ArrowRight size={16} /></Link>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="btn-outline"><Phone size={14} /> {CONTACT_INFO.phone}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
