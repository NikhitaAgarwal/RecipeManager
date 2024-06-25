import React from "react";
import { Link } from "react-router-dom";
import RecipeList from "./RecipeList";

const Home = () => {
  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col text-center">
          <h2 className="display-4">Recipe Manager</h2>
          <Link to="/add" className="btn btn-primary btn-lg mt-3">
            Add New Recipe
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <RecipeList />
        </div>
      </div>
    </div>
  );
};

export default Home;
