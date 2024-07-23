'use client';
import React, { useEffect, useState } from 'react';
import SvgFlag from '../svg/Flag';
import SvgArrow from '../svg/Arrow';
import SvgSuccess from '../svg/Success';
import ArrowV2 from '@/svg/ArrowV2';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import SvgError from '@/svg/Error';

const QuizCard = ({ data }) => {
  const router = useRouter();
  const tempResult = data.questions.map((question) => {
    return {
      answer: question.correctAnswer,
      answered: null,
    };
  });
  const [userData, setUserData] = useState(tempResult);
  const [result, setResult] = useState({
    nonAnswered: 0,
    wrongAnswered: 0,
    trueAnswered: 0,
  });
  const [questionNum, setQuestionNum] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isReviewAnswer, setIsReviewAnswer] = useState(false);
  const question = data.questions[questionNum].question;
  const options = data.questions[questionNum].options;

  function nextQuestion() {
    if (questionNum < data.questions.length - 1) {
      setQuestionNum((prev) => ++prev);
    } else if (questionNum == data.questions.length - 1) {
      finish();
    }
  }

  function prevQuestion() {
    if (questionNum > 0) {
      setQuestionNum((prev) => --prev);
    }
  }

  function finish() {
    setIsFinished(true);
    setResult((prev) => {
      userData.forEach((test) => {
        if (test.answered == null) {
          prev['nonAnswered'] += 1;
        } else if (test.answered !== test.answer) {
          prev['wrongAnswered'] += 1;
        } else if (test.answered === test.answer) {
          prev['trueAnswered'] += 1;
        }
      });
      return structuredClone(prev);
    });
  }

  const points = ((result.trueAnswered / userData.length) * 10).toFixed(1);

  if (isFinished && isReviewAnswer) {
    return (
      <div className="mx-auto flex h-fit w-full max-w-[900px] flex-col justify-center rounded-3xl bg-white p-6">
        <div className="mb-6 text-center text-2xl font-bold">Quiz</div>
        <div className="flex flex-col gap-3">
          {data.questions.map((item, index) => {
            return (
              <div
                key={item._id}
                className="grid grid-cols-[min-content_1fr] gap-2">
                <div className="text-lg font-normal">{index + 1}. </div>
                <div className="flex flex-col">
                  <div className="mb-3 text-xl font-semibold">{item.question}</div>
                  <div className="flex flex-col gap-3">
                    {item.options.map((option, optionsIndex) => {
                      if (userData[index].answered == userData[index].answer) {
                        return (
                          <label
                            key={option + optionsIndex}
                            htmlFor={option + optionsIndex}>
                            <input
                              type="radio"
                              className="hidden"
                              name="options"
                              id={option + optionsIndex}
                            />
                            <div className={`${userData[index].answered == optionsIndex ? 'bg-green-600' : 'bg-slate-100'} grid grid-cols-[1fr_min-content] items-center gap-4 rounded-lg p-4`}>
                              <div className={`${userData[index].answered == optionsIndex ? 'text-white' : ''} text-base font-normal`}>{option}</div>
                              <div className={`${userData[index].answered == optionsIndex ? 'border-white bg-white' : 'border-slate-500'} grid h-5 w-5 place-items-center rounded-full border-2`}>
                                <SvgSuccess className={`${userData[index].answered == optionsIndex ? 'stroke-green-600' : 'stroke-transparent'} h-4 w-4`} />
                              </div>
                            </div>
                          </label>
                        );
                      } else if (userData[index].answer == optionsIndex && userData[index].answered != null) {
                        return (
                          <label
                            key={option + optionsIndex}
                            htmlFor={option + optionsIndex}>
                            <input
                              type="radio"
                              className="hidden"
                              name="options"
                              id={option + optionsIndex}
                            />
                            <div className="grid grid-cols-[1fr_min-content] items-center gap-4 rounded-lg bg-green-600 p-4">
                              <div className="text-base font-normal text-white">{option}</div>
                              <div className="grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-white">
                                <SvgSuccess className="h-4 w-4 stroke-green-600" />
                              </div>
                            </div>
                          </label>
                        );
                      } else if (userData[index].answer == optionsIndex && userData[index].answered == null) {
                        return (
                          <label
                            key={option + optionsIndex}
                            htmlFor={option + optionsIndex}>
                            <input
                              type="radio"
                              className="hidden"
                              name="options"
                              id={option + optionsIndex}
                            />
                            <div className="grid grid-cols-[1fr_min-content] items-center gap-4 rounded-lg bg-slate-600 p-4">
                              <div className="text-base font-normal text-white">{option}</div>
                              <div className="grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-white">
                                <SvgSuccess className="h-4 w-4 stroke-slate-600" />
                              </div>
                            </div>
                          </label>
                        );
                      } else if (userData[index].answered == optionsIndex) {
                        return (
                          <label
                            key={option + optionsIndex}
                            htmlFor={option + optionsIndex}>
                            <input
                              type="radio"
                              className="hidden"
                              name="options"
                              id={option + optionsIndex}
                            />
                            <div className="grid grid-cols-[1fr_min-content] items-center gap-4 rounded-lg bg-red-600 p-4">
                              <div className="text-base font-normal text-white">{option}</div>
                              <div className="grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-white">
                                <SvgError className="h-3 w-3 fill-red-600" />
                              </div>
                            </div>
                          </label>
                        );
                      }
                      return (
                        <label
                          key={option + optionsIndex}
                          htmlFor={option + optionsIndex}>
                          <input
                            type="radio"
                            className="hidden"
                            name="options"
                            id={option + optionsIndex}
                          />
                          <div className="grid grid-cols-[1fr_min-content] items-center gap-4 rounded-lg bg-slate-100 p-4">
                            <div className="text-base font-normal">{option}</div>
                            <div className="grid h-5 w-5 place-items-center rounded-full border-2 border-slate-500">
                              <SvgSuccess className="h-4 w-4 stroke-transparent" />
                            </div>
                          </div>
                        </label>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else if (isFinished) {
    return (
      <div className="mx-auto flex h-fit w-full max-w-[600px] flex-col items-center justify-center rounded-3xl bg-white px-4 py-6">
        <Image
          src="/party.svg"
          width={120}
          height={120}
          className="mb-4"
          alt="party"
        />
        <span className="mb-4 text-center text-xl font-bold">Congratulations 🎉</span>
        <span className="mb-3 text-6xl font-semibold text-blue-500">{points}</span>
        <span className="mb-6 text-base font-medium text-slate-600">Points</span>
        <span className="mb-6 text-base font-medium text-slate-600">
          You have completed exactly{' '}
          <span className="font-bold text-blue-500">
            {result.trueAnswered}/{userData.length}
          </span>{' '}
          questions
        </span>
        <div className="flex w-full flex-col items-center justify-center gap-2">
          <button
            onClick={() => router.push('/')}
            className="grid w-full place-items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition duration-300 hover:bg-blue-700 md:w-fit">
            Ok, done
          </button>
          <button
            onClick={() => setIsReviewAnswer(true)}
            className="grid w-full place-items-center rounded-lg bg-slate-100 px-6 py-3 font-medium transition duration-300 hover:bg-slate-200 md:w-fit">
            Review the answer
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="mx-auto grid h-full max-w-[600px] grid-rows-[min-content_1fr] md:min-w-[600px]">
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
                        setUserData((prev) => {
                          let tempArr = structuredClone(prev);
                          tempArr[questionNum].answered = index;
                          return tempArr;
                        });
                      }}
                      className={`${userData[questionNum].answered == index ? 'bg-blue-600' : 'bg-slate-100 hover:bg-slate-200'} grid cursor-pointer grid-cols-[1fr_min-content] items-center gap-4 rounded-lg p-4`}>
                      <div className={`${userData[questionNum].answered == index ? 'text-white' : ''} text-base font-normal`}>{item}</div>
                      <div className={`${userData[questionNum].answered == index ? 'border-white bg-white' : 'border-slate-500'} grid h-5 w-5 place-items-center rounded-full border-2`}>
                        <SvgSuccess className={`${userData[questionNum].answered == index ? 'stroke-blue-600' : 'stroke-transparent'} h-4 w-4`} />
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
