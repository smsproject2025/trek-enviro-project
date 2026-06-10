import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import { Toaster } from "./components/ui/sonner";
import { Helmet } from "react-helmet-async";

function App() {
  return (
    <div className="App">

      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Trek Enviro",
            url: "https://trekenviro.in",
            logo: "https://trekenviro.in/images/trek_logo.png",
            description:
              "Manufacturer and supplier of advanced MBBR sewage treatment plants and wastewater treatment solutions across India.",
            telephone: "+91-96169 80885",
            address: {
              "@type": "PostalAddress",
              addressCountry: "IN"
            }
          })}
        </script>
      </Helmet>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Toaster position="top-right" />
      </BrowserRouter>
    </div>
  );
}

export default App;
