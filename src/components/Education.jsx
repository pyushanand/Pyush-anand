
export default function Education() {
     return (
          <section
               id="resume"
               className="relative w-full min-h-screen flex items-center lg:items-start flex-col justify-center text-white  max-w-75 lg:max-w-3xl 2xl:max-w-7xl mx-auto pl-2 pr-2 lg:pl-14"
          >

               <div className="flex flex-col gap-2 items-center lg:items-start justify-center lg:justify-start">
                    {/* Small Heading */}
                    <p className="md:text-[24px] -mb-2 lg:mb-2">
                         My <span className="text-yellow">Resume</span>
                    </p>

                    {/* Name */}
                    <h2 className="text-3xl md:text-5xl font-medium leading-18 mb-3 lg:mb-6">
                         UI/UX & Product Designer
                    </h2>
               </div>

               <div className="relative w-full">

                    {/* Description */}
                    <p className="leading-relaxed mb-4 text-sm md:text-base max-w-6xl text-center lg:text-start">
                         I design digital products that solve real problems — and I have the track record to prove it.
                    </p>

                    <p className="leading-relaxed mb-4 text-sm md:text-base max-w-6xl text-center lg:text-start">
                         Across 12+ years and multiple industries, I've led end-to-end product design that has measurably improved usability, reduced friction, and driven business growth. I specialize in UI/UX design, product strategy, interaction design, accessibility (AX/WCAG), and design systems — bringing both strategic vision and execution precision to every project.
                    </p>
                    <p className="leading-relaxed mb-4 text-sm md:text-base max-w-6xl text-center lg:text-start">
                         I've partnered with startups and enterprise teams alike to transform ambiguous briefs into intuitive, scalable digital experiences — from 0→1 product launches to full-scale redesigns serving hundreds of thousands of users.
                    </p>
                    <p className="leading-relaxed text-sm md:text-base max-w-6xl text-center lg:text-start">
                         If you're building something that users deserve to love — I'd like to help.
                    </p>
               </div>

               {/* Footer */}
               <h3 className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[13px] lg:text-[16px] text-offwhite">
                    © Pyush Anand 2026.
               </h3>
          </section>
     );
}