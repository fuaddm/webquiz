import { getQuestions } from '@/api/api';
import QuizCard from '@/components/QuizCard';

export default async function Home({ params }) {
  let data = await getQuestions(params.id);
  return <div className="container py-10">{data && <QuizCard data={data} />}</div>;
}
