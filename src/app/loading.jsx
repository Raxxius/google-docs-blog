import "src/app/blog.css";
import Navbar from "./components/BlogNavBar";
import BlogAuthor from "./components/BlogAuthor";
import BlogHeader from "./components/BlogHeader";
import Loader from "./components/Loader"
export default function Loading() {
    return (
        <>
          <Navbar />
          <div className="blog-grid">
            <BlogHeader />
            <Loader />
            <BlogAuthor />
          </div>
        </>
)}

