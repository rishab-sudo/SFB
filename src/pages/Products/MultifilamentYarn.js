import React from "react";
import ProductDetail from "../../components/ProductDetail";

const MultifilamentYarn = () => {
  return (
<ProductDetail
  title="Multifilament Yarn"
  description="High quality PP Fabric for industrial and packaging applications."
  leftImage="/products/PPBages-1.jpg"
  rightImage="/products/PPBages-2.jpg"
  leftPoints={[
    "High tensile strength",
    "Lightweight and durable",
    "Excellent tear resistance",
    "Cost effective",
  ]}
  rightPoints={[
    "Custom sizes available",
    "Eco-friendly material",
    "Smooth finish",
    "Multiple applications",
  ]}
  bottomText="PP Fabric is widely used in packaging, agriculture, and industrial sectors due to its strength, durability, and versatility. Our manufacturing process ensures consistent quality and long-lasting performance."
  prevLink="/products/monolayer-films"
  nextLink="/products/reprocess-granules"
/>

  );
};

export default MultifilamentYarn;
