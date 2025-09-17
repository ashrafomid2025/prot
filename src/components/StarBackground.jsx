import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const StarBackground = (props) => {
  const ref = useRef();
  const [sphere] = useState(() =>
    random.inSphere(new Float32Array(600), { radius: 1.2 })
  );

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#fff"
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-0">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;

// import { useEffect, useState } from "react";

// export default function StarBackground() {
//   const [stars, setStars] = useState([]);
//   const [meteor, setMeteors] = useState([]);
//   useEffect(() => {
//     generateStars();
//     generateMeteor();
//     const handleResize = () => {
//       generateStars();
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);
//   //   id , size ,x, y , opacity, animationDuration
//   const generateStars = () => {
//     const numberOfStars = Math.floor(
//       (window.innerWidth * window.innerHeight) / 10000
//     );
//     const newStars = [];
//     for (let i = 0; i < numberOfStars; i++) {
//       newStars.push({
//         id: i,
//         size: Math.random() * 4 + 1,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         opacity: Math.random() * 0.4 + 0.4,
//         animationDuration: Math.random() * 4 + 2,
//       });
//     }
//     setStars(newStars);
//   };

//   const generateMeteor = () => {
//     const numberOfMeteors = 4;
//     const newMeteors = [];
//     for (let i = 0; i < numberOfMeteors; i++) {
//       newMeteors.push({
//         id: i,
//         size: Math.random() * 2 + 1,
//         x: Math.random() * 100,
//         y: Math.random() * 20,
//         delay: Math.random() * 15,
//         animationDuration: Math.random() * 3 + 3,
//       });
//     }
//     setMeteors(newMeteors);
//   };

//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {stars.map((star) => (
//         <div
//           className="star animate-pulse-subtle"
//           style={{
//             width: star.size + "px",
//             height: star.size + "px",
//             left: star.x + "%",
//             top: star.y + "%",
//             opacity: star.opacity,
//             animationDuration: star.animationDuration + "s",
//           }}
//           key={star.id}
//         ></div>
//       ))}
//       {meteor.map((m) => (
//         <div
//           className="meteor animate-meteor"
//           style={{
//             width: m.size * 50 + "px",
//             height: m.size * 2 + "px",
//             left: m.x + "%",
//             top: m.y + "%",
//             animationDelay: m.delay,
//             animationDuration: m.animationDuration + "s",
//           }}
//           key={m.id}
//         ></div>
//       ))}
//     </div>
//   );
// }
