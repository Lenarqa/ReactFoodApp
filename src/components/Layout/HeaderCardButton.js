import React, { useContext, useEffect, useState } from "react";
import classes from "./HeaderCardButton.module.css";
import CartIcon from "../Cart/CartIcon";
import CartContext from "../../store/Cart-context";

const HeaderCardButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartCtx = useContext(CartContext);
  const {items} = cartCtx;

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump: ''}`;
  useEffect(()=>{
    if(cartCtx.items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    }
  },[items]);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amound;
  }, 0);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCardButton;
