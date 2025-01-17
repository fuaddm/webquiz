'use client';
import React, { useState } from 'react';
import SvgArrow from '@/svg/Arrow';
import SvgSuccess from '@/svg/Success';
import ArrowV2 from '@/svg/ArrowV2';
import { useRouter } from 'next/navigation';
import QuizReview from '@/components/Page/QuizReview';
import Results from '@/components/Page/Results';
import { CodeBlock, github } from 'react-code-blocks';
import js_beautify from 'js-beautify';

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

  let questionText = question;

  function getCodePart(question) {
    const tagStart = question.indexOf('<fdCode>');
    const tagEnd = question.indexOf('</fdCode>');
    if (tagStart != -1 && tagEnd != -1) {
      const codePart = question.slice(tagStart + 8, tagEnd);
      questionText = questionText.split('');
      questionText.splice(tagStart, tagEnd + 8);
      questionText = questionText.join('');
      return codePart;
    }
    return null;
  }
  const codePart = getCodePart(question);

  if (isFinished && isReviewAnswer) {
    return (
      <QuizReview
        data={data}
        userData={userData}
        setIsReviewAnswer={setIsReviewAnswer}
      />
    );
  } else if (isFinished) {
    return (
      <Results
        points={points}
        result={result}
        userData={userData}
        router={router}
        setIsReviewAnswer={setIsReviewAnswer}
      />
    );
  }
  return (
    <div className="grid w-full grid-cols-1 grid-rows-[min-content_1fr] md:min-w-[600px] md:max-w-[600px]">
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
        <div className="relative z-50 flex h-full w-full flex-col rounded-3xl bg-white px-4 pb-3 pt-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm font-semibold text-slate-500">Choose 1 of 4 answers</span>
          </div>
          <div className="mb-6 text-xl font-semibold">
            {questionText}
            <div className="text-base">
              {codePart && (
                <div className="mt-2">
                  <CodeBlock
                    text={js_beautify(codePart, {})}
                    language={'javascript'}
                    showLineNumbers={false}
                    wrapLongLines={true}
                    theme={github}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="mb-6 grid grid-rows-[repeat(4,min-content)] gap-3 overflow-x-auto">
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
                    className={`${userData[questionNum].answered == index ? 'bg-blue-600' : 'bg-slate-100 hover:bg-slate-200'} flex cursor-pointer items-center justify-between gap-4 rounded-lg p-4`}>
                    <div className={`${userData[questionNum].answered == index ? 'text-white' : ''} text-base font-normal`}>{item}</div>
                    <div className={`${userData[questionNum].answered == index ? 'border-white bg-white' : 'border-slate-500'} grid h-5 w-5 place-items-center rounded-full border-2`}>
                      <SvgSuccess className={`${userData[questionNum].answered == index ? 'stroke-blue-600' : 'stroke-transparent'} h-4 w-4`} />
                    </div>
                  </div>
                </label>
              );
            })}
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
