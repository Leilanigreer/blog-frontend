export function PostsIndex(props) {
  // console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      <div className="cards">
      {props.posts.map(post => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src={post.image} alt="" />
          <button onClick={() => props.onShow(post)}>Read</button>
        </div>
      ))}
      </div>
    </div>
  );
}
