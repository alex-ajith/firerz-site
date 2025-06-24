import Hero from "../assets/hero.png"

function Section() {
  return (
    <>
      <div className="w-full h-full bg-slate-100 ">
        <div className="p-4 sm:p-24  grid lg:grid-cols-2 gap-4 ">
          <div>
            <h1 className="text-black text-2xl md:text-4xl font-extrabold mb-8">
              Innovative Software, Mobile, and Website Development Solutions
            </h1>
            <p className="text-black font-medium mb-8">
              At Firerz Technologies Pvt Limited, we specialize in cutting-edge
              software development, mobile app development, and website
              development. Our digital marketing and SEO services ensure your
              business stands out online.
            </p>
            <button className="bg-orange-500 text-white rounded-full font-medium p-2 md:px-10 md:py-4 hover:opacity-90 transition-colors duration-300 mr-4 ">
              Enquiry Now
            </button>
            <button className="bg-slate-100 rounded-full font-medium p-2 border-Default border-black  md:px-10 md:py-4 hover:shadow-xl transition-shadow duration-300">
              Contact Us
            </button>
          </div>
          <div className="w-full h-auto">
            <img
              src={Hero}
              alt="hero-png"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Section