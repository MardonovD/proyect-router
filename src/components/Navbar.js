import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{ display: "flex", alignItems: "space-between", gap: "15px" }}>
      <span className="logo">REDUX STORE</span>
      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          className="navLink "
          style={{ textDecoration: "none", color: "black" }}
          to="/"
        >
          Home
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          className="navLink"
          to="/Card"
        >
          Card
        </Link>
      </div>
      <span className="cardCount">
        <b>Card Items</b>:0
      </span>
    </div>
  );
};

export default Navbar;
