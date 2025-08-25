// import React from "react";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Highlights from "./components/Highlights";
// import Model from "./components/Model";
// import * as Sentry from "@sentry/react";
// import Features from "./components/Features";
// import HowItWorks from "./components/HowItWorks";
// import Footer from "./components/Footer";

// const App = () => {
//   return (
//     <main className="bg-black">
//       <Navbar />
//       <Hero />
//       <Highlights />
//       <Model />
//       <Features/>
//       <HowItWorks/>
//       <Footer/>
//     </main>
//   );
// };

// export default Sentry.withProfiler(App);
import React, { useState, useEffect } from "react";
import { awhadLogo } from "./utils";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import HowItWorks from "./components/HowItWorks";
import Footer from "./components/Footer";
import * as Sentry from "@sentry/react";


const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds
    return () => clearTimeout(timer);
  }, []);

if (loading) {
  return (
    <div className="w-full min-h-[100dvh] flex flex-col items-center justify-center bg-[#f5f0e9] text-center px-4">
      <img 
        src={awhadLogo}  
        width={260} 
        height={300} 
        className="rounded-3xl object-cover shadow-[0_0_40px_rgba(184,134,11,0.6)] mb-6"
        alt="Awhad Logo"
      />
      <h1 className="text-2xl md:text-4xl font-extrabold text-[#B8860B] leading-snug">
        We believe in <br />
        Minimalist, Luxury & Premium
      </h1>
    </div>
  );
}

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default Sentry.withProfiler(App);
