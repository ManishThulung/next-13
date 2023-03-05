export default async function getUserPost(userId: string, id: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}&id=${id}`
  );

  if (!res.ok) throw new Error("Data fetched failed!");
  return res.json();
}
