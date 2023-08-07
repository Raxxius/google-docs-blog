import "./BlogNavBar.css";

const Navbar = () => {

  return (
    <div className="navbar">
      <div className="links-list">
        <a href="https://www.keith-blackwood.com/blog" className="link-item">Blog</a>
        <a href="https://www.keith-blackwood.com/" className="link-item">Home</a>
      </div>
    </div>
  );
};

export default Navbar;