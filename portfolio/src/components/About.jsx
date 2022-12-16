import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[925px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#FF914D] ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[925px] w-full sm:grid grid-cols-2 gap-8 px-4">
          <div className="text-4xl font-bold sm:text-right pb-4">
            <p>
              Hi, I am Jacob. I'm a huge sports fan and enjoy hanging out with
              friends and family.
            </p>
          </div>
          <div>
            <p>
              I'm a full stack software developer with a background in
              construction and customer service. I started my proffesional
              career in the construction field as an apprentice for a general
              contractor. I learned to be efficient in my work, that it takes a
              team to get things done, customer service is key to getting more
              clients, and that I am not made for physical labor. Luckily all
              those still apply to a software developer. I take those skills as
              well as my love for solving problems and build efficient,
              functional websites.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
