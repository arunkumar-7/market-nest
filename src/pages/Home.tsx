import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Category from "../components/Category";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <SearchBar></SearchBar>
      <Category></Category>

      <h2>Products</h2>

      {products.map((item) => (
        <ProductCard
          key={item.id}
          name={item.name}
          price={item.price}
        ></ProductCard>
      ))}
    </>
  );
}

export default Home;
