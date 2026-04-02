import { lazy, Suspense } from "react";
// import { FaLocationDot } from "react-icons/fa6";
// import { FaPhoneAlt } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
const FaLocationDot = lazy(() => import("react-icons/fa6").then(m => ({ default: m.FaLocationDot })));
const FaPhoneAlt = lazy(() => import("react-icons/fa").then(m => ({ default: m.FaPhoneAlt })));
const MdEmail = lazy(() => import("react-icons/md").then(m => ({ default: m.MdEmail })));
export default function Contact() {
     const mapLink =
          "https://www.google.com/maps?q=New+Delhi,+India&z=12&output=embed";

     const openMap = () => {
          window.open("https://www.google.com/maps?q=New+Delhi,+India", "_blank");
     };

     return (
          <section
               id="contact"
               className="relative w-full min-h-screen flex items-center lg:items-start flex-col justify-center text-white max-w-75 lg:max-w-3xl 2xl:max-w-7xl mx-auto pl-2 pr-2 -pt-20 lg:pt-0 lg:pl-14"
          >

               <div className="flex flex-col gap-2 items-center lg:items-start justify-center lg:justify-start">
                    {/* Small Heading */}
                    <p className="md:text-[24px] mb-2">
                         Get in <span className="text-yellow">Touch</span>
                    </p>

                    {/* Name */}
                    <h2 className="text-3xl md:text-5xl font-medium leading-10 lg:leading-18 mb-6 text-center lg:text-start">
                         Let's start a project together!
                    </h2>
               </div>

               {/* Content */}
               <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-8">

                    {/* LEFT: Contact Info */}
                    <div className="space-y-6 w-full lg:w-[40%] 2xl:w-[35%] ">

                         {/* Email */}
                         <div className="flex items-center gap-4">
                              <div className="text-yellow text-2xl lg:text-3xl">
                                   <Suspense fallback={null}>
                                        <MdEmail />
                                   </Suspense>
                              </div>
                              <p className="text-[16px] 2xl:text-[20px]">
                                   pyush.anand7@gmail.com
                              </p>
                         </div>

                         {/* Phone */}
                         <div className="flex items-center gap-4">
                              <div className="text-yellow text-2xl lg:text-3xl">
                                   <Suspense fallback={null}>
                                        <FaPhoneAlt />
                                   </Suspense>
                              </div>
                              <p className="text-[16px] 2xl:text-[20px]">
                                   +91 9643006703
                              </p>
                         </div>

                         {/* Address */}
                         <div className="flex items-start gap-4">
                              <div className="text-yellow text-2xl lg:text-3xl">
                                   <Suspense fallback={null}>
                                        <FaLocationDot />
                                   </Suspense>
                              </div>
                              <p className="text-[16px] 2xl:text-[20px] leading-relaxed">
                                   West Delhi , India , 110015

                              </p>
                         </div>
                    </div>

                    {/* RIGHT: Map */}
                    <div
                         onClick={openMap}
                         className="cursor-pointer overflow-hidden w-full lg:w-[60%] 2xl:w-[65%]"
                    >
                         <iframe
                              src={mapLink}
                              title="Google Map showing New Delhi location"
                              width="100%"
                              height="300"
                              loading="lazy"
                              referrerPolicy="no-referrer-when-downgrade"
                              className="w-full h-42.5 lg:h-55 2xl:h-87.5"
                         ></iframe>
                    </div>
               </div>

               {/* Footer */}
               <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[13px] lg:text-[16px] text-offWhite">
                    © Pyush Anand 2026.
               </h3>
          </section>
     );
}