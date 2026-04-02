import profile from "../assets/1.webp";

export default function About() {
     return (
          <section
               id="about"
               className="relative w-full min-h-screen flex items-center lg:items-start flex-col justify-center text-white max-w-75 lg:max-w-3xl 2xl:max-w-7xl mx-auto pl-2 pr-2 lg:pr-0 lg:pl-14 pt-20 lg:pt-0"
          >

               <div className="flex flex-col gap-2 items-center lg:items-start justify-center lg:justify-start">
                    {/* Small Heading */}
                    <p className="md:text-[24px] -mb-2 lg:mb-2">
                         About <span className="text-yellow">Me</span>
                    </p>

                    {/* Name */}
                    <h2 className="text-3xl md:text-5xl font-medium leading-18 mb-6">
                         Pyush Anand
                    </h2>
               </div>

               <div className="relative  w-full flex flex-col lg:flex-row items-center lg:items-start justify-center gap-5 lg:gap-28 ">

                    {/* LEFT: Image */}
                    <div className="shrink-0">
                         <div className="w-40 h-40 md:w-57.5 md:h-57.5 rounded-full overflow-hidden">
                              <img
                                   src={profile}
                                   alt="Profile"
                                   loading="lazy"
                                   className="w-full h-full object-cover"
                              />
                         </div>
                    </div>

                    {/* RIGHT: Content */}
                    <div className="flex-1 text-center lg:text-left">



                         {/* Description */}
                         <p className="leading-relaxed mb-4 text-sm md:text-base max-w-4xl">
                              I'm Pyush Anand, a seasoned UI/UX and Product Designer with over 12 years of experience shaping digital products that are not just visually compelling — but deeply human-centered.
                         </p>

                         <p className="leading-relaxed mb-4 text-sm md:text-base max-w-4xl">
                              I specialize in end-to-end product design, from discovery and user research to high-fidelity prototypes and design systems — across industries including enterprise software, SaaS, and consumer applications. My work sits at the intersection of usability, accessibility (AX), and business impact, ensuring every interface I craft serves real users while driving measurable outcomes.
                         </p>
                         <p className="leading-relaxed text-sm md:text-base max-w-4xl">
                              I've partnered with cross-functional teams — PMs, engineers, and stakeholders — to transform complex problems into intuitive, scalable solutions. Whether it's redesigning a clunky enterprise workflow or building a product from zero to one, I bring both strategic thinking and pixel-level craft to every project.
                              Let's build something users will love.
                         </p>
                    </div>
               </div>

               {/* Footer */}
               <h3 className="absolute -bottom-16 2xl:bottom-12 left-1/2 -translate-x-1/2 text-[13px] lg:text-[16px] text-offwhite">
                    © Pyush Anand 2026.
               </h3>
          </section>
     );
}