import * as THREE from 'three'

const mountainTop = (x, y, z, scene) => {
  const geometry = new THREE.ConeBufferGeometry(0.5, 1, 32)
  const material = new THREE.MeshLambertMaterial({color: 0xffffff})
  const cone = new THREE.Mesh(geometry, material)

  cone.position.x = x
  cone.position.y = y
  cone.position.z = z

  scene.add(cone)

  return cone
}

export default (x, y, z, scene) => {
  const geometry = new THREE.CylinderGeometry(0.5, 1.5, 2, 32)
  const material = new THREE.MeshLambertMaterial({color: 0xa9a9a9})
  const cylinder = new THREE.Mesh(geometry, material)

  cylinder.position.x = x
  cylinder.position.y = y
  cylinder.position.z = z

  const cone = mountainTop(x, 3, z, scene)
  scene.add(cylinder)

  return {
    top: cone,
    base: cylinder
  }
}
