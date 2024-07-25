import { getQuestions } from '@/api/api';
import QuizCard from '@/components/Card/QuizCard';

export default async function Home({ params }) {
  let data = await getQuestions(params.id);

  if (data.error) {
    return (
      <div className="container grid h-screen place-items-center py-10">
        <div className="text-center text-2xl font-bold text-white md:text-6xl">Sorry, the server is not responding correctly.</div>
      </div>
    );
  }
  return <div className="container py-10">{data && <QuizCard data={data} />}</div>;
}
