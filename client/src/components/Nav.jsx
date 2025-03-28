import React, { useContext } from "react";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();

  return (
    <div className="shadow bg-blue-50/10 py-4">
      <div className="container px-4 2xl:px-20 sm:px-10 max-sm:px-4 mx-auto flex justify-between overflow-hidden items-center">
        <div className="max-sm:w-1/3 md:w-1/2">
          <p className="text-gradient">Islamiah college alumni</p>
        </div>
        {user ? (
          <div className="flex items-center gap-3">
            <Link to={"/dashboard"}>Dashboard</Link>
            <p>|</p>
            <p className="max-sm:hidden">
              Hi, {user.firstName + " " + user.lastName}
            </p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button className="text-gray-600">
              <Link to={"/login"}> Admin</Link>
            </button>
            <button
              onClick={(e) => openSignIn()}
              className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
