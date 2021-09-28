import React, { useState, useRef } from "react";
import { useSpring, animated, config } from "react-spring";
import "./style.css";

// export default function FlippeImg() {
//   const [flipped, set] = useState(false);

//   const { opacity, transform } = useSpring({
//     opacity: flipped ? 1 : 0,
//     transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
//     config: config.gentle,
//   });

//   return (
//     <div onClick={() => set(!flipped)}>
//       <animated.div
//         className="c back"
//         style={{
//           opacity: opacity.interpolate((o) => 1 - o),
//           transform,
//         }}
//       />
//       <animated.div
//         className="c front"
//         style={{
//           opacity,
//           transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
//         }}
//       />
//     </div>
//   );
// }

export default function FlippeImg() {
  const n = useRef(0);
  // const [n, setN] = useState(0);
  const styles = useSpring({
    loop: () => {
      console.log(n.current);
      // setN((n) => n + 1);
      ++n.current;
      if (3 > n.current) {
        return true;
      } else {
        return false;
      }
    },
    from: { x: 0 },
    to: { x: 100 },
  });

  return (
    <animated.div
      style={{
        width: 80,
        height: 80,
        backgroundColor: "#46e891",
        borderRadius: 16,
        ...styles,
      }}
    />
  );
}
