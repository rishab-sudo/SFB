import React from "react";
import ProductDetail from "../../components/ProductDetail";
import PageTopBanner from "../../components/PageTopBanner";

const PPBages = () => {
return (
    <>    <PageTopBanner
  title="PP Bags"
  currentPage="PP Bags"
  backgroundImage={require("../../assets/Banner/PP-fabric-manufactures.png")}
/>
  <ProductDetail
    title="PP Bags by Santosh Polyfab"
    description="Santosh Polyfab manufactures laminated, unlaminated, and recycled PP bags as per customer requirements, designed for reliable and efficient use across multiple industrial and agricultural sectors."
    leftImage="/products/PPBags-1.jpg"
    rightImage="/products/PPBags-2.jpg"
    leftPoints={[
      "Used in cement, sugar, flour mills, and rice mills industries",
      "Also suitable for solvent plants, cattle feed, irrigation, and food grains",
      "Available in laminated, unlaminated, and recycled variants",
      "Manufactured as per customer-specific requirements",
    ]}
    rightPoints={[
      "Made from  recyclable and reusable polypropylene material",
      "Helps reduce waste and supports sustainable usage",
      "Can be reused multiple times for different applications",
      "Suitable for industrial and food-related packaging needs",
    ]}
    bottomText="PP Bags from Santosh Polyfab are widely used in cement, sugar, flour, rice, cattle feed, irrigation, and food-related industries. Made from 100% recyclable polypropylene, these bags are reusable, durable, and help reduce waste while supporting sustainable packaging practices."
    prevLink="/products/pp-fabric"
    nextLink="/products/monolayer-films"
  />
  </>
);

};

export default PPBages;
