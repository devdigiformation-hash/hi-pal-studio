import React, { Suspense, useMemo, useRef, useEffect } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { 
  Environment, 
  Float, 
  ContactShadows, 
  useGLTF, 
  PerspectiveCamera, 
  MeshDistortMaterial,
  Sphere
} from '@react-three/drei';
import * as THREE from 'three';

// Fallback component to show if the model fails to load
const RobotFallback = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.y = t * 0.5;
    meshRef.current.position.y = Math.sin(t) * 0.2;
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 64, 64]}>
        <MeshDistortMaterial
          color="#101010"
          roughness={0.1}
          metalness={1}
          distort={0.4}
          speed={2}
          emissive="#2fe0c8"
          emissiveIntensity={0.5}
        />
      </Sphere>
      <mesh position={[0, 0, 0.8]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial 
          color="#2fe0c8" 
          emissive="#2fe0c8" 
          emissiveIntensity={2} 
          toneMapped={false}
        />
      </mesh>
    </group>
  );
};

const Model = () => {
  // Attempt to load the model - this might fail depending on path
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/robot-base/model.gltf');
  const group = useRef<THREE.Group>(null);

  // Apply custom materials to the robot
  useEffect(() => {
    if (materials) {
      Object.values(materials).forEach((material: any) => {
        if (material) {
          material.color = new THREE.Color('#000000');
          material.roughness = 0.1;
          material.metalness = 1;
        }
      });
    }
  }, [materials]);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.getElapsedTime();
    // Smooth mouse follow
    const mouseX = (state.mouse.x * Math.PI) / 8;
    const mouseY = (state.mouse.y * Math.PI) / 8;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, mouseX, 0.1);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -mouseY, 0.1);
    group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, Math.sin(t) * 0.1, 0.1);
  });

  return (
    <primitive 
      ref={group}
      object={nodes.Scene} 
      scale={2.5} 
      position={[0, -2, 0]} 
    />
  );
};

const RobotScene = () => {
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <Model />
    </Float>
  );
};

// Error boundary for GLTF loading
class GLTFErrorBoundary extends React.Component<{ children: React.ReactNode, fallback: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn("GLTF loading error caught:", error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const AIJarvis = () => {
  return (
    <div 
      className="jarvis-canvas-container"
      style={{ 
        width: '100%', 
        height: '600px', 
        background: '#000000', 
        position: 'relative', 
        overflow: 'hidden',
        zIndex: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 8], fov: 60 }} 
        style={{ 
          width: '100%', 
          height: '100%',
          background: '#000000'
        }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.4} />
        <directionalLight intensity={1.5} position={[5, 5, 5]} castShadow />
        <pointLight intensity={2} position={[-3, 2, 4]} />
        
        <GLTFErrorBoundary fallback={<RobotFallback />}>
          <Suspense fallback={<RobotFallback />}>
            <RobotScene />
          </Suspense>
        </GLTFErrorBoundary>
        
        <ContactShadows 
          position={[0, -2.5, 0]} 
          opacity={0.4} 
          scale={10} 
          blur={2} 
          far={4.5} 
        />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
};