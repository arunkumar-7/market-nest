import React from "react";

type ProductProps = {
  name: string;
  price: number;
};

function ProductCard({ name, price }: ProductProps) {
  return (
    <>
      <h3>{name}</h3>
      <p>{price}</p>
      <button>Add to cart</button>
      <hr />
    </>
  );
}

export default ProductCard;
