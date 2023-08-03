import "./BlogNavBar.css";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="links-list">
        <a href="https://www.keith-blackwood.info/blog" className="link-item">Blog</a>
        <a href="https://www.keith-blackwood.info/" className="link-item">Home</a>
      </div>
    </div>
  );
};

export default Navbar;
