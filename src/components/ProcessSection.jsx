import { PROCESS_STEPS } from "../data/mock";

const ProcessSection = () => {
  return (
    <section className="py-20 md:py-24 bg-[#0B4A7F] text-white relative overflow-hidden">
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#1E88E5]/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#4CAF50]/15 blur-3xl"></div>

      <div className="container-x relative">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-[#8BC34A] text-[11px] font-semibold tracking-[0.2em] uppercase">Our Process</span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[44px] leading-tight mt-5">
            We don't just install. <span className="text-[#8BC34A]">We care.</span>
          </h2>
          <p className="text-white/75 mt-4 text-[15px] leading-relaxed">
            Trek Enviro stands by every installation. We don’t just complete a project — we stay connected, offering ongoing support, upgrades, and care to protect your investment and the environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-14">
          {PROCESS_STEPS.map((s, i) => (
            <div key={i} className="relative bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-colors">
              <div className="font-display text-4xl font-bold text-[#8BC34A] leading-none">{s.num}</div>
              <h3 className="font-semibold mt-4 text-[15px]">{s.title}</h3>
              <p className="text-sm text-white/70 mt-3 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
