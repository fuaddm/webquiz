import QuizCard from "./components/QuizCard";
import ArrowV2 from "./svg/ArrowV2";
import SvgTimer from "./svg/Timer";

export default function Home() {
  return (
    <div className="grid justify-center container py-10 mx-auto px-6">
      <div className="max-w-[600px]">
        <div className="grid grid-cols-3 items-center gap-4 mb-16">
          <div className="p-2 rounded-xl hover:bg-white/10 transition duration-300 cursor-pointer w-fit">
            <ArrowV2 className="h-6 w-6 fill-white" />
          </div>
          <div className="text-xl text-center text-white font-normal">3/20</div>
          <div className="flex justify-end items-center gap-1">
            <SvgTimer className="stroke-green-600 w-5 h-5" />
            <span className="text-green-600 font-normal text-xl">14:57</span>
          </div>
        </div>
        <QuizCard />
      </div>
    </div>
  );
}
