import Head from "./Head";
import Tail from "./Tail";
import RecipesList from "./RecipesList";
import Recipe from "./Recipe";
import CookWithMe from "./CookWithMe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Import your JSON data
import recipesData from "/public/recipes.json";
import React, { useState, useEffect } from "react";

function App() {
  const recipes = recipesData.recipes;
  const [titles, setTitles] = useState([]);

  useEffect(() => {
    // Extract titles from the recipes data
    const loadedTitles = Object.values(recipesData.recipes).map(
      (recipe) => recipe.title
    );
    setTitles(loadedTitles);
  }, []); // The empty array ensures this effect runs only once after the initial render

  return (
    <>
      <Head />
      <h1 className="text-3xl text-blue-800 text-center ">
        Welcome to Icook Interactive Cooking website!
      </h1>
      <RecipesList heading="Select a recipe to cook:" items={titles} />
    </>
  );
}

export default App;
