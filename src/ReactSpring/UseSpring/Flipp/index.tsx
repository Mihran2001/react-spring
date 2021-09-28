import React, { useState } from "react";
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
  const [flipped, setFlipped] = useState(false);
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  return (
    <div onClick={() => setFlipped(!flipped)}>
      <animated.div className="c back" style={style} />
      <animated.div className="c front" style={style} />
    </div>
  );
}
