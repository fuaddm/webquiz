import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stars from '@/components/Stars';

export default async function Home() {
  const resp = await fetch('http://127.0.0.1:3000/api/category');
  let data = null;
  if (resp.ok) {
    data = await resp.json();
  }
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
