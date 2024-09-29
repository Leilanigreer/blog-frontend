import { useLoaderData } from "react-router-dom";

export function PostsIndexPage() {
  const posts = useLoaderData();

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <p>{post.title}</p>
          <p>{post.body}</p>
          <img src={post.image} alt="" />
        </div>
      ))};
    </div>
  );
};