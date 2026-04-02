
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
                         Education
                    </h2>
               </div>

               <div className="relative w-full">

                    {/* Description */}
                    <p className="leading-relaxed mb-4 text-sm md:text-base max-w-6xl text-center lg:text-start">
                         Hello, I’m Pyush Anand, a seasoned UX practitioner with over 8 years
                         of diverse experience in the field. My journey in UX has been a
                         fascinating exploration of user-centric design across various
                         industries. I specialize in UI/UX and product design, where I’ve
                         honed my skills in creating seamless and visually captivating
                         digital experiences.
                    </p>

                    <p className="leading-relaxed text-sm md:text-base max-w-6xl text-center lg:text-start">
                         My passion lies in understanding users’ needs, which has driven me to
                         excel in crafting interfaces that not only look impressive but also
                         prioritize usability. With a track record of transforming ideas into
                         successful, user-focused products, I’m dedicated to making technology
                         more accessible and enjoyable for all. Let’s collaborate to bring
                         your next project to life!
                    </p>
               </div>

               {/* Footer */}
               <h3 className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[13px] lg:text-[16px] text-offwhite">
                    © Pyush Anand 2026.
               </h3>
          </section>
     );
}