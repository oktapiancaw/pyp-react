/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Navbar.css";

const Navbar = (props) => {
  const [isActive, setActive] = useState("true");

  const activeHandler = () => {
    setActive(!isActive);
  };

  if (props) {
    if (props.setting == "false") {
      return (
        <nav className="navbar py-5 px-6 rounded flex items-center justify-between">
          <h1 className="font-semibold">{props.headText ?? "Mafigo"}</h1>
          <div className="w-10 h-10 bg-gray-600 rounded"></div>
        </nav>
      );
    }
  }
  return (
    <nav className="navbar py-5 px-6 shadow bg-white flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-600 rounded mr-2"></div>
        <div>
          <p className="font-medium mb-0 text-base">Oktapian</p>
          <span className="font-thin text-xs">oktapian1998@gmail.com</span>
        </div>
      </div>
      <button onClick={activeHandler}>
        <img src="./icon/DashIcon.svg" className="w-7 h-7" />
      </button>
      <div
        className={
          isActive ? "hidden" : "navbarMenu py-3 px-5 rounded bg-white shadow"
        }
      >
        <ul>
          <li>
            <a className="text-sm mb-2" href="./">
              Profile
            </a>
          </li>
          <li>
            <a className="text-sm mb-2" href="./">
              About
            </a>
          </li>
          <li>
            <a className="text-sm mb-2" href="./contact">
              Contact
            </a>
          </li>
          <hr />
          <li>
            <a className="text-sm mb-2" href="./contact">
              Log out
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
