import React from "react";
import { useParams } from "react-router-dom";

function CategoryPage() {
  const { name } = useParams();
  return (
    <>
      <h1>{name} Products</h1>
    </>
  );
}

export default CategoryPage;
