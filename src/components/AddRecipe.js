import React, { useState } from "react";
import { addRecipe } from "../redux/Action";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const AddRecipe = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addRecipe({ id: Date.now(), name, description }));
    navigate("/");
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8 col-sm-10">
          <h2 className="mb-4 fs-1">Add New Recipe</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label
                htmlFor="recipeName"
                className="form-label font-weight-bold fs-5"
              >
                Recipe Name
              </label>
              <input
                type="text"
                id="recipeName"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="description"
                className="form-label font-weight-bold fs-5"
              >
                Description
              </label>
              <textarea
                id="description"
                className="form-control"
                rows="3"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success w-100">
              Add Recipe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
