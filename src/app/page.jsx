import "src/app/blog.css"
import BlogNavBar from "src/app/_components/BlogNavBar";
import BlogAuthor from "src/app/_components/BlogAuthor";
import BlogHeader from "src/app/_components/BlogHeader";
import BlogList from "src/app/_components/BlogList";
import BlogSideBar from "src/app/_components/BlogSideBar";

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
