import { useState } from "react";

function RecipesList({ items, heading }) {
  const handleClick = (item, recipeId) => {
    console.log(item + " was clicked");
    // Set the link to "/recipe"
    window.location.href = "#/recipe/" + recipeId;
  };

  return (
    <div>
      {items.length === 0 && <p>No Recipes found</p>}
      <div className="mx-4 md:mx-24 my-1 md:my-9 grid grid-flow-row-dense grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-2 md:gap-4 relative">
        <h1 className="col-span-full text-xl md:text-3xl font-bold text-center relative">
          {heading}
        </h1>
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleClick(item, index + 1)}
            className="w-auto h-auto bg-white shadow-2xl rounded-2xl overflow-hidden relative duration-300 hover:scale-105"
          >
            <img
              className="w-full h-48 md:h-64 object-cover object-center"
              src={`/Icook/${item}.jpg`}
              alt={`${item} recipe image`}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gray-800 hover:bg-gray-900 hover:bg-opacity-70 bg-opacity-50 text-xl md:text-2xl text-white text-center py-3 font-bold">
              {item}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default RecipesList;
