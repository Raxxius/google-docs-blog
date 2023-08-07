import { use } from "react";
import Link from "next/link";
import googleWebFetch from "../../apis/googleWebFetch"

export default function blogList(props) {

  const url = props.url
  const data = use(
    googleWebFetch(url)
  );

  const blogs = [];
  if (data !== "undefined") {
    for (let blog in data) {
      const date = new Date(data[blog].fileDate).toDateString();
      let returnValue = (
        <Link href={`blog/${encodeURIComponent(data[blog].fileId)}`} className="blog-list-wrapper">
          <div className="blog-list-wrapper">
            <h1 className="blog-list-title">{data[blog].title}</h1>
            <p className="blog-list-date">{date}</p>
            <img
              className="blog-list-image"
              src={data[blog].imageCuri}
              alt={data[blog].imageDescription}
              referrerPolicy="no-referrer"
            />
            <p className="blog-list-text fade">{data[blog].introText}</p>
          </div>
        </Link>
      );
      blogs.push(returnValue);
    }
  }
  return <div className="blog-list">{blogs}</div>;
}