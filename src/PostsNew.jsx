export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <div>
        <form>
          {/*labels are used to make the form more clear and for screen readers (software that reads web pages for people who can’t see) */}
          {/* <label for="title">Title:</label>
          <input type="text" id="title" name="title" />
          <br></br>
          <label for="body">Boby:</label>
          <input type="text" id="body" name="body" />
          <br></br> */}
          <div>
          Title: <input type="text" />
          </div>
          <div>
          Body: <input type="text" />
          </div>
          <div>
          Image: <input type="text" />
          </div>
          <button type="submit">Create Blog</button>
        </form>
      </div>
    </div>
  );
}
