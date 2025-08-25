import React, { useRef } from "react";
import { awhadLogo } from "../utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { animateWithGsap } from "../utils/animations";

const HowItWorks = () => {
  const videoRef = useRef();

  useGSAP(() => {
    gsap.from("#chip", {
      scrollTrigger: {
        trigger: "#chip",
        start: "40% bottom",
      },
      opacity: 0,
      scale: 2,
      duration: 2,
      ease: "power2.inOut",
    });
    animateWithGsap(".g_fadeIn", {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("entry.958910414");
    const phone = formData.get("entry.530013972");

    // ✅ Email validation
    if (!email.includes("@")) {
      alert("❌ Please enter a valid email address.");
      return;
    }

    // ✅ Phone validation (10 digits only)
    if (!/^\d{10}$/.test(phone)) {
      alert("❌ Phone number must be exactly 10 digits.");
      return;
    }

    await fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSen10Xi1690fdVZP0BwPveQE9s_vNU8ApCY37DQEh6hTlkgFQ/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    );

    alert("✅ Your query has been sent successfully!");
    e.target.reset();
  };

  return (
    <section className="w-full min-h-[100dvh] flex flex-col justify-center items-center common-padding">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center px-4">
        
        {/* Logo */}
        <div id="chip" className="flex justify-center w-full my-10">
          <img
            src={awhadLogo}
            width={260}
            height={300}
            className="rounded-3xl object-cover shadow-lg"
            alt="Awhad Logo"
          />
        </div>

        {/* Title */}
        <div className="text-center w-full">
          <h1 className="hiw-title text-[#f5f0e9]">
            Awhad Premium Properties
          </h1>
          <h2 className="hiw-subtitle text-lg text-[#f5f0e9] mt-2">
            Plots don’t wait. Dreams don’t pause. Why should you?
          </h2>
        </div>

        {/* Contact Form */}
        <div className="w-full sm:w-2/3 mt-10 bg-white rounded-2xl shadow-lg p-6 relative z-10">
          <h3 className="text-xl font-bold text-[#1a1a1a] text-center mb-4">
            Send us a Query
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <input
              type="text"
              name="entry.851727948"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-600 text-black"
              required
            />

            {/* Email */}
            <input
              type="email"
              name="entry.958910414"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-600 text-black"
              required
            />

            {/* Phone */}
            <input
              type="tel"
              name="entry.530013972"
              placeholder="Your Phone"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-600 text-black"
              pattern="[0-9]{10}"        // ✅ only 10 digits
              maxLength="10"
              minLength="10"
              title="Phone number must be 10 digits"
              required
            />

            {/* Message */}
            <textarea
              name="entry.1199985495"
              placeholder="Your Message"
              rows="4"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-yellow-600 text-black"
              required
            ></textarea>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-yellow-600 text-white py-3 rounded-lg font-bold hover:bg-yellow-700 transition"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center w-full mt-8">
          <p className="hiw-bigtext text-[#f5f0e9] text-center">Call Us:</p>

          <div className="flex flex-col items-center w-full gap-3 mt-4">
            <a
              href="tel:+919384012300"
              className="w-full sm:w-1/2 text-center px-6 py-3 bg-white text-[#1a1a1a] rounded-xl font-semibold shadow hover:bg-gray-100 transition g_fadeIn"
            >
              (+91) 93840 12300
            </a>
            <a
              href="tel:+919384012301"
              className="w-full sm:w-1/2 text-center px-6 py-3 bg-white text-[#1a1a1a] rounded-xl font-semibold shadow hover:bg-gray-100 transition g_fadeIn"
            >
              (+91) 93840 12301
            </a>
            <a
              href="mailto:sales@awhadproperties.com"
              className="w-full sm:w-1/2 text-center px-6 py-3 bg-white text-[#1a1a1a] rounded-xl font-semibold shadow hover:bg-gray-100 transition g_fadeIn break-words"
            >
              sales@awhadproperties.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;