function Icon(props) {
  return (
    <svg className="hamburger" viewBox="0 0 10 8">
      <path
        stroke={props.fill}
        strokeLinecap="round"
        strokeWidth="2"
        d="M1 1h8M1 4h8M1 7h8"
      ></path>
    </svg>
  );
}

export default Icon;