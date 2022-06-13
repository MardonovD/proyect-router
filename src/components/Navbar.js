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
    </div>
  );
};

export default Navbar;
