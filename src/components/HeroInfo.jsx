import React from 'react';
import SvgBrackets from '@/svg/Brackets';
import SvgBrowser from '@/svg/Browser';
import SvgCoding from '@/svg/Coding';
import CssLogo from '@/svg/CssLogo';
import SvgGrid from '@/svg/Grid';
import HtmlLogo from '@/svg/HtmlLogo';
import JavascriptLogo from '@/svg/JavascriptLogo';
import SvgTerminal from '@/svg/Terminal';
import SvgV8Engine from '@/svg/V8Engine';
import ArrowKeys from './ArrowKeys';

const HeroInfo = ({ active, setActive }) => {
  return (
    <div className="flex flex-col lg:pt-20">
      <div className="relative">
        <div className="relative z-20 mb-4 cursor-default text-center text-3xl font-bold leading-[1.3] text-white md:text-4xl md:leading-[1.3] lg:text-left lg:text-5xl lg:leading-[1.3] xl:text-6xl xl:leading-[1.3]">
          Web Quiz: Dive into{' '}
          <span
            onMouseEnter={() => setActive(0)}
            className={`${active == 0 ? 'text-cyan-300' : 'text-slate-400'} group hover:text-cyan-300`}>
            HTML
            <div
              className={`${active == 0 ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : 'translate-x-10 translate-y-10 scale-0 opacity-0'} absolute -left-4 -top-10 z-10 -rotate-[25deg] transition-all ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100`}>
              <HtmlLogo className="h-14 w-14" />
            </div>
            <div
              className={`${active == 0 ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-0 opacity-0'} absolute -top-10 left-1/3 z-10 transition-all delay-75 ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100`}>
              <SvgBrowser className="h-10 w-10 fill-slate-400" />
            </div>
            <div
              className={`${active == 0 ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-0 opacity-0'} absolute -top-6 right-0 z-10 rotate-[25deg] transition-all ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100`}>
              <SvgCoding className="h-10 w-10 stroke-[#e44d26]" />
            </div>
          </span>
          ,{' '}
          <span
            onMouseEnter={() => setActive(1)}
            className={`${active == 1 ? 'text-cyan-300' : 'text-slate-400'} group hover:text-cyan-300`}>
            CSS
            <div
              className={`${active == 1 ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : 'translate-x-10 translate-y-10 scale-0 opacity-0'} absolute -left-4 -top-10 z-10 -rotate-[25deg] transition-all ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100`}>
              <CssLogo className="h-14 w-14" />
            </div>
            <div
              className={`${active == 1 ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-0 opacity-0'} absolute -top-10 left-1/3 z-10 transition-all delay-75 ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100`}>
              <SvgGrid className="h-10 w-10 fill-slate-400" />
            </div>
            <div
              className={`${active == 1 ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-0 opacity-0'} absolute -top-6 right-0 z-10 rotate-[25deg] transition-all ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100`}>
              <SvgBrackets className="h-10 w-10 fill-orange-400" />
            </div>
          </span>{' '}
          &{' '}
          <span
            onMouseEnter={() => setActive(2)}
            className={`${active == 2 ? 'text-cyan-300' : 'text-slate-400'} group hover:text-cyan-300`}>
            JS
            <div
              className={`${active == 2 ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : 'translate-x-10 translate-y-10 scale-0 opacity-0'} absolute -left-4 -top-10 z-10 -rotate-[25deg] transition-all ease-in-out group-hover:translate-x-0 group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100`}>
              <JavascriptLogo className="h-14 w-14" />
            </div>
            <div
              className={`${active == 2 ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-0 opacity-0'} absolute -top-10 left-1/3 z-10 transition-all delay-75 ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100`}>
              <SvgTerminal className="h-10 w-10 fill-slate-400" />
            </div>
            <div
              className={`${active == 2 ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-10 scale-0 opacity-0'} absolute -top-6 right-0 z-10 rotate-[25deg] transition-all ease-in-out group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100`}>
              <SvgV8Engine className="h-10 w-10" />
            </div>
          </span>
        </div>
      </div>
      <div className="mb-16 text-center text-base font-normal text-slate-400 md:text-lg lg:text-left xl:text-xl">
        Test your knowledge and skills in web development with our interactive quiz! Dive into three essential categories:
      </div>
      <div className="hidden lg:block">
        <div className="mb-3 ps-2 text-base font-normal text-slate-300">Navigate using the arrow keys to choose a quiz.</div>
        <ArrowKeys />
      </div>
    </div>
  );
};

export default HeroInfo;
