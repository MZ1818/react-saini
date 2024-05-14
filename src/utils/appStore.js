import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore = configureStore({
  //this reducer is a big reducer of big store under which reducers of diofferent slices have to be written.
  // here singular will be their(reducer)
  reducer: {
    cart: cartReducer,
  },
});

export default appStore;
