import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import logo1 from "../assets/JF-removebg-preview.png";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll/modules";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed w-full">
      <div className=" w-full h-[80px] flex justify-between  items-center px-4 bg-[#0a1c37] text-gray-300">
        <div>
          <Link to="home" smooth={true} duration={500}>
            <img
              src={logo1}
              alt="logo"
              style={{ width: "150px", height: "150px" }}
              className="h-12 cursor-pointer"
            />
          </Link>
        </div>
        {/*menu*/}

        <ul className="hidden md:flex ">
          <li>
            <Link to="acompañamiento" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="quienesSomos" smooth={true} duration={500}>
              Quien soy
            </Link>
          </li>
          <li>
            {" "}
            <Link to="filosofia" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Tabajos
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contacta
            </Link>
          </li>
        </ul>

        {/*Hamburguesa*/}
        <div onClick={handleClick} className="md:hidden z-10">
          {!isOpen ? <FaBars /> : <FaTimes />}
        </div>

        {/*Movil Menu*/}
        <ul
          className={
            !isOpen
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[#0a1c37] flex flex-col justify-center items-center"
          }
        >
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="acompañamiento"
              smooth={true}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="quienesSomos"
              smooth={true}
              duration={500}
            >
              Quien soy
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="filosofia"
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Trabajos
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contacto
            </Link>
          </li>
        </ul>

        {/*Social Media*/}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
              <a className="flex justify-between items-center w-full text-gray-300" href="/">
                Linkedin
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600">
              <a className="flex justify-between items-center w-full text-gray-300" href="/">
                GiTHub
                <FaGithub size={30}/>
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-400">
              <a className="flex justify-between items-center w-full text-gray-300 py-4" href="/">
                Email
                <HiOutlineMail size={30}/>
              </a>
              
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-400">
              <a className="flex justify-between items-center w-full text-gray-300 py-4" href="/">
                Datos personales
                <BsFillPersonLinesFill size={30}/>
              </a>
              
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
