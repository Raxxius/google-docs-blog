import { use } from "react";
import googleWebFetch from "@/apis/googleWebFetch";

export default function blogList(props) {
  const url = props.url
  const data = use(
    googleWebFetch(url)
  );



  const blogs = [];
  if (data !== "undefined") {
    for (let blog in data) {
      const date = new Date(data[blog].fileDate).toDateString();
      console.log(date)
      let returnValue = (
        <div className="blog-wrapper">
          <h1 className="blog-title">{data[blog].title}</h1>
          <p className="blog-date">{date}</p>
          <img
            className="blog-image"
            src={data[blog].image.imageCuri}
            referrerPolicy="no-referrer"
          />
          <p className="blog-text">{data[blog].introText}</p>
        </div>
      );
      blogs.push(returnValue);
    }
  }
  return <div className="blog-list">{blogs}</div>;
}
