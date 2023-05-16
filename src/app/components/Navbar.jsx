import Moon from "../assets/icons/moon.jsx";
import Sun from "../assets/icons/sun.jsx";
import "./Navbar.css"

const Navbar = (props) => {
  const navbarstyle = {
    backgroundColor: props.darkMode ? "black" : "lightgrey",
    color: props.darkMode ? "lightcyan" : "black",
    transition: "background-color 2s, color 2s",
  };

  const DarkModeButton = (props) => {
    return (
      <button className="darkMode-btn" onClick={props.handleOnClick}>
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
      NavBar
      <DarkModeButton
        darkMode={props.darkMode}
        setDarkMode={props.setDarkMode}
        handleOnClick={props.handleOnClick}
      />
    </div>
  );
};

export default Navbar;
