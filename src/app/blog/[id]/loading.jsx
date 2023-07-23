import BlogAuthor from "../components/BlogAuthor.jsx";
import BlogHeader from "../components/BlogHeader.jsx";
import Loader from "../components/Loader.jsx"
import Navbar from "../components/BlogNavBar.jsx"
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