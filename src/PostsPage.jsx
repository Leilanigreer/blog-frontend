import axios from "axios";
import { useEffect, useState } from 'react'
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import {PostsShow} from "./PostsShow";
import {LoginPage} from "./LoginPage"
import {SignupPage} from "./SignupPage"


export function PostsPage() {
  // var name = "Leilani";
  const [posts, setPosts] = useState([]);
  const handleIndex = () => {
    // console.log('hello');
    axios.get("http://localhost:3000/posts.json").then(response => {
      console.log(response);
      setPosts(response.data)
    })
  };

    const handleCreate = (params) => {
      axios.post("http://localhost:3000/posts.json", params).then(response => {
        console.log(response.data)
        setPosts([...posts, response.data])
    })
  };
       

  const [isPostShowVisible, setIsPostShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState();
  
  const handleShow = (post) => {
    setIsPostShowVisible(true);
    setCurrentPost(post)
    console.log(post)
  };

  const handleClose = () => {
    setIsPostShowVisible(false);
    // console.log("hide")
  };

   useEffect(handleIndex, []) 

  return (
    <main id="posts-page">
      {/* <SignupPage /> */}
      {/* <LoginPage /> */}
      <PostsNew onCreate={handleCreate}/>
      <PostsIndex posts={posts} onShow={handleShow}/>
      <Modal show={isPostShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost}/>
      </Modal>
      <button>Destroy</button>

    </main>
  );
}
