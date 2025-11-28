import React from "react";
import { Link } from "react-router";
import Logo from "../../components/logo/Logo";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            {navLinks}
          </ul>
        </div>
        <Logo />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-2">
        <Link to="/login" className="btn btn-ghost">
          Login
        </Link>
        <Link to="/register" className="btn btn-primary">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
