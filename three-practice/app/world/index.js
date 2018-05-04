import * as THREE from 'three'
import spotlight from './spotlight'
import createCamera from './camera'
import generateWorld from './generateTerrainTiles'
import handleIntersect from './intersection'

const clock = new THREE.Clock()

// scene
const scene = new THREE.Scene()
scene.background = new THREE.Color(0x202020)
scene.fog = new THREE.Fog(0xcce0ff, 500, 10000)

// camera/controls
const [camera, camControls] = createCamera()

// light
spotlight(false)(scene)

// raycaster
const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()

// renderer
const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

// helpers
const axisHelper = new THREE.AxisHelper(100)
scene.add(axisHelper)

// add shapes
const world = generateWorld(scene)

// render
const render = () => {
  window.requestAnimationFrame(render)
  camControls.update(clock.getDelta())
  raycaster.setFromCamera(mouse, camera)
  handleIntersect(raycaster.intersectObjects(scene.children))
  world.renderers.forEach(r => r())
  renderer.render(scene, camera)
}

// event listeners

const onMouseMove = evt => {
  mouse.x = (evt.clientX / window.innerWidth) * 2 - 1
  mouse.y = -(evt.clientY / window.innerHeight) * 2 + 1
}

const onResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

window.addEventListener('resize', onResize, false)
window.addEventListener('mousemove', onMouseMove, false)

// main
render()

// debugging
console.log(world)
