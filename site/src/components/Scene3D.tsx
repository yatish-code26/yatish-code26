import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

interface Scene3DProps {
  reducedMotion?: boolean;
}

export const Scene3D: React.FC<Scene3DProps> = ({ reducedMotion = false }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x06080F, 0.05);

    // 2. Camera setup
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x0f172a, 1.5);
    scene.add(ambientLight);

    const cyanLight = new THREE.PointLight(0x38bdf8, 3.5, 20);
    cyanLight.position.set(4, 3, 5);
    scene.add(cyanLight);

    const violetLight = new THREE.PointLight(0x818cf8, 3.0, 20);
    violetLight.position.set(-4, -3, 3);
    scene.add(violetLight);

    const topWhiteLight = new THREE.DirectionalLight(0xffffff, 1.2);
    topWhiteLight.position.set(0, 8, 4);
    scene.add(topWhiteLight);

    // 5. Central Engineered 3D Structure (The Builder's Core)
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Layer A: Inner crystalline core
    const innerGeom = new THREE.IcosahedronGeometry(1.2, 1);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.15,
      metalness: 0.85,
      emissive: 0x1e293b,
      wireframe: false,
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    coreGroup.add(innerMesh);

    // Layer B: Luminous geometric wireframe cage
    const wireGeom = new THREE.IcosahedronGeometry(1.22, 1);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      wireframe: true,
      transparent: true,
      opacity: 0.65,
    });
    const wireMesh = new THREE.Mesh(wireGeom, wireMat);
    coreGroup.add(wireMesh);

    // Layer C: Outer Dodecahedron Exoskeleton
    const exoGeom = new THREE.DodecahedronGeometry(1.8, 0);
    const exoMat = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const exoMesh = new THREE.Mesh(exoGeom, exoMat);
    coreGroup.add(exoMesh);

    // Layer D: Concentric Orbital Data Rings
    const createRing = (radius: number, tubeRadius: number, color: number, tiltX: number, tiltY: number) => {
      const ringGeom = new THREE.TorusGeometry(radius, tubeRadius, 16, 100);
      const ringMat = new THREE.MeshBasicMaterial({
        color,
        transparent: true,
        opacity: 0.45,
      });
      const ringMesh = new THREE.Mesh(ringGeom, ringMat);
      ringMesh.rotation.x = tiltX;
      ringMesh.rotation.y = tiltY;
      return ringMesh;
    };

    const ring1 = createRing(2.4, 0.015, 0x38bdf8, 0.6, 0.2);
    const ring2 = createRing(2.8, 0.012, 0x818cf8, -0.5, 0.4);
    const ring3 = createRing(3.2, 0.01, 0x34d399, 0.2, -0.6);
    coreGroup.add(ring1);
    coreGroup.add(ring2);
    coreGroup.add(ring3);

    // Layer E: Orbital Node Satellites
    const nodeGeom = new THREE.SphereGeometry(0.06, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0x38bdf8 });
    const nodes: THREE.Mesh[] = [];
    for (let i = 0; i < 6; i++) {
      const node = new THREE.Mesh(nodeGeom, nodeMat);
      coreGroup.add(node);
      nodes.push(node);
    }

    // Layer F: Spatial Data Particle Grid / Starfield
    const particlesCount = 350;
    const positions = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 18;
      positions[i + 1] = (Math.random() - 0.5) * 18;
      positions[i + 2] = (Math.random() - 0.5) * 12;
    }
    const particleGeom = new THREE.BufferGeometry();
    particleGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.035,
      color: 0x94a3b8,
      transparent: true,
      opacity: 0.5,
    });
    const particlePoints = new THREE.Points(particleGeom, particleMat);
    scene.add(particlePoints);

    // 6. Interaction State
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let isTouching = false;
    let touchStartX = 0;
    let touchStartY = 0;

    const onPointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x;
      mouseY = y;
      targetRotationY = mouseX * 0.7;
      targetRotationX = -mouseY * 0.5;
    };

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        isTouching = true;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (isTouching && e.touches.length > 0) {
        const deltaX = (e.touches[0].clientX - touchStartX) * 0.005;
        const deltaY = (e.touches[0].clientY - touchStartY) * 0.005;
        targetRotationY += deltaX;
        targetRotationX += deltaY;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const onTouchEnd = () => {
      isTouching = false;
    };

    window.addEventListener('mousemove', onPointerMove, { passive: true });
    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    container.addEventListener('touchend', onTouchEnd, { passive: true });

    // 7. Resize Handler
    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    // 8. Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!reducedMotion) {
        // Idle rotations
        innerMesh.rotation.y = elapsedTime * 0.25;
        innerMesh.rotation.x = elapsedTime * 0.15;

        wireMesh.rotation.y = elapsedTime * 0.25;
        wireMesh.rotation.x = elapsedTime * 0.15;

        exoMesh.rotation.y = -elapsedTime * 0.18;
        exoMesh.rotation.z = elapsedTime * 0.12;

        ring1.rotation.z = elapsedTime * 0.35;
        ring2.rotation.z = -elapsedTime * 0.25;
        ring3.rotation.z = elapsedTime * 0.2;

        // Animate orbital nodes along paths
        nodes.forEach((node, i) => {
          const angle = elapsedTime * (0.4 + i * 0.15) + (i * Math.PI) / 3;
          const radius = 2.4 + (i % 3) * 0.4;
          node.position.x = Math.cos(angle) * radius;
          node.position.y = Math.sin(angle * 1.2) * (radius * 0.4);
          node.position.z = Math.sin(angle) * radius;
        });

        // Subtle particle drift
        particlePoints.rotation.y = elapsedTime * 0.02;

        // Smooth camera / group parallax with lerping
        coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.04;
        coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.04;
      }

      renderer.render(scene, camera);
    };

    animate();

    // 9. Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', onResize);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      container.removeEventListener('touchend', onTouchEnd);

      // Dispose Three resources
      innerGeom.dispose();
      innerMat.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      exoGeom.dispose();
      exoMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      nodeGeom.dispose();
      nodeMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [reducedMotion]);

  if (!hasWebGL) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center border border-sky-500/20 rounded-2xl bg-slate-900/40">
        <div className="w-24 h-24 rounded-full border border-sky-400/30 flex items-center justify-center mb-4">
          <div className="w-16 h-16 rounded-full border border-indigo-400/40 animate-pulse flex items-center justify-center">
            <span className="font-mono text-xs text-sky-400">3D CORE</span>
          </div>
        </div>
        <p className="font-mono text-sm text-slate-400">WebGL Acceleration Disabled // Static Vector Blueprint Mode</p>
      </div>
    );
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-full relative cursor-grab active:cursor-grabbing select-none"
      style={{ minHeight: '480px' }}
    />
  );
};
