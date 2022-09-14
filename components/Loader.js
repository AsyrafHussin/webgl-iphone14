import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <p>{progress}% loaded</p>
    </Html>
  );
}
