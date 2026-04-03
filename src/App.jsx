import { lazy, Suspense, useMemo, useState } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import bg2 from './assets/bg2New.webp';
import bannerBg from './assets/bannerBg.webp';
import bannerBgMobile from './assets/bannerBg-mobile.webp';
import Socials from "./components/Socials";
import Navigations from "./components/Navigations";
import { startTransition } from "react";
const About = lazy(() => import("./components/About"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Skills = lazy(() => import("./components/Skills"));
const Education = lazy(() => import("./components/Education"));

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  // const BGImage = window.innerWidth < 786 ? bannerBgMobile : bannerBg;

  const handleNavigate = (section) => {
    startTransition(() => {
      setActiveSection(section);
    });
  };

  const section = useMemo(() => {
    switch (activeSection) {
      case "skills": return <Skills />;
      case "about": return <About />;
      case "resume": return <Education />;
      case "contact": return <Contact />;
      case "projects": return <Projects />;
      default: return <Hero />;
    }
  }, [activeSection]);

  return (
    <div className="poppins bg-main text-offwhite ">
      {/* Background Images */}
      <img
        src={bg2}
        alt="Background Design Cutts"
        loading="eager"
        fetchPriority="high"
        className="w-full min-h-screen fixed inset-0 top-0 left-0 z-20 object-cover"
      />
      <picture>
        <source srcSet={bannerBgMobile} media="(max-width: 786px)" />
        <img
          src={bannerBg}
          alt="Background Overlay"
          fetchPriority="high"
          width="1920"
          height="1080"
          className="w-full min-h-screen fixed inset-0 top-0 z-10 object-cover"
        />
      </picture>

      <div className="z-999 relative">
        <Socials />
        <Navigations onNavigate={handleNavigate} activeSection={activeSection} />
        <Navbar activeSection={activeSection} onNavigate={handleNavigate} /> {/* Pass props */}
        <Suspense fallback={<div className="text-white flex items-center justify-center h-screen"> <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" /></div>}>
          {section}
        </Suspense>
      </div>
    </div>
  );
};

export default App;