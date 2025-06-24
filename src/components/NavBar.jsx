import Logo from "../assets/firerz-logo.png";
import { IoIosCall } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navToWhatsApp = () => {
    window.location.href = "https://wa.me/919019028185?text=Hello%20Firerz";
  };

  const nav = useNavigate();

  return (
    <>
      <nav className="flex justify-around items-center py-2 z-50 bg-slate-100 gap-96 sticky top-0">
        <div>
          <img
            src={Logo}
            alt="firerz-logo"
            className="w-52"
            onClick={() => nav("/")}
          />
        </div>
        <div className="hidden xl:flex items-center gap-6 font-medium text-base">
          <button
            onClick={navToWhatsApp}
            className="flex bg-slate-100 rounded-full px-8 py-2 border-Default border-black hover:shadow-xl transition-shadow duration-200"
          >
            <FaWhatsapp size="1.5em" /> Send Message
          </button>
          <button className="flex bg-slate-100 rounded-full px-8 py-2 border-Default border-black hover:shadow-xl transition-shadow duration-200">
            <IoIosCall size="1.5em" /> Call now +91-9019028185
          </button>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
