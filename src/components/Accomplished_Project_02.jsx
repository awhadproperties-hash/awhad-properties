import React, { useState, useEffect } from "react";
import { AP022,AP021 } from "../utils";

const properties = [
  {
    id: 1,
    title: "Our 36 Acres gated community township",
    price: "@ Madhavaram",
    image: AP021,
    link: "/details/villa",
    details: "Less price More UDP, Gated community."
  },
  {
    id: 2,
    title: "Our 36 Acres gated community township",
    price: "@ Madhavaram",
    image: AP022,
    link: "/details/villa",
    details: "Less price More UDP, Gated community."
  },
];

const Accomplished_Project_02 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % properties.length);
    }, 2353);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[70vh] md:h-[600px] overflow-hidden flex items-center justify-center">
      {properties.map((property, index) => (
        <a
          key={property.id}
          href="#contact" // or property.link
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-opacity duration-700 ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          } group`}
        >
          {/* Image */}
          <img
            src={property.image}
            alt={property.title}
            className="w-[90vw] max-w-[400px] md:w-[555px] md:h-[555px] object-cover rounded-2xl shadow-lg cursor-pointer"
          />

          {/* Text Overlay */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-black/80 text-white p-4 rounded-xl text-center w-[90%] max-w-[350px] md:max-w-[480px]">
            <h2 className="text-xl md:text-4xl font-bold">{property.title}</h2>
            <p className="text-base md:text-2xl">{property.price}</p>
          </div>
        </a>
      ))}

      {/* Dots */}
      <div className="absolute bottom-4 md:bottom-10 left-1/2 -translate-x-1/2 flex space-x-3">
        {properties.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              i === current ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Accomplished_Project_02;
