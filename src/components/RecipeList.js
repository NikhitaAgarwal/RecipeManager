import React from "react";
import { deleteRecipe } from "../redux/Action";
import { useSelector, useDispatch } from "react-redux";
import "./RecipeList.css";

const RecipeList = () => {
  const recipe = useSelector((state) => state.recipe);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteRecipe(id));
  };

  return (
    <div className="container">
      <h2 className="title ">Recipe List</h2>
      <ul className="list-group list-group-flush">
        {recipe.map((recipes) => (
          <li
            className="list-group-item d-flex list-group-item-action list-group-item-success"
            key={recipes.id}
          >
            <strong className="fs-4">{recipes.name}-</strong>{" "}
            <span className="ms-auto fs-5">{recipes.description}</span>
            <button
              className="btn btn-danger ms-auto"
              onClick={() => handleDelete(recipes.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
