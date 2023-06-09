import BlogAuthor from "../components/serverside/BlogAuthor.jsx";
import BlogHeader from "../components/serverside/BlogHeader.jsx";
import Loader from "../components/serverside/Loader.jsx"
import Navbar from "../../components/clientside/Navbar.jsx"
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