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
    "https://script.google.com/macros/s/AKfycbyOmNJ4J0EOouG61xVDeyC74Rr1W8TaT8sCGxcjCWZnpTLNCd0vipzPXT4pqdkCNfhs/exec";
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
