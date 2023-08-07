import BlogAuthor from "@src/app/components/BlogAuthor.jsx";
import BlogHeader from "@src/app/components/BlogHeader.jsx";
import Loader from "@src/app/components/Loader.jsx"
import Navbar from "@src/app/components/BlogNavBar.jsx"
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