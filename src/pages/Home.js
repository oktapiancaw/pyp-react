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
      <MobileNav />
    </div>
  );
};

export default Home;
