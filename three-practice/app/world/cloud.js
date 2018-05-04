import * as THREE from 'three'

export default (x, y, z, scene) => {
  const geometry = new THREE.DodecahedronGeometry(0.5, 0)
  const material = new THREE.MeshLambertMaterial({color: 0xffffff})
  const cloud = new THREE.Mesh(geometry, material)

  cloud.position.x = x
  cloud.position.y = y
  cloud.position.z = z

  scene.add(cloud)

  return cloud
}
