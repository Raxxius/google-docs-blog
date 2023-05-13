import googleWebFetch from "@/apis/googleWebFetch";
import { use } from 'react'

export default function (props) {
  const url = "https://script.google.com/macros/s/AKfycbyh-_p7R-r6Pv5dV7Io3s8euQXJpm9IIHHCL9MlBbm7boerxTUOYpT8eYsF3ej8ydxenw/exec";
  const fileId = "1VBdL5h6a8hiY7C3S3xBNrvElvBCpGQEwZQ8kEZusGhY";
  const fullUrl = `${url}?id=${fileId}`
  const data = use(googleWebFetch(fullUrl));

  return <div>{fileId}</div>;
}
