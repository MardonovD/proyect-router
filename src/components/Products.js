import React, { useEffect, useState } from "react";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>Products</h1>
    </div>
  );
};

export default Products;
