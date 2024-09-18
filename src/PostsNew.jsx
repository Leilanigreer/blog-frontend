export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <body>
        <form>
          {/*labels are used to make the form more clear and for screen readers (software that reads web pages for people who can’t see) */}
          <label for="title">Title:</label>
          <input type="text" id="title" name="title" />
          <br></br>
          <label for="body">Boby:</label>
          <input type="text" id="body" name="body" />
          <br></br>
          Image: <input type="text" />
          <br></br>
          <button type="submit">Create Blog</button>
        </form>
      </body>
    </div>
  );
}
