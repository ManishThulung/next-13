import getUserPosts from "@/lib/getUserPosts";
import Link from "next/link";

export default async function PostsPage({ params }: any) {
  const userPostsData: Promise<Post[]> = getUserPosts(params.userId);
  const posts = await userPostsData;
  return (
    <div>
      <h2>All Posts</h2>

      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/users/${params.userId}/posts/${post.id}`}>
            {/* <Link href={`/posts/${post.id}`}> */}
            <p>this belongs to user {post.userId}</p>
            <p>this post id is {post.id}</p>
            <h4> {post.title}</h4>
            <p> {post.body}</p>
          </Link>
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
