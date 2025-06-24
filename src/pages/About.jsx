import Abt from "../assets/about.png";

function About() {
  return (
    <>
      <div className="p-6 sm:p-24 grid lg:grid-cols-2 gap-12 mt-0">
        <div>
          <h5 className="text-orange-500 font-medium mb-4">ABOUT US</h5>
          <h1 className="text-2xl md:text-4xl font-bold mb-12">
            #1 Digital Solution Provider with 10 Years of Experience
          </h1>
          <p className="text-zinc-600 mb-8">
            Firerz Technologies Pvt Limited, located in Bangalore, India, has
            been delivering exceptional digital solutions for over a decade. Our
            services include software development, mobile app development,
            website development, digital marketing, and SEO.
          </p>
          <div className="space-y-4 w-full mb-12 text-zinc-600">
            <div>
              <div className="flex justify-between mb-1">
                <span>Software Development</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-orange-600 h-1 rounded-full"
                  style={{ width: "95%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Mobile App Development</span>
                <span>90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-yellow-500 h-1 rounded-full"
                  style={{ width: "90%" }}
                ></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span>Website Development</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1">
                <div
                  className="bg-black h-1 rounded-full"
                  style={{ width: "85%" }}
                ></div>
              </div>
            </div>
          </div>
          <button className="bg-orange-500 text-white rounded-full font-medium p-2 md:px-10 md:py-4 mr-4 hover:opacity-90 transition-colors duration-300">
            Read More
          </button>
        </div>
        <div className="w-full h-auto">
          <img src={Abt} alt="About-png" />
        </div>
      </div>
    </>
  );
}

export default About;
