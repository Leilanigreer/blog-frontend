import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function PostsPage() {
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
  );
}
