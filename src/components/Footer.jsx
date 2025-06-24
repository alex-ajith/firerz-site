import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoIosCall } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  const navigateToFacebook = () => {
    window.location.href =
      "https://www.facebook.com/people/Firerz-Technologies/61556132143911/";
  };

  const navigateToInsta = () => {
    window.location.href = "https://www.instagram.com/Firerz_Technologies/";
  };

  const navigateToLinkedIn = () => {
    window.location.href =
      "https://www.linkedin.com/company/firerz-technologies";
  };

  return (
    <>
      <footer className="bg-orange-500 text-white">
        <div className="max-w-7xl mx-auto mt-28 pt-6 px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ADDRESS</h3>
            <p className="flex gap-4 mb-2">
              <FaMapMarkerAlt size="1.8rem" />
              No. 39, 3rd Cross, Maheshwari Nagar, Mahadevapura, Bangalore,
              Bangalore North, Karnataka, India, 560048
            </p>
            <p className="flex items-center gap-4 mb-2">
              <IoIosCall size="1.2rem" />
              +91-901 902 8185
            </p>
            <p className="flex items-center gap-4 mb-4">
              <IoMdMail size="1.2rem" />
              info@firerz.com
            </p>
            <div className="flex space-x-6 mb-2 md:mb-0">
              <button className="bg-orange-500 text-white px-2 py-2 rounded-full border-Default border-transparent border-white hover:bg-white hover:text-black">
                <FaXTwitter size="1rem" />
              </button>
              <button
                onClick={navigateToFacebook}
                className="bg-orange-500 text-white px-2 py-2 rounded-full border-Default border-transparent border-white hover:bg-white hover:text-black"
              >
                <FaFacebookF size="1rem" />
              </button>
              <button
                onClick={navigateToInsta}
                className="bg-orange-500 text-white px-2 py-2 rounded-full border-Default border-transparent border-white hover:bg-white hover:text-black"
              >
                <FaInstagram size="1rem" />
              </button>
              <button
                onClick={navigateToLinkedIn}
                className="bg-orange-500 text-white px-2 py-2 rounded-full border-Default border-transparent border-white hover:bg-white hover:text-black"
              >
                <FaLinkedinIn size="1rem" />
              </button>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">DEVELOPMENT</h3>
            <ul className="space-y-2">
              <Link to="/services/software-development">
                <li>Software Development</li>
              </Link>
              <Link to="/services/mobile-app-development">
                <li>Mobile App Development</li>
              </Link>
              <Link to="/services/web-development">
                <li>Website Development</li>
              </Link>
              <Link to="/services/web-development">
                <li>Full-Stack Development</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">SEO SERVICES</h3>
            <ul className="space-y-2">
              <Link to="/services/seo-optimization">
                <li>Keyword Research</li>
              </Link>
              <Link to="/services/seo-optimization">
                <li>Website Optimization</li>
              </Link>
              <Link to="/services/seo-optimization">
                <li>Technical SEO</li>
              </Link>
              <Link to="/services/seo-optimization">
                <li>Analytics and Reporting</li>
              </Link>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">DIGITAL MARKETING</h3>
            <ul className="space-y-2">
              <Link to="/services/email-marketing">
                <li>Email Marketing</li>
              </Link>
              <Link to="/services//social-media-marketing">
                <li>Social Media Marketing</li>
              </Link>
              <Link to="/services//whatsapp-marketing">
                <li>WhatsApp Marketing</li>
              </Link>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white py-6">
          <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex space-x-6 mb-2 md:mb-0">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <Link to="" className="hover:underline">
                Cookies
              </Link>
              <Link to="" className="hover:underline">
                Help
              </Link>
              <Link to="" className="hover:underline">
                FAQs
              </Link>
            </div>

            <p className=" text-sm text-center md:text-left">
              © 2024 Firerz Technologies Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;