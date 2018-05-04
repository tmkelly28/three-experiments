import {CylinderBufferGeometry, MeshLambertMaterial, Mesh, ConeBufferGeometry} from 'three'

const trunk = (...trunkConfig) => (...position) => {
  const geometry = new CylinderBufferGeometry(...trunkConfig)
  const material = new MeshLambertMaterial({color: 0x0fff0f})
  const trunk = new Mesh(geometry, material)
  const [x, y, z] = position

  trunk.position.x = x
  trunk.position.y = y
  trunk.position.z = z

  return trunk
}

const canopy = (...canopyConfig) => (...position) => {
  const geometry = new ConeBufferGeometry(...canopyConfig)
  const material = new MeshLambertMaterial({color: 0x0fff0f})
  const canopy = new Mesh(geometry, material)
  const [x, y, z] = position

  canopy.position.x = x
  canopy.position.y = y + 0.25
  canopy.position.z = z

  return canopy
}

export default (...trunkConfig) => (...canopyConfig) => (...position) => scene => {
  scene.add(trunk(...trunkConfig)(...position))
  scene.add(canopy(...canopyConfig)(...position))
}

// export default (x, y, z, scene) => {
//   const _trunk = trunk(x, y, z)
//   const _canopy = canopy(x, y, z)
//
//   scene.add(_trunk)
//   scene.add(_canopy)
//
//   return {
//     trunk: _trunk,
//     canopy: _canopy
//   }
// }
