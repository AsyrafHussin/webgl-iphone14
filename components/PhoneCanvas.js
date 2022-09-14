import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "three";
import { OrbitControls, Stage } from "@react-three/drei";
import Loader from "./Loader";
import { Phone } from "./Phone";

function CameraHelper() {
  const camera = new PerspectiveCamera(60, 1, 1, 3);
  return (
    <group position={[0, 0, 2]}>
      <cameraHelper args={[camera]} />
    </group>
  );
}

export default function PhoneCanvas() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 2] }}>
      <Suspense fallback={<Loader />}>
        <Stage
          contactShadow
          shadows
          adjustCamera
          intensity={1}
          environment="city"
          preset="rembrandt"
        >
          <Phone scale={1} position={[0, 0, 0]} />
        </Stage>
      </Suspense>
      <CameraHelper />
      <OrbitControls autoRotate autoRotateSpeed={1.2} minDistance={0} />
    </Canvas>
  );
}
