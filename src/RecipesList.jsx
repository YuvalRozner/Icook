import { useState } from "react";

function RecipesList({ items, heading }) {
  const handleClick = (item, recipeId) => {
    console.log(item + " was clicked");
    // Set the link to "/recipe"
    window.location.href = "/Icook/recipe/" + recipeId;
  };

  let recipeId = -1; // The recipe id is the index of the recipe in the array. default is -1 (Not found)

  return (
    <>
      {items.length === 0 && <p>No Recipes found</p>}
      <div className="grid grid-flow-row-dense mx-24 my-8 grid-cols-3 gap-4 relative ">
        <h1> </h1>
        <h1 className="text-2xl font-bold text-center relative">{heading}</h1>
        <h1> </h1>
        {items.map((item, recipeId) => (
          <button
            key={item}
            onClick={() => handleClick(item, items.indexOf(item) + 1)}
            className="w-auto h-auto bg-white shadow-2xl rounded-2xl overflow-hidden relative duration-300 hover:scale-105"
          >
            <img
              className="w-full h-64 object-cover object-center "
              src={`public/${item}/${item}.jpg`}
              alt={item + " recipe image"}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gray-800 hover:bg-gray-900 hover:bg-opacity-70 bg-opacity-50 text-4xl text-white text-center py-3 font-bold">
              {item}
            </div>
          </button>
        ))}
      </div>
    </>
  );
}

export default RecipesList;
