import BlogAuthor from "src/app/_components/BlogAuthor.jsx";
import BlogHeader from "src/app/_components/BlogHeader.jsx";
import Loader from "src/app/_components/Loader.jsx"
import Navbar from "src/app/_components/BlogNavBar.jsx"
import "../blog.css";

export default function LoadingPage() {
    return (
        <>
          <Navbar />
          <div className="blog-grid">
            <BlogHeader />
            <div className="blog-wrapper"><Loader /></div>
            <BlogAuthor />
          </div>
        </>
      );
}