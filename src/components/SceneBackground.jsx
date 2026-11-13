import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SceneBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 8.5;

    // WebGL Renderer with smooth antialiasing and alpha
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // Dynamic Crimson & Rose node graph
    const NODE_COUNT = 52;
    const nodes = [];
    const colors = [];

    // Crimson (#e11d48) and Rose Ember (#fb7185) palette
    const colorCrimson = new THREE.Color(0xe11d48);
    const colorRose = new THREE.Color(0xfb7185);
    const colorWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < NODE_COUNT; i++) {
      const pos = new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 11,
        (Math.random() - 0.5) * 7
      );
      nodes.push(pos);

      // Distribute brand dual colors
      const rand = Math.random();
      const nodeColor = rand > 0.4 ? colorCrimson : rand > 0.15 ? colorRose : colorWhite;
      colors.push(nodeColor.r, nodeColor.g, nodeColor.b);
    }

    // Connect nearest nodes with sleek lines
    const linePositions = [];
    const lineColors = [];
    const MAX_DIST = 3.2;

    for (let i = 0; i < nodes.length; i++) {
      let connections = 0;
      for (let j = i + 1; j < nodes.length; j++) {
        if (connections >= 3) break;
        const d = nodes[i].distanceTo(nodes[j]);
        if (d < MAX_DIST) {
          linePositions.push(
            nodes[i].x, nodes[i].y, nodes[i].z,
            nodes[j].x, nodes[j].y, nodes[j].z
          );
          
          // Slight gradient from crimson to rose
          lineColors.push(
            colorCrimson.r, colorCrimson.g, colorCrimson.b,
            colorRose.r, colorRose.g, colorRose.b
          );
          connections++;
        }
      }
    }

    // Line segments
    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    lineGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(lineColors, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.18,
      blending: THREE.AdditiveBlending,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);

    // Node points with particle glow
    const nodeGeometry = new THREE.BufferGeometry().setFromPoints(nodes);
    nodeGeometry.setAttribute(
      "color",
      new THREE.Float32BufferAttribute(colors, 3)
    );

    const nodeMaterial = new THREE.PointsMaterial({
      vertexColors: true,
      size: 0.08,
      transparent: true,
      opacity: 0.85,
      sizeAttenuation: true,
      blending: THREE.AdditiveBlending,
    });
    const points = new THREE.Points(nodeGeometry, nodeMaterial);

    // Subtle ambient dust layer (soft crimson embers)
    const DUST_COUNT = 40;
    const dustPoints = [];
    for (let i = 0; i < DUST_COUNT; i++) {
      dustPoints.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 18,
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 10
        )
      );
    }
    const dustGeometry = new THREE.BufferGeometry().setFromPoints(dustPoints);
    const dustMaterial = new THREE.PointsMaterial({
      color: 0xe11d48,
      size: 0.04,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending,
    });
    const dust = new THREE.Points(dustGeometry, dustMaterial);

    const group = new THREE.Group();
    group.add(lines);
    group.add(points);
    group.add(dust);
    scene.add(group);

    // Pointer Parallax
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    const handlePointerMove = (e) => {
      pointer.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.targetY = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", handlePointerMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Animation Loop
    let frameId;
    const clock = new THREE.Clock();

    let isVisible = true;
    const handleVisibilityChange = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const t = clock.getElapsedTime();

      // Smooth pointer lerp
      pointer.x += (pointer.targetX - pointer.x) * 0.05;
      pointer.y += (pointer.targetY - pointer.y) * 0.05;

      if (!prefersReducedMotion) {
        group.rotation.y = t * 0.035;
        group.rotation.x = Math.sin(t * 0.06) * 0.05;
        dust.rotation.y = -t * 0.02;
      }

      // Parallax response
      camera.position.x += (pointer.x * 0.7 - camera.position.x) * 0.03;
      camera.position.y += (-pointer.y * 0.5 - camera.position.y) * 0.03;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("visibilitychange", handleVisibilityChange);

      lineGeometry.dispose();
      lineMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      dustGeometry.dispose();
      dustMaterial.dispose();
      renderer.dispose();
      if (mount && mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <>
      {/* 3D Canvas */}
      <div
        ref={mountRef}
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 -z-10 opacity-75"
      />
      {/* Ambient Crimson & Rose glow backlights */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-1/4 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#e11d48]/10 blur-[130px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed bottom-1/4 right-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#fb7185]/8 blur-[140px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e11d48]/5 blur-[160px]"
      />
    </>
  );
}
