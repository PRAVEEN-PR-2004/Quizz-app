import React from "react";
import logo from "../../public/images/logo.png";

const Navbar = () => {
  return (
    <header className="h-16 shadow-sm">
      <nav className="flex justify-between items-center w-9/12 mx-auto h-full">
        <a href="/" className="flex items-center">
          <img src={logo} alt="logo" className="h-10" />
        </a>

        <div className="flex items-center space-x-5">
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <a
                href="#how-it-works"
                className="hover:text-primary transition-colors"
              >
                How it works?
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-primary transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about-us"
                className="hover:text-primary transition-colors"
              >
                About us
              </a>
            </li>
          </ul>

          <button className="font-medium px-5 py-1 border  border-primary rounded hover:bg-primary hover:text-white transition-all mt-2 md:mt-0">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
