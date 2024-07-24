import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stars from '@/components/Stars';
import { headers } from 'next/headers';

export default async function Home() {
  const headersList = headers();
  const domain = headersList.get('host') || '';
  const fullUrl = headersList.get('referer') || '';

  console.log(fullUrl);
  const resp = await fetch(`${fullUrl}/api/category`);
  let data = null;
  if (resp.ok) {
    console.log('first');
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
