import { Html, useProgress } from "@react-three/drei";

export default function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <p>Please wait</p>
      <p>{Number(progress).toFixed(2)}% loaded...</p>
    </Html>
  );
}
