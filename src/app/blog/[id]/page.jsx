import googleWebFetch from "@/apis/googleWebFetch";
import BlogParse from "./BlogParse.jsx";
import './blog.css'
import { use } from "react";

export default function (props) {
  //specific datafetch
  const url =
    "https://script.google.com/macros/s/AKfycbwl1n76uCLYijMbXM5Z5b99J3gDWROj9Y1nzco3TKgg32H2G8IvBneeoUAgavugzCZuJQ/exec";
  const fileId = props.params.id;
  const fullUrl = `${url}?id=${fileId}`;
  const data = use(googleWebFetch(fullUrl));

  const blogs = data.map((blogElement) => {
    return (
        <BlogParse {...blogElement} />
    );
  });

  return <div className="blog-wrapper">{blogs}</div>;
}
