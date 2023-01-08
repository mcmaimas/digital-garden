import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Blob from './Blob'

const Scene = () => {
  return (
    <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
      <Blob />
      <axesHelper />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
