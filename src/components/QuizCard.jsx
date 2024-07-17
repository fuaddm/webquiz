'use client';
import React, { useState } from 'react';
import SvgFlag from '../svg/Flag';
import SvgArrow from '../svg/Arrow';
import SvgSuccess from '../svg/Success';

const QuizCard = () => {
  const arr = ['<javascript>', '<script>', '<js>', '<scripting>'];
  const [selected, setSelected] = useState(null);

  return (
    <div className="relative">
      <div className="absolute left-1/2 top-0 z-20 h-full w-[calc(100%-130px)] -translate-x-1/2 -translate-y-12 rounded-3xl bg-white/5 px-4 py-6 backdrop-blur-sm"></div>
      <div className="absolute left-1/2 top-0 z-30 h-full w-[calc(100%-80px)] -translate-x-1/2 -translate-y-8 rounded-3xl bg-white/20 px-4 py-6 backdrop-blur-sm"></div>
      <div className="absolute left-1/2 top-0 z-40 h-full w-[calc(100%-30px)] -translate-x-1/2 -translate-y-4 rounded-3xl bg-white/40 px-4 py-6 backdrop-blur-sm"></div>
      <div className="relative z-50 w-full rounded-3xl bg-white px-4 py-6">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-semibold text-slate-500">Choose 1 of 4 answers</span>
          <div className="group cursor-pointer rounded-xl p-2 transition-colors hover:bg-slate-300">
            <SvgFlag className="h-5 w-5 fill-slate-500 transition-colors duration-300 group-hover:fill-slate-800" />
          </div>
        </div>
        <div className="mb-6 text-xl font-semibold">Inside which HTML element do we put the JavaScript?</div>
        <div className="mb-6 flex flex-col gap-3">
          {arr.map((item) => {
            return (
              <div
                key={item}
                onClick={() => setSelected(item)}
                className={`${selected == item ? 'selectedOption bg-blue-600' : 'bg-slate-100 hover:bg-slate-200'} grid cursor-pointer grid-cols-[1fr_min-content] items-center gap-4 rounded-lg p-4 transition-all duration-300`}>
                <div className={`${selected == item ? 'text-white' : ''} text-base font-normal transition-colors duration-300`}>{item}</div>
                <div className={`${selected == item ? 'border-white bg-white' : 'border-slate-500'} grid h-5 w-5 place-items-center rounded-full border-2 transition-colors duration-300`}>
                  <SvgSuccess className={`${selected == item ? 'stroke-blue-600' : 'stroke-transparent'} h-4 w-4 transition-colors duration-300`} />
                </div>
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 items-center justify-between gap-4">
          <button className="flex items-center justify-center gap-2 rounded-lg bg-slate-100 p-3 font-medium transition duration-300 hover:bg-slate-200">
            <SvgArrow className="h-5 w-5 fill-[#01283d]" />
            Back
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 p-3 font-medium text-white transition duration-300 hover:bg-blue-700">
            Next
            <SvgArrow className="h-5 w-5 rotate-180 fill-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
