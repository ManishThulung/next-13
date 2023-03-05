import getUserPost from "@/lib/getUserPost";

export default async function PostPage({ params }: any) {
  console.log(params);
  const { userId, postId } = params;
  const userPostData: Promise<Post[]> = getUserPost(userId, postId);
  const post = await userPostData;
  console.log(post);

  return (
    <div>
      hello
      {post.map((p) => (
        <div key={p.id}>
          <p>{p.id}</p>
          <p>{p.title}</p>
          <p>{p.body}</p>
        </div>
      ))}
    </div>
  );
}
