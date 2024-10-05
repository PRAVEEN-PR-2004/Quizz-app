import React from "react";
import logo from "../../public/images/logo.png";

const Navbar = () => {
  return (
    <header className="h-16 shadow-sm">
      <nav className="flex items-center justify-between w-9/12 h-full mx-auto">
        <a href="/" className="flex items-center ">
          <img src={logo} alt="logo" className="h-10" />
        </a>

        <div className="flex items-center space-x-5">
          <ul className="items-center hidden space-x-8 md:flex">
            <li>
              <a
                href="#how-it-works"
                className="transition-colors hover:text-primary"
              >
                How it works?
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="transition-colors hover:text-primary"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="transition-colors hover:text-primary"
              >
                About us
              </a>
            </li>
          </ul>

          <button className="px-5 py-1 mt-2 font-medium transition-all border rounded border-primary hover:bg-primary hover:text-white md:mt-0">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
