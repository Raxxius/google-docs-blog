import { use } from "react";
import Link from "next/link";
import googleWebFetch from "../../apis/googleWebFetch"

export default function blogList(props) {

  const url = props.url
  const data = use(
    googleWebFetch(url)
  );
  
  return (
    <div className="blog-list">
      {data !== undefined &&
        Array.isArray(data) &&
        data.map((blog) => {
          const date = new Date(blog.fileDate).toDateString();
          const imageId = blog.imageCuri.split('id=')[1]
          return (
            <Link
              key={blog.fileId}
              href={`blog/${encodeURIComponent(blog.fileId)}`}
              className="blog-list-wrapper"
            >
              <div className="blog-list-wrapper">
                <h1 className="blog-list-title">{blog.title}</h1>
                <p className="blog-list-date">{date}</p>
                <img
                  className="blog-list-image"
                  src={`blog/api/fetchImage?id=${imageId}`}
                  alt={blog.imageDescription}
                  referrerPolicy="no-referrer"
                    crossOrigin="anonymous"
                />
                <p className="blog-list-text fade">{blog.introText}</p>
              </div>
            </Link>
          );
        })}
    </div>
  );
}