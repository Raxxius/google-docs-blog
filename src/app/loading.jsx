import "./blog.css";
import Navbar from "./_components/BlogNavBar";
import BlogAuthor from "./_components/BlogAuthor";
import BlogHeader from "./_components/BlogHeader";
import Loader from "./_components/Loader"
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

