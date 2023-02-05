
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef, useState } from "react";
import { MathUtils } from "three";
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';

const Blob = ({timeInput, setTimeRemaining}) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const hover = useRef(false);
  

  const uniforms = useMemo(
    () => ({
      u_intensity: {
        value: 0.3,
      },
      u_time: {
        value: 0.0,
      },
    }),
    []
  );

  useFrame((state) => {
    const { clock } = state;

    const timeRemaining = Math.max(timeInput - clock.getElapsedTime(), 0);
    setTimeRemaining(timeRemaining)
    mesh.current.material.uniforms.u_time.value = 0.4 * clock.getElapsedTime();    
    mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
      mesh.current.material.uniforms.u_intensity.value,
      // hover.current ? 0.95 : 0.15,
      (clock.getElapsedTime() > timeInput) ? 0.0 : 1 - (clock.getElapsedTime() / timeInput),
      0.1
    );
  }, []);

  return (
    <mesh
      ref={mesh}
      position={[0, 0, 0]}
      scale={1.5}
      onPointerOver={() => (hover.current = true)}
      onPointerOut={() => (hover.current = false)}
    >
      
      <icosahedronGeometry args={[2, 40]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        vertexShader={vertexShader}
        uniforms={uniforms}
        wireframe={false}
      />
    </mesh>
  );
};

export default Blob;
