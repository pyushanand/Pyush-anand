import { lazy, Suspense, useMemo, useState, useEffect, useRef, startTransition } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import bg2 from './assets/bg2New.webp';
import bannerBg from './assets/bannerBg.webp';
import bannerBgMobile from './assets/bannerBg-mobile.webp';
import Socials from "./components/Socials";
import Navigations from "./components/Navigations";

const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));

const DEFAULT_SECTIONS = ["home", "skills", "about", "resume", "projects", "contact"];
const rawApi = (import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api").trim();
const cleanApi = rawApi.replace(/\/+$/, "");
const API = cleanApi.endsWith("/api") ? cleanApi : `${cleanApi}/api`;

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [sectionsList, setSectionsList] = useState(DEFAULT_SECTIONS);
  const isNavigatingRef = useRef(false);
  const touchStartYRef = useRef(0);
  const touchStartXRef = useRef(0);

  // Fetch dynamic active sections list from navbar
  useEffect(() => {
    let isMounted = true;
    const fetchNavbar = async () => {
      try {
        const res = await fetch(`${API}/navbar`);
        const json = await res.json();
        if (res.ok && json.data?.menuItems?.length && isMounted) {
          const activeKeys = json.data.menuItems
            .filter((item) => item.isActive !== false)
            .map((item) => item.key);
          if (activeKeys.length > 0) {
            setSectionsList(activeKeys);
          }
        }
      } catch (err) {
        console.error("Failed to load active sections list:", err);
      }
    };
    fetchNavbar();
    return () => {
      isMounted = false;
    };
  }, []);

  const handleNavigate = (sectionKey) => {
    startTransition(() => {
      setActiveSection(sectionKey);
    });
  };

  // Section-to-Section Mouse Wheel Scroll (PC View)
  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) < 15) return;
      if (isNavigatingRef.current) return;

      const currentIndex = sectionsList.indexOf(activeSection);
      if (currentIndex === -1) return;

      if (e.deltaY > 0) {
        // Scroll Down -> Next Section
        if (currentIndex < sectionsList.length - 1) {
          isNavigatingRef.current = true;
          handleNavigate(sectionsList[currentIndex + 1]);
          setTimeout(() => {
            isNavigatingRef.current = false;
          }, 600);
        }
      } else if (e.deltaY < 0) {
        // Scroll Up -> Previous Section
        if (currentIndex > 0) {
          isNavigatingRef.current = true;
          handleNavigate(sectionsList[currentIndex - 1]);
          setTimeout(() => {
            isNavigatingRef.current = false;
          }, 600);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [activeSection, sectionsList]);

  // Section-to-Section Touch Swipe (Mobile View)
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (e.touches && e.touches.length > 0) {
        touchStartYRef.current = e.touches[0].clientY;
        touchStartXRef.current = e.touches[0].clientX;
      }
    };

    const handleTouchEnd = (e) => {
      if (isNavigatingRef.current) return;
      if (!e.changedTouches || e.changedTouches.length === 0) return;

      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;

      const deltaY = touchStartYRef.current - touchEndY;
      const deltaX = touchStartXRef.current - touchEndX;

      // Only trigger if vertical swipe is dominant and exceeds 40px
      if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 40) {
        const currentIndex = sectionsList.indexOf(activeSection);
        if (currentIndex === -1) return;

        if (deltaY > 0) {
          // Swipe Up -> Next Section
          if (currentIndex < sectionsList.length - 1) {
            isNavigatingRef.current = true;
            handleNavigate(sectionsList[currentIndex + 1]);
            setTimeout(() => {
              isNavigatingRef.current = false;
            }, 600);
          }
        } else {
          // Swipe Down -> Previous Section
          if (currentIndex > 0) {
            isNavigatingRef.current = true;
            handleNavigate(sectionsList[currentIndex - 1]);
            setTimeout(() => {
              isNavigatingRef.current = false;
            }, 600);
          }
        }
      }
    };

    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeSection, sectionsList]);

  // Keyboard Arrow Navigation (PC View)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (["ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        const currentIndex = sectionsList.indexOf(activeSection);
        if (currentIndex < sectionsList.length - 1) {
          handleNavigate(sectionsList[currentIndex + 1]);
        }
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        const currentIndex = sectionsList.indexOf(activeSection);
        if (currentIndex > 0) {
          handleNavigate(sectionsList[currentIndex - 1]);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeSection, sectionsList]);

  const sectionComponent = useMemo(() => {
    switch (activeSection) {
      case "skills":
        return <Skills />;
      case "about":
        return <About />;
      case "resume":
        return <Education />;
      case "contact":
        return <Contact />;
      case "projects":
        return <Projects />;
      default:
        return <Hero />;
    }
  }, [activeSection]);

  return (
    <div className="poppins bg-main text-offwhite min-h-screen w-full overflow-hidden">
      {/* Background Images */}
      <img
        src={bg2}
        alt="Background Design Cutts"
        loading="eager"
        fetchPriority="high"
        className="w-full min-h-screen fixed inset-0 top-0 left-0 z-20 object-cover pointer-events-none"
      />
      <picture>
        <source srcSet={bannerBgMobile} media="(max-width: 786px)" />
        <img
          src={bannerBg}
          alt="Background Overlay"
          fetchPriority="high"
          width="1920"
          height="1080"
          className="w-full min-h-screen fixed inset-0 top-0 z-10 object-cover pointer-events-none"
        />
      </picture>

      <div className="z-999 relative h-full min-h-screen">
        <Socials activeSection={activeSection} />
        <Navigations onNavigate={handleNavigate} activeSection={activeSection} sections={sectionsList} />
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

        <Suspense
          fallback={
            <div className="text-white flex items-center justify-center h-screen">
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <div key={activeSection} className="animate-section-fade w-full h-full min-h-screen flex items-center justify-center">
            {sectionComponent}
          </div>
        </Suspense>
      </div>
    </div>
  );
};

export default App;