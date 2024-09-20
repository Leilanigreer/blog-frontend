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
  const [isPostShowVisible, setIsPostShowVisible] = useState(false);

  const handleShow = () => {
    setIsPostShowVisible(true);
    // console.log("Show")
  };

  const handleClose = () => {
    setIsPostShowVisible(false);
    // console.log("hide")
  };

   useEffect(handleIndex, []) 

  return (
    <main>
      <PostsNew />
      <PostsIndex posts={posts} onShow={handleShow}/>
      <Modal show={isPostShowVisible} onClose={handleClose}>
        <h1>Hello Brian</h1>
        <p>I am trying to pass the time.</p>
        <h2>Whatever I write shows in the modal</h2>
      </Modal>

    </main>
  );
}
