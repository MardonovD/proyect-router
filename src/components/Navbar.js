import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <span>REDUX STORE</span>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Card">Card</Link>
      </div>
      <span className="cardCount">Card Items:0</span>
    </div>
  );
};

export default Navbar;
