import React, { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, Environment, ContactShadows, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

const RobotScene = () => {
  const group = useRef<THREE.Group>(null);
  const { mouse, viewport } = useThree();
  const [error, setError] = useState(false);

  // Fallback geometry if GLB fails
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

  const Model = () => {
    // Attempt to load a generic robot or the specified one if provided
    let gltf;
    try {
      gltf = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/robot-log-body/model.gltf', true);
    } catch (e) {
      console.warn("Failed to load GLTF model, falling back to primitive geometry:", e);
      return <RobotFallback />;
    }
    
    const { scene } = gltf;
    
    useMemo(() => {
      scene.traverse((obj) => {
        if ((obj as THREE.Mesh).isMesh) {
          (obj as THREE.Mesh).material = new THREE.MeshStandardMaterial({
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
      
      // Try to find a head bone or just place it at the top
      eyeGroup.position.set(0, 1.5, 0.3); 
      scene.add(eyeGroup);

    }, [scene]);

    return <primitive object={scene} />;
  };

  useFrame((state) => {
    if (group.current) {
      // Mouse tracking
      const targetX = (mouse.x * viewport.width) / 2;
      const targetY = (mouse.y * viewport.height) / 2;
      group.current.lookAt(targetX, targetY, 5);

      // Floating animation
      group.current.position.y = Math.sin(Date.now() * 0.002) * 0.1;
    }
  });

  return (
    <group ref={group}>
      <React.Suspense fallback={<RobotFallback />}>
        <Model />
      </React.Suspense>
    </group>
  );
};

export const AIJarvis = () => {
  return (
    <div style={{ width: '100%', height: '70vh', minHeight: '600px', background: '#000000', position: 'relative', overflow: 'hidden' }}>
      <Canvas shadows camera={{ position: [0, 0, 8], fov: 60 }} style={{ position: 'absolute', top: 0, left: 0 }}>
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.4} />
        <directionalLight intensity={1.5} position={[5, 5, 5]} castShadow />
        <pointLight intensity={2} position={[-3, 2, 4]} />
        
        <RobotScene />
        
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
