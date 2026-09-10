import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MenuSection from "./components/MenuSection";
import About from "./components/About";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonial from "./components/Testimonial";
import Location from "./components/Location";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import FAQ from "./components/FAQ";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-orange-500 selection:text-white relative">
      <Navbar />
      <Hero />
      <MenuSection />
      <About />
      <WhyChooseUs />
      <Testimonial />
      <FAQ />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
