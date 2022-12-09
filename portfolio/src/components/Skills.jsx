import React from "react";
import CSS from "../assets/CSS.png";
import HTML from "../assets/HTML.png";
import JavaScript from "../assets/JavaScript.png";
import MongoDB from "../assets/MongoDB.png";
import NodeJS from "../assets/NodeJS.png";
import Reactimg from "../assets/React.png";

const Skills = () => {
  return (
    <div className="skills bg-[#0a192f] text-gray-300 w-full h-screen">
      {/* container */}
      <div className="max-w-[925px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="">
          <p className="text-4xl font-bold inline border-b-4 border-[#FF914D]">
            Skills
          </p>
          <p className="py-4">Technologies I have worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-4">
          <div className=" hover:scale-110 duration-500 p-4">
            <img className=" w-20 mx-auto" src={HTML} alt="HTML" />
            <p>HTML</p>
          </div>
          <div className=" hover:scale-110 duration-500 p-4">
            <img className=" w-20 mx-auto" src={CSS} alt="CSS" />
            <p>CSS</p>
          </div>
          <div className=" hover:scale-110 duration-500 p-4">
            <img className=" w-20 mx-auto" src={JavaScript} alt="JS" />
            <p>JavaScript</p>
          </div>
          <div className=" hover:scale-110 duration-500 p-4">
            <img className=" w-20 mx-auto" src={NodeJS} alt="NODE" />
            <p>Node.JS</p>
          </div>
          <div className=" hover:scale-110 duration-500 p-4">
            <img className=" w-20 mx-auto" src={MongoDB} alt="MONGO" />
            <p>MongoDB</p>
          </div>
          <div className=" hover:scale-110 duration-500 p-4">
            <img className=" w-20 mx-auto" src={Reactimg} alt="REACT" />
            <p>React</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
