import googleWebFetch from "@/apis/googleWebFetch";
import BlogParse from "./BlogParse.jsx";
import BlogAuthor from "src/app/_components/BlogAuthor.jsx";
import BlogHeader from "src/app/_components/BlogHeader.jsx";
import Navbar from "src/app/_components/BlogNavBar.jsx"
import "../blog.css";
import { use } from "react";

export default function Page ({ params }) {
  // datafetch
  const url =
    "https://script.google.com/macros/s/AKfycbzL_nbz0E1J96OUBanb2dD9WGJctFBcThK8SmD675YEWKxTVt9Nx3ZkTeiDMSWVa6YA8Q/exec";
  const fileId = params.id;
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
