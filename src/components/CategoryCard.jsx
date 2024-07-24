'use client';
import React, { useEffect } from 'react';
import styles from './category.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const CategoryCard = ({ categories, selected, setSelected }) => {
  const router = useRouter();

  function goRight() {
    setSelected((prev) => {
      if (prev < categories.length - 1) {
        return ++prev;
      }
      return prev;
    });
  }
  function goLeft() {
    setSelected((prev) => {
      if (prev > 0) {
        return --prev;
      }
      return prev;
    });
  }

  useEffect(() => {
    function arrowEvents(e) {
      if (e.code == 'ArrowRight') {
        goRight();
      } else if (e.code == 'ArrowLeft') {
        goLeft();
      } else if (e.code == 'Enter') {
        submit();
      }
    }
    window.addEventListener('keydown', arrowEvents);

    return () => window.removeEventListener('keydown', arrowEvents);
  }, []);

  function submit() {
    router.push(`/quiz/${categories[selected]._id}`);
  }

  return (
    <div className="w-full md:w-[400px]">
      <div className="relative z-10 mb-4 flex items-center justify-between px-4 lg:hidden">
        <button
          onClick={goLeft}
          className={`${styles.navigationBtn} overflow-hidden rounded-xl bg-[#24272e] px-12 py-2 text-base font-medium text-white/80`}>
          Prev
        </button>
        <button
          onClick={goRight}
          className={`${styles.navigationBtn} overflow-hidden rounded-xl bg-[#24272e] px-12 py-2 text-base font-medium text-white/80`}>
          Next
        </button>
      </div>
      <div className={`${styles.card} relative z-20 overflow-hidden rounded-3xl bg-[#24272e] p-8`}>
        <div className="relative z-40 flex h-[400px] items-center justify-center">
          <div
            style={{ transform: `translateX(-${selected * 120}px)` }}
            className="absolute left-[120px] top-0 z-50 flex h-full w-full items-center justify-center gap-8 transition-all duration-300">
            {categories.map((item, index) => {
              return (
                <div
                  key={item._id}
                  onClick={() => setSelected(index)}
                  className={`${categories[selected].name == item.name ? styles.logoCircle : styles.logoCircle2} grid h-[88px] min-h-[88px] w-[88px] min-w-[88px] cursor-pointer place-items-center rounded-full bg-[#24272e] transition-all delay-200 duration-0`}>
                  <Image
                    src={`assets/${item.name}.svg`}
                    width={80}
                    height={80}
                    alt={item.name}
                  />
                </div>
              );
            })}
          </div>
          <div className={`${styles.circleInCenter} relative z-50 h-28 w-28 rounded-full border-2 border-white/60 p-2.5`}>
            <div className="absolute left-0 top-0 h-full w-full">
              <div className={`${styles.circle} absolute left-1/2 top-0 grid h-4 w-4 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#24272e] p-1`}>
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>
              <div className={`${styles.circle} absolute bottom-0 left-1/2 grid h-4 w-4 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-[#24272e] p-1`}>
                <div className="h-2 w-2 rounded-full bg-white"></div>
              </div>
            </div>
            <div className="absolute left-1/2 top-0 h-[150px] w-[1px] -translate-x-1/2 -translate-y-full bg-gradient-to-t from-white/40"></div>
            <div className="absolute bottom-0 left-1/2 h-[80px] w-[1px] -translate-x-1/2 translate-y-full bg-gradient-to-b from-white/40"></div>
          </div>
          <div className="absolute left-0 top-0 z-30 h-full w-full">
            <div className="absolute left-1/2 top-1/2 aspect-square w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border-t border-white/10"></div>
            <div className="absolute left-1/2 top-1/2 aspect-square w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border-t border-white/30 bg-white/5"></div>
            <div className={`${styles.squareShadow} absolute left-1/2 top-1/2 h-[130px] w-9/12 -translate-x-1/2 -translate-y-[30px] rounded-full bg-[#24272e]`}></div>
            <div className={`${styles.questionCountShadow} absolute bottom-4 left-1/2 -translate-x-1/2 rounded-xl bg-[#3b3e43] px-5 py-2`}>
              <span className="whitespace-nowrap text-sm font-medium text-white/80">{categories[selected].questionCount} QUESTIONS</span>
            </div>
          </div>
        </div>
        <div className="relative z-50">
          <div className="mb-1 text-2xl font-semibold text-white/90">{categories[selected].name}</div>
          <div className="mb-5 text-lg font-normal text-white/70">Test your {categories[selected].name} skills from basics to advanced!</div>
          <button
            onClick={submit}
            className={`${styles.button} w-fit rounded-full px-8 py-3 transition-all will-change-[box-shadow]`}>
            <span className="text-lg font-medium text-white/80">Start quiz</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
