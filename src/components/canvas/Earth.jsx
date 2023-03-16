import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { PointLight } from "three";

import CanvasLoader from "../Loader";


const Earth = () => {

  const earth = useGLTF('./slug/scene.gltf')
  return (
    <primitive
    object={earth.scene} 
    scale={350}
    position-y={-1}
    rotation-y={5}
      />
  )
}

const EarthCanvas = () => {
  const pointLight = new PointLight(0xffffff, 1);
  return (
    <Canvas
      shadows
      frameloop='demans'
      gl={{preserveDrawingBuffer: true}}
      camera={{ 
        fov: 45,
        near: 0.1,
        far: 200,
        position: [10, 10, 10],
       }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
        <primitive object={pointLight}
        intensity={1} position={[-4, 50, 1]} />
      </Suspense>
    </Canvas>
  )
}

export default EarthCanvas