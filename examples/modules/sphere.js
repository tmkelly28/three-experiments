import {SphereBufferGeometry, MeshLambertMaterial, Mesh} from 'three'

export default scene => {
  const sphereGeometry = new SphereBufferGeometry(5, 32, 32)
  const sphereMaterial = new MeshLambertMaterial({color: 0x000fff, wireframe: false})
  const sphere = new Mesh(sphereGeometry, sphereMaterial)
  sphere.position.x = 0
  sphere.position.y = 10
  sphere.position.z = 0
  sphere.castShadow = true
  scene.add(sphere)
  return sphere
}
