import React from "react";

const Projects = () => {
  return (
    <div
      name="projects"
      className=" w-full md:h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-[900px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#FF914D]">
            Projects
          </p>
          <p className="py-6">Check out some of my projects</p>
        </div>

        {/* grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div quiz-img">
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider ">
                Full-stack quiz app, built with React, Node.js, Express, and
                MongoDB.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://ex-quiz-ite.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jacobcurry/QuizAppFront-End"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div lister-div">
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider">
                Lister app built with Node.js, Express, and MongoDB.
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://secure-mesa-54869.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/jacobcurry/Lister"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div comingsoon-div">
            {/* hover */}
            <div className="opacity-0 group-hover:opacity-100 text-center">
              <span className="text-xl font-bold text-white tracking-wider">
                Coming Soon!
              </span>
              <div className="pt-8 text-center">
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
