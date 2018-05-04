import '../public/index.scss';
import * as THREE from 'three';
import createPlanet from './createPlanet';
import createShip from './createShip';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// planets ------------------------------------------------------------
const planets = _.times(10, createPlanet);
planets.forEach(planet => scene.add(planet));
// --------------------------------------------------------------------

// ship ---------------------------------------------------------------
const ship = createShip();
scene.add(ship);
// --------------------------------------------------------------------

// light --------------------------------------------------------------

const light = new THREE.AmbientLight(0x404040, 4);
scene.add(light);

// --------------------------------------------------------------------

camera.position.z = 15;

const render = () => {
  requestAnimationFrame(render);
  planets.forEach(planet => planet.rotation.x += 0.01);
  renderer.render(scene, camera);
};

const onResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

window.addEventListener('resize', onResize, false );
window.addEventListener('keydown', evt => {
  if (evt.keyCode === 37) camera.rotation.y += 0.1;
  if (evt.keyCode === 39) camera.rotation.y -= 0.1;
  if (evt.keyCode === 38) camera.rotation.x -= 0.1;
  if (evt.keyCode === 40) camera.rotation.x += 0.1;
  if (evt.keyCode === 83) camera.position.y += 0.2; // s
  if (evt.keyCode === 68) camera.position.y -= 0.2; // d
  if (evt.keyCode === 32) camera.position.add(camera.getWorldDirection());
});

render();
