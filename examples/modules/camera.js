import {PerspectiveCamera} from 'three'

export default scene => {
  const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.set(0, 0, 18)
  scene.add(camera)
  return camera
}
