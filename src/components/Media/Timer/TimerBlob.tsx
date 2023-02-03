import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Blob from './Blob';
import { FC, useMemo, useState } from "react";

const Scene: FC<{time?:number}> = ({time}) => {


  return (
    <Canvas camera={{ position: [0.0, 0.0, 8.0] }}>
      
      <Blob timeInput={time}/>
      <axesHelper />
      <OrbitControls />
    </Canvas>
  );
};

export default Scene;
