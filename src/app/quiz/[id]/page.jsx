import QuizCard from '@/components/QuizCard';
import ArrowV2 from '@/svg/ArrowV2';
import SvgTimer from '@/svg/Timer';

export default function Home() {
  return (
    <div className="container mx-auto grid justify-center px-6 py-10">
      <div className="max-w-[600px]">
        <div className="mb-16 grid grid-cols-3 items-center gap-4">
          <div className="w-fit cursor-pointer rounded-xl p-2 transition duration-300 hover:bg-white/10">
            <ArrowV2 className="h-6 w-6 fill-white" />
          </div>
          <div className="text-center text-xl font-normal text-white">3/20</div>
          <div className="flex items-center justify-end gap-1">
            <SvgTimer className="h-5 w-5 stroke-green-600" />
            <span className="text-xl font-normal text-green-600">14:57</span>
          </div>
        </div>
        <QuizCard />
      </div>
    </div>
  );
}
