import React from "react";
import ProductDetail from "../../components/ProductDetail";
import PageTopBanner from "../../components/PageTopBanner";
import leftImg from "../../assets/Products/granules2.png";
import rightImg from "../../assets/Products/granules1.png";

const Granules = () => {
return (
    <>
           <PageTopBanner

  title="Reprocess Granules"
    currentPage="Reprocess Granules"
    backgroundImage={require("../../assets/Banner/PP-fabric-manufactures.png")}
  />
  <ProductDetail
    title="Reprocess Granules by Santosh Polyfab"
    description="With a primary focus on achieving a circular economy, Santosh Polyfab converts waste material into reprocess granules that are reused in the manufacturing of PP fabric and PP bags."
    leftImage= {leftImg}
    rightImage= {rightImg}
    leftPoints={[
      "Manufactured by converting waste into reusable granules",
      "Used again in the production of PP fabric and PP bags",
      "Supports circular economy and waste reduction",
      "Cost-effective material for regular manufacturing use",
    ]}
    rightPoints={[
      "Available in various colours as per customer requirements",
      "Different MFI grades manufactured as per application needs",
      "Processed under controlled manufacturing conditions",
      "Suitable for consistent and regular industrial use",
    ]}
    bottomText="Reprocess Granules from Santosh Polyfab are produced by recycling waste into usable material for manufacturing PP fabric and PP bags. These granules are available in various colours and MFI grades as per customer requirements, supporting sustainable and efficient production."
    prevLink="/products/multifilament-yarn"
    nextLink="/products/pp-fabric"
  />
  </>
);


};

export default Granules;
