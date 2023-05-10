import Image from "next/image";
import camart from '../assets/images/keith-camart.png'

export default function BlogAuthor() {
  return (
    <div className="blog-author-wrapper">
      Keith Blackwood
      <div className="blog-author-image">
        <img src={camart.src}/>
      </div>
      <div className="blog-social-media">
        <div className="linkedin">LinkedIn</div>
        <div className="github">GitHub</div>
      </div>
    </div>
  );
}
