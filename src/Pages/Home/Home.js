import React, { useEffect } from "react";
import BannerSlider from "../../Components/BannerSlider/BannerSlider";
import Cards from "./Cards/Cards";

const Home = () => {
  return (
    <div className="home-page-container">
      <BannerSlider />
      <Cards />
    </div>
  );
};

export default Home;
