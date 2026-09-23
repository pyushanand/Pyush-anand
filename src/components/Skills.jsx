import React, { lazy, Suspense, useEffect, useRef, useState } from "react";

const FaPenNib = lazy(() => import("react-icons/fa6").then((m) => ({ default: m.FaPenNib })));
const FaXTwitter = lazy(() => import("react-icons/fa6").then((m) => ({ default: m.FaXTwitter })));
const SiFigma = lazy(() => import("react-icons/si").then((m) => ({ default: m.SiFigma })));
const TbBrandAdobeIllustrator = lazy(() =>
  import("react-icons/tb").then((m) => ({ default: m.TbBrandAdobeIllustrator }))
);
const FaPenRuler = lazy(() => import("react-icons/fa6").then((m) => ({ default: m.FaPenRuler })));
const PiNewspaperClippingFill = lazy(() =>
  import("react-icons/pi").then((m) => ({ default: m.PiNewspaperClippingFill }))
);
const FaArrowLeft = lazy(() => import("react-icons/fa").then((m) => ({ default: m.FaArrowLeft })));
const FaArrowRight = lazy(() => import("react-icons/fa").then((m) => ({ default: m.FaArrowRight })));

const defaultSkills = [
  {
    title: "UI Design",
    icon: "FaPenNib",
    highlight: true,
    desc: "Crafting intuitive, research-driven interfaces with deep expertise in information architecture — transforming complex user needs into seamless, visually compelling experiences across Xd, Figma, Illustrator, and Photoshop.",
    tools: ["Xd", "Figma", "Ai", "Ps"],
  },
  {
    title: "UX Design",
    icon: "PiNewspaperClippingFill",
    highlight: false,
    desc: "Designing meaningful, user-centered experiences through deep empathy, wireframing, and prototyping — bridging the gap between user behavior and business goals with precision across Xd, Figma, and beyond.",
    tools: ["Xd", "Figma", "X"],
  },
  {
    title: "Product Design",
    icon: "FaPenRuler",
    highlight: false,
    desc: "Shaping end-to-end product experiences that balance business strategy with human needs — from early concept and research to polished, market-ready designs across Xd, Figma, and beyond.",
    tools: ["Xd", "Figma", "X"],
  },
];

const getIconComponent = (iconName) => {
  switch (iconName) {
    case "PiNewspaperClippingFill":
      return <PiNewspaperClippingFill />;
    case "FaPenRuler":
      return <FaPenRuler />;
    case "FaPenNib":
    default:
      return <FaPenNib />;
  }
};

const getToolIcon = (tool) => {
  switch (tool) {
    case "Ai":
      return <TbBrandAdobeIllustrator className="text-xl md:text-2xl" />;
    case "Xd":
      return "Xd";
    case "Ps":
      return "Ps";
    case "Figma":
      return <SiFigma className="text-xl md:text-2xl" />;
    case "X":
      return <FaXTwitter className="text-xl md:text-2xl" />;
    default:
      return tool;
  }
};

