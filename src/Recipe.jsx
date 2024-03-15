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
    window.location.href = "#/CookWithMe/" + recipeId;
  };

  // Function to handle change in the number of dishes
  const handleDishChange = (e) => {
    setDishes(Number(e.target.value));
  };

  return (
    <>
      <NavigationBar title={title} />
      <div className="bg-neutral-200 recipe px-3 text-lg md:text-2xl">
        <div className="grid grid-cols-2 grid-rows-1 max-w-5xl mx-auto">
          <div className="flex justify-center">
            <img
              src={`/Icook/${title}.jpg`}
              alt={title + " image"}
              className="mt-5 rounded-3xl w-40 h-32 md:w-80 md:h-60 object-cover"
            />
          </div>
          <button
            className="flex justify-center relative duration-300 hover:scale-105"
            onClick={() => handleClick(recipeId)}
          >
            <img
              src="/Icook/cook_with_me.png"
              alt="cook with me image"
              className="w-auto h-44 md:h-72"
            />
            <div className="mb-5 absolute inset-0 flex justify-center items-end">
              <span className="bg-gray-800 hover:bg-gray-900 hover:bg-opacity-70 bg-opacity-50 text-xl md:text-4xl text-white text-center py-1 px-2 md:py-3 md:px-6 font-bold rounded-2xl md:rounded-3xl">
                Cook With Me!
              </span>
            </div>
          </button>
        </div>
        <div className="details max-w-5xl mx-auto">
          {/* ComboBox for selecting the number of dishes */}
          <div className="md:my-4 flex justify-center">
            <label
              htmlFor="dishCount"
              className="text-2xl md:text-3xl font-medium text-gray-900"
            >
              Number of Dishes:
            </label>
            <select
              id="dishCount"
              className="bg-sky-100 border border-gray-500 text-gray-900 text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-auto py-1 md:py-2 px-2 md:px-6 ml-6 md:ml-12"
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
            <strong className="mr-8 md:mr-16">Allergies: </strong> {allergies}
          </div>
          <div className="mb-3">
            <strong className="mr-7 md:mr-14">Difficulty:</strong> {difficulty}
          </div>
          <div className="flex">
            <strong className="mr-4 md:mr-10">Ingredients:</strong>
            <ul>
              {ingredients.map((ingredient, index) => (
                <li key={index}>
                  {`${amounts[index] * dishes} ${ingredient}`}
                </li>
              ))}
            </ul>
          </div>
          <div className="py-3 md:pb-6 flex">
            <strong>Instructions:</strong>
            <ol className="ml-3 md:ml-9">
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
