import React from 'react';
import styles from './key.module.css';

const Key = ({ isActive, children }) => {
  return (
    <button
      tabIndex={0}
      className={`${styles.key} group box-content h-20 w-20 rounded-2xl bg-[#16181d]`}>
      <div
        className={`${styles.keyInner} ${isActive ? 'scale-90' : 'scale-100'} absolute left-1/2 top-2 grid h-14 w-14 -translate-x-1/2 place-items-center rounded-xl bg-[#21242c] transition-transform group-active:scale-90`}>
        <span className="text-base font-medium text-white">{children}</span>
      </div>
    </button>
  );
};

export default Key;