const rawApi = (import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api").trim();
const cleanApi = rawApi.replace(/\/+$/, "");
const API = cleanApi.endsWith("/api") ? cleanApi : `${cleanApi}/api`;

const renderSkillCard = (item, i) => (
  <div key={i} className="relative rounded-md transition-all duration-300">
    {/* Icon */}
    <div className="text-yellow text-xl md:text-3xl mb-4">
      <Suspense fallback={null}>{getIconComponent(item.icon)}</Suspense>
    </div>

    {/* Title */}
    <h3 className="text-[26px] md:text-[36px] font-medium mb-4 inline-block">
      {item.title}
    </h3>

    {/* Description */}
    <p className="text-xs md:text-base leading-5.25 mb-6">{item.desc}</p>

    {/* Divider (only if highlight) */}
    {item.highlight && <div className="mb-4"></div>}

    {/* Tools */}
    <div className="flex gap-3 flex-wrap">
      {(item.tools || []).map((tool, idx) => (
        <div
          key={idx}
          className="flex items-center gap-6 transition-all duration-300 text-xl md:text-2xl"
          title={tool}
        >
          <Suspense fallback={null}>{getToolIcon(tool)}</Suspense>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const [skillsData, setSkillsData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef(0);
  const touchStartYRef = useRef(0);

  useEffect(() => {
    let isMounted = true;
    const fetchSkills = async () => {
      try {
        const res = await fetch(`${API}/skills`);
        const json = await res.json();
        if (res.ok && json.data && isMounted) {
          setSkillsData(json.data);
        }
      } catch (err) {
        console.error("Failed to load dynamic skills:", err);
      }
    };

    fetchSkills();
    return () => {
      isMounted = false;
    };
  }, []);

  const headerSubtitle = skillsData?.headerSubtitle || "Skills &";
  const headerHighlight = skillsData?.headerHighlight || "Specialization";
  const experienceHeading = skillsData?.experienceHeading || "13+ Years of Experience";
  const skillsList = skillsData?.skillsList?.length ? skillsData.skillsList : defaultSkills;
  const copyrightText = skillsData?.copyrightText || "© Pyush Anand 2026.";

  const totalCards = skillsList.length;
  const safeIndex = totalCards > 0 ? ((currentIndex % totalCards) + totalCards) % totalCards : 0;

  const handlePrev = () => {
    if (totalCards <= 1) return;
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : totalCards - 1));
  };

  const handleNext = () => {
    if (totalCards <= 1) return;
    setCurrentIndex((prev) => (prev < totalCards - 1 ? prev + 1 : 0));
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartXRef.current = e.touches[0].clientX;
      touchStartYRef.current = e.touches[0].clientY;
    }
  };

  const handleTouchEnd = (e) => {
    if (!e.changedTouches || e.changedTouches.length === 0) return;
    const deltaX = touchStartXRef.current - e.changedTouches[0].clientX;
    const deltaY = touchStartYRef.current - e.changedTouches[0].clientY;

    // Only shift card horizontally if horizontal swipe exceeds vertical swipe and threshold
    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <section id="skills" className="relative w-full pt-16 md:pt-20 overflow-hidden min-h-screen flex items-center justify-center">
      <div className="relative z-10 w-full max-w-3xl lg:max-w-5xl 2xl:max-w-7xl mx-auto px-6">
        {/* Header */}
        <p className="text-gray-300 text-[18px] md:text-[24px] mb-2">
          {headerSubtitle} <span className="text-yellow">{headerHighlight}</span>
        </p>

        <h2 className="text-white text-2xl lg:text-4xl 2xl:text-5xl font-medium mb-8 md:mb-12 lg:mb-16">
          {experienceHeading}
        </h2>

        {/* Desktop View (lg and above): 3-column grid without carousel */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 text-white">
          {skillsList.map((item, i) => renderSkillCard(item, i))}
        </div>

        {/* Mobile & Tab View (below lg): Carousel with 1 card per slide */}
        <div className="block lg:hidden w-full max-w-md md:max-w-xl mx-auto">
          <div
            className="overflow-hidden w-full"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out text-white"
              style={{ transform: `translateX(-${safeIndex * 100}%)` }}
            >
              {skillsList.map((item, i) => (
                <div key={i} className="w-full shrink-0 px-1">
                  {renderSkillCard(item, i)}
                </div>
              ))}
            </div>
          </div>

          {/* Controls: Left & Right buttons below the card with indicator dots */}
          <div className="flex items-center justify-center gap-5 mt-6 md:mt-8">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous skill"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b4163] transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-offwhite hover:text-black active:scale-95"
            >
              <Suspense fallback={null}>
                <FaArrowLeft />
              </Suspense>
            </button>

            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {skillsList.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to skill ${idx + 1}`}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                    idx === safeIndex ? "w-6 bg-yellow" : "w-2 bg-gray-500 hover:bg-white"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next skill"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-[#3b4163] transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-offwhite hover:text-black active:scale-95"
            >
              <Suspense fallback={null}>
                <FaArrowRight />
              </Suspense>
            </button>
          </div>
        </div>

        {/* Footer */}
        <h3 className="text-center text-offwhite text-[14px] md:text-[16px] mt-8 lg:mt-16">{copyrightText}</h3>
      </div>
    </section>
  );
};

export default React.memo(Skills);