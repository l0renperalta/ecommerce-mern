export const cartReducer = (state, action) => {
  let index = -1;
  if (action.payload) {
    index = state.cartItems.findIndex((e) => e.id === action.payload.id);
  }

  switch (action.type) {
    case 'Add':
    case 'IncQuantity':
      if (index === -1) {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      } else {
        state.cartItems[index].quantity++;
      }
      break;

    case 'DecQuantity':
      if (index > -1) {
        state.cartItems[index].quantity--;
      }
      break;

    case 'Remove':
      if (index > -1) {
        state.cartItems.splice(index, 1);
      }

    case 'Clear':
      state.cartItems = [];
      break;

    default:
      break;
  }

  return state;
};
