import React from "react";
import "../styles/Home.css";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/banner/Banner";
import MobileNav from "../components/mobileNav/MobileNav";

const Home = () => {
  return (
    <div className="main">
      <Navbar />
      <Banner />
      <div className="sectionBox py-6 pl-6 bg-white rounded-lg">
        <h2 className="text-sm font-medium mb-1 ml-1 col-span-2">Your Goals</h2>
        <div className="flex overflow-x-scroll">
          <div className="flex flex-nowrap">
            <button className="h-24 w-12 mr-3 bg-gray-600 rounded flex justify-center items-center ">
              <span className="createBtnText uppercase tracking-widest text-sm text-white">
                Create
              </span>
            </button>
            <div className="h-24 w-36 mr-3 bg-gray-700 rounded"></div>
            <div className="h-24 w-36 mr-3 bg-gray-700 rounded"></div>
          </div>
        </div>
        <div className="pr-6"></div>
      </div>
      <MobileNav />
    </div>
  );
};

export default Home;
