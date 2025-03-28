import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container 2xl:px-20 xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Islamiah College Alumni
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Welcome to the Islamiah College Alumni Page! Here, we celebrate the
          achievements and stories of our esteemed alumni, fostering connections
          and collaborations that empower our community.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 px-6 py-2 rounded text-white m-1 ">
          <Link
            to={"/dashboard"}
            className="flex items-center justify-evenly gap-1"
          >
            <FaGraduationCap /> Make a Donation Today
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
