import React from "react";
import classes from "./Item.module.css";
import Button from "../UI/Button/Button";

const Item = (props) => {
  return (
    <div className={classes.item}>
      <div className={classes.itemInfo}>
        <h2>{props.label}</h2>
        <p className={classes.infotext}>{props.info}</p>
        <p className={classes.cost}>${props.cost}</p>
      </div>
      <div className={classes.itemRight}>
        <div className={classes.itemAction}>
          <label htmlFor="amound">Amound</label>
          <input
            id="amound"
            type="number"
            id="quantity"
            name="quantity"
            min="0"
            max="100"
            step="1"
            value="0"
          />
        </div>
        <Button
          onClick={() => {
            console.log("button");
          }}
          label="+Add"
        ></Button>
      </div>
    </div>
  );
};

export default Item;
