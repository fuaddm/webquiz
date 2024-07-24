'use client';
import React, { useState } from 'react';
import CategoryCard from '@/components/CategoryCard';
import HeroInfo from '@/components/HeroInfo';

const Hero = ({ data }) => {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <HeroInfo
        active={selected}
        setActive={setSelected}
      />
      <div className="grid w-full place-items-center">
        {data && (
          <CategoryCard
            categories={data.categories}
            selected={selected}
            setSelected={setSelected}
          />
        )}
      </div>
    </>
  );
};

export default Hero;
