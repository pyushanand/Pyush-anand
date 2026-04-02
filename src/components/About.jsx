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
                              Hello, I’m Pyush Anand, a seasoned UX practitioner with over 8 years
                              of diverse experience in the field. My journey in UX has been a
                              fascinating exploration of user-centric design across various
                              industries. I specialize in UI/UX and product design, where I’ve
                              honed my skills in creating seamless and visually captivating
                              digital experiences.
                         </p>

                         <p className="leading-relaxed text-sm md:text-base max-w-4xl">
                              My passion lies in understanding users’ needs, which has driven me to
                              excel in crafting interfaces that not only look impressive but also
                              prioritize usability. With a track record of transforming ideas into
                              successful, user-focused products, I’m dedicated to making technology
                              more accessible and enjoyable for all. Let’s collaborate to bring
                              your next project to life!
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