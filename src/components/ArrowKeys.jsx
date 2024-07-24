import React, { useEffect, useState } from 'react';
import Key from './Key';
import ArrowV2 from '@/svg/ArrowV2';

const ArrowKeys = () => {
  const [activeKey, setActiveKey] = useState(null);

  useEffect(() => {
    const keyDownEvent = (e) => {
      if (e.code == 'ArrowLeft') {
        setActiveKey('ArrowLeft');
      } else if (e.code == 'ArrowRight') {
        setActiveKey('ArrowRight');
      }
    };
    const keyUpEvent = () => {
      setActiveKey(null);
    };

    document.addEventListener('keydown', keyDownEvent);
    document.addEventListener('keyup', keyUpEvent);

    return () => {
      document.removeEventListener('keydown', keyDownEvent);
      document.removeEventListener('keyup', keyUpEvent);
    };
  }, []);
  return (
    <div className="flex w-fit gap-3 rounded-3xl bg-white/80 p-3 backdrop-blur-md">
      <Key isActive={activeKey == 'ArrowLeft'}>
        <ArrowV2 className="h-6 w-6 fill-white" />
      </Key>
      <Key isActive={activeKey == 'ArrowRight'}>
        <ArrowV2 className="h-6 w-6 rotate-180 fill-white" />
      </Key>
    </div>
  );
};

export default ArrowKeys;
