export function PostsNew(props) { 
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target); 
    props.onCreate(params)
    event.target.reset()
    }

  return (
    <div id="posts-new">
      <h1>New post</h1>
      <div>
        <form onSubmit={handleSubmit}>
          {/*labels are used to make the form more clear and for screen readers (software that reads web pages for people who can’t see) */}
          {/* <label for="title">Title:</label>
          <input type="text" id="title" name="title" />
          <br></br>
          <label for="body">Boby:</label>
          <input type="text" id="body" name="body" />
          <br></br> */}
          <div>
          Title: <input name="title" type="text" />
          </div>
          <div>
          Body: <input name="body" type="text" />
          </div>
          <div>
          Image: <input name="image" type="text" />
          </div>
          <button type="submit">Create Blog</button>
        </form>
      </div>
    </div>
  );
}
