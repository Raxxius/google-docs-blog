import "src/app/blog.css"
import BlogNavBar from "src/app/_components/BlogNavBar";
import BlogAuthor from "src/app/_components/BlogAuthor";
import BlogHeader from "src/app/_components/BlogHeader";
import BlogList from "src/app/_components/BlogList";
import BlogSideBar from "src/app/_components/BlogSideBar";

function App() {
  const url =
    "https://script.google.com/macros/s/AKfycbw_d_EDSYOID75y7BCXBDED1h-GS7py1Yjmjks64SREPzi197Agga1PUn8t3winPupF0g/exec";

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
