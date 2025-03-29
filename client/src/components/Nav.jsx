import React, { useContext } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import { FaAward } from "react-icons/fa6";

const Nav = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="shadow bg-blue-50/10 py-4">
      <div className="container px-4 2xl:px-20 sm:px-10 max-sm:px-4 mx-auto flex justify-between overflow-hidden items-center">
        <div className="max-sm:w-1/3 md:w-1/2">
          <Link to={"/"}>
            <p className="text-gradient max-sm:text-xs md:text-2xl">
              Islamiah college alumni
            </p>
          </Link>
        </div>
        {user ? (
          <div className="flex items-center gap-3">
            <Link to={"/dashboard"}>
              <button
                type="button"
                class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-400 shadow-sm shadow-purple-300/50 dark:shadow-lg dark:shadow-purple-400/50 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-2 "
              >
                Dashboard
              </button>
            </Link>
            <p>|</p>
            <p className="max-sm:hidden">
              Hi, {user.firstName + " " + user.lastName}
            </p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button className="text-gray-600 items-center flex">
              <Link to={"/login"}>
              <button className="px-4 py-1 bg-purple-100 text-purple-500 rounded-md">Admin</button> </Link>
            </button>
            <button
              onClick={(e) => openSignIn()}
              type="button"
              class="items-center flex gap-1 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-sm shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-500/50 font-medium rounded-lg text-sm px-5 py-1.5 text-center me-1"
            >
              <FaAward />
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
