import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div style={{ display: "flex", alignItems: "space-between" }}>
      <span className="logo">REDUX STORE</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/Card">
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
