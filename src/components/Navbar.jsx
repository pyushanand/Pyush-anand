import React, { lazy, Suspense, useEffect, useState } from "react";
import defaultLogo from "../assets/logo.webp";

const GrMenu = lazy(() => import("react-icons/gr").then(m => ({ default: m.GrMenu })));
const RxCross2 = lazy(() => import("react-icons/rx").then(m => ({ default: m.RxCross2 })));

const defaultMenuItems = [
     { key: "home", value: "Home" },
     { key: "skills", value: "Skills & Specialization" },
     { key: "about", value: "About Me" },
     { key: "resume", value: "My Resume" },
     { key: "contact", value: "Get in Touch" },
     { key: "projects", value: "My Projects" },
];

const rawApi = (import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api").trim();
const cleanApi = rawApi.replace(/\/+$/, "");
const API = cleanApi.endsWith("/api") ? cleanApi : `${cleanApi}/api`;

const Navbar = ({ activeSection, onNavigate, navbarData: propNavbarData }) => {
     const [open, setOpen] = useState(false);
     const [navbarData, setNavbarData] = useState(propNavbarData || null);

     useEffect(() => {
          if (propNavbarData) {
               setNavbarData(propNavbarData);
               return;
          }

          let isMounted = true;
          const fetchNavbar = async () => {
               try {
                    const res = await fetch(`${API}/navbar`);
                    const json = await res.json();
                    if (res.ok && json.data && isMounted) {
                         setNavbarData(json.data);
                    }
               } catch (err) {
                    console.error("Failed to load dynamic navbar:", err);
               }
          };

          fetchNavbar();
          return () => { isMounted = false; };
     }, [propNavbarData]);

     const logoSrc = navbarData?.logoUrl || defaultLogo;
     const logoAlt = navbarData?.logoAlt || "Pyush Anand Logo";
     const phoneText = navbarData?.phone || "+91-9643006703";
     const phoneCallUrl = navbarData?.phoneCallUrl || `tel:${phoneText.replace(/\s+/g, "")}`;
     const emailText = navbarData?.email || "pyush.anand7@gmail.com";
     const emailMailtoUrl = navbarData?.emailMailtoUrl || `mailto:${emailText.trim()}`;

     const activeMenuItems = (navbarData?.menuItems && navbarData.menuItems.length > 0)
          ? navbarData.menuItems.filter(item => item.isActive !== false)
          : defaultMenuItems;

     const handleNavigation = (key) => {
          if (onNavigate) {
               onNavigate(key);
          }
          setOpen(false);
     };

     const handlePhoneClick = () => {
          window.location.href = phoneCallUrl;
     };

     const handleEmailClick = () => {
          window.location.href = emailMailtoUrl;
     };

     const handleLogoClick = () => {
          if (onNavigate) {
               onNavigate("home");
          }
          setOpen(false);
     };

     return (
          <>
               {/* NAVBAR */}
               <div className="fixed top-0 flex items-center justify-between w-full px-6 lg:px-10 py-4 shadow-xl z-50 bg-dark-blue/70 backdrop-blur-2xl">
                    <div className="w-[40%] flex items-center justify-between text-[15px] 2xl:text-[20px]">
                         {/* Logo - Click to go home */}
                         <img
                              src={logoSrc}
                              alt={logoAlt}
                              onClick={handleLogoClick}
                              className="w-6 2xl:w-10 h-9 2xl:h-14 cursor-pointer hover:opacity-80 transition-opacity duration-300 object-contain"
                              title="Go to Home"
                         />
                         {/* Phone Number - Click to Call */}
                         <div
                              onClick={handlePhoneClick}
                              className="hidden md:block cursor-pointer hover:text-[#5bd1d7] transition-colors duration-300"
                              title="Click to call"
                         >
                              {phoneText}
                         </div>

                         {/* Email - Click to Email */}
                         <div
                              onClick={handleEmailClick}
                              className="hidden md:block cursor-pointer hover:text-[#5bd1d7] transition-colors duration-300"
                              title="Click to email"
                         >
                              {emailText}
                         </div>
                    </div>

                    <div className="w-[60%] flex justify-end text-2xl 2xl:text-4xl cursor-pointer hover:text-[#5bd1d7] transition-all duration-300 ease-in-out">
                         <Suspense fallback={null}>
                              <GrMenu onClick={() => setOpen(true)} />
                         </Suspense>
                    </div>
               </div>

               {/* OVERLAY */}
               <div
                    onClick={() => setOpen(false)}
                    className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${open ? "opacity-100 visible" : "opacity-0 invisible"
                         }`}
               />

               {/* SIDEBAR */}
               <div
                    className={`fixed top-0 right-0 h-screen w-80 lg:w-125 bg-dark-blue transform transition-transform duration-500 ease-in-out z-9999
        ${open ? "translate-x-0" : "translate-x-230"}`}
               >
                    {/* Close Button */}
                    <div className="flex justify-end p-6 text-3xl cursor-pointer ">
                         <Suspense fallback={null}>
                              <RxCross2 onClick={() => setOpen(false)} className="hover:text-[#5bd1d7] transition-all duration-300 ease-in-out" />
                         </Suspense>
                    </div>

                    {/* Menu Items with active state */}
                    <div className="flex flex-col gap-8 px-10 mt-10 text-lg lg:text-2xl">
                         {activeMenuItems.map((item, i) => (
                              <button
                                   key={item.key || i}
                                   onClick={() => handleNavigation(item.key)}
                                   className={`cursor-pointer transition text-left ${activeSection === item.key
                                        ? "text-[#5bd1d7]"
                                        : "hover:text-[#5bd1d7]"
                                        }`}
                              >
                                   {item.value}
                              </button>
                         ))}
                    </div>
               </div>
          </>
     );
};

export default React.memo(Navbar);