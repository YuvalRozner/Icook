import React, { useState } from "react";
import NavigationBar from "./NavigationBar";

function CookWithMe({ data }) {
  const { title, instructions, pics } = data;
  const [currentStep, setCurrentStep] = useState(0);

  // Increment current step, not exceeding the instructions array length
  const handleNext = () => {
    if (currentStep < instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Decrement current step, not going below 0
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <NavigationBar title={title} />
      <div className="flex flex-col items-center mt-4">
        <div className="flex justify-between items-center w-auto mb-2 text-2xl">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <h2 className="text-3xl font-semibold mx-28">
            Step {currentStep + 1} of {instructions.length}
          </h2>
          <button
            onClick={handleNext}
            disabled={currentStep === instructions.length - 1}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
        <p className="mb-4 px-4 text-center text-2xl">
          {instructions[currentStep]}
        </p>
        {pics[currentStep] && (
          <img
            src={"/Icook/" + pics[currentStep]}
            alt={`Step ${currentStep + 1}`}
            className="max-w-xl h-auto rounded-md shadow-lg mb-4"
          />
        )}
      </div>
    </>
  );
}

export default CookWithMe;
