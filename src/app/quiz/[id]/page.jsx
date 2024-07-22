import QuizCard from '@/components/QuizCard';

export default async function Home({ params }) {
  const resp = await fetch(`http://127.0.0.1:3000/api/question?categoryId=${params.id}`);
  const data = await resp.json();
  return (
    <div className="container mx-auto grid h-screen justify-center px-6 py-10">
      <QuizCard data={data} />
    </div>
  );
}
