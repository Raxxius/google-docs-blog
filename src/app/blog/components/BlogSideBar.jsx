import { use } from "react";
import googleWebFetch from "@/apis/googleWebFetch";


export default function BlogSideBar(props) {
    const url = props.url
    const data = use(
      googleWebFetch(url)
    );

    const blogs = []
  
    for (let blog in data) {
      const date = data[blog].fileDate.toString().slice(0,10)
      const title = data[blog].title
      let returnValue = (
        <div className="sidebar-wrapper">
          <p>{title}</p>
          <p>{date}</p>
        </div>
      )
      blogs.push(returnValue)
    }

    return (
      <div className="blog-sidebar">
        {blogs}
      </div>
    )
}
