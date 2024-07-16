"use client";
import React, { useState } from "react";
import SvgFlag from "../svg/Flag";
import SvgArrow from "../svg/Arrow";
import SvgSuccess from "../svg/Success";

const QuizCard = () => {
  const arr = ["<javascript>", "<script>", "<js>", "<scripting>"];
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative">
      <div className="absolute z-20 top-0 -translate-x-1/2 -translate-y-12 left-1/2 rounded-3xl bg-white/5 py-6 px-4 h-full w-[calc(100%-130px)] backdrop-blur-sm"></div>
      <div className="absolute z-30 top-0 -translate-x-1/2 -translate-y-8 left-1/2 rounded-3xl bg-white/20 py-6 px-4 h-full w-[calc(100%-80px)] backdrop-blur-sm"></div>
      <div className="absolute z-40 top-0 -translate-x-1/2 -translate-y-4 left-1/2 rounded-3xl bg-white/40 py-6 px-4 h-full w-[calc(100%-30px)] backdrop-blur-sm"></div>
      <div className="relative z-50 rounded-3xl bg-white py-6 px-4 w-full">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-slate-500 font-semibold">
            Choose 1 of 4 answers
          </span>
          <div className="group hover:bg-slate-300 transition-colors p-2 cursor-pointer rounded-xl">
            <SvgFlag className="w-5 h-5 fill-slate-500 transition-colors duration-300 group-hover:fill-slate-800" />
          </div>
        </div>
        <div className="text-xl font-semibold mb-6">
          Inside which HTML element do we put the JavaScript?
        </div>
        <div className="flex flex-col gap-3 mb-6">
          {arr.map((item) => {
            return (
              <div
                key={item}
                onClick={() => setSelected(item)}
                className={`${selected == item ? "selectedOption bg-blue-600" : "bg-slate-100 hover:bg-slate-200"} grid cursor-pointer transition-all duration-300 grid-cols-[1fr_min-content] items-center gap-4 p-4 rounded-lg`}
              >
                <div
                  className={`${selected == item ? "text-white" : ""} transition-colors duration-300 text-base font-normal`}
                >
                  {item}
                </div>
                <div
                  className={`${selected == item ? "bg-white border-white" : "border-slate-500"} w-5 h-5 transition-colors grid place-items-center duration-300 rounded-full border-2`}
                >
                  <SvgSuccess
                    className={`${selected == item ? "stroke-blue-600" : "stroke-transparent"} transition-colors duration-300 w-4 h-4`}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 gap-4 justify-between items-center">
          <button className="p-3 bg-slate-100 rounded-lg transition duration-300 hover:bg-slate-200 font-medium flex justify-center items-center gap-2">
            <SvgArrow className="w-5 h-5 fill-[#01283d]" />
            Back
          </button>
          <button className="bg-blue-600 hover:bg-blue-700 transition duration-300 p-3 rounded-lg text-white font-medium flex justify-center items-center gap-2">
            Next
            <SvgArrow className="w-5 h-5 fill-white rotate-180" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
