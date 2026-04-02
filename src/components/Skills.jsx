// import { FaPenNib } from "react-icons/fa6";
// import { FaXTwitter } from "react-icons/fa6";
// import { SiFigma } from "react-icons/si";
// import { TbBrandAdobeIllustrator } from "react-icons/tb";
// import { FaPenRuler } from "react-icons/fa6";

import { lazy, Suspense } from "react";

// import { PiNewspaperClippingFill } from "react-icons/pi";
const FaPenNib = lazy(() => import("react-icons/fa6").then(m => ({ default: m.FaPenNib })));
const FaXTwitter = lazy(() => import("react-icons/fa6").then(m => ({ default: m.FaXTwitter })));
const SiFigma = lazy(() => import("react-icons/si").then(m => ({ default: m.SiFigma })));
const TbBrandAdobeIllustrator = lazy(() => import("react-icons/tb").then(m => ({ default: m.TbBrandAdobeIllustrator })));
const FaPenRuler = lazy(() => import("react-icons/fa6").then(m => ({ default: m.FaPenRuler })));
const PiNewspaperClippingFill = lazy(() => import("react-icons/pi").then(m => ({ default: m.PiNewspaperClippingFill })));
const skills = [
     {
          title: "UI Design",
          Icon: <FaPenNib />,
          highlight: true,
          desc: "Crafting intuitive, research-driven interfaces with deep expertise in information architecture — transforming complex user needs into seamless, visually compelling experiences across Xd, Figma, Illustrator, and Photoshop.",
          tools: ["Xd", "Figma", "Ai", "Ps"],
     },
     {
          title: "UX Design",
          Icon: <PiNewspaperClippingFill />,
          desc: "Designing meaningful, user-centered experiences through deep empathy, wireframing, and prototyping — bridging the gap between user behavior and business goals with precision across Xd, Figma, and beyond.",
          tools: ["Xd", "Figma", "X"],
     },
     {
          title: "Product Design",
          Icon: <FaPenRuler />,
          desc: "Shaping end-to-end product experiences that balance business strategy with human needs — from early concept and research to polished, market-ready designs across Xd, Figma, and beyond.",
          tools: ["Xd", "Figma", "X"],
     },
];

// Function to get the appropriate icon for each tool
const getToolIcon = (tool) => {
     switch (tool) {
          case "Ai":
               return <TbBrandAdobeIllustrator className="text-xl md:text-2xl" />;
          case "Xd":
               return 'Xd';
          case "Ps":
               return 'Ps';
          case "Figma":
               return <SiFigma className="text-xl md:text-2xl" />;
          case "X":
               return <FaXTwitter className="text-xl md:text-2xl" />;
          default:
               return null;
     }
};

const Skills = () => {
     return (
          <section id='skills' className="relative w-full  pt-20 overflow-hidden min-h-screen flex items-center justify-center">

               {/* Background gradient */}
               {/* <div className="absolute inset-0 bg-gradient-to-br from-[#3a4066] via-[#2f3556] to-[#2a2f4d] opacity-90"></div> */}



               <div className="relative z-10 max-w-3xl 2xl:max-w-7xl mx-auto px-6">

                    {/* Header */}
                    <p className="text-gray-300 text-[18px] md:text-[24px] mb-2">
                         Skills & <span className="text-yellow">Specialization</span>
                    </p>

                    <h2 className="text-white text-2xl lg:text-4xl 2xl:text-5xl font-medium mb-10 md:mb-16">
                         13+ Years of Experience
                    </h2>

                    {/* Cards */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-8 text-white space-y-3">

                         {skills.map((item, i) => (
                              <div
                                   key={i}
                                   className={`relative rounded-md transition-all duration-300 `}
                              >

                                   {/* Icon */}
                                   <div className="text-yellow text-xl md:text-3xl mb-4">
                                        <Suspense fallback={null}>
                                             {item.Icon}
                                        </Suspense>
                                   </div>

                                   {/* Title */}
                                   <h3
                                        className={`text-[26px] md:text-[36px] font-medium mb-4 inline-block `}
                                   >
                                        {item.title}
                                   </h3>

                                   {/* Description */}
                                   <p className=" text-sm leading-5.25 mb-6">
                                        {item.desc}
                                   </p>

                                   {/* Divider (only for first card like design) */}
                                   {item.highlight && (
                                        <div className=" mb-4"></div>
                                   )}

                                   {/* Tools */}
                                   <div className="flex gap-3 flex-wrap">
                                        {item.tools.map((tool, idx) => (
                                             <div
                                                  key={idx}
                                                  className=" flex items-center gap-6 transition-all duration-300 text-xl md:text-2xl"
                                                  title={tool}
                                             >
                                                  <Suspense fallback={null}>
                                                       {getToolIcon(tool)}
                                                  </Suspense>
                                                  {/* <span className="text-xs">
                                                       {tool}
                                                  </span> */}
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         ))}
                    </div>

                    {/* Footer */}
                    <h3 className="text-center text-offwhite text-[16px] mt-16">
                         © Pyush Anand 2026.
                    </h3>
               </div>
          </section>
     );
};

export default Skills;