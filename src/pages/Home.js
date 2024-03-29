import React from "react";
import Products from "../components/Products";
import { createSlice } from "@reduxjs/toolkit";
const Home = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 className="heading"> Welcome to the Redux toolkit store</h2>
      <section>
        <h3>Products</h3>
        <Products />
      </section>
    </div>
  );
};

export default Home;
