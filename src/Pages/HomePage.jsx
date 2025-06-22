import React from "react";
import HeroSlider from "../Components/HeroSlider";
import CategoryShopUI from "../Components/CategoryShopUI";
import ProductCard from "../Components/ProductCard";
import PopularProduct from "../Components/PopularProduct";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <CategoryShopUI />
      <ProductCard />
      <PopularProduct />
    </div>
  );
};

export default HomePage;
