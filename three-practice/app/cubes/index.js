import './index.scss';
import * as THREE from 'three';
import createOrbitControls from 'three-orbit-controls';

const OrbitControls = createOrbitControls(THREE);

// scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xaaaaaa);

// camera/controls
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 1, 3);
const controls = new OrbitControls(camera);

// light
const light = new THREE.PointLight();
light.position.set(3, 3, 3);
scene.add(light);

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function _cube (x, y, z) {
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x0000ff } );
  const cube = new THREE.Mesh( geometry, material );
  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;
  scene.add(cube);
  return cube;
}

const cubes = [];

for (let x = 0; x < 5; x += 2)
  for (let y = 0; y < 5; y += 2)
    for (let z = 0; z < 5; z += 2)
      cubes.push(_cube(x, y, z));

function getRandomArbitrary (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let count = 0;
const render = () => {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  if (count === 27) count = 0;
  const cu = cubes[count];
  cu.position.set(
    getRandomArbitrary(0, 5),
    getRandomArbitrary(0, 5),
    getRandomArbitrary(0, 5)
  );

  count++;
};

const onResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', onResize, false );

render();
