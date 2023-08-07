import "src/app/blog.css";
import Navbar from "src/app/_components/BlogNavBar";
import BlogAuthor from "src/app/_components/BlogAuthor";
import BlogHeader from "src/app/_components/BlogHeader";
import Loader from "src/app/_components/Loader"
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

