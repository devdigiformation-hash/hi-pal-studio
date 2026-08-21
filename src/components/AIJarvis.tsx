import React, { useRef, useState, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, PerspectiveCamera, Float } from '@react-three/drei';
import * as THREE from 'three';

const RobotFallback = () => {
  const material = new THREE.MeshStandardMaterial({
    color: "#111111",
    metalness: 0.95,
    roughness: 0.1,
  });

  return (
    <group>
      {/* Torso */}
      <mesh position={[0, 0, 0]} material={material}>
        <cylinderGeometry args={[0.8, 0.6, 2, 32]} />
      </mesh>
      {/* Head */}
      <mesh position={[0, 1.4, 0]} material={material}>
        <sphereGeometry args={[0.5, 32, 32]} />
        {/* Eye */}
        <group position={[0, 0, 0.45]}>
          <mesh>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshBasicMaterial color="#00ffff" />
          </mesh>
          <pointLight color="#00ffff" intensity={2} distance={2} />
        </group>
      </mesh>
      {/* Arms */}
      <mesh position={[1, 0.5, 0]} rotation={[0, 0, -0.2]} material={material}>
        <cylinderGeometry args={[0.15, 0.15, 1.5, 16]} />
      </mesh>
      <mesh position={[-1, 0.5, 0]} rotation={[0, 0, 0.2]} material={material}>
        <cylinderGeometry args={[0.15, 0.15, 1.5, 16]} />
      </mesh>
      {/* Legs */}
      <mesh position={[0.4, -1.8, 0]} material={material}>
        <cylinderGeometry args={[0.2, 0.2, 1.8, 16]} />
      </mesh>
      <mesh position={[-0.4, -1.8, 0]} material={material}>
        <cylinderGeometry args={[0.2, 0.2, 1.8, 16]} />
      </mesh>
    </group>
  );
};

// Component that handles the GLTF loading with a simple check
const SafeModel = () => {
  const [hasError, setHasError] = useState(false);
  
  // We use the useGLTF hook directly. 
  // R3F's Suspense will handle the loading.
  // We'll catch errors at the Canvas level or through an ErrorBoundary.
  const { scene } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/robot-log-body/model.gltf') as any;

  useEffect(() => {
    if (scene) {
      scene.traverse((obj: any) => {
        if (obj.isMesh) {
          obj.material = new THREE.MeshStandardMaterial({
            color: "#111111",
            metalness: 0.95,
            roughness: 0.1,
          });
        }
      });

      // Add Eye to the loaded model
      const eyeGroup = new THREE.Group();
      const eyeMesh = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 16, 16),
        new THREE.MeshBasicMaterial({ color: "#00ffff" })
      );
      const eyeLight = new THREE.PointLight("#00ffff", 2, 2);
      eyeGroup.add(eyeMesh);
      eyeGroup.add(eyeLight);
      eyeGroup.position.set(0, 1.5, 0.3); 
      scene.add(eyeGroup);
    }
  }, [scene]);

  return <primitive object={scene} />;
};

const RobotScene = () => {
  const group = useRef<THREE.Group>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (group.current) {
      const targetRotationY = mouse.x * 0.5;
      const targetRotationX = -mouse.y * 0.2;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, targetRotationY, 0.1);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, targetRotationX, 0.1);
      group.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <SafeModel />
    </group>
  );
};

// Custom error boundary to prevent R3F crashes from taking down the app
class R3FErrorBoundary extends React.Component<{ children: React.ReactNode, fallback: React.ReactNode }, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <group>
          {this.props.fallback}
        </group>
      );
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
        display: 'block'
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
        
        <R3FErrorBoundary fallback={<RobotFallback />}>
          <React.Suspense fallback={<RobotFallback />}>
            <RobotScene />
          </React.Suspense>
        </R3FErrorBoundary>
        
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