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

    <div className="bg-[#18171D] max-h-screen flex flex-col">

      <div className="h-45 py-1 px-2 m-3 rounded-[6px] bg-[#27262C]">
        da quiz
      </div>

      <div className="grid gap-2 mx-3">
        {choices.map((choice) => (
          <button
            key={choice.label}
            type="button"
            onClick={() => setSelected(choice.label)}
            className={`flex flex-row items-center justify-start rounded-[6px] shadow-md p-2
              bg-[#39BEB9]
              ${selected === choice.label ? "ring-2 ring-[#58CA88] bg-[#23232a]" : ""}
            `}
          >
            <p className="mr-3 ml-1 text-xl text-gray-400">{choice.label}</p>
            <p className="text-gray-100 text-xs">{choice.text}</p>
          </button>
        ))}
      </div>

      <button className="mx-3 mt-4 bg-[#58CA88] text-xl rounded-md shadow-md">
        Submit
      </button>

    </div>

  );
};

export default QuizPage;