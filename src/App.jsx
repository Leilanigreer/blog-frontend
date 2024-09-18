function Header() {
  return (
    <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2024</p>
    </footer>
  )
}

function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <body>
      <form>
        {/*labels are used to make the form more clear and for screen readers (software that reads web pages for people who can’t see) */}
        <label for="title">Title:</label> 
        <input type="text" id="title" name="title"/>
        <br></br>
        <label for="body">Boby:</label>
        <input type="text" id="body" name="body"/>
        <br></br>
        Image: <input type="text" />
        <br></br>
        <button type="submit">Create Blog</button>
      </form>
      </body>
    </div>
  )
}

// I need to add more to this:
function PostsIndex(props) {
console.log(props);  
  return (
    <div id="posts-index">
    <h1>All posts</h1>
    {props.posts.map(post => (
      <div key={post.id} className="posts">
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <img src={post.image} alt="" />
      </div>
    ))}
    </div>
  )
}

function PostsPage() {
  // var name = "Leilani";
  let posts = [
    {
      id: 1, 
      title: "Hello Dolly", 
      body: "First Musical I ever saw", 
      image: "https://i.ytimg.com/vi/LnXf6tmczzo/maxresdefault.jpg"
    }, 
    {
      id: 2, 
      title: "RENT", 
      body: "Most awkward musical seen with my mother",
      image: "https://i.ebayimg.com/images/g/~FEAAOSw9FhlMbeP/s-l400.jpg"
    }, 
    {
      id: 3, 
      title: "Legally Blonde the musical",
      body: "Most recent musical", 
      image: "https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F820222679%2F1566026794663%2F1%2Foriginal.20240804-164615?w=1000&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C0%2C2160%2C1080&s=b07c8ad645eb207ca039ef83c7c36a31"
    }
  ];
  return (
    <main>
      <PostsNew />
      <PostsIndex posts={posts} />
    </main>
  )
}


function App() {
  return (
    <div>
      <Header />
      <PostsPage />
      <Footer />
    </div>
  );
}

export default App;