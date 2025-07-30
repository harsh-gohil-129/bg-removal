import React, { use } from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext } from "react";
import { useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { credits, loadCreditsData } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <div className="flex justify-between items-center mx-4 py-3 lg:mx-44">
      <Link to="/">
        <img className="w-32 sm:w-44" src={assets.logo} alt="" />
      </Link>
      {isSignedIn ? (
        <div className="flex items-center gap-2 lg:gap-3">
          <button
            onClick={() => navigate("/buy")}
            className="flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700"
          >
            <img className="w-5" src={assets.credit_icon} alt="" />
            <p className="text-xs sm:text-sm font-medium text-gray-600">
              Credits : {credits}
            </p>
          </button>
          <p className="text-gray-600 max-sm:hidden">Hi, {user.fullName}</p>
          <UserButton />
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="cursor-pointer bg-zinc-800 text-white px-4 py-3 rounded-full flex items-center gap-4 text-sm sm:px-8"
        >
          Get started <img className="w-3 sm:w-4" src={assets.arrow_icon} />
        </button>
      )}
    </div>
  );
};

export default Navbar;
