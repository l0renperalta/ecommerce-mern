import { createContext, useReducer } from 'react';
import cartReducer from './CartReducer';

export const CartContext = createContext();

const initialState = {
  cartItems: [],
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addProduct = (payload) => {
    debugger;
    dispatch({ type: 'Add', payload });
  };

  const contextValues = {
    addProduct,
    ...state,
  };

  return <CartContext.Provider value={contextValues}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
