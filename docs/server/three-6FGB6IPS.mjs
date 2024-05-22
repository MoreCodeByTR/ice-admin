import { createRequire } from 'module';const require = createRequire(import.meta.url);
import "./chunk-UAMNIRXN.mjs";

// src/pages/three/index.tsx
import { useEffect } from "react";
import * as THREE from "../../node_modules/.cache/deps/three.mjs";
var Index = () => {
  useEffect(() => {
    init();
  }, []);
  const init = () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    const geometry = new THREE.BoxGeometry(1, 1, 1, 2);
    const material = new THREE.LineBasicMaterial({
      color: 65535
    });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    camera.position.z = 5;
    function animate() {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    }
    animate();
  };
};
var three_default = Index;
export {
  three_default as default
};
//# sourceMappingURL=three-6FGB6IPS.mjs.map
