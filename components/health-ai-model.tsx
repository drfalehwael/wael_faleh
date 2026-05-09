'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, Sphere, Torus, Box, RoundedBox } from '@react-three/drei'
import * as THREE from 'three'

function DNAHelix({ position = [0, 0, 0] as [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  const helixPoints = []
  for (let i = 0; i < 20; i++) {
    const t = i / 20 * Math.PI * 4
    const x1 = Math.cos(t) * 0.5
    const z1 = Math.sin(t) * 0.5
    const x2 = Math.cos(t + Math.PI) * 0.5
    const z2 = Math.sin(t + Math.PI) * 0.5
    const y = (i - 10) * 0.15
    helixPoints.push({ x1, z1, x2, z2, y })
  }

  return (
    <group ref={groupRef} position={position}>
      {helixPoints.map((point, i) => (
        <group key={i}>
          <mesh position={[point.x1, point.y, point.z1]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
          </mesh>
          <mesh position={[point.x2, point.y, point.z2]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="#1e3a5f" metalness={0.6} roughness={0.3} />
          </mesh>
          {i % 2 === 0 && (
            <mesh position={[(point.x1 + point.x2) / 2, point.y, (point.z1 + point.z2) / 2]}>
              <cylinderGeometry args={[0.015, 0.015, 1, 8]} />
              <meshStandardMaterial color="#D4AF37" metalness={0.5} roughness={0.4} transparent opacity={0.6} />
            </mesh>
          )}
        </group>
      ))}
    </group>
  )
}

function AIBrain() {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <Sphere args={[1, 64, 64]}>
          <MeshDistortMaterial
            color="#D4AF37"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </Sphere>
      </mesh>
      
      {/* Neural network nodes */}
      {[...Array(8)].map((_, i) => {
        const angle = (i / 8) * Math.PI * 2
        const radius = 1.5
        return (
          <Float key={i} speed={1.5 + i * 0.2} floatIntensity={0.3}>
            <mesh position={[Math.cos(angle) * radius, Math.sin(angle) * 0.3, Math.sin(angle) * radius]}>
              <sphereGeometry args={[0.12, 16, 16]} />
              <meshStandardMaterial color="#1e3a5f" metalness={0.7} roughness={0.3} />
            </mesh>
          </Float>
        )
      })}
      
      {/* Orbiting rings */}
      <Torus args={[1.3, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#D4AF37" metalness={0.9} roughness={0.1} />
      </Torus>
      <Torus args={[1.5, 0.015, 16, 100]} rotation={[Math.PI / 3, 0, Math.PI / 4]}>
        <meshStandardMaterial color="#1e3a5f" metalness={0.7} roughness={0.2} transparent opacity={0.7} />
      </Torus>
    </Float>
  )
}

function PulseCircle() {
  const ringRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (ringRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1
      ringRef.current.scale.set(scale, scale, 1)
    }
  })

  return (
    <mesh ref={ringRef} position={[0, -2, 0]} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[1.8, 2, 64]} />
      <meshStandardMaterial color="#D4AF37" metalness={0.5} roughness={0.5} transparent opacity={0.3} side={THREE.DoubleSide} />
    </mesh>
  )
}

function MedicalCross() {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.5
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1 + 1.8
    }
  })

  return (
    <group ref={groupRef} position={[0, 1.8, 0]}>
      <RoundedBox args={[0.15, 0.5, 0.08]} radius={0.02}>
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </RoundedBox>
      <RoundedBox args={[0.5, 0.15, 0.08]} radius={0.02}>
        <meshStandardMaterial color="#D4AF37" metalness={0.8} roughness={0.2} />
      </RoundedBox>
    </group>
  )
}

function DataParticles() {
  const particlesRef = useRef<THREE.Points>(null)
  const particleCount = 50
  
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 5
    positions[i * 3 + 1] = (Math.random() - 0.5) * 5
    positions[i * 3 + 2] = (Math.random() - 0.5) * 5
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.03
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#D4AF37" transparent opacity={0.6} />
    </points>
  )
}

export default function HealthAIModel() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} color="#D4AF37" />
        <pointLight position={[0, 0, 3]} intensity={0.5} color="#D4AF37" />
        
        <AIBrain />
        <DNAHelix position={[2.5, 0, -1]} />
        <MedicalCross />
        <PulseCircle />
        <DataParticles />
      </Canvas>
    </div>
  )
}
