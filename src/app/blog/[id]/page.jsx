import googleWebFetch from "@/apis/googleWebFetch";
import BlogParse from "./BlogParse.jsx";
import BlogAuthor from "../components/serverside/BlogAuthor.jsx";
import BlogHeader from "../components/serverside/BlogHeader.jsx";
import Navbar from "../components/serverside/BlogNavBar.jsx"
import "../blog.css";
import { use } from "react";

export default function Page (props) {
  // datafetch
  const url =
    "https://script.google.com/macros/s/AKfycbxKMnx_bsHRSdIWtQ4R_WlNwiK2ZVQEYMxuICMinFQvmwtkDJ-Csp9zTorjMc_kR6apbw/exec";
  const fileId = props.params.id;
  const fullUrl = `${url}?id=${fileId}`;
  const data = use(googleWebFetch(fullUrl));

  const blogs = data.map((blogElement) => {
    return (
      <>
        <BlogParse {...blogElement} />
      </>
    );
  });

  return (
    <>
      <Navbar />
      <div className="blog-grid">
        <BlogHeader />
        <div className="blog-wrapper">{blogs}</div>
        <BlogAuthor />
      </div>
    </>
  );
}
