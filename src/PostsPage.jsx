import axios from "axios";
import { useEffect, useState } from 'react'
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

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
      <Modal show={true}>
        <p>TEST</p>
      </Modal>
      {/* <button onClick={handleIndex}>get my posts</button> */}
    </main>
  );
}
