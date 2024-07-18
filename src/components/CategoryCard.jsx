'use client';
import React, { useEffect, useState } from 'react';
import styles from './category.module.css';

const CategoryCard = ({ categories }) => {
  const [selected, setSelected] = useState(0);
  const [touchCords, setTouchCords] = useState({
    touchStartX: null,
    touchEndX: null,
  });

  function touchStart(e) {
    setTouchCords((prevCords) => {
      return {
        ...prevCords,
        touchStartX: e.changedTouches[0].clientX,
      };
    });
  }
  function touchEnd(e) {
    setTouchCords((prevCords) => {
      if (prevCords.touchStartX - e.changedTouches[0].clientX > 0) {
      }
      return {
        ...prevCords,
        touchEndX: e.changedTouches[0].clientX,
      };
    });
  }

  useEffect(() => {
    function arrowEvents(e) {
      if (e.code == 'ArrowRight') {
        setSelected((prev) => {
          if (prev < 2) {
            return ++prev;
          }
          return prev;
        });
      } else if (e.code == 'ArrowLeft') {
        setSelected((prev) => {
          if (prev > 0) {
            return --prev;
          }
          return prev;
        });
      }
    }
    window.addEventListener('keydown', arrowEvents);

    return () => window.removeEventListener('keydown', arrowEvents);
  }, []);

  return (
    <div className={`${styles.card} w-full overflow-hidden rounded-3xl bg-[#24272e] p-8 md:w-[400px]`}>
      <div
        onTouchStart={touchStart}
        onTouchEnd={touchEnd}
        className="relative flex h-[400px] items-center justify-center">
        <div
          style={{ transform: `translateX(-${selected * 120}px)` }}
          className="absolute left-[120px] top-0 z-50 flex h-full w-full items-center justify-center gap-8 transition-all duration-300">
          {categories.map((item, index) => {
            return (
              <div
                key={item._id}
                onClick={() => setSelected(index)}
                className={`${categories[selected].name == item.name ? styles.logoCircle : styles.logoCircle2} grid h-[88px] min-h-[88px] w-[88px] min-w-[88px] cursor-pointer place-items-center rounded-full bg-[#24272e] transition-all delay-150 duration-0`}>
                <img
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
          <div className={`${styles.circle} absolute left-1/2 top-0 grid h-4 w-4 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#24272e] p-1`}>
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </div>
          <div className={`${styles.circle} absolute bottom-0 left-1/2 grid h-4 w-4 -translate-x-1/2 translate-y-1/2 place-items-center rounded-full bg-[#24272e] p-1`}>
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </div>
          <div className="absolute left-1/2 top-0 h-[150px] w-[1px] -translate-x-1/2 -translate-y-full bg-gradient-to-t from-white/40"></div>
          <div className="absolute bottom-0 left-1/2 h-[80px] w-[1px] -translate-x-1/2 translate-y-full bg-gradient-to-b from-white/40"></div>
        </div>
        <div className="absolute left-0 top-0 z-30 h-full w-full">
          <div className="absolute left-1/2 top-1/2 aspect-square w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border-t border-white/10"></div>
          <div className="absolute left-1/2 top-1/2 aspect-square w-[240px] -translate-x-1/2 -translate-y-1/2 rounded-full border-t border-white/30 bg-white/5"></div>
          <div className={`${styles.squareShadow} absolute left-1/2 top-1/2 h-[130px] w-9/12 -translate-x-1/2 -translate-y-[30px] rounded-full bg-[#24272e]`}></div>
          <span className="absolute bottom-10 left-1/2 -translate-x-1/2 text-base font-normal text-white/80">{categories[selected].questionCount} QUESTIONS</span>
        </div>
      </div>
      <div className="relative z-50">
        <div className="mb-1 text-2xl font-semibold text-white/90">{categories[selected].name}</div>
        <div className="mb-5 text-lg font-normal text-white/70">Test your {categories[selected].name} skills from basics to advanced!</div>
        <button className={`${styles.button} w-fit rounded-full px-8 py-3`}>
          <span className="text-lg font-medium text-white/80">Start quiz</span>
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
