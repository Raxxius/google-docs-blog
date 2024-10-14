import BlogAuthor from "../_components/BlogAuthor.jsx";
import BlogHeader from "../_components/BlogHeader.jsx";
import Loader from "../_components/Loader.jsx"
import Navbar from "../_components/BlogNavBar.jsx"
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