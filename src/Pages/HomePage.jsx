import React from "react";
import HeroSlider from "../Components/HeroSlider";
import CategoryShopUI from "../Components/CategoryShopUI";
import ProductCard from "../Components/ProductCard";
import PopularProduct from "../Components/PopularProduct";
import StorePolicy from "../Components/StorePolicy";
import Latestproduct from "../Components/latestproduct";
import DealOfTheDay from "../Components/DealOfTheDay";
import FeaturedProducts from "../Components/FeaturedProducts";
import BestSellingProduct from "../Components/BestSellingProduct";
import ProductSubCard from "../Components/ProductSubCard";
import ClientsFeedback from "../Components/ClientsFeedback";
import OurBlog from "../Components/OurBlog";

const HomePage = () => {
  return (
    <div>
      <HeroSlider />
      <CategoryShopUI />
      <ProductCard />
      <PopularProduct />
      <StorePolicy />
      <Latestproduct />
      <DealOfTheDay />
      <FeaturedProducts />
      <BestSellingProduct />
      <ProductSubCard />
      <ClientsFeedback />
      <OurBlog />
    </div>
  );
};

export default HomePage;
