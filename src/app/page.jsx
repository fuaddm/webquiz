import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stars from '@/components/Stars';

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
    <div className="container mb-20 flex flex-col items-center pb-6 pt-10">
      <Header />
      <Stars />
      <div className="mb-16"></div>
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
        <Hero data={data} />
      </div>
    </div>
  );
}
