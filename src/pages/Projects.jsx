import Port1 from "../assets/portfolio-1.jpg"
import Port2 from "../assets/portfolio-2.jpg"
import Port3 from "../assets/portfolio-3.jpg"
import Port4 from "../assets/portfolio-4.jpg"
import Port5 from "../assets/portfolio-5.jpg"
import Port6 from "../assets/portfolio-6.jpg"
import { FaLink } from "react-icons/fa6"
import { FaEye } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

function Projects() {
  const nav = useNavigate();

  const projects = [
    {
      id: 1,
      projectName: "Web Design",
      content: "Responsive Business Website",
      projectImg: <img src={Port1} alt="portfolio-1" className="rounded-lg" />,
      navPage: "web-design",
    },
    {
      id: 2,
      projectName: "Graphic Design",
      content: "Creative Branding Solutions",
      projectImg: <img src={Port2} alt="portfolio-1" className="rounded-lg" />,
      navPage: "graphic-design",
    },
    {
      id: 3,
      projectName: "Web Design",
      content: "E-commerce Platform Development",
      projectImg: <img src={Port3} alt="portfolio-1" className="rounded-lg" />,
      navPage: "web-design",
    },
    {
      id: 4,
      projectName: "Graphic Design",
      content: "Innovative Logo Design",
      projectImg: <img src={Port4} alt="portfolio-1" className="rounded-lg" />,
      navPage: "graphic-design",
    },
    {
      id: 5,
      projectName: "Web Design",
      content: "Corporate Website Redesign",
      projectImg: <img src={Port5} alt="portfolio-1" className="rounded-lg" />,
      navPage: "web-design",
    },
    {
      id: 6,
      projectName: "Graphic Design Design",
      content: "Innovative Product Packaging",
      projectImg: <img src={Port6} alt="portfolio-1" className="rounded-lg" />,
      navPage: "graphic-design",
    },
  ];

  return (
    <>
      <div>
        <div className="flex flex-col justify-center items-center">
          <h5 className="text-orange-500 font-medium mb-5">OUR PRODUCTS</h5>
          <h1 className="text-base md:text-4xl font-bold mb-20">
            Recently Launched Products
          </h1>
        </div>
      </div>
      <div className="grid sm:grid-cols-3 gap-6 p-4 md:px-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-lg bg-slate-100 relative group"
          >
            {project.projectImg}
            <div className="absolute inset-0 bg-orange-500 rounded-lg opacity-0 group-hover:opacity-90 flex justify-around items-center transition-opacity">
              <button className="bg-orange-500 text-white px-4 py-4 rounded-full border-2 border-transparent border-white hover:bg-white hover:text-black">
                <FaEye size="1.2rem" />
              </button>
              <button
                onClick={() => nav(project.navPage)}
                className="bg-orange-500 text-white px-4 py-4 rounded-full border-2 border-transparent border-white hover:bg-white hover:text-black"
              >
                <FaLink size="1.2rem" />
              </button>
            </div>
            <p className="mx-2 my-4 text-orange-500 font-semibold">
              {project.projectName}
            </p>
            <h5 className="mx-2 mb-4 font-medium text-xl">{project.content}</h5>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects