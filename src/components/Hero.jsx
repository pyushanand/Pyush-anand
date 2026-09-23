import React, { useEffect, useState } from "react";
import resumeFile from "../assets/Pyush-Anand-Resume.pdf";

const rawApi = (import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api").trim();
const cleanApi = rawApi.replace(/\/+$/, "");
const API = cleanApi.endsWith("/api") ? cleanApi : `${cleanApi}/api`;

const Hero = () => {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchHero = async () => {
      try {
        const res = await fetch(`${API}/hero`);
        const json = await res.json();
        if (res.ok && json.data && isMounted) {
          setHeroData(json.data);
        }
      } catch (err) {
        console.error("Failed to load dynamic hero section:", err);
      }
    };

    fetchHero();
    return () => {
      isMounted = false;
    };
  }, []);

  const greeting = heroData?.greeting || "Hello there! I'm";
  const name = heroData?.name || "Pyush Anand";
  const heading = heroData?.heading || "Designing Scalable Products That Drive Results.";
  const resumeUrl = heroData?.resumeUrl || resumeFile;
  const resumeButtonText = heroData?.resumeButtonText || "Download Resume";
  const copyrightText = heroData?.copyrightText || "© Pyush Anand 2026.";

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.target = "_blank";
    link.download = "Pyush_Anand_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-30">
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Small Intro Text */}
        <h1 className="text-lg md:text-2xl text-white mb-8 -mt-8">
          {greeting}{" "}
          <span className="text-yellow font-medium">{name}</span>,
        </h1>

        {/* Main Heading */}
        <h2 className="text-2xl lg:text-4xl 2xl:text-5xl font-medium text-white leading-8 md:leading-15 2xl:leading-18 whitespace-pre-line">
          {heading}
        </h2>

        {/* CTA Button */}
        <button
          onClick={handleDownloadResume}
          className="bg-yellow hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-md shadow-md transition-all duration-300 mt-20 text-[20px] cursor-pointer"
        >
          {resumeButtonText}
        </button>

        {/* Footer text */}
        <h3 className="text-[16px] mt-12">{copyrightText}</h3>
      </div>
    </section>
  );
};

export default React.memo(Hero);