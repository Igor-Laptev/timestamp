export async function fetchTimestamp(): Promise<number> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/timestamp`);
  const data = await res.json();
  return data.timestamp;
}

interface Post {
  id: number;
  title: string;
  body: string;
}

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await res.json();
}
