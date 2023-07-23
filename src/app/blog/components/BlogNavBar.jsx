import Moon from "@/app/assets/icons/moon.jsx";
import Sun from "@/app/assets/icons/sun.jsx";
import "./BlogNavBar.css";

const Navbar = (props) => {
  const navbarstyle = {
    backgroundColor: props.darkMode ? "black" : "lightgrey",
    color: props.darkMode ? "lightcyan" : "black",
    transition: "background-color 2s, color 2s",
  };

  const DarkModeButton = (props) => {
    return (
      <button className="darkMode-btn" onClick={props.handleDarkmode}>
        {props.darkMode ? (
          <Sun
            style={{
              fill: "#fbac13",
              animation: "fadeIn 2s",
            }}
          />
        ) : (
          <Moon style={{ fill: "#F5F3CE", animation: "fadeIn 2s" }} />
        )}
      </button>
    );
  };

  return (
    <div className="navbar" style={navbarstyle}>
      <div className="links-list">
        <a href="" className="link-item">Home</a>
      </div>
      <div className="links-spacer"></div>
      <DarkModeButton
        darkMode={props.darkMode}
        setDarkMode={props.setDarkMode}
        handleDarkmode={props.handleDar}
      />
    </div>
  );
};

export default Navbar;
