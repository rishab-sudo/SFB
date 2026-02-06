import React from "react";
import ProductDetail from "../../components/ProductDetail";

const MonolyerFilm = () => {
  return (
<ProductDetail
  title="Monolyer Film"
  description="High quality PP Fabric for industrial and packaging applications."
  leftImage="/products/ppfabric-1.jpg"
  rightImage="/products/ppfabric-2.jpg"
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
  prevLink="/products/pp-bags"
  nextLink="/products/multifilament-yarn"
/>

  );
};

export default MonolyerFilm;
