import "./blog.css";
import Navbar from "../components/Navbar";
import BlogAuthor from "./components/BlogAuthor";
import BlogHeader from "./components/BlogHeader";
import BlogList from "./components/BlogList";
import BlogSideBar from "./components/BlogSideBar";

function App() {
  const url =
    "https://script.google.com/macros/s/AKfycbxyp7K9EL7OtNvxdVHYursHvm-DxRnMLAPp7R23m2sXObx4vWnmqRJXj_GddNNKgJHE/exec";

  return (
    <>
      <Navbar />
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
