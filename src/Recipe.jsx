import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

function Recipe({ data, recipeId }) {
  const {
    title,
    image,
    allergies,
    difficulty,
    ingredients,
    amounts,
    instructions,
  } = data;

  const [dishes, setDishes] = useState(1); // State to hold the selected number of dishes

  const handleClick = (recipeId) => {
    window.location.href = "/Icook/CookWithMe/" + recipeId;
  };

  // Function to handle change in the number of dishes
  const handleDishChange = (e) => {
    setDishes(Number(e.target.value));
  };

  return (
    <>
      <NavigationBar title={title} />
      <div className="recipe pl-6 mx-6 mb-5 text-2xl">
        <div className="grid grid-cols-2 grid-rows-1 max-w-5xl mx-auto">
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
        <div className="details max-w-5xl mx-auto">
          {/* ComboBox for selecting the number of dishes */}
          <div className="my-4 flex justify-center">
            <label
              htmlFor="dishCount"
              className="text-3xl font-medium text-gray-900"
            >
              Number of Dishes:
            </label>
            <select
              id="dishCount"
              className="bg-gray-100 border border-gray-300 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto p-2 mx-12"
              onChange={handleDishChange}
              value={dishes}
            >
              {[...Array(10).keys()].map((number) => (
                <option key={number + 1} value={number + 1}>
                  {number + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-5 mb-3">
            <strong className="mr-16">Allergies: </strong> {allergies}
          </div>
          <div className="mb-3">
            <strong className="mr-14">Difficulty:</strong> {difficulty}
          </div>
          <div className="flex">
            <strong className="mr-10">Ingredients:</strong>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  {`${amounts[index] * dishes} ${ingredient}`}
                </li>
              ))}
            </ul>
          </div>
          <div className="my-3 flex">
            <strong>Instructions:</strong>
            <ol className="ml-9">
              {instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <strong className="min-w-[2rem]">{index + 1}.</strong>
                  <span className="flex-1">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </>
  );
}

export default Recipe;
