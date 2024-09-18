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


function App() {
  return (
    <div>
      <Header />

      {/* <Footer /> */}

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

      <div id="posts-index">
        <h1>All posts</h1>
        <h2>Much to do about nothing</h2>
        <body> Do you know what this is about?</body>
        
      </div>


    </div>
  );
}

export default App;