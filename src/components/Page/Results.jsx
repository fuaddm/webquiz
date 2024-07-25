import React from 'react';
import Image from 'next/image';
import ArrowV2 from '@/svg/ArrowV2';

const Results = ({ points, result, userData, setIsReviewAnswer, router }) => {
  return (
    <div className="mx-auto max-w-[600px]">
      <div className="mb-6 grid grid-cols-3 items-center gap-4">
        <div
          onClick={() => router.push('/')}
          className="w-fit cursor-pointer rounded-xl p-2 transition duration-300 hover:bg-white/10">
          <ArrowV2 className="h-6 w-6 fill-white" />
        </div>
      </div>
      <div className="flex h-fit w-full max-w-[600px] flex-col items-center justify-center rounded-3xl bg-white px-4 py-6">
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
        <div className="max-auto flex w-full max-w-[240px] flex-col items-center justify-center gap-2">
          <button
            onClick={() => router.push('/')}
            className="grid w-full place-items-center rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition duration-300 hover:bg-blue-700">
            Ok, done
          </button>
          <button
            onClick={() => setIsReviewAnswer(true)}
            className="grid w-full place-items-center rounded-lg bg-slate-100 px-6 py-3 font-medium transition duration-300 hover:bg-slate-200">
            Review the answer
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
