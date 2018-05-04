import {
  Scene,
  Camera,
  OrbitControls,
  PointLight,
  Renderer,
  AxisHelper,
  Sphere,
  Plane
} from './modules'
import {onResize} from './listeners'
import main from './main'

const scene = Scene()
const renderer = Renderer()
const camera = Camera(scene)
const sphere = Sphere(scene)
OrbitControls(camera)
PointLight(scene)
AxisHelper(scene)
Plane(scene)

const render = () => {
  window.requestAnimationFrame(render)
  renderer.render(scene, camera)
  main(sphere)
}

window.addEventListener('resize', onResize(camera, renderer), false)

render()
