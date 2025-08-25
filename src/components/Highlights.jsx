// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import React from "react";
// import { rightImg, watchImg } from "../utils/index";
// import VideoCarousel from "./VideoCarousel";

// const Highlights = () => {
//   useGSAP(() => {
//     gsap.to("#title", { opacity: 1, y: 0 });
//     gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25});
//   }, []);

//   return (
//     <section
//       id="highlights"
//       className="w-screen overflow-hidden h-full common-padding bg-zinc"
//     >
//       <div className="screen-max-width">
//         <div className="mb-12 w-full md:flex items-end justify-between">
//           <h1 id="title" className="section-heading">
//             Get the highlights
//           </h1>
//           <div className="flex flex-wrap items-end gap-5">
//             <p className="link">
//               Watch the film
//               <img src={watchImg} alt="watch" className="ml-2" />
//             </p>
//             <p className="link">
//               Watch the event
//               <img src={rightImg} alt="right" className="ml-2" />
//             </p>
//           </div>
//         </div>
//         <VideoCarousel/>
//       </div>
//     </section>
//   );
// };

// export default Highlights;
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
//import React from "react";
//import { rightImg, watchImg } from "../utils/index";
//import VideoCarousel from "./VideoCarousel";
import ImageSlider from "./ImageSlider";
import Accomplished_Project_01 from "./Accomplished_Project_01"; 
import Accomplished_Project_02 from "./Accomplished_Project_02"; 
import Accomplished_Project_03 from "./Accomplished_Project_03"; 

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0 });
    gsap.to(".link", { opacity: 1, y: 0, duration: 1, stagger: 0.25});
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">

        <div className=" w-full  justify-between ">
          <h2 className="hiw-title">
            Handpicked Premium Properties 
          </h2>
          <h1 className="hiw-subtitle">
            Don’t Just Buy Property. Secure Your Family’s Future.
            Limited, Exclusive, all Yours!
          </h1>
        </div>
        <ImageSlider />
         <div className=" w-full  justify-between mt-10 ">
          <h2 className="hiw-title">
            Accomplished Premium Projects 
          </h2> 
        </div>
        <Accomplished_Project_01 />
        <Accomplished_Project_02 />
        <Accomplished_Project_03 />
      </div>
    </section>
  );
};

export default Highlights;
