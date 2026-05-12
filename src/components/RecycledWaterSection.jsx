import { Sprout, Flower2, Snowflake, Droplet, Car, SprayCan } from "lucide-react";
import { RECYCLED_WATER_USES } from "../data/mock";

const icons = [Sprout, Flower2, Snowflake, Droplet, Car, SprayCan];

const RecycledWaterSection = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <span className="section-eyebrow">Water Reuse</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] leading-tight text-slate-900 mt-4">
            Recycled water <span className="brand-gradient-text">used for</span>
          </h2>
          <p className="text-slate-600 mt-3 text-[15px]">Treat at site, reuse at site — our packaged STPs produce non-potable water suitable for daily applications.</p>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {RECYCLED_WATER_USES.map((r, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="text-center bg-white border border-slate-100 rounded-xl p-6 card-hover">
                <div className="mx-auto h-14 w-14 rounded-full grid place-items-center bg-gradient-to-br from-[#E3F2FD] to-[#E8F5E9] text-[#0B4A7F]">
                  <Icon size={24} />
                </div>
                <div className="font-display font-bold text-slate-900 mt-4">{r.title}</div>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default RecycledWaterSection;
