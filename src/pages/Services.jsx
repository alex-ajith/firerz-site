import { FaCode } from "react-icons/fa"
import { FaMobileAlt } from "react-icons/fa"
import { TbWorldCode } from "react-icons/tb"
import { FaSearch } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaMailBulk } from "react-icons/fa"
import { FaArrowRight } from "react-icons/fa"
import { PiHeadCircuitFill } from "react-icons/pi"
import { FaTv } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa6"
import { Outlet, useNavigate } from "react-router-dom"

function Services() {
  const nav = useNavigate();

  const services = [
    {
      id: 1,
      icon: (
        <FaCode
          size="3rem"
          className="mb-4 text-orange-500 group-hover:text-white"
        />
      ),
      serviceName: "Software Development",
      content:
        "We develop robust software solutions tailored to your business needs, ensuring efficiency and scalability.",
      navPage: "/services/software-development",
    },
    {
      id: 2,
      icon: (
        <FaMobileAlt
          size="3rem"
          className="mb-4 text-orange-500 group-hover:text-white"
        />
      ),
      serviceName: "Mobile App Development",
      content:
        "Our team designs and develops intuitive mobile apps for both Android and iOS platforms.",
      navPage: "/services/mobile-app-development",
    },
    {
      id: 3,
      icon: (
        <TbWorldCode
          size="3rem"
          className="mb-4 text-orange-500 group-hover:text-white"
        />
      ),
      serviceName: "Web Development",
      content:
        "We create responsive and SEO-friendly websites to help your business thrive online.",
      navPage: "/services/web-development",
    },
    {
      id: 4,
      icon: (
        <FaSearch
          size="3rem"
          className="mb-4 text-orange-500 group-hover:text-white"
        />
      ),
      serviceName: "SEO",
      content:
        "Improve your website's visibility on search engines with our expert SEO services.",
      navPage: "/services/seo-optimization",
    },
    {
      id: 5,
      icon: (
        <PiHeadCircuitFill
          size="3rem"
          className="mb-4 text-orange-500 group-hover:text-white"
        />
      ),
      serviceName: "AI/ML",
      content:
        "Accelerate growth with AI/ML solutions that automate, optimize, and elevate your business.",
      navPage: "/services/ai-ml",
    },
    {
      id: 6,
      icon: (
        <FaTv
          size="3rem"
          className="mb-4 text-orange-500 group-hover:text-white"
        />
      ),
      serviceName: "Digital Marketing",
      content:
        "Connect with your ideal audience through data-driven digital marketing strategies.",
      navPage: "/services/digital-marketing",
    },
    {
      id: 7,
      icon: (
        <FaFacebookF
          size="3rem"
          className="mb-4 text-orange-500 group-hover:text-white"
        />
      ),
      serviceName: "Social Media Marketing",
      content:
        "Boost your brand's presence on social media platforms with our tailored marketing strategies.",
      navPage: "/services/social-media-marketing",
    },
    {
      id: 8,
      icon: (
        <FaMailBulk
          size="3rem"
          className="mb-4 text-orange-500 group-hover:text-white"
        />
      ),
      serviceName: "Email Marketing",
      content:
        "Engage your customers and drive conversions with our effective email marketing campaigns.",
      navPage: "/services/email-marketing",
    },
    {
      id: 9,
      icon: (
        <FaWhatsapp
          size="3rem"
          className="mb-4 text-orange-500 group-hover:text-white"
        />
      ),
      serviceName: "WhatsApp Marketing",
      content:
        "Boost your business with WhatsApp marketing – connect, engage, and grow instantly!.",
      navPage: "/services/whatsapp-marketing",
    },
  ];

  return (
    <div className="mx-4 md:mx-20 mt-20">
      <div className="flex flex-col justify-center items-center">
        <h5 className="text-orange-500 font-medium mb-5">OUR SERVICES</h5>
        <h1 className="text-1xl md:text-4xl font-bold mb-12">
          What Solutions We Provide
        </h1>
      </div>

      <div className=" grid sm:grid-cols-3 box-border gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-xl bg-slate-100 flex flex-col items-center p-6 lg:p-11 shadow-xl hover:scale-105 hover:bg-orange-500 transform transition-all duration-1000 group"
          >
            {service.icon}
            <div>
              <h5 className="font-medium text-xl text-center mb-3 group-hover:text-white">
                {service.serviceName}
              </h5>
              <p className="text-zinc-600 text-center mb-5 group-hover:text-white">
                {service.content}
              </p>
            </div>
            <button
              onClick={() => nav(service.navPage)}
              className="invisible group-hover:visible absolute pr-4 pl-4 pt-4 pb-4 mt-48 mx-auto rounded-t-3xl bg-white text-orange-500 hover:text-white hover:bg-yellow-400 duration-1000 ease-in-out"
            >
              <FaArrowRight />
            </button>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Services