import Moon from "../../assets/icons/moon.jsx";
import Sun from "../../assets/icons/sun.jsx";
import Hamburger from "../../assets/icons/Hamburger.jsx";
import "@/app/components/serverside/Navbar.css";

const Navbar = (props) => {
  const navbarstyle = {
    color: props.darkMode ? "lightcyan" : "black",
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
      <Hamburger fill={props.darkMode ? "lightcyan" : "black"} />

      <DarkModeButton
        darkMode={props.darkMode}
        setDarkMode={props.setDarkMode}
        handleDarkmode={props.handleDar}
      />
    </div>
  );
};

export default Navbar;
