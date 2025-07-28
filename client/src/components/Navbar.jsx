import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();

  return (
    <div className="flex justify-between items-center mx-4 py-3 lg:mx-44">
      <Link to="/">
        <img className="w-32 sm:w-44" src={assets.logo} alt="" />
      </Link>
      {isSignedIn ? (
        <div className="flex items-center gap-4">
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
