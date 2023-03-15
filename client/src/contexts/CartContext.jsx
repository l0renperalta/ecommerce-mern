import { createContext, useReducer } from 'react';
import { cartReducer } from './CartReducer';

export const CartContext = createContext();

const initialState = {
  cartItems: [],
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (payload) => {
    dispatch({ type: 'Add', payload });
  };

  const removeProduct = (payload) => {
    dispatch({ type: 'Remove', payload });
  };

  const increaseQuantity = (payload) => {
    dispatch({ type: 'IncQuantity', payload });
    return state.cartItems;
  };

  const decreaseQuantity = (payload) => {
    dispatch({ type: 'DecQuantity', payload });
    return state.cartItems;
  };

  const clearCart = () => {
    dispatch({ type: 'Clear', payload: undefined });
    return state.cartItems;
  };

  const getItems = () => {
    return state.cartItems;
  };

  const contextValues = {
    addProduct,
    removeProduct,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    getItems,
    ...state,
  };

  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
