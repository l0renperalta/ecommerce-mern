const cartReducer = (state, action) => {
  debugger;

  switch (action.type) {
    case 'Add':
      const index = state.cartItems.findIndex((e) => e.id === action.payload.id);
      if (index === -1) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        state.cartItems[index].quantity++;
      }
      return state;

    default:
      return state;
  }
};

export default cartReducer;
