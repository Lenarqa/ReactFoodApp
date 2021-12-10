import React from 'react';
import classes from './List.module.css';
import Item from '../Item/Item';

const List = (props) => {
    return (
        <div className={classes.list}>
           {props.items.map((item)=>(
               <Item label={item.name} info={item.info} cost={item.cost} />
           ))} 
        </div>
    );
};

export default List;