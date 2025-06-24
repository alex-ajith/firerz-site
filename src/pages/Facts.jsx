import { FaCertificate } from "react-icons/fa6"
import { FaUsersCog } from "react-icons/fa"
import { FaUsers } from "react-icons/fa"
import { FaCheck } from "react-icons/fa"

function Facts() {
  return (
    <div className="bg-orange-500 flex flex-col md:flex-row justify-evenly items-center gap-6 py-5">
      <div className="text-center">
        <FaCertificate className="text-5xl text-yellow-400 mb-3 mx-auto" />
        <h1 className="text-white text-2xl md:text-5xl font-semibold mb-5">
          10
        </h1>
        <p className="text-white font-medium">Years Experience</p>
      </div>
      <div className="text-center">
        <FaUsersCog className="text-6xl text-yellow-400 mb-3 mx-auto" />
        <h1 className="text-white text-2xl md:text-5xl font-semibold  mb-5">
          35
        </h1>
        <p className="text-white font-medium">Team Members</p>
      </div>
      <div className="text-center">
        <FaUsers className="text-6xl text-yellow-400 mb-3 mx-auto" />
        <h1 className="text-white text-2xl md:text-5xl font-semibold  mb-5">
          50
        </h1>
        <p className="text-white font-medium">Satisfied Clients</p>
      </div>
      <div className="text-center">
        <FaCheck className="text-5xl text-yellow-400 mb-3 mx-auto" />
        <h1 className="text-white text-2xl md:text-5xl font-semibold  mb-5">
          50
        </h1>
        <p className="text-white font-medium">Completed Projets</p>
      </div>
    </div>
  );
}

export default Facts