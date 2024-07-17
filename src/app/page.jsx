export default async function Home() {
  const resp = await fetch('http://127.0.0.1:3000/api/category');
  const data = await resp.json();
  console.log(data);
  return <div className="min-h-screen bg-white"></div>;
}
