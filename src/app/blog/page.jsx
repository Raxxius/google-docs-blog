import "./blog.css";
import BlogNavBar from "./components/serverside/BlogNavBar";
import BlogAuthor from "./components/serverside/BlogAuthor";
import BlogHeader from "./components/serverside/BlogHeader";
import BlogList from "./components/serverside/BlogList";
import BlogSideBar from "./components/serverside/BlogSideBar";

function App() {
  const url =
    "https://script.google.com/macros/s/AKfycbxyp7K9EL7OtNvxdVHYursHvm-DxRnMLAPp7R23m2sXObx4vWnmqRJXj_GddNNKgJHE/exec";

  return (
    <>
      <BlogNavBar />
      <div className="blog-grid">
        <BlogHeader />
        <BlogList url={url} />
        <BlogSideBar url={url} />
        <BlogAuthor />
      </div>
    </>
  );
}

export default App;
