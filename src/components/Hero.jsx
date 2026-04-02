import resumeFile from '../assets/Pyush-Anand-Resume.pdf'

const handleDownloadResume = () => {
     // Create temporary anchor element
     const link = document.createElement('a');
     link.href = resumeFile;
     link.download = "Pyush_Anand_Resume.pdf"; // Downloaded file name
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
};

const Hero = () => {
     return (
          <section id='hero' className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-30">

               {/* Background subtle pattern / gradient */}
               {/* <div className="absolute inset-0 bg-gradient-to-br from-[#3a4066] via-[#2f3556] to-[#2a2f4d] opacity-90"></div> */}

               {/* Content */}
               <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">

                    {/* Small Intro Text */}
                    <h1 className="text-lg md:text-2xl text-white mb-8 -mt-8">
                         Hello there! I'm{" "}
                         <span className="text-yellow font-medium">Pyush Anand</span>,
                    </h1>

                    {/* Main Heading */}
                    <h2 className="text-2xl lg:text-4xl 2xl:text-5xl font-medium text-white leading-10 md:leading-15 2xl:leading-18 mb-8">
                         Turning User Insights into Beautiful, Functional <br className="hidden md:block" />
                         Products.
                    </h2>

                    {/* CTA Button */}
                    <button
                         onClick={handleDownloadResume}
                         className="bg-yellow hover:bg-yellow-500 text-black font-medium px-6 py-3 rounded-md shadow-md transition-all duration-300 mt-20 text-[20px] cursor-pointer"
                    >
                         Download Resume
                    </button>

                    {/* Footer text */}
                    <h3 className="text-[16px] mt-12">
                         © Pyush Anand 2026.
                    </h3>
               </div>

               {/* Optional right side illustration blur */}
               {/* <div className="absolute right-0 bottom-0 w-[300px] md:w-[450px] h-[300px] md:h-[450px] bg-white/5 blur-2xl rounded-full"></div> */}
          </section>
     );
};

export default Hero;