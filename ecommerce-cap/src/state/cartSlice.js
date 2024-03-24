import { createSlice } from "@reduxjs/toolkit";

// Get the cart items from local storage and convert them to JSON
const getCartItems = () => {
  const itemsJSON = localStorage.getItem("cartItems");
  return itemsJSON ? JSON.parse(itemsJSON) : [];
};
const initialState = {
    items: getCartItems()
  };

  const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
          const { itemId, title, price, image, quantity } = action.payload;
          const existingItemIndex = state.items.findIndex(item => item.itemId === itemId);
    
          if (existingItemIndex !== -1) {
            // If item already exists, update quantity
            state.items[existingItemIndex].quantity += quantity;
          } else {
            // If item doesn't exist, add it to the cart
            state.items.push({ itemId, title, price, image, quantity });
          }
    
          // Update local storage
          localStorage.setItem('cartItems', JSON.stringify(state.items));
          window.location.reload()
          
        },
        removeItem: (state, action) => {
          const itemIdToRemove = action.payload;
          state.items = state.items.filter(item => item.itemId !== itemIdToRemove);
    
          // Update local storage
          localStorage.setItem('cartItems', JSON.stringify(state.items));
        },
        clearCart: state => {
          state.items = [];
    
          // Clear local storage
          localStorage.removeItem('cartItems');
        }
      }
    });
    
    export const { addItem, removeItem, clearCart } = cartSlice.actions;

    export default cartSlice.reducer;