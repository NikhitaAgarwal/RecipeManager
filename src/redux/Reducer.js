import { ADD_RECIPE, DELETE_RECIPE } from "./Action";
const initialState = [];

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return [...state, action.payload];
    case DELETE_RECIPE:
      return state.filter((recipe) => recipe.id !== action.payload);
    default:
      return state;
  }
};

export default Reducer;
