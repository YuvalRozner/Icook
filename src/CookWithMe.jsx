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
        <div className="flex justify-between items-center w-auto mb-2 text-2xl">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Prev
          </button>
          <h2 className="text-3xl font-semibold mx-20 sm:mx-20 md:mx-20 lg:mx-40 xl:mx-50">
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
        {/* Progress Bar */}
        <div className="text-xl text-cyan-800 font-semibold">
          {"estimate cooking progress: " + Math.round(progressPercentage) + "%"}
        </div>
        <div className="w-1/3  bg-gray-200 rounded-full h-4 dark:bg-gray-700 mb-4">
          <div
            className="bg-green-600 h-4 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p className="mb-4 px-4 text-center text-2xl">
          {instructions[currentStep]}
        </p>
        <img
          src={`/Icook/${title}_${currentStep + 1}.jpg`}
          alt={`Step ${currentStep + 1}`}
          className="max-w-lg h-auto rounded-md shadow-lg mb-4"
        />
      </div>
    </>
  );
}

export default CookWithMe;
