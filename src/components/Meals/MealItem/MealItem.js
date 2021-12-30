import React, { useContext } from "react";
import CartContext from "../../../store/Cart-context";
import classes from "./MealItem.module.css";
import MealsItemForm from "./MealsItemForm";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);
  const addtoCartHandler = (amound) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amound: amound,
      price: props.price,
    });
  };
  const price = `$${props.price.toFixed(2)}`;
  return (
    <ul className={classes.meal}>
      <div>
        <h3 className={classes.description}>{props.name}</h3>
        <div>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm onAddToCart={addtoCartHandler} id={props.id} />
      </div>
    </ul>
  );
};

export default MealItem;
