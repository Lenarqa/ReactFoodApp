import React from 'react';
import classes from './MealItem.module.css';
import MealsItemForm from './MealsItemForm';

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    return (
        <ul className={classes.meal}>
            <div>
                <h3 className={classes.description}>{props.name}</h3>
                <div>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealsItemForm />
            </div>
        </ul>
    );
};

export default MealItem;