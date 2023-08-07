import "src/app/blog/blog.css"
import BlogNavBar from "src/app/components/BlogNavBar";
import BlogAuthor from "src/app/components/BlogAuthor";
import BlogHeader from "src/app/components/BlogHeader";
import BlogList from "src/app/components/BlogList";
import BlogSideBar from "src/app/components/BlogSideBar";

function App() {
  const url =
    "https://script.google.com/macros/s/AKfycbyEGQAcQLaDqj1NW48B9jMk_br8Otl1jjRjd-lgXkKAoXyJxw166HSYwGuFIY0lQfRx/exec";

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
