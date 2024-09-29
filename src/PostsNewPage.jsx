import axios from "axios";
import { useNavigate } from "react-router-dom";

export function PostsNewPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('handle submit')
    const params = new FormData(event.target)
    axios.post("http://localhost:3000/posts.json", params).then(response => {
      console.log(response.data)
      // window.location.href = "/"    -This is the old way
      navigate('/');
    })
  } 

  return (
    <div>
      <h1>Lets make a new post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input type="text" name="title" />
        </div>
        <div>
          Body: <input type="text" name="body" />
        </div>
        <div>
          Image url: <input type="text" name="image" />
        </div>
        <button>Create my post</button>
      </form>
    </div>
  )
}