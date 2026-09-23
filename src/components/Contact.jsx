import { lazy, Suspense, useEffect, useState } from "react";

const FaLocationDot = lazy(() => import("react-icons/fa6").then((m) => ({ default: m.FaLocationDot })));
const FaPhoneAlt = lazy(() => import("react-icons/fa").then((m) => ({ default: m.FaPhoneAlt })));
const MdEmail = lazy(() => import("react-icons/md").then((m) => ({ default: m.MdEmail })));

const rawApi = (import.meta.env.VITE_BACKEND_URL || "http://localhost:5000/api").trim();
const cleanApi = rawApi.replace(/\/+$/, "");
const API = cleanApi.endsWith("/api") ? cleanApi : `${cleanApi}/api`;

export default function Contact() {
  const [contactData, setContactData] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchContact = async () => {
      try {
        const res = await fetch(`${API}/contact`);
        const json = await res.json();
        if (res.ok && json.data && isMounted) {
          setContactData(json.data);
        }
      } catch (err) {
        console.error("Failed to load dynamic contact section:", err);
      }
    };

    fetchContact();
    return () => {
      isMounted = false;
    };
  }, []);

  const headerSubtitle = contactData?.headerSubtitle || "Get in";
  const headerHighlight = contactData?.headerHighlight || "Touch";
  const mainHeading = contactData?.mainHeading || "Let's start a project together!";
  const email = contactData?.email || "pyush.anand7@gmail.com";
  const phone = contactData?.phone || "+91 9643006703";
  const address = contactData?.address || "West Delhi , India , 110015";
  const mapEmbedUrl =
    contactData?.mapEmbedUrl ||
    "https://www.google.com/maps?q=New+Delhi,+India&z=12&output=embed";
  const mapRedirectUrl =
    contactData?.mapRedirectUrl || "https://www.google.com/maps?q=New+Delhi,+India";
  const copyrightText = contactData?.copyrightText || "© Pyush Anand 2026.";

  const openMap = () => {
    window.open(mapRedirectUrl, "_blank");
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex items-center lg:items-start flex-col justify-center text-white max-w-75 lg:max-w-3xl 2xl:max-w-7xl mx-auto pl-2 pr-2 -pt-20 lg:pt-0 lg:pl-14"
    >
      <div className="flex flex-col gap-2 items-center lg:items-start justify-center lg:justify-start">
        {/* Small Heading */}
        <p className="md:text-[24px] mb-2">
          {headerSubtitle} <span className="text-yellow">{headerHighlight}</span>
        </p>

        {/* Name */}
        <h2 className="text-2xl md:text-5xl font-medium leading-8 lg:leading-18 mb-6 text-center lg:text-start">
          {mainHeading}
        </h2>
      </div>

      {/* Content */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-8">
        {/* LEFT: Contact Info */}
        <div className="space-y-6 w-full lg:w-[40%] 2xl:w-[35%]">
          {/* Email */}
          <div className="flex items-center gap-4">
            <div className="text-yellow text-xl lg:text-3xl">
              <Suspense fallback={null}>
                <MdEmail />
              </Suspense>
            </div>
            <a
              href={`mailto:${email}`}
              className="text-[16px] 2xl:text-[20px] hover:text-[#5bd1d7] transition-colors"
            >
              {email}
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-4">
            <div className="text-yellow text-xl lg:text-3xl">
              <Suspense fallback={null}>
                <FaPhoneAlt />
              </Suspense>
            </div>
            <a
              href={`tel:${phone.replace(/\s+/g, "")}`}
              className="text-[16px] 2xl:text-[20px] hover:text-[#5bd1d7] transition-colors"
            >
              {phone}
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4">
            <div className="text-yellow text-xl lg:text-3xl">
              <Suspense fallback={null}>
                <FaLocationDot />
              </Suspense>
            </div>
            <p className="text-[16px] 2xl:text-[20px] leading-relaxed">{address}</p>
          </div>
        </div>

        {/* RIGHT: Map */}
        <div
          onClick={openMap}
          className="cursor-pointer overflow-hidden w-full lg:w-[60%] 2xl:w-[65%]"
        >
          <iframe
            src={mapEmbedUrl}
            title="Google Map location"
            width="100%"
            height="300"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-42.5 lg:h-55 2xl:h-87.5"
          ></iframe>
        </div>
      </div>

      {/* Footer */}
      <h3 className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[13px] lg:text-[16px] text-offwhite">
        {copyrightText}
      </h3>
    </section>
  );
}