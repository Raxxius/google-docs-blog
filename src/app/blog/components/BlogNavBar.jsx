import "./BlogNavBar.css";

const Navbar = () => {
  const navbarstyle = {
    backgroundColor: "black", 
    color: "lightcyan",
    transition: "background-color 2s, color 2s",
  };

  return (
    <div className="navbar" style={navbarstyle}>
      <div className="links-list">
        <a href="https://www.keith-blackwood.com/blog" className="link-item">Home</a>
      </div>
      <div className="links-spacer"></div>
    </div>
  );
};

export default Navbar;
