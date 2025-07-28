"use client";

import React, { useState } from "react";

const choices = [
  { label: "A", text: "Bla bla bla ble ble ble blu blu blu" },
  { label: "B", text: "Bla bla bla ble ble ble blu blu blu" },
  { label: "C", text: "Bla bla bla ble ble ble blu blu blu" },
  { label: "D", text: "Bla bla bla ble ble ble blu blu blu" },
];

const QuizPage = () => {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-screen bg-[#18171D] text-white">

      {/* Header */}
      <div className="h-7/11 bg-[#27262C] px-4 py-5 text-2xl font-bold">
        da quiz
      </div>

      <div className="h-6/11">
        {/* Choices */}
        <div className="flex-1 px-4 py-4 space-y-2">
          {choices.map((choice) => (
            <button
              key={choice.label}
              type="button"
              onClick={() => setSelected(choice.label)}
              className={`w-full flex items-start space-x-3 rounded-md p-5 shadow transition-colors duration-150
                ${selected === choice.label ? "bg-[#23232a] ring-2 ring-[#58CA88]" : "bg-[#39BEB9]"}
              `}
            >
              <p className="text-xl text-gray-200">{choice.label}</p>
              <p className="text-sm text-gray-100">{choice.text}</p>
            </button>
          ))}
        </div>

        {/* Submit Button */}
        <div className="px-4 pb-6">
          <button className="w-full py-6 bg-[#58CA88] text-white text-lg rounded-md shadow-md">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
