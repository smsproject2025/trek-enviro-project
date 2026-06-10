import Hero from "../components/Hero";
import EnquiryFormPopup from "../components/EnquiryFormPopup";
import AboutSnippet from "../components/AboutSnippet";
import FeatureSection from "../components/FeatureSection";
import SmartStpSection from "../components/SmartStpSection";
import ProductShowcase from "../components/ProductShowcase";
import ApplicationsSection from "../components/ApplicationsSection";
import ProcessSection from "../components/ProcessSection";
import RecycledWaterSection from "../components/RecycledWaterSection";
import WhyUsSection from "../components/WhyUsSection";
import CtaSection from "../components/CtaSection";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <main>

    <Helmet>
  <title>Trek Enviro | Advanced STP & Wastewater Treatment Solutions India</title>

  <meta
    name="description"
    content="Trek Enviro provides advanced MBBR sewage treatment plants (STP), wastewater recycling systems, and eco-friendly water treatment solutions across India."
  />

  <meta
    name="keywords"
    content="STP plant India, sewage treatment plant, wastewater treatment, MBBR technology, FRP STP, water recycling, Trek Enviro"
  />

  <meta name="robots" content="index, follow" />

  <link rel="canonical" href="https://trekenviro.in/" />

  <meta property="og:title" content="Trek Enviro | Advanced Wastewater Treatment Solutions" />
  <meta
    property="og:description"
    content="Compact, energy-efficient sewage treatment plants and wastewater management solutions for residential, commercial, and industrial projects."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://trekenviro.in/" />
  <meta property="og:image" content="https://trekenviro.in/images/og-image.jpg" />
</Helmet>

      <Hero />
      <AboutSnippet />
      <FeatureSection />
      <SmartStpSection />
      <ProductShowcase />
      <ApplicationsSection />
      <RecycledWaterSection />
      <ProcessSection />
      <WhyUsSection />
      <CtaSection />
      <EnquiryFormPopup />
    </main>
  );
};

export default Home;
