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

const Home = () => {
  return (
    <main>
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
