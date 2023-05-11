import { use } from "react";
import googleWebFetch from "@/apis/googleWebFetch";


export default function BlogSideBar(fetchSite) {
  const data = use(
    googleWebFetch(
        fetchSite
    )
  );

}
