import * as containerStyles from "./Loader.module.css";

const Loader = (props) => {
  const style = {
    "backgroundColor": !props.darkMode ? "#06283D" : "lightcyan",
    transition: "background-color 2s, color 2s",
  };

  const style2 = {
    color: !props.darkMode ? "#06283D" : "lightcyan",
    transition: "color 2s"
  }

  return (
    <div className="loader">
      <div className={containerStyles.loader}>
        <div className={containerStyles.kFirst} style={style}></div>
        <div className={containerStyles.kSecond} style={style}></div>
        <div className={containerStyles.kThird} style={style}></div>
        <div className={containerStyles.bFirst} style={style}></div>
        <div className={containerStyles.bSecond} style={style}></div>
        <div className={containerStyles.bThird} style={style}></div>
        <div className={containerStyles.bForth} style={style}></div>
        <div className={containerStyles.bFith} style={style2}></div>
        <div className={containerStyles.bSixth} style={style2}></div>
      </div>
      <div className={containerStyles.loaderbox}>
        <div className={containerStyles.underscore} style={style}></div>
      </div>
    </div>
  );
};

export default Loader;
