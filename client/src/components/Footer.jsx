import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="container px-4 xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20">
      <img width={160} src={""} alt="" />
      <p className="flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright{" "}
        <a href="https://akash--dev.web.app/" className="font-bold">
          @aktech.dev
        </a>{" "}
        | All rights reserved.
      </p>
      <div className="flex gap-6 md:gap-4 max-sm:gap-3.5">
        <a
          className="w-8 h-8 rounded-2xl bg-purple-200 shadow hover:scale-110 flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
          href="https://islamiah-clg.web.app/"
        >
          <FaWhatsapp className="text-xl text-purple-600" />{" "}
        </a>
        <a
          className="w-8 h-8 rounded-2xl bg-purple-200 shadow hover:scale-110 flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
          href="https://islamiah-clg.web.app/"
        >
          <FaLinkedin className="text-xl text-blue-600" />{" "}
        </a>
        <a
          className="w-8 h-8 rounded-2xl bg-purple-200 shadow hover:scale-110 flex items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.islamiahcollege.edu.in/"
        >
          <AiFillHome className="text-xl text-green-600" />{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
