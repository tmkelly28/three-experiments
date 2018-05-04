import './index.scss';
import * as THREE from 'three';
import createOrbitControls from 'three-orbit-controls';

const OrbitControls = createOrbitControls(THREE);

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x020a20);

// camera/controls
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 3);
const controls = new OrbitControls(camera);

// light
const light = new THREE.PointLight(0x0040ff, 1, 50);
light.position.set(0, 0, 0);
scene.add(light);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// particle system
const n = 1800;
const particles = new THREE.Geometry();
const material = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 1,
  map: new THREE.TextureLoader().load('../app/particles/particle.png'),
  transparent: true
});

for (let p = 0; p < n; p++) {
  const particle = new THREE.Vector3(
    Math.random() * 500 - 250,
    Math.random() * 500 - 250,
    Math.random() * 500 - 250
  );
  particle.velocity = new THREE.Vector3(0, -Math.random(), 0);
  particles.vertices.push(particle);
}

const system = new THREE.Points(particles, material);
scene.add(system);

const render = () => {
  requestAnimationFrame(render);
  system.rotation.y += 0.01;
  renderer.render(scene, camera);
};

const onResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', onResize, false );

render();
