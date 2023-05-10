import { use } from 'react'
import googleWebFetch from '@/apis/googleWebFetch';

export default function blogList() {
    const data = use(googleWebFetch("https://script.google.com/macros/s/AKfycbxbdX5FkonP0ZChu48-5yDpW3tMteRSNG9f11ayMr9mci5OYGH_8seQwYOMKH7s6Y3h/exec"))

  const blogs = [];

  for (let blog in data) {
    let returnValue = (
      <div className="blog-wrapper">
        <h1 className="blog-title">{data[blog].title}</h1>
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

  return <div className="blog-list">{blogs}</div>;
}
