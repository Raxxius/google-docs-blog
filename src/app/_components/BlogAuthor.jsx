import camart from "../_assets/images/keith-camart.png"
import linked_in from "../_assets/icons/linked_in.svg"
import github from "../_assets/icons/github.svg"

export default function BlogAuthor() {
  return (
    <div className="blog-author-wrapper">
      <h1 className="blog-author-title">About</h1>
      <div className="blog-author-image-wrapper wrapper">
        <img 
          className="blog-author-image" 
          src={camart.src} 
          alt="Author" 
        />
      </div>
      <p className="blog-author-text">Keith is a full stack developer with a PhD in Tissue Engineering and experience in startup generation and technology transfer. Analytical thinking and a love of problem solving, he's happiest when he's halfway up a climbing project.</p>
      <div className="blog-social-media">
        <a href="http://www.linkedin.com/in/keith-blackwood/" target="_blank"><img className="blog-icon" src={linked_in.src} /></a>
        <a href="https://github.com/Raxxius/" target="_blank"><img className="blog-icon" src={github.src}/></a>
      </div>
    </div>
  );
}