import "./blog.css"
import BlogNavBar from "./_components/BlogNavBar";
import BlogAuthor from "./_components/BlogAuthor";
import BlogHeader from "./_components/BlogHeader";
import BlogList from "./_components/BlogList";
import BlogSideBar from "./_components/BlogSideBar";

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
