import { use } from "react";
import googleWebFetch from "@/apis/googleWebFetch";


export default function BlogSideBar() {
  const data = use(
    googleWebFetch(
      "https://script.google.com/macros/s/AKfycbxbdX5FkonP0ZChu48-5yDpW3tMteRSNG9f11ayMr9mci5OYGH_8seQwYOMKH7s6Y3h/exec"
    )
  );

}
