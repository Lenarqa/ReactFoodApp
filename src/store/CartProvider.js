import react, { useReducer } from "react";
import CartContext from "./Cart-context";

const defaultState = {
  items: [],
  totalAmound: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmound =
      state.totalAmound + action.item.price * action.item.amound;

    const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingCardItem = state.items[existingCartItemIndex];
    
    let updatedItems;
    if(existingCardItem) {
      const updatedItem = {
        ...existingCardItem,
        amound: existingCardItem.amound + action.item.amound
      }
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem; 
    }else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmound: updatedTotalAmound,
    };
  }
  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmound = state.totalAmound - existingItem.price;
    let updatedItems;
    if(existingItem.amound === 1 ) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {...existingItem, amound:existingItem.amound -1};
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmound: updatedTotalAmound
    }
  }
  return defaultState;
};
const CartProvider = (props) => {
  const [cartState, despatchCartAction] = useReducer(cartReducer, defaultState);
  
  const addItemToCartHandler = (item) => {
    despatchCartAction({ type: "ADD", item: item });
  };

  const removeItemFromCartHandler = (id) => {
    despatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmound: cartState.totalAmound,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
