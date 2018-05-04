import {BoxBufferGeometry, MeshLambertMaterial, Mesh} from 'three'

export default (...size) => color => (...position) => scene => {
  const geometry = new BoxBufferGeometry(...size)
  const material = new MeshLambertMaterial({color})
  const tile = new Mesh(geometry, material)
  const [x, y, z] = position
  tile.position.x = x
  tile.position.y = y
  tile.position.z = z
  scene.add(tile)
  return tile
}
