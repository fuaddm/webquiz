import { getCategories } from '@/api/api';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stars from '@/components/Stars';
import { headers } from 'next/headers';

export default async function Home() {
  let data = null;
  data = await getCategories();

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
