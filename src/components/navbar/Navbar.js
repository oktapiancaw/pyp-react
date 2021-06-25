/* eslint-disable react/prop-types */
import "./Navbar.css";

const Navbar = (props) => {
  if (props) {
    if (props.setting == "false") {
      return (
        <nav className="navbar p-5 rounded flex items-center justify-between">
          <h1 className="font-semibold">{props.headText ?? "Mafigo"}</h1>
          <div className="w-10 h-10 bg-gray-600 rounded"></div>
        </nav>
      );
    }
  }
  return (
    <nav className="navbar py-7 p-5 shadow rounded flex items-center justify-between">
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
