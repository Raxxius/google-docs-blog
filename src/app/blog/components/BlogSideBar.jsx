import { use } from "react";
import googleWebFetch from "@/apis/googleWebFetch";


export default function BlogSideBar(props) {
    const url = props.url
    const data = use(
      googleWebFetch(url)
    );
  
    return (
      <div className="blog-sidebar">
        Sidebar
      </div>
    )
}
