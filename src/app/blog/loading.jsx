import "./blog.css";
import Navbar from "../components/clientside/Navbar";
import BlogAuthor from "./components/serverside/BlogAuthor";
import BlogHeader from "./components/serverside/BlogHeader";
import Loader from "./components/serverside/Loader"
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

