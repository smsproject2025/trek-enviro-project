import { Wifi, Activity, Power, FileText, Bell, AlertTriangle, Smartphone } from "lucide-react";
import { SMART_STPS } from "../data/mock";

const icons = [Wifi, Activity, Power, FileText, Bell, AlertTriangle];

const SmartStpSection = () => {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-br from-[#E3F2FD] via-white to-[#F1F8E9] relative overflow-hidden">
      <div className="container-x relative">
        <div className="text-center max-w-2xl mx-auto">
          <span className="section-eyebrow"><Wifi size={12} /> Connected Plants</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] leading-tight text-slate-900 mt-4">
            <span className="brand-gradient-text">SMART</span> STPs
          </h2>
          <p className="text-slate-600 mt-4 text-[15px] leading-relaxed">
            IoT-enabled packaged STPs that bring real-time visibility, control, and compliance to your fingertips — from anywhere.
          </p>
        </div>

        {/* Animated water-drop hub */}
        <div className="mt-14 grid lg:grid-cols-3 gap-10 items-center">
          <div className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {SMART_STPS.slice(0, 3).map((s, i) => {
              const Icon = icons[i];
              return (
                <div key={i} className="bg-white border border-slate-100 rounded-xl p-5 card-hover">
                  <div className="h-10 w-10 rounded grid place-items-center bg-[#E3F2FD] text-[#0B4A7F] mb-3"><Icon size={18} /></div>
                  <div className="font-semibold text-slate-900 text-[14px]">{s.title}</div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="order-1 lg:order-2 relative h-[280px] grid place-items-center">
            {/* Pulse rings */}
            <span className="absolute h-56 w-56 rounded-full border-2 border-[#8BC34A]/30 animate-ping"></span>
            <span className="absolute h-40 w-40 rounded-full border-2 border-[#1E88E5]/30 animate-ping" style={{ animationDelay: "0.5s" }}></span>
            <div className="relative h-32 w-32 rounded-full bg-gradient-to-br from-[#1E88E5] to-[#0B4A7F] grid place-items-center shadow-2xl gentle-pulse">
              <Smartphone size={44} className="text-white" />
            </div>
          </div>

          <div className="order-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {SMART_STPS.slice(3).map((s, i) => {
              const Icon = icons[i + 3];
              return (
                <div key={i} className="bg-white border border-slate-100 rounded-xl p-5 card-hover">
                  <div className="h-10 w-10 rounded grid place-items-center bg-[#E8F5E9] text-[#4CAF50] mb-3"><Icon size={18} /></div>
                  <div className="font-semibold text-slate-900 text-[14px]">{s.title}</div>
                  <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartStpSection;
