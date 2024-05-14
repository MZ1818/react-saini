import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // here plural will be their(reducers)
  reducers: {
    //first thing like:addItems,removeItems etc are name of actions & after that its reducer function for each action
    addItems: (state, action) => {
      //modifying our store here
      state.items.push(action.payload);
    },
    removeItems: (state, action) => {
      // console.log(state);       // this will not work here
      console.log(current(state)); // this will work as for redux as "current" keyword is set for it.
      state.items.pop();
    },
    clearCart: (state, action) => {
      //{{because redux gave us the option of either mutating the state directly or returning the new state}}
      // state.items.length = 0;          //we can use this also
      return { items: [] }; //we can use this also
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer; // here singular will be their(reducer)
