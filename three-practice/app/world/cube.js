import {BoxGeometry, MeshLambertMaterial, Mesh} from 'three'

export default (...size) => color => (...position) => scene => {
  const geometry = new BoxGeometry(...size)
  const material = new MeshLambertMaterial({color})
  const cube = new Mesh(geometry, material)
  const [x, y, z] = position
  cube.position.x = x
  cube.position.y = y
  cube.position.z = z
  scene.add(cube)
  return cube
}
