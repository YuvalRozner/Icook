import NavigationBar from "./NavigationBar";
import React from "react";

function Recipe({ data, recipeId }) {
  const { title, image, allergies, difficulty, ingredients, instructions } =
    data;

  const handleClick = (recipeId) => {
    window.location.href = "/Icook/CookWithMe/" + recipeId;
  };

  return (
    <>
      <NavigationBar title={title} />
      <div className="recipe pl-6 mx-6 mb-5 text-2xl">
        <div className="grid grid-cols-2 grid-rows-1">
          <div className="flex justify-center">
            <img
              src={"/Icook/" + image}
              alt={title + " image"}
              className="mt-5 rounded-3xl relative responsive-img min-w-20 max-w-96 max-h-96 w-80 h-60 object-cover shadow-2xl "
            />
          </div>
          <button
            className="flex justify-center relative duration-300 hover:scale-105"
            onClick={() => handleClick(recipeId)}
          >
            <img
              src="/Icook/public/cook_with_me.jpg"
              alt="cook with me image"
              className="rounded-3xl min-w-20 max-w-64 max-h-80 h-72 w-auto overflow-hidden relative "
            />
            <div className="mb-5 absolute inset-0 flex justify-center items-end">
              <span className="bg-gray-800 hover:bg-gray-900 hover:bg-opacity-70 bg-opacity-50 text-4xl text-white text-center py-3 px-3 font-bold rounded-3xl">
                Let's Cook Together!
              </span>
            </div>
          </button>
        </div>
        <div className="mt-5 mb-3">
          <strong className="mr-16">Allergies: </strong> {allergies}
        </div>
        <div className="mb-3">
          <strong className="mr-14">Difficulty:</strong> {difficulty}
        </div>
        <div className="flex">
          <strong className="mr-10">Ingredients:</strong>
          <div>
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </div>
        </div>
        <div className="my-3 flex">
          <strong>Instructions:</strong>
          <ol className="ml-9">
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}

export default Recipe;
