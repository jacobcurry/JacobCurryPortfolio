import React from "react";
import { Link } from "react-scroll";

import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[925px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#FF914D]">Hello, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Jacob Curry
        </h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-[#8892b0]">
          I'm a Full Stack Developer
        </h2>
        <div></div>
        <div>
          <Link to="projects" smooth={true} offset={-75} duration={500}>
            <button className="text-white group border-2 px-6 py-3 my-2 inline-flex items-center hover:bg-[#ff914d] hover:border-[#FF914D]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
