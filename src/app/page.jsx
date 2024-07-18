import CategoryCard from '@/components/CategoryCard';

export default async function Home() {
  // const resp = await fetch('http://127.0.0.1:3000/api/category');
  // let data = null;
  // if (resp.ok) {
  //   data = await resp.json();
  // }
  const data = {
    categories: [
      { _id: '66979a6022116d3fc7f83676', name: 'HTML', questionCount: 3 },
      { _id: '66979a8122116d3fc7f83678', name: 'CSS', questionCount: 0 },
      {
        _id: '66979a8822116d3fc7f8367a',
        name: 'JAVASCRIPT',
        questionCount: 0,
      },
    ],
  };
  return (
    <div className="min-h-screen bg-[#1a1d24]">
      <div className="container mx-auto flex h-screen flex-col items-center py-20">
        <div className="mb-20">
          <div className="mb-6 text-center text-6xl font-bold text-white">Web Quiz: Dive into HTML, CSS & JS</div>
          <div className="text-center text-xl font-normal text-slate-400">Test your knowledge and skills in web development with our interactive quiz! Dive into three essential categories:</div>
        </div>
        <div className="grid w-full place-items-center">{data && <CategoryCard categories={data.categories} />}</div>
      </div>
    </div>
  );
}
