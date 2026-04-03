import React, { useEffect, useState } from "react";

const sections = ["home", "skills", "about", "resume", "contact", "projects"];

const Navigations = ({ activeSection = "hero", onNavigate }) => {
     const [active, setActive] = useState(activeSection); // Use prop directly with default

     // Update active when prop changes
     useEffect(() => {
          setActive(activeSection);
     }, [activeSection]);

     const scrollToSection = (id) => {
          if (onNavigate) {
               onNavigate(id);
          }
     };

     return (
          <div className="fixed right-4 md:right-12 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-4 rounded-full ">
               {sections.map((id) => {
                    const isActive = active === id;

                    return (
                         <button
                              key={id}
                              aria-label={`Go to section ${id}`}
                              onClick={() => scrollToSection(id)}
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
}

export default React.memo(Navigations);