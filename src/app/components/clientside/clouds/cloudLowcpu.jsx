import { keyframes } from "@emotion/css";


function Cloud(props) {
  /* to be props */
  const width = props.width;
  const height = props.height;
  const yCoord = props.yCoord;
  const xCoord = props.xCoord;
  const time = props.time;

  /*math random cloud generation*/
  const borderRadius = `${Math.floor(Math.random() * 50)}%`;
  const scale = Math.floor(Math.random() * 100) + 200;
  const baseFrequency = Math.floor(Math.random() * 0.003) + 0.01;
  const seed = Math.floor(Math.random() * 9999);

  /* animations */
  const drift2 = () => {
    const xNumber = parseInt(xCoord.replace(/\D/g,''))
    const heightChange = Math.floor(Math.random()*5 +1) 
    return keyframes`
    0% {
      transform: translate(-${140-xNumber}vw, ${heightChange}vh);
    }
    100% {
      transform: translate(0, 0);
    }
    `;
  };


  // Cloud return value //
  return (
    <div className="cloud-outer"
    style={{
      color:"transparent"
    }}>
    <div
      className="cloud"
      id={props.cloudID}
      onAnimationEnd={(e) => {
        props.handleAnimationEnd(e);
      }}
      style={{
        height: "0px",
        borderRadius: "0%",
        animation: `${drift2()} ${time} linear`,
        animationFillMode: "backwards",
        position: "absolute",
        top: "0px",
        left: "108vw",
      }}
    >
      <div
        className="cloud-front"
        style={{
          width: width,
          height: height,
          backgroundColor: "transparent",
          filter: `url(#filter-front-${props.cloudID})`,
          position: "absolute",
          top: -height,
          borderRadius: borderRadius,
          boxShadow: `0vw calc(${yCoord} + ${
            height * 1.3
          }px) 30px 10px`,
        }}
      ></div>
      <div
        className="cloud-mid"
        style={{
          width: width - 10,
          height: height / 2,
          filter: `url(#filter-mid-${props.cloudID})`,
          position: "absolute",
          top: -height + height / 4,
          borderRadius: borderRadius,
          boxShadow: `0vw calc(${yCoord} + ${
            height * 1.4
          }px) 60px 10px`,
        }}
      ></div>
      <div
        className="cloud-back"
        style={{
          width: width - 20,
          height: height / 4,
          filter: `url(#filter-back-${props.cloudID})`,
          position: "absolute",
          top: -height,
          borderRadius: borderRadius,
          boxShadow: `0vw calc(${yCoord} + ${
            height * 1.9
          }px) 100px 10px`,
        }}
      ></div>
      <svg width="0" height="0">
        <filter id={`filter-back-${props.cloudID}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves="140"
            seed={seed}
          />
          <feDisplacementMap in="SourceGraphic" scale={scale} />
        </filter>
        <filter id={`filter-mid-${props.cloudID}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves="140"
            seed={seed}
          />
          <feDisplacementMap in="SourceGraphic" scale={scale} />
        </filter>
        <filter id={`filter-front-${props.cloudID}`}>
          <feTurbulence
            type="fractalNoise"
            baseFrequency={baseFrequency}
            numOctaves="140"
            seed={seed}
          />
          <feDisplacementMap in="SourceGraphic" scale={scale} />
        </filter>
      </svg>
    </div>
    </div>
  );
}

export default Cloud;
