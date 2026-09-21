import React, { useEffect, useState } from "react";

const defaultSections = ["home", "skills", "about", "resume", "contact", "projects"];

const Navigations = ({ activeSection = "home", onNavigate, sections = defaultSections }) => {
     const [active, setActive] = useState(activeSection);

     useEffect(() => {
          setActive(activeSection);
     }, [activeSection]);

     const scrollToSection = (id) => {
          if (onNavigate) {
               onNavigate(id);
          }
     };

     const displaySections = sections && sections.length > 0 ? sections : defaultSections;

     return (
          <div className="fixed right-4 md:right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 rounded-full ">
               {displaySections.map((id) => {
                    const sectionId = typeof id === "object" ? id.key : id;
                    const isActive = active === sectionId;

                    return (
                         <button
                              key={sectionId}
                              aria-label={`Go to section ${sectionId}`}
                              onClick={() => scrollToSection(sectionId)}
                              className={`transition-all duration-300 rounded-full cursor-pointer
              ${isActive
                                        ? "h-7 2xl:h-10 w-2 2xl:w-3 bg-white"
                                        : "h-2 2xl:h-3 w-2 2xl:w-3 bg-gray-400 hover:bg-white"
                                   }
            `}
                         />
                    );
               })}
          </div>
     );
};

export default React.memo(Navigations);