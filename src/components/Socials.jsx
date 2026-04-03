import React, { lazy, Suspense } from "react";
// import { BsDribbble } from "react-icons/bs";
// import { FaLinkedinIn } from "react-icons/fa";
// import { ImBehance } from "react-icons/im";
// import { IoLogoInstagram } from "react-icons/io5";
const BsDribbble = lazy(() => import("react-icons/bs").then(m => ({ default: m.BsDribbble })));
const FaLinkedinIn = lazy(() => import("react-icons/fa").then(m => ({ default: m.FaLinkedinIn })));
const ImBehance = lazy(() => import("react-icons/im").then(m => ({ default: m.ImBehance })));
const IoLogoInstagram = lazy(() => import("react-icons/io5").then(m => ({ default: m.IoLogoInstagram })));
const Socials = () => {
     return (
          <div className='flex flex-row lg:flex-col gap-8 items-center justify-between fixed top-7/8 lg:top-1/2 -translate-y-1/2 left-1/2 lg:left-10 -translate-x-1/2 lg:translate-x-0 bg-dark-blue rounded-full z-9999 p-4 text-2xl shadow-[0px_0px_10px_1px] lg:shadow-none shadow-white'>
               <a href="https://dribbble.com/pyush-anand"
                    aria-label="Visit Dribble profile"
                    target="_blank"
                    rel="noopener noreferrer"
               >
                    <Suspense fallback={null}>
                         <BsDribbble className="transition-all duration-300 ease-in-out cursor-pointer hover:text-[#5bd1d7]" />
                    </Suspense>
               </a>
               <a href="https://www.linkedin.com/in/pyush-anand-016a4715"
                    aria-label="Visit LinkedIn profile"
                    target="_blank"
                    rel="noopener noreferrer"
               >
                    <Suspense fallback={null}>
                         <FaLinkedinIn className="transition-all duration-300 ease-in-out cursor-pointer hover:text-[#5bd1d7]" />
                    </Suspense>
               </a>
               <a href="https://www.instagram.com/pyush.anand7"
                    aria-label="Visit Instagram profile"
                    target="_blank"
                    rel="noopener noreferrer"
               >
                    <Suspense fallback={null}>
                         <IoLogoInstagram className="transition-all duration-300 ease-in-out cursor-pointer hover:text-[#5bd1d7]" />
                    </Suspense>
               </a>
               <a href="https://www.behance.net/piyushananfd63"
                    aria-label="Visit Behance profile"
                    target="_blank"
                    rel="noopener noreferrer"
               >
                    <Suspense fallback={null}>
                         <ImBehance className="transition-all duration-300 ease-in-out cursor-pointer hover:text-[#5bd1d7]" />
                    </Suspense>
               </a>
          </div>
     )
}

export default React.memo(Socials);