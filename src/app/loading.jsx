import "src/app/blog.css";
import Navbar from "src/app/components/BlogNavBar";
import BlogAuthor from "src/app/components/BlogAuthor";
import BlogHeader from "src/app/components/BlogHeader";
import Loader from "src/app/components/Loader"
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

