import {
  DoubleSide,
  MeshLambertMaterial,
  Mesh,
  BoxBufferGeometry
} from 'three'

export default scene => {
  const geometry = new BoxBufferGeometry(50, 0.1, 50)
  const material = new MeshLambertMaterial({color: 0xf2f2f2, side: DoubleSide, wireframe: false})
  const plane = new Mesh(geometry, material)
  plane.receiveShadow = true
  scene.add(plane)
  return plane
}
