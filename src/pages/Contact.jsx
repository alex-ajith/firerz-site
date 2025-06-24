import React from "react"

function Contact() {
  return (
    <>
      <div className="bg-orange-500 flex items-center justify-center my-36">
        <div className="text-center p-8 max-w-2xl w-full">
          <h2 className="text-white font-medium mb-5 ">CONTACT US NOW</h2>
          <h1 className="text-white text-1xl md:text-4xl font-bold mb-5">
            Get In Touch
          </h1>
          <p className="text-white mb-5">
            Reach out to us and we will get back to you promptly.
          </p>

          <form className="space-y-3">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white rounded-full focus:outline-none text-center"
            />
            <input
              type="tel"
              placeholder="Your Mobile Number"
              className="w-full px-4 py-3 bg-white rounded-full focus:outline-none text-center"
            />
            <button
              type="submit"
              className="w-full px-4 py-3 bg-white rounded-full hover:bg-slate-200 font-medium hover:shadow-xl transition-shadow duration-700"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact