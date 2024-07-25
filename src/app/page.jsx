import { getCategories } from '@/api/api';
import Header from '@/components/Sections/Header';
import Hero from '@/components/Sections/Hero';
import Stars from '@/components/BgElements/Stars';

export default async function Home() {
  let data = null;
  data = await getCategories();

  return (
    <div className="container mb-20 flex flex-col items-center pb-6 pt-10">
      <Header />
      <Stars />
      <div className="mb-16"></div>
      {!data.error && (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <Hero data={data} />
        </div>
      )}
      {data.error && <div className="text-center text-2xl font-bold text-white md:text-6xl">Sorry, the server is not responding correctly.</div>}
    </div>
  );
}
