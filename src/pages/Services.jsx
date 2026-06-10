import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import { Box, Ruler, Wrench, RefreshCw, Settings, ArrowRight, CheckCircle2 } from "lucide-react";
import ProcessSection from "../components/ProcessSection";
import CtaSection from "../components/CtaSection";
import { IMAGES } from "../data/mock";
import { Helmet } from 'react-helmet-async';

const services = [
  {
    icon: Box,
    title: "Product Supply & Customization",
    desc: "Ready-to-install Packaged FRP STPs in small (5–10 KLD), medium (15–50 KLD), and large/modular (100+ KLD) capacities.",
    points: [
      "100% FRP — corrosion-resistant & lightweight",
      "70–80% less energy vs conventional STPs",
      "Compact footprint (5 KLD ≈ 4 sqm, 50 KLD ≈ 23 sqm)",
      "Automatic operation — no full-time operator",
    ],
  },
  {
    icon: Ruler,
    title: "Design & Engineering",
    desc: "Site surveys, feasibility studies, and customized system design including pre and post treatment integration.",
    points: [
      "Hydraulic & treatability assessment",
      "Customized packaged unit designs",
      "Pre-treatment (screening) integration",
      "Compliance support: NGT / CPCB / SPCB",
    ],
  },
  {
    icon: Wrench,
    title: "Installation & Commissioning",
    desc: "Quick, hassle-free installation by trained teams with minimal civil work and fast deployment.",
    points: [
      "Turnkey execution — excavation to testing",
      "Most units operational in days / weeks",
      "Safe handling of prefabricated modules",
      "Performance testing before handover",
    ],
  },
  {
    icon: Settings,
    title: "Operation & Maintenance (O&M)",
    desc: "Comprehensive AMCs, periodic desludging, and trained technicians ensuring decades of consistent performance.",
    points: [
      "Annual Maintenance Contracts (AMC)",
      "Desludging every 6–12+ months",
      "Remote monitoring where applicable",
      "15+ years expected plant life",
    ],
  },
  {
    icon: RefreshCw,
    title: "Water Reuse & Resource Recovery",
    desc: "Designed for circular water economy with non-potable reuse applications and sludge management.",
    points: [
      "Toilet flushing & landscape irrigation",
      "Cooling tower & industrial reuse",
      "Sludge management / composting options",
      "Reduced freshwater dependency",
    ],
  },
];

const Services = () => {
  return (
    <main>

    <Helmet>
  <title>Wastewater Treatment Services | MBBR STP Solutions India</title>

  <meta
    name="description"
    content="Explore Trek Enviro wastewater treatment services including STP installation, MBBR technology, AMC maintenance, water reuse, and custom sewage treatment solutions."
  />

  <meta
    name="keywords"
    content="wastewater treatment services, STP installation, sewage treatment services, MBBR technology India, FRP STP"
  />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://trekenviro.in/services" />
</Helmet>

      <PageHero
        title="Advanced MBBR Wastewater Treatment Services"
        subtitle="Treat, Reuse, and Revive Water — compact, energy-efficient, and compliant decentralized STPs for homes, apartments, hotels, hospitals, schools, and industries across India."
        image={IMAGES.service}
        crumbs={["Services"]}
      />

      <section className="py-20">
        <div className="container-x">
          <div className="max-w-3xl">
            <span className="section-eyebrow">End-to-End Wastewater Management</span>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-slate-900 mt-4">
              Our advanced MBBR <span className="brand-gradient-text">technology services</span>
            </h2>
            <p className="text-slate-600 mt-4 text-[15px] leading-relaxed">
              Our packaged STPs treat both black water (toilets) and grey water (kitchens, bathrooms, laundry) in a single compact FRP unit using multi-stage anaerobic-aerobic processes for superior pollutant removal — with effluent suitable for reuse while meeting CPCB/SPCB norms.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {services.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="bg-white border border-slate-100 rounded-xl p-7 card-hover">
                  <div className="flex items-start gap-5">
                    <div className="shrink-0 h-12 w-12 rounded bg-[#E3F2FD] text-[#0B4A7F] grid place-items-center">
                      <Icon size={22} />
                    </div>
                    <div>
                      <div className="text-[11px] tracking-[0.18em] uppercase text-[#4CAF50] font-semibold">0{i + 1}</div>
                      <h3 className="font-display text-xl font-bold text-slate-900 mt-1">{s.title}</h3>
                      <p className="text-slate-600 mt-3 text-sm leading-relaxed">{s.desc}</p>
                      <ul className="mt-4 space-y-2">
                        {s.points.map((p, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                            <CheckCircle2 size={15} className="text-[#4CAF50] shrink-0 mt-0.5" /> {p}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <Link to="/contact" className="btn-primary">Request a Site Visit <ArrowRight size={16} /></Link>
          </div>
        </div>

        {/* need to replace with actual animation */}
        <div className="rounded-2xl overflow-hidden border border-slate-100 bg-gradient-to-br from-[#E3F2FD] via-white to-[#F1F8E9] shadow-sm">
            <img
              src={IMAGES.process}
              alt="Advanced MBBR schematic diagram"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
      </section>

      

      <ProcessSection />
      <CtaSection />
    </main>
  );
};

export default Services;
