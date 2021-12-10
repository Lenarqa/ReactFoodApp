import React from "react";
import classes from "./Description.module.css";

const Description = (props) => {
  return (
    <div className={classes.description}>
      <h1>Delicious Food, Delivered To You</h1>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and endjoi a delicious launch or dinner at home.
      </p>
      <p>
        All our meals are cooked with hight quality ingredients, just-in-time and course by expenenced cheafs!
      </p>
    </div>
  );
};

export default Description;
