/* eslint-disable react/prop-types */
import "./Navbar.css";

const Navbar = (props) => {
  if (props) {
    if (props.setting == "false") {
      return (
        <nav className="navbar py-7 p-5 bg-white rounded flex items-center justify-between">
          <a href="./">
            <img src="./icon/BackIcon.svg" />
          </a>
          <div className="w-10 h-10 bg-gray-600 rounded mr-2"></div>
        </nav>
      );
    }
  }
  return (
    <nav className="navbar py-7 p-5 bg-white shadow rounded flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-600 rounded mr-2"></div>
        <div>
          <p className="font-medium mb-0 text-base">Oktapian</p>
          <span className="font-thin text-xs">oktapian1998@gmail.com</span>
        </div>
      </div>
      <a href="#">
        <img src="./icon/DashIcon.svg" className="w-10 h-10" />
      </a>
      <div className="navbarMenu">
        <ul>
          <li>
            <a>lorem ipsum</a>
          </li>
          <li>
            <a>lorem ipsum</a>
          </li>
          <li>
            <a>lorem ipsum</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
