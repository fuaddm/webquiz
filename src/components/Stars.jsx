import React from 'react';
import styles from './stars.module.css';

const Stars = () => {
  return (
    <div className="absolute left-0 top-0 -z-10 h-full w-full overflow-hidden">
      <div className={`${styles.stars} absolute left-0 top-0 -z-10 h-full w-full`}>
        <div className="absolute left-1/3 top-[140px] h-2 w-2 rounded-full bg-white/100"></div>
        <div className="absolute right-[100px] top-[240px] h-1 w-1 rounded-full bg-white/100"></div>
        <div className="absolute left-2/3 top-[150px] h-1 w-1 rounded-full bg-white/100"></div>
        <div className="absolute left-1/4 top-[180px] h-1 w-1 rounded-full bg-white/30"></div>
        <div className="absolute left-[120px] top-[240px] h-1.5 w-1.5 rounded-full bg-white/60"></div>
        <div className="absolute left-[200px] top-[640px] h-1.5 w-1.5 rounded-full bg-white/60"></div>
        <div className="absolute left-1/2 top-[640px] h-1 w-1 rounded-full bg-white/100"></div>
      </div>
    </div>
  );
};

export default Stars;
