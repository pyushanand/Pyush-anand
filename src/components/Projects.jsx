import React, { lazy, Suspense, useRef } from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Project1 from "../assets/project1.webp";
import Project2 from "../assets/project2.webp";
import Project3 from "../assets/project3.webp";
import Project4 from "../assets/project4.webp";
import Project5 from "../assets/project5.webp";
import Project6 from "../assets/project6.webp";
const FaArrowLeft = lazy(() => import("react-icons/fa").then(m => ({ default: m.FaArrowLeft })));
const FaArrowRight = lazy(() => import("react-icons/fa").then(m => ({ default: m.FaArrowRight })));
const projects = [
     {
          title: "Daccord",
          desc: "A next-generation community platform where immersive dark UI, bold gradients, and seamless navigation unite creators, gamers, and digital explorers in one vibrant space.",
          img: Project1,
     },
     {
          title: "Beyekls",
          desc: "A sleek, dark-themed bike shopping app that transforms the two-wheeler buying experience with intuitive browsing, stunning product showcases, and a frictionless cart — all wrapped in a bold, midnight-blue UI.",
          img: Project2,
     },
     {
          title: "Coinpay",
          desc: "A clean, modern fintech app that puts your finances at your fingertips, combining effortless account setup, real-time transaction tracking, and smart spending insights in one beautifully minimal, trust-first UI.",
          img: Project3,
     },
     {
          title: "Roman",
          desc: "A bold, high-impact supplement landing page that commands attention with its dark atmospheric design, electric green accents, and laser-sharp messaging — built to convert curious visitors into focused, loyal customers.",
          img: Project4,
     },
     {
          title: "Nectar",
          desc: "A fresh, friendly grocery delivery app that makes everyday shopping effortless with intuitive category browsing, exclusive deals, and a clean green UI that feels as natural as the produce it delivers.",
          img: Project5,
     },
     {
          title: "Kengos",
          desc: "Lorem ipsum dolor sit amet. Qui nostrum Quis At laboriosam consequatur et molestias inventore non odio sunt quo.",
          img: Project6,
     },
];

const Projects = () => {
     const scrollRef = useRef();

     const scroll = (dir) => {
          const container = scrollRef.current;
          const card = container.children[0];

          if (!card) return;

          const gap = 24; // gap-6 = 24px
          const cardWidth = card.offsetWidth + gap;

          container.scrollBy({
               left: dir === "left" ? -cardWidth : cardWidth,
               behavior: "smooth",
          });
     };

     return (
          <section
               id="projects"
               className="relative w-full min-h-screen flex items-center lg:items-start flex-col justify-start lg:justify-center text-white  max-w-75 lg:max-w-3xl 2xl:max-w-7xl mx-auto pl-2 pr-2 pt-24 lg:pt-0 lg:pl-14"
          >
               {/* Heading */}
               <div className="flex flex-col gap-2 items-center lg:items-start justify-center lg:justify-start mb-5 lg:mb-10">
                    <p className="md:text-[24px]">
                         My <span className="text-yellow">Projects</span>
                    </p>

                    <h2 className="text-3xl md:text-5xl font-medium leading-10 lg:leading-18 text-center lg:text-start">
                         Some of my recent work!
                    </h2>
               </div>

               {/* Carousel */}
               <div className="relative w-full">

                    {/* Cards */}
                    <div
                         ref={scrollRef}
                         className="flex gap-6 overflow-x-hidden scroll-smooth snap-x snap-mandatory"
                    >
                         {projects.map((item, i) => (
                              <div
                                   key={i}
                                   className="snap-start w-[calc((100%-8px)/1)] lg:w-[calc((100%-48px)/3)] shrink-0 bg-dark-blue rounded-lg overflow-hidden "
                              >
                                   {/* Image */}
                                   <div className="h-30 2xl:h-45 w-full overflow-hidden">
                                        <img
                                             src={item.img}
                                             alt={item.title}
                                             loading="lazy"
                                             className="w-full h-full object-cover"
                                        />
                                   </div>

                                   {/* Content */}
                                   <div className="p-3 2xl:p-5">
                                        <h3 className="text-base 2xl:text-xl text-cyan-300 mb-2">
                                             {item.title}
                                        </h3>

                                        <p className="text-offwhite text-base 2xl:text-base leading-relaxed">
                                             {item.desc}
                                        </p>
                                   </div>
                              </div>
                         ))}
                    </div>

                    {/* Arrows */}
                    <div className="absolute -bottom-14 right-0 flex gap-4">
                         <button
                              onClick={() => scroll("left")}
                              aria-label="Go to previous project"
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b4163] transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-offwhite hover:text-black"
                         >
                              <Suspense fallback={null}>
                                   <FaArrowLeft />
                              </Suspense>
                         </button>

                         <button
                              onClick={() => scroll("right")}
                              aria-label="Go to next project"
                              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b4163] transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-offwhite hover:text-black"
                         >
                              <Suspense fallback={null}>
                                   <FaArrowRight />
                              </Suspense>
                         </button>
                    </div>
               </div>

               {/* Footer */}
               <h3 className="absolute bottom-44 lg:bottom-6 left-1/2 -translate-x-1/2 text-[13px] lg:text-[16px] text-offwhite">
                    © Pyush Anand 2026.
               </h3>
          </section>
     );
}

export default React.memo(Projects);