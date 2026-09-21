import React, { lazy, Suspense, useEffect, useState } from "react";

const BsDribbble = lazy(() => import("react-icons/bs").then((m) => ({ default: m.BsDribbble })));
const FaLinkedinIn = lazy(() => import("react-icons/fa").then((m) => ({ default: m.FaLinkedinIn })));
const ImBehance = lazy(() => import("react-icons/im").then((m) => ({ default: m.ImBehance })));
const IoLogoInstagram = lazy(() => import("react-icons/io5").then((m) => ({ default: m.IoLogoInstagram })));

const rawApi = (import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api").trim();
const cleanApi = rawApi.replace(/\/+$/, "");
const API = cleanApi.endsWith("/api") ? cleanApi : `${cleanApi}/api`;

const Socials = () => {
  const [socialsData, setSocialsData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchSocials = async () => {
      try {
        const res = await fetch(`${API}/socials`);
        const json = await res.json();
        if (res.ok && json.data && isMounted) {
          setSocialsData(json.data);
        }
      } catch (err) {
        console.error("Failed to load dynamic socials links:", err);
      }
    };

    fetchSocials();
    return () => {
      isMounted = false;
    };
  }, []);

  const dribbble = socialsData?.dribbble || "https://dribbble.com/pyush-anand";
  const linkedin = socialsData?.linkedin || "https://www.linkedin.com/in/pyush-anand-016a4715";
  const instagram = socialsData?.instagram || "https://www.instagram.com/pyush.anand7";
  const behance = socialsData?.behance || "https://www.behance.net/piyushananfd63";

  return (
    <div className="flex flex-row lg:flex-col gap-8 items-center justify-between fixed top-7/8 lg:top-1/2 -translate-y-1/2 left-1/2 lg:left-10 -translate-x-1/2 lg:translate-x-0 bg-dark-blue rounded-full z-9999 p-4 text-2xl shadow-[0px_0px_10px_1px] lg:shadow-none shadow-white">
      {dribbble && (
        <a href={dribbble} aria-label="Visit Dribbble profile" target="_blank" rel="noopener noreferrer">
          <Suspense fallback={null}>
            <BsDribbble className="transition-all duration-300 ease-in-out cursor-pointer hover:text-[#5bd1d7]" />
          </Suspense>
        </a>
      )}

      {linkedin && (
        <a href={linkedin} aria-label="Visit LinkedIn profile" target="_blank" rel="noopener noreferrer">
          <Suspense fallback={null}>
            <FaLinkedinIn className="transition-all duration-300 ease-in-out cursor-pointer hover:text-[#5bd1d7]" />
          </Suspense>
        </a>
      )}

      {instagram && (
        <a href={instagram} aria-label="Visit Instagram profile" target="_blank" rel="noopener noreferrer">
          <Suspense fallback={null}>
            <IoLogoInstagram className="transition-all duration-300 ease-in-out cursor-pointer hover:text-[#5bd1d7]" />
          </Suspense>
        </a>
      )}

      {behance && (
        <a href={behance} aria-label="Visit Behance profile" target="_blank" rel="noopener noreferrer">
          <Suspense fallback={null}>
            <ImBehance className="transition-all duration-300 ease-in-out cursor-pointer hover:text-[#5bd1d7]" />
          </Suspense>
        </a>
      )}
    </div>
  );
};

export default React.memo(Socials);