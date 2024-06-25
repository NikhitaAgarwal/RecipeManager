export const ADD_RECIPE = "/addRecipe";
export const DELETE_RECIPE = "/deleteRecipe";

export const addRecipe = (recipe) => ({
  type: ADD_RECIPE,
  payload: recipe,
});

export const deleteRecipe = (id) => ({
  type: DELETE_RECIPE,
  payload: id,
});
