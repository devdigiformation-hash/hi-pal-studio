import React, { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ContactShadows } from "@react-three/drei";
import * as THREE from "three";

const bodyMaterialProps = {
  color: "#2A2F3A",
  metalness: 0.9,
  roughness: 0.25,
} as const;

const Robot = () => {
  const group = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (!group.current) return;
    const targetY = mouse.x * 0.5;
    const targetX = -mouse.y * 0.2;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetY, 0.08);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetX, 0.08);
    group.current.position.y = Math.sin(state.clock.elapsedTime * 1.4) * 0.12;
  });

  return (
    <group ref={group} position={[0, 0.2, 0]}>
      {/* Torso */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <capsuleGeometry args={[0.7, 1.1, 8, 32]} />
        <meshStandardMaterial {...bodyMaterialProps} />
      </mesh>
      {/* Chest core */}
      <mesh position={[0, 0.15, 0.66]}>
        <circleGeometry args={[0.22, 32]} />
        <meshBasicMaterial color="#2FE0C8" />
      </mesh>
      <pointLight color="#2FE0C8" intensity={3} distance={3} position={[0, 0.15, 1]} />

      {/* Neck */}
      <mesh position={[0, 1.0, 0]} castShadow>
        <cylinderGeometry args={[0.18, 0.18, 0.25, 16]} />
        <meshStandardMaterial color="#6C7280" metalness={1} roughness={0.3} />
      </mesh>

      {/* Head */}
      <mesh position={[0, 1.45, 0]} castShadow>
        <sphereGeometry args={[0.48, 48, 48]} />
        <meshStandardMaterial color="#3A404D" metalness={0.95} roughness={0.15} />
      </mesh>
      {/* Visor */}
      <mesh position={[0, 1.48, 0.4]}>
        <boxGeometry args={[0.5, 0.12, 0.06]} />
        <meshBasicMaterial color="#2FE0C8" />
      </mesh>
      <pointLight color="#2FE0C8" intensity={4} distance={3.5} position={[0, 1.5, 1]} />

      {/* Shoulders + arms */}
      {[1, -1].map((s) => (
        <group key={s}>
          <mesh position={[s * 0.85, 0.55, 0]} castShadow>
            <sphereGeometry args={[0.26, 24, 24]} />
            <meshStandardMaterial color="#6C7280" metalness={1} roughness={0.3} />
          </mesh>
          <mesh position={[s * 0.95, -0.15, 0]} rotation={[0, 0, s * -0.12]} castShadow>
            <capsuleGeometry args={[0.16, 0.9, 6, 20]} />
            <meshStandardMaterial {...bodyMaterialProps} />
          </mesh>
        </group>
      ))}

      {/* Legs */}
      {[0.38, -0.38].map((x) => (
        <mesh key={x} position={[x, -1.35, 0]} castShadow>
          <capsuleGeometry args={[0.2, 1.0, 6, 20]} />
          <meshStandardMaterial {...bodyMaterialProps} />
        </mesh>
      ))}
    </group>
  );
};

export const AIJarvis = () => {
  return (
    <div
      className="jarvis-canvas-container"
      style={{
        width: "100%",
        height: "600px",
        position: "relative",
        overflow: "hidden",
        borderRadius: "18px",
      }}
    >
      <Canvas shadows camera={{ position: [0, 0.4, 6.5], fov: 50 }} style={{ width: "100%", height: "100%" }}>
        <color attach="background" args={["#070B14"]} />
        <fog attach="fog" args={["#070B14", 8, 18]} />
        <ambientLight intensity={0.8} />
        <hemisphereLight args={["#8B7CF6", "#0A0F1C", 1.2]} />
        <directionalLight intensity={2.2} position={[4, 6, 5]} castShadow />
        <pointLight intensity={30} color="#2FE0C8" position={[-4, 2, 4]} />
        <pointLight intensity={20} color="#8B7CF6" position={[4, -1, 3]} />

        <Robot />

        <ContactShadows position={[0, -2.3, 0]} opacity={0.5} scale={12} blur={2.5} far={5} />
      </Canvas>
    </div>
  );
};
