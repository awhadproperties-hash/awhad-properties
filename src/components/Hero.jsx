import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { homeImg } from "../utils";




const Hero = () => {
  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 1.2 });
    gsap.to("#cta", { opacity: 1, y: -20, delay: 1.5 });
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen bg-black overflow-hidden overflow-x-hidden"
    >
      {/* ---------- Mobile (image top, text below) ---------- */}
      <div className="md:hidden flex flex-col w-full h-full bg-black rounded-2xl">
        {/* Image on top */}
        <img
          src={homeImg}
          alt="Premium Property"
          className="w-full max-w-md h-[40vh] object-contain mb-6"
        />

        {/* Text below */}
        <div className="flex-1 flex flex-col items-center justify-start px-6 pt-6 text-center">
          <h1 className="text-3xl font-extrabold text-[#B8860B] leading-tight mt-10 mb-4">
            Awhad Premium Properties
          </h1>
          <p className="text-sm md:text-xl text-[#f5f0e9] leading-relaxed text-center md:text-left mb-6">
            Not every home is right for you. <br />
            That’s why we handpick premium, verified properties <br />
            so you spend less time searching and more time living.
          </p>

          <a
            id="cta"
            href="#highlights"
            className="btn px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition"
          >
            Explore Now
          </a>
        </div>
      </div>

      {/* ---------- Desktop Layout (image right / text left) ---------- */}
      <div className="hidden md:flex h-full">
        {/* Text Block */}
        <div className="flex-1 flex items-center justify-center px-16">
          <div className="flex flex-col gap-6 max-w-xl text-center">
            <h1 className="text-5xl lg:text-6xl font-extrabold text-[#f5f0e9] leading-tight">
              Awhad Premium Properties
            </h1>
            <p className="text-2xl text-gray-400">
              Not every home is right for you. That’s why we handpick premium,
              verified properties – so you spend less time searching and more
              time living.
            </p>
            <div className="flex justify-center">
              <a
                id="cta"
                href="#highlights"
                className="btn px-6 py-3 bg-white text-black rounded-lg shadow-lg hover:bg-gray-200 transition"
              >
                Explore Now
              </a>
            </div>
          </div>
        </div>

        {/* Image Right Side */}
        <div className="flex-1 h-full bg-black flex items-center justify-center">
          <img
            src={homeImg}
            alt="Premium Property"
            className="object-contain max-h-[90%] max-w-[90%]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
