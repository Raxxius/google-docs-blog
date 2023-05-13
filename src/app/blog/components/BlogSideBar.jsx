import { use } from "react";
import googleWebFetch from "@/apis/googleWebFetch";
import Link from "next/link";

export default function BlogSideBar(props) {
  const url = props.url;
  const data = use(googleWebFetch(url));

  const blogs = [];

  for (let blog in data) {
    const date = data[blog].fileDate.toString().slice(0, 10);
    const title = data[blog].title;
    const fileId = data[blog].fileId
    let returnValue = (
      <Link href={`/blog/${encodeURIComponent(fileId)}`}
      className="sidebar-wrapper">
        <p>{title}</p>
        <p>{date}</p>
      </Link>
    );
    blogs.push(returnValue);
  }

  return <div className="blog-sidebar">{blogs}</div>;
}
