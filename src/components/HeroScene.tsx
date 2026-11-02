import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Float, Html, Lightformer } from "@react-three/drei";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

const STAGES = ["Find", "Prepare", "Approve", "Execute", "Check"];
const INK = "#1c1a17";
const EMBER = "#e2572b";
const SAND = "#d9cbb4";

function Core({ reducedMotion }: { reducedMotion: boolean }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (reducedMotion) return;
    const dt = Math.min(delta, 0.05);
    if (ref.current) {
      ref.current.rotation.y += dt * 0.34;
      ref.current.rotation.x += dt * 0.135;
    }
  });

  return (
    <Float
      speed={reducedMotion ? 0 : 1.9}
      floatIntensity={reducedMotion ? 0 : 0.6}
      rotationIntensity={reducedMotion ? 0 : 0.28}
    >
      <mesh ref={ref} castShadow>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshStandardMaterial color={EMBER} metalness={0.35} roughness={0.25} flatShading />
      </mesh>
      <mesh scale={1.55}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshBasicMaterial color={INK} wireframe transparent opacity={0.12} />
      </mesh>
    </Float>
  );
}

function Orbit({ reducedMotion }: { reducedMotion: boolean }) {
  const group = useRef<THREE.Group>(null);
  const pulse = useRef<THREE.Mesh>(null);
  const t = useRef(0);
  const radius = 3.1;
  const curve = useMemo(() => {
    const points = Array.from({ length: 129 }, (_, index) => {
      const angle = (index / 128) * Math.PI * 2;
      return new THREE.Vector3(
        Math.cos(angle) * radius,
        Math.sin(angle * 2) * 0.35,
        Math.sin(angle) * radius,
      );
    });
    return new THREE.CatmullRomCurve3(points, true);
  }, []);

  useFrame((_, delta) => {
    if (reducedMotion) return;
    const dt = Math.min(delta, 0.05);
    t.current = (t.current + dt * 0.1081) % 1;
    if (group.current) group.current.rotation.y += dt * 0.108;
    if (pulse.current) pulse.current.position.copy(curve.getPointAt(t.current));
  });

  return (
    <group ref={group} rotation={[0.35, 0, -0.12]}>
      <mesh>
        <tubeGeometry args={[curve, 256, 0.018, 8, true]} />
        <meshStandardMaterial color={INK} roughness={0.6} />
      </mesh>
      <mesh ref={pulse} position={[radius, 0, 0]}>
        <sphereGeometry args={[0.09, 24, 24]} />
        <meshStandardMaterial color={EMBER} emissive={EMBER} emissiveIntensity={1.2} />
      </mesh>
      {STAGES.map((stage, index) => {
        const position = curve.getPointAt(index / STAGES.length);
        return (
          <group key={stage} position={position}>
            <mesh castShadow>
              <boxGeometry args={[0.34, 0.34, 0.34]} />
              <meshStandardMaterial
                color={index === 3 ? EMBER : SAND}
                roughness={0.4}
                metalness={0.1}
              />
            </mesh>
            {index !== 0 && (
              <Html
                center
                distanceFactor={9}
                position={[0, 0.55, 0]}
                style={{ pointerEvents: "none" }}
              >
                <span className="hero-tag">{stage}</span>
              </Html>
            )}
          </group>
        );
      })}
      <group position={curve.getPointAt(0)}>
        <Html center distanceFactor={9} position={[-0.65, 0.55, 0]} style={{ pointerEvents: "none" }}>
          <span className="hero-tag">Find</span>
        </Html>
      </group>
    </group>
  );
}

function Rig({ reducedMotion }: { reducedMotion: boolean }) {
  useFrame(({ camera, pointer }) => {
    if (reducedMotion) return;
    camera.position.x += (pointer.x * 1.4 - camera.position.x) * 0.055;
    camera.position.y += (1.6 + pointer.y * 0.7 - camera.position.y) * 0.055;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function SceneContents({ reducedMotion, onReady }: { reducedMotion: boolean; onReady: () => void }) {
  const { size, invalidate } = useThree();
  const renderedFrames = useRef(0);
  useFrame(() => {
    renderedFrames.current += 1;
    if (renderedFrames.current === 2) onReady();
    if (renderedFrames.current < 2) invalidate();
  });
  const scale = size.width < 500 ? 1.12 : size.width < 700 ? 1.04 : 1;

  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[4, 6, 3]} intensity={1.6} castShadow />
      <Environment resolution={128}>
        <Lightformer intensity={2} position={[0, 5, 0]} scale={[10, 10, 1]} />
        <Lightformer
          intensity={1}
          color="#f3d9c4"
          position={[-5, 1, -1]}
          rotation-y={Math.PI / 2}
          scale={[20, 1, 1]}
        />
      </Environment>
      <group scale={scale}>
        <Core reducedMotion={reducedMotion} />
        <Orbit reducedMotion={reducedMotion} />
        <mesh rotation-x={-Math.PI / 2} position={[0, -2.2, 0]} receiveShadow>
          <circleGeometry args={[7, 64]} />
          <shadowMaterial opacity={0.12} />
        </mesh>
      </group>
      <Rig reducedMotion={reducedMotion} />
    </>
  );
}

export default function HeroScene({ onReady }: { onReady: () => void }) {
  const [reducedMotion, setReducedMotion] = useState(false);
  const [mobile, setMobile] = useState(() => typeof window !== "undefined" && window.innerWidth < 768);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setReducedMotion(preference.matches);
    const updateSize = () => setMobile(window.innerWidth < 768);
    window.addEventListener("resize", updateSize);
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => {
      preference.removeEventListener("change", updatePreference);
      window.removeEventListener("resize", updateSize);
    };
  }, []);

  return (
    <Canvas
      className="hero-scene-canvas"
      frameloop={reducedMotion ? "demand" : "always"}
      shadows={!mobile}
      dpr={mobile ? 1 : [1, 1.5]}
      gl={{ antialias: !mobile, powerPreference: "low-power" }}
      camera={{ position: [0, 1.6, 10.5], fov: 42 }}
      onCreated={({ camera }) => {
        camera.lookAt(0, 0, 0);
      }}
    >
      <SceneContents reducedMotion={reducedMotion} onReady={onReady} />
    </Canvas>
  );
}
