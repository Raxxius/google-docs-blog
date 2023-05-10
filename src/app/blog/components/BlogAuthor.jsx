import camart from "../assets/images/keith-camart.png";
import linked_in from "../assets/icons/linked_in.svg"
import github from "../assets/icons/github.svg"

export default function BlogAuthor() {
  return (
    <div className="blog-author-wrapper">
      <h1>About</h1>
      <div className="blog-author-image-wrapper">
        <img className="blog-author-image" src={camart.src} />
      </div>
      <p>Keith is a full stack developer with a PhD in Tissue Engineering and experience in startup generation and technology transfer. Analytical thinking and a love of problem solving, he's happiest when he's halfway up a climbing project.</p>
      <div className="blog-social-media">
        <img className="linkedin-icon" src={linked_in.src}/>
        <img className="github-icon" src={github.src}/>
      </div>
    </div>
  );
}
