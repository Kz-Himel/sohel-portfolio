import { useEffect, useRef } from "react";
import * as THREE from "three";

// A quiet, slowly-drifting node graph. Nodes = independent systems
// (frontend / backend / database), edges = the connections a
// full-stack developer builds between them. Kept sparse and dim so
// it reads as atmosphere, not decoration.
export default function SceneBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.z = 9;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    // ---- Build a sparse node graph ------------------------------
    const NODE_COUNT = 46;
    const nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 14,
          (Math.random() - 0.5) * 9,
          (Math.random() - 0.5) * 8
        )
      );
    }

    // connect each node to its nearest few neighbours only
    const linePositions = [];
    const MAX_DIST = 3.1;
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
          connections++;
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x4c8dff,
      transparent: true,
      opacity: 0.16,
    });
    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const nodeGeometry = new THREE.BufferGeometry().setFromPoints(nodes);
    const nodeMaterial = new THREE.PointsMaterial({
      color: 0x8fb4ff,
      size: 0.06,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true,
    });
    const points = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(points);

    const group = new THREE.Group();
    group.add(lines);
    group.add(points);
    scene.add(group);

    // ---- Pointer parallax ----------------------------------------
    const pointer = { x: 0, y: 0 };
    const handlePointerMove = (e) => {
      pointer.x = (e.clientX / window.innerWidth - 0.5) * 2;
      pointer.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", handlePointerMove);

    // ---- Resize ----------------------------------------------------
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        group.rotation.y = t * 0.035;
        group.rotation.x = Math.sin(t * 0.08) * 0.06;
      }

      // gentle camera parallax follows the pointer
      camera.position.x += (pointer.x * 0.6 - camera.position.x) * 0.02;
      camera.position.y += (-pointer.y * 0.4 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      lineGeometry.dispose();
      lineMaterial.dispose();
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      renderer.dispose();
      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 opacity-90"
    />
  );
}
