import PageHero from "../components/PageHero";
import AboutSnippet from "../components/AboutSnippet";
import WhyUsSection from "../components/WhyUsSection";
import CtaSection from "../components/CtaSection";
import { IMAGES } from "../data/mock";
import { Target, Eye, Leaf } from "lucide-react";

const About = () => {
  return (
    <main>
      <PageHero
        title="About Trek Enviro"
        subtitle="A leading provider of innovative and sustainable wastewater management solutions across India."
        image={IMAGES.about}
        crumbs={["About Us"]}
      />

      <section className="py-20 md:py-24">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="section-eyebrow">Our Story</span>
            <h2 className="font-display text-3xl md:text-4xl leading-tight text-slate-900 mt-4">
              From a <span className="brand-gradient-text">vision</span> to a PAN-India partner
            </h2>
            <p className="text-slate-600 mt-5 text-[15px] leading-relaxed">
              Trek Enviro emerged from a vision to address the growing need for efficient, compliant, and eco-friendly wastewater treatment amid rapid urbanization and industrial growth. What began as a specialized engineering firm has evolved into a comprehensive wastewater management partner, serving clients across India.
            </p>
            <p className="text-slate-600 mt-4 text-[15px] leading-relaxed">
              Over the years, we have designed, built, and operated treatment systems that handle millions of liters of wastewater daily — ensuring compliance with stringent regulatory standards while minimizing environmental impact. In association with our strategic partner <strong className="text-slate-900">Susbio</strong>, our cutting-edge MBBR technology delivers excellent performance by combining anaerobic and aerobic treatment processes in a packaged FRP construction.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden">
            <img src={IMAGES.collage2} alt="Our story" className="w-full h-[480px] object-cover" />
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container-x grid md:grid-cols-3 gap-6">
          {[
            { icon: Target, title: "Our Mission", desc: "To deliver reliable, cost-effective wastewater management solutions that safeguard water quality, promote circular economy principles, and support sustainable development for future generations." },
            { icon: Eye, title: "Our Vision", desc: "A world where clean water is accessible to all, wastewater is a valuable resource rather than waste, and industries and communities thrive in harmony with the environment." },
            { icon: Leaf, title: "Our Promise", desc: "Responsible wastewater management isn’t just a service — it’s a vital contribution to cleaner rivers, healthier ecosystems, and resilient communities we partner with as trusted advisors." },
          ].map((c, i) => {
            const Icon = c.icon;
            return (
              <div key={i} className="bg-white rounded-xl p-8 border border-slate-100 card-hover">
                <div className="h-12 w-12 rounded-md grid place-items-center bg-[#E8F5E9] text-[#4CAF50] mb-5"><Icon size={22} /></div>
                <h3 className="font-display text-xl font-bold text-slate-900">{c.title}</h3>
                <p className="text-slate-600 mt-3 text-sm leading-relaxed">{c.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      <AboutSnippet />
      <WhyUsSection />
      <CtaSection />
    </main>
  );
};

export default About;
