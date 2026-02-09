import React from "react";
import ProductDetail from "../../components/ProductDetail";
import PageTopBanner from "../../components/PageTopBanner";

const PPFabric = () => {
return (
  <>    <PageTopBanner
  title="PP Fabric"
  currentPage="PP Fabric"
  backgroundImage={require("../../assets/Banner/PP-fabric-manufactures.png")}
/>
  <ProductDetail
    title="PP Fabric by Santosh Polyfab"
    description="Santosh Polyfab produces PP fabric in woven, laminated, and unlaminated forms, each manufactured to suit specific industry requirements and applications."
    leftImage="/products/PPFabric-1.jpg"
    rightImage="/products/PPFabric-2.jpg"
    leftPoints={[
      "High tensile strength for heavy-duty use",
      "Lightweight yet durable polypropylene material",
      "Excellent tear and abrasion resistance",
      "Cost-effective solution for bulk packaging",
    ]}
    rightPoints={[
      "Available in multiple GSM and custom sizes",
      "Uniform weaving and smooth surface finish",
      "Suitable for packaging, agriculture, and industrial uses",
      "Manufactured with strict quality control standards",
    ]}
    bottomText="PP Fabric from Santosh Polyfab is widely used for manufacturing sacks and for wrapping applications across various industries. It is recyclable and designed to minimize environmental impact, and can be fully customized in terms of size, GSM, colour, mesh, UV resistance, and other specifications as per customer requirements."
    prevLink="/products/pp-bags"
    nextLink="/products/monolayer-films"
  />
  </>
);


};

export default PPFabric;
