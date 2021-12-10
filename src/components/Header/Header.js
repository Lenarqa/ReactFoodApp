import React from "react";
import classes from "./Header.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <h1>ReactMeals</h1>
      <div className={classes.buy} onClick={()=>{console.log("hello");}}>
        <FontAwesomeIcon icon={faShoppingCart} />
        <p>Your Cart</p>
        <div>0</div> 
      </div>
    </header>
  );
};

export default Header;
