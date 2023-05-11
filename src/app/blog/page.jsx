import "./blog.css";
import BlogAuthor from "./components/BlogAuthor";
import BlogList from "./components/BlogList";
import BlogSideBar from "./components/BlogSideBar";

function App() {
  const url =
    "https://script.google.com/macros/s/AKfycbxyp7K9EL7OtNvxdVHYursHvm-DxRnMLAPp7R23m2sXObx4vWnmqRJXj_GddNNKgJHE/exec";

  return (
    <>
      <div className="blog-header">Header</div>
      <BlogList url={url}/>
      <BlogSideBar url={url}/>
      <BlogAuthor />
    </>
  );
}

export default App;
