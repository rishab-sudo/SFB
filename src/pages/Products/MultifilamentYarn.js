import React from "react";
import ProductDetail from "../../components/ProductDetail";
import PageTopBanner from "../../components/PageTopBanner";
import leftImg from "../../assets/Products/multifilamnet-yarn(1).jpeg"
import rightImg from "../../assets/Products//multifilamentyarn-2.png";

const MultifilamentYarn = () => {
return (
  <>
         <PageTopBanner
title="Multifilament Yarn."
  currentPage="Multifilament Yarn"
  backgroundImage={require("../../assets/Banner/PP-fabric-manufactures.png")}
/>
  <ProductDetail
    title="Multifilament Yarn by Santosh Polyfab"
    description="Multifilament yarn plays a crucial role in packaging, especially in bag-closing applications, where it ensures strong and secure stitching for reliable and stable packaging."
    leftImage= {leftImg}
    rightImage= {rightImg}
    leftPoints={[
      "High strength and extra smooth finish under strict supervision",
      "Ensures strong and secure stitches for bag closing",
      "Durable and resistant for reliable industrial use",
      "Contributes to the integrity and stability of packaged goods",
    ]}
    rightPoints={[
      "Intermingled and twisted PP multifilament yarn available",
      "Manufactured in various colors with medium and high tenacity",
      "Used in weaving, braiding, twisting, and sewing",
      "Suitable for ropes, nets, slings, webbing, belts, and filtration",
    ]}
    bottomText="At Santosh Polyfab, multifilament yarn is manufactured to meet international standards with high strength and smooth finish. It is widely used for bag closing, sewing, weaving, and various industrial applications such as ropes, nets, webbing, and filtration, ensuring durability and reliable performance."
    prevLink="/products/monolayer-films"
    nextLink="/products/reprocess-granules"
  />
  </>
);


};

export default MultifilamentYarn;
