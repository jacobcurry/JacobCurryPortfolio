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
            <p>Hi, I am Jacob, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima,
              atque? At, facilis esse autem corporis porro error, incidunt
              debitis eos nihil ipsa ullam soluta? Earum veritatis laborum
              aliquid cum quasi! Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Aliquid sapiente assumenda fugit. Assumenda,
              recusandae! Tenetur provident, aut unde laboriosam deserunt dolor
              iusto pariatur, cum dignissimos, architecto libero sit laborum
              quos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
