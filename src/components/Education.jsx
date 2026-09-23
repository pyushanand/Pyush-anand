import React, { useEffect, useState } from "react";

const defaultParagraphs = [
  "I design digital products that solve real problems — and I have the track record to prove it.",
  "Across 12+ years and multiple industries, I've led end-to-end product design that has measurably improved usability, reduced friction, and driven business growth. I specialize in UI/UX design, product strategy, interaction design, accessibility (AX/WCAG), and design systems — bringing both strategic vision and execution precision to every project.",
  "I've partnered with startups and enterprise teams alike to transform ambiguous briefs into intuitive, scalable digital experiences — from 0→1 product launches to full-scale redesigns serving hundreds of thousands of users.",
  "If you're building something that users deserve to love — I'd like to help.",
];

const rawApi = (import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api").trim();
const cleanApi = rawApi.replace(/\/+$/, "");
const API = cleanApi.endsWith("/api") ? cleanApi : `${cleanApi}/api`;

export default function Education() {
  const [resumeData, setResumeData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchResume = async () => {
      try {
        const res = await fetch(`${API}/resume`);
        const json = await res.json();
        if (res.ok && json.data && isMounted) {
          setResumeData(json.data);
        }
      } catch (err) {
        console.error("Failed to load dynamic resume section:", err);
      }
    };

    fetchResume();
    return () => {
      isMounted = false;
    };
  }, []);

  const headerSubtitle = resumeData?.headerSubtitle || "My";
  const headerHighlight = resumeData?.headerHighlight || "Resume";
  const jobTitle = resumeData?.jobTitle || "UI/UX & Product Designer";
  const paragraphs = resumeData?.paragraphs?.length ? resumeData.paragraphs : defaultParagraphs;
  const copyrightText = resumeData?.copyrightText || "© Pyush Anand 2026.";

  return (
    <section
      id="resume"
      className="relative w-full min-h-screen flex items-center lg:items-start flex-col justify-center text-white max-w-75 lg:max-w-3xl 2xl:max-w-7xl mx-auto pl-2 pr-2 lg:pl-14 pt-19 md:pt-0"
    >
      <div className="flex flex-col gap-2 items-start lg:items-start justify-center lg:justify-start">
        {/* Small Heading */}
        <p className="text-[18px] md:text-[24px] mb-0 lg:mb-2">
          {headerSubtitle} <span className="text-yellow">{headerHighlight}</span>
        </p>

        {/* Name */}
        <h2 className="text-2xl md:text-5xl font-medium leading-8 md:leading-18 mb-3 lg:mb-6">{jobTitle}</h2>
      </div>

      <div className="relative w-full">
        {paragraphs.map((pText, i) => (
          <p
            key={i}
            className="leading-relaxed mb-4 text-xs md:text-base max-w-6xl text-start lg:text-start"
          >
            {pText}
          </p>
        ))}
      </div>

      {/* Footer */}
      <h3 className="hidden md:block absolute bottom-12 left-1/2 -translate-x-1/2 text-[13px] lg:text-[16px] text-offwhite">
        {copyrightText}
      </h3>
    </section>
  );
}