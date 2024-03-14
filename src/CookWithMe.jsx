import React, { useState, useMemo } from "react";
import NavigationBar from "./NavigationBar";

function CookWithMe({ data }) {
  const { title, instructions, duration } = data;
  const [currentStep, setCurrentStep] = useState(0);

  // Calculate the total duration
  const totalDuration = useMemo(
    () => duration.reduce((acc, cur) => acc + cur, 0),
    [duration]
  );

  // Calculate the duration up to the current step
  const currentDuration = useMemo(
    () => duration.slice(0, currentStep + 1).reduce((acc, cur) => acc + cur, 0),
    [currentStep, duration]
  );

  // Calculate the progress percentage
  const progressPercentage = (currentDuration / totalDuration) * 100;

  const handleNext = () => {
    if (currentStep < instructions.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <>
      <NavigationBar title={title} />
      <div className="flex flex-col items-center md:mt-5">
        <div className="flex justify-between items-center w-auto mt-2 md:mb-2 text-xl md:text-2xl">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <h2 className="text-xl md:text-3xl font-semibold mx-20 sm:mx-20 md:mx-20 lg:mx-40 xl:mx-50">
            Step {currentStep + 1} of {instructions.length}
          </h2>
          <button
            onClick={handleNext}
            disabled={currentStep === instructions.length - 1}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 md:py-2 md:px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
        {/* Progress Bar */}
        <div className="md:text-2xl text-cyan-800 font-semibold mb-2">
          {"estimate cooking progress: " + Math.round(progressPercentage) + "%"}
        </div>
        <div className="w-10/12 md:w-2/5 bg-gray-200 rounded-full h-4 md:h-5 dark:bg-gray-700 mb-4">
          <div
            className="bg-green-600 h-4 md:h-5 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="mb-4 px-4 text-center text-xl md:text-3xl">
          {instructions[currentStep]}
        </p>
        <div className="flex justify-center w-full px-3">
          <img
            src={`/Icook/${title}_${currentStep + 1}.jpg`}
            alt={`Step ${currentStep + 1}`}
            className="w-full md:w-2/5 h-72 md:h-96 object-cover rounded-md "
          />
        </div>
      </div>
    </>
  );
}

export default CookWithMe;
