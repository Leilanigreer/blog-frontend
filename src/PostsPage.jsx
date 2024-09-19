import axios from "axios";
import { useEffect, useState } from 'react'
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function PostsPage() {
  // var name = "Leilani";
  const [posts, setPosts] = useState([]);
  const handleIndex = () => {
    // console.log('hello');
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response);
      setPosts(response.data)
    })
  }

   useEffect(handleIndex, []) 

  return (
    <main>
      <PostsNew />
      <PostsIndex posts={posts} />
      {/* <button onClick={handleIndex}>get my posts</button> */}
    </main>
  );
}
