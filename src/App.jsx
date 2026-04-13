import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import WhyChooseUs from "./sections/WhyChooseUs";
import SpecializedTalent from "./sections/SpeciliazedTalent";
import InsightsSection from "./sections/InsightSections";
import Testimonials from "./sections/Testimonials";
import PreFooter from "./sections/PreFooter";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <InsightsSection />
      <WhyChooseUs />
      <SpecializedTalent />
      <Testimonials />
      <PreFooter />
      <Footer />
    </>
  );
};

export default App;
