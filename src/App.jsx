import Head from "./Head";
import Tail from "./Tail";
import RecipesList from "./RecipesList";
import Recipe from "./Recipe";
import CookWithMe from "./CookWithMe";
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
// Import JSON data
import recipesData from "/recipes.json";
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
    <Router>
      <Head />
      <Switch>
        <Route exact path="/">
          <h1 className="text-3xl text-blue-800 text-center ">
            Welcome to Icook Interactive Cooking website!
          </h1>
          <RecipesList heading="Select a recipe to cook:" items={titles} />
        </Route>
        <Route path="/recipe/:id">
          {({ match }) => {
            // Convert the id param to an integer and ensure it's a valid index
            const recipeId = match.params.id;
            // Pass the selected recipe data and id to the Recipe component
            const selectedRecipe = recipes[recipeId];
            return selectedRecipe ? (
              <Recipe data={selectedRecipe} recipeId={recipeId} />
            ) : (
              <div>Recipe not found</div>
            );
          }}
        </Route>
        <Route path="/CookWithMe/:id">
          {({ match }) => {
            // Convert the id param to an integer and ensure it's a valid index
            const recipeId = match.params.id;
            // Pass the selected recipe data and id to the Recipe component
            const selectedRecipe = recipes[recipeId];
            return selectedRecipe ? (
              <CookWithMe data={selectedRecipe} id={recipeId} />
            ) : (
              <div>Recipe not found</div>
            );
          }}
        </Route>
      </Switch>
      <Tail />
    </Router>
  );
}

export default App;
