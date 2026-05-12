import { Building2, Hospital, Home, Factory, Trees, GraduationCap, Hotel, Briefcase, Utensils, Tractor, MapPin, Droplets, Castle, ShoppingBag, Users, PartyPopper } from "lucide-react";
import { APPLICATIONS } from "../data/mock";

const icons = [Building2, Hospital, Hospital, Briefcase, Users, Home, PartyPopper, Utensils, Hospital, Factory, Trees, Droplets, Hotel, GraduationCap, MapPin, Factory];

const ApplicationsSection = () => {
  return (
    <section className="py-20 md:py-24 bg-slate-50">
      <div className="container-x">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow">Applications</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] leading-tight text-slate-900 mt-4">
            Built for every kind of project — <span className="brand-gradient-text">across India.</span>
          </h2>
          <p className="text-slate-600 mt-3 text-[15px] leading-relaxed">
            From individual homes to large industrial clusters, our packaged Hybrid Japanese ADVANCED MBBR(Anaerobic + Aerobic) STPs deliver verifiable performance — backed by Japanese technology, Indian manufacturing, and a service network that doesn’t disappear after installation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {APPLICATIONS.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div key={i} className="group bg-white border border-slate-100 rounded-xl p-5 flex items-center gap-4 card-hover">
                <div className="shrink-0 h-11 w-11 rounded-md grid place-items-center bg-[#E3F2FD] text-[#0B4A7F] group-hover:bg-[#0B4A7F] group-hover:text-white transition-colors">
                  <Icon size={20} />
                </div>
                <div className="text-sm font-semibold text-slate-800">{a}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ApplicationsSection;
