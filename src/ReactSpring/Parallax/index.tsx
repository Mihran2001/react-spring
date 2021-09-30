import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./styles.css";
export default function ParallaxExample() {
  return (
    <Parallax pages={2} style={{ top: "0", left: "0" }}>
      <ParallaxLayer
        className="first"
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>Scroll down</p>
      </ParallaxLayer>

      <ParallaxLayer
        className="second"
        offset={1}
        speed={2}
        style={{ backgroundColor: "#ff6d6d" }}
      />

      <ParallaxLayer
        offset={1}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        <p>Scroll up</p>
      </ParallaxLayer>
    </Parallax>
  );
}
