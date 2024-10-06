import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
import { PostsPage } from "./PostsPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { PostsNewPage } from "./PostsNewPage"
import {PostsIndexPage} from "./PostsIndexPage"
import { Footer } from "./Footer";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <PostsPage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/posts/new",
        element: <PostsNewPage />,
      },
      {
        path: "/posts",
        element: <PostsIndexPage />,
        loader: () => axios.get("http://localhost:3000/posts.json").then(response => response.data)
      },
    ],
  },
]);

function App() {
  return (
  <div className="container">
  <RouterProvider router={router} />
  </div>
  )
}

export default App;