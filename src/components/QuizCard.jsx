'use client';
import React, { useEffect, useState } from 'react';
import SvgFlag from '../svg/Flag';
import SvgArrow from '../svg/Arrow';
import SvgSuccess from '../svg/Success';
import ArrowV2 from '@/svg/ArrowV2';
import { useRouter } from 'next/navigation';

const QuizCard = ({ data }) => {
  const router = useRouter();
  const tempResult = data.questions.map((question) => {
    return {
      answer: question.correctAnswer,
      answered: null,
    };
  });
  const [result, setResult] = useState(tempResult);
  const [questionNum, setQuestionNum] = useState(0);
  const question = data.questions[questionNum].question;
  const options = data.questions[questionNum].options;

  function nextQuestion() {
    if (questionNum < data.questions.length - 1) {
      setQuestionNum((prev) => ++prev);
    }
  }

  function prevQuestion() {
    if (questionNum > 0) {
      setQuestionNum((prev) => --prev);
    }
  }

  return (
    <div className="grid h-full max-w-[600px] grid-rows-[min-content_1fr] md:min-w-[600px]">
      <div className="mb-16 grid grid-cols-3 items-center gap-4">
        <div
          onClick={() => router.push('/')}
          className="w-fit cursor-pointer rounded-xl p-2 transition duration-300 hover:bg-white/10">
          <ArrowV2 className="h-6 w-6 fill-white" />
        </div>
        <div className="text-center text-xl font-normal text-white">
          {questionNum + 1}/{data.questions.length}
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute left-1/2 top-0 z-20 h-full w-[calc(100%-130px)] -translate-x-1/2 -translate-y-12 rounded-3xl bg-white/5 px-4 py-6 backdrop-blur-sm"></div>
        <div className="absolute left-1/2 top-0 z-30 h-full w-[calc(100%-80px)] -translate-x-1/2 -translate-y-8 rounded-3xl bg-white/20 px-4 py-6 backdrop-blur-sm"></div>
        <div className="absolute left-1/2 top-0 z-40 h-full w-[calc(100%-30px)] -translate-x-1/2 -translate-y-4 rounded-3xl bg-white/40 px-4 py-6 backdrop-blur-sm"></div>
        <div className="relative z-50 flex h-full w-full flex-col justify-between rounded-3xl bg-white px-4 pb-3 pt-6">
          <div>
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-500">Choose 1 of 4 answers</span>
              <div className="group cursor-pointer rounded-xl p-2 transition-colors hover:bg-slate-300">
                <SvgFlag className="h-5 w-5 fill-slate-500 transition-colors duration-300 group-hover:fill-slate-800" />
              </div>
            </div>
            <div className="mb-6 text-xl font-semibold">{question}</div>
            <div className="mb-6 flex flex-col gap-3">
              {options.map((item, index) => {
                return (
                  <label
                    key={item}
                    htmlFor={item + index}>
                    <input
                      type="radio"
                      className="hidden"
                      name="options"
                      id={item + index}
                    />
                    <div
                      onClick={() => {
                        setResult((prev) => {
                          let tempArr = prev;
                          tempArr[questionNum].answered = index;
                          return tempArr;
                        });
                      }}
                      className={`${result[questionNum].answered == index ? 'bg-blue-600' : 'bg-slate-100 hover:bg-slate-200'} grid cursor-pointer grid-cols-[1fr_min-content] items-center gap-4 rounded-lg p-4`}>
                      <div className={`${result[questionNum].answered == index ? 'text-white' : ''} text-base font-normal`}>{item}</div>
                      <div className={`${result[questionNum].answered == index ? 'border-white bg-white' : 'border-slate-500'} grid h-5 w-5 place-items-center rounded-full border-2`}>
                        <SvgSuccess className={`${result[questionNum].answered == index ? 'stroke-blue-600' : 'stroke-transparent'} h-4 w-4`} />
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>
          </div>
          <div className="grid grid-cols-2 items-center justify-between gap-4">
            <button
              onClick={prevQuestion}
              className="flex items-center justify-center gap-2 rounded-lg bg-slate-100 p-3 font-medium transition duration-300 hover:bg-slate-200">
              <SvgArrow className="h-5 w-5 fill-[#01283d]" />
              Back
            </button>
            <button
              onClick={nextQuestion}
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 p-3 font-medium text-white transition duration-300 hover:bg-blue-700">
              Next
              <SvgArrow className="h-5 w-5 rotate-180 fill-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
