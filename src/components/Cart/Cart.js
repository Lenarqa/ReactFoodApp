import React, { useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../../store/Cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmound = `$${cartCtx.totalAmound.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amound: 1 });
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {console.log(cartCtx.items)}
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          amount={item.amound}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amound</span>
        <span>{totalAmound}</span>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onClose} className={classes["button--alt"]}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
