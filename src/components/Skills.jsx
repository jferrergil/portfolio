import React from "react";

import HTML from "../assets/html.png";
import CSS from '../assets/css.png'
import JS from '../assets/javascript.png'
import ReactIcon from '../assets/react.png'
import Mongo from '../assets/mongo.png'
import NodeIcon from '../assets/node.png'

import Angular from '../assets/angular.png'
import Github from '../assets/github.png'

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a1c37] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline boder-b-4 border-pink-600 ">
            Experiencia
          </p>
          <p className="py-4 ">// teconoigias con las que trabajo</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-100 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="Html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-100 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="Html icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-100 duration-500">
            <img className="w-20 mx-auto" src={JS} alt="Html icon" />
            <p className="my-4">javaScript</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-100 duration-500">
            <img className="w-20 mx-auto" src={ReactIcon} alt="Html icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-100 duration-500">
            <img className="w-20 mx-auto" src={Mongo} alt="Html icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-100 duration-500">
            <img className="w-20 mx-auto" src={NodeIcon} alt="Html icon" />
            <p className="my-4">NodeJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-100 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Html icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-100 duration-500">
            <img className="w-20 mx-auto" src={Angular} alt="Html icon" />
            <p className="my-4">Angular</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
