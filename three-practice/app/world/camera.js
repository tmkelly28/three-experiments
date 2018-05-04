import * as THREE from 'three'
import firstPersonControls from './first-person-controls'
import createOrbitControls from 'three-orbit-controls'

firstPersonControls(THREE)

export default () => {
  const OrbitControls = createOrbitControls(THREE)

  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  new OrbitControls(camera)

  camera.position.set(3, 6, 18)

  return [camera, {update () {}}]
}

// export default function createCamera () {
//
//   const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 10000)
//   camera.position.set(0, 1, 0)
//
//   const camControls = new THREE.FirstPersonControls(camera)
//   camControls.lookSpeed = 0.2
//   camControls.movementSpeed = 10
//   camControls.noFly = true
//   camControls.lookVertical = false
//   camControls.constrainVertical = true
//
//   return [camera, camControls]
// }
