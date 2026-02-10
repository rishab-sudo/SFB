import React from "react";
import ProductDetail from "../../components/ProductDetail";
import PageTopBanner from "../../components/PageTopBanner";
import leftImg from "../../assets/Products/monolayer1.png"
import rightImg from "../../assets/Products/monolayer2.png";

const MonolyerFilm = () => {
return (
      <>   
       <PageTopBanner
  title="Monolayer Films."
  currentPage="Monolayer Films."
  backgroundImage={require("../../assets/Banner/PP-fabric-manufactures.png")}
/> 
  <ProductDetail
    title="Monolayer Films by Santosh Polyfab"
    description="Santosh Polyfab manufactures PE monolayer films and liners used for the safe transit of food products and fine powders, designed to be compatible with different filling and discharge options."
    leftImage={leftImg}
    rightImage={rightImg}
    leftPoints={[
      "Provides oxygen and moisture barrier protection",
      "Chemical resistant and anti-static properties",
      "High tensile strength for reliable performance",
      "Designed for minimal handling during use",
    ]}
    rightPoints={[
      "Protects products from contamination",
      "Can be loosely inserted or attached by hemming",
      "Compatible with sewing, tying, or gluing methods",
      "Customizable size and material as per application",
    ]}
    bottomText="Monolayer Films and PE liners from Santosh Polyfab are used inside bags for the safe transport of food products and fine powders. These liners help prevent liner discharge, offer protection from contamination, and can be customized in size and material to suit specific application requirements."
    prevLink="/products/pp-bags"
    nextLink="/products/multifilament-yarn"
  />
  </>
);


};

export default MonolyerFilm;
