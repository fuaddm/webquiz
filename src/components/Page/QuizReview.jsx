import React from 'react';
import SvgSuccess from '@/svg/Success';
import SvgError from '@/svg/Error';
import ArrowV2 from '@/svg/ArrowV2';
import { CodeBlock, github } from 'react-code-blocks';
import js_beautify from 'js-beautify';

const QuizReview = ({ data, userData, setIsReviewAnswer }) => {
  return (
    <div className="md:max-w-[600px]">
      <div className="mb-6 grid grid-cols-3 items-center gap-4">
        <div
          onClick={() => setIsReviewAnswer(false)}
          className="w-fit cursor-pointer rounded-xl p-2 transition duration-300 hover:bg-white/10">
          <ArrowV2 className="h-6 w-6 fill-white" />
        </div>
      </div>
      <div className="flex h-fit w-full flex-col justify-center rounded-3xl bg-white px-3 py-6 md:p-6">
        <div className="mb-6 text-center text-2xl font-bold">Quiz</div>
        <div className="flex flex-col gap-3">
          {data.questions.map((item, index) => {
            let questionText = item.question;

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
            const codePart = getCodePart(item.question);

            return (
              <div
                key={item._id}
                className="grid grid-cols-[min-content_minmax(0,1fr)] gap-2">
                <div className="text-lg font-normal">{index + 1}. </div>
                <div className="flex flex-col">
                  <div className="mb-3 text-xl font-semibold">
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
                  <div className="grid grid-rows-[repeat(4,min-content)] gap-3 overflow-x-auto">
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
                            <div className={`${userData[index].answered == optionsIndex ? 'bg-green-600' : 'bg-slate-100'} flex items-center justify-between gap-4 rounded-lg p-4`}>
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
                            <div className="flex items-center justify-between gap-4 rounded-lg bg-slate-600 p-4">
                              <div className="text-base font-normal text-white">{option}</div>
                              <div className="grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-white">
                                <SvgSuccess className="h-4 w-4 stroke-slate-600" />
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
                            <div className="flex items-center justify-between gap-4 rounded-lg bg-slate-600 p-4">
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
                            <div className="flex items-center justify-between gap-4 rounded-lg bg-red-600 p-4">
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
                          <div className="flex items-center justify-between gap-4 rounded-lg bg-slate-100 p-4">
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
    </div>
  );
};

export default QuizReview;
