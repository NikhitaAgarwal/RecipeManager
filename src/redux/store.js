import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";
const store = configureStore({
  reducer: {
    recipe: Reducer,
  },
});

export default store;
