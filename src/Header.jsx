import { Link } from "react-router-dom";

export function Header() {
  return (
    <header>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
        <img src="https://secondary.oslis.org/learn-to-research/plan/plan-possible-sources/images-for-plan-possible-sources/newspaper/@@images/image.jpeg" alt="Logo" width="30" height="24" className="d-inline-block align-text-top"/>
        My Daily thoughts
      </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/posts/new">New Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/signup">Signup</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
      {/* <a href="/">Home</a> | <Link to="/posts/new">New Blog</Link> | <Link to="/signup">Signup</Link> | <Link to="/login">Login</Link> | <Link to="/posts">All Blogs</Link> */}
    </header> 
  );
}
