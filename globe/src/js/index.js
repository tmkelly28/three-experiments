import '../scss/index.scss'

import * as THREE from 'three'
import createOrbitControls from 'three-orbit-controls'

const {
  AxisHelper,
  BoxGeometry,
  Clock,
  Color,
  Fog,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  SphereBufferGeometry,
  SpotLight,
  SpotLightHelper,
  WebGLRenderer
} = THREE

const clock = new Clock() // eslint-disable-line no-unused-vars

// scene
const scene = new Scene()
scene.background = new Color(0x202020)
scene.fog = new Fog(0xcce0ff, 500, 10000)

// camera/controls
const OrbitControls = createOrbitControls(THREE)
const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
new OrbitControls(camera) // eslint-disable-line no-new
camera.position.set(0, 0, 18)

// light
const spotLight = new SpotLight(0xffffff, 1, 0, 0.314, 0, 1)
spotLight.position.set(0, 500, 0)
spotLight.castShadow = true
spotLight.shadow.mapSize.width = 1024
spotLight.shadow.mapSize.height = 1024
spotLight.shadow.camera.near = 500
spotLight.shadow.camera.far = 4000
spotLight.shadow.camera.fov = 30
scene.add(spotLight)

const spotLightHelper = new SpotLightHelper(spotLight)
scene.add(spotLightHelper)

// renderer
const renderer = new WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(window.devicePixelRatio)
document.body.appendChild(renderer.domElement)

// helpers
const axisHelper = new AxisHelper(100)
scene.add(axisHelper)

// sphere
const sphereGeometry = new SphereBufferGeometry(10, 32, 32)
const sphereMaterial = new MeshBasicMaterial({color: 0x000fff, wireframe: true})
const sphere = new Mesh(sphereGeometry, sphereMaterial)
sphere.position.x = 0
sphere.position.y = 0
sphere.position.z = 0
scene.add(sphere)

// cube parent
const p = new BoxGeometry(0.1, 0.1, 20)
const pivotMaterial = new MeshBasicMaterial({color: 0xffffff})
const pivot = new Mesh(p, pivotMaterial)
pivot.position.set(0, 0, 0)
scene.add(pivot)

// cube
const boxGeometry = new BoxGeometry(1, 1, 1)
const boxMaterial = new MeshBasicMaterial({color: 0xffaaff})
const cube = new Mesh(boxGeometry, boxMaterial)
cube.position.x = 0
cube.position.y = 0
cube.position.z = 10
pivot.add(cube)
// pivot.add(camera)
scene.add(camera)

const state = {
  direction: 0
}

// render
const render = () => {
  window.requestAnimationFrame(render)
  // switch (state.direction) {
  //   case 65: // A - left
  //     pivot.rotation.y -= 0.01
  //     break
  //   case 87: // W - up
  //     pivot.rotation.x -= 0.01
  //     break
  //   case 68: // D - right
  //     pivot.rotation.y += 0.01
  //     break
  //   case 83: // S - down
  //     pivot.rotation.x += 0.01
  //     break
  // }

  renderer.render(scene, camera)
}

// event listeners

const onResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

const keys = [65, 87, 68, 83]
const onKeyDown = ({keyCode}) => {
  if (~keys.indexOf(keyCode)) {
    state.direction = keyCode
  }
  switch (state.direction) {
    case 65: // A - left
      pivot.rotation.y -= 0.01
      break
    case 87: // W - up
      pivot.rotation.x -= 0.01
      break
    case 68: // D - right
      pivot.rotation.y += 0.01
      break
    case 83: // S - down
      pivot.rotation.x += 0.01
      break
  }
}

window.CUBE = cube
window.SPHERE = sphere

window.addEventListener('resize', onResize, false)
window.addEventListener('keydown', onKeyDown)

// main
render()
