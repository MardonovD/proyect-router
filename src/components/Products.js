import React, { useEffect, useState } from "react";
import "../index.css";
const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);
  return (
    <div className="productWrapper">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <img src={product.image} alt="" />
          <h5>{product.title}</h5>
          <h5>{product.price}$</h5>
          <button className="btn">Add to card</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
