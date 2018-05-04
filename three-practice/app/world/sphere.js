import * as THREE from 'three'

export default scene => {
  // const geometry = new THREE.SphereBufferGeometry(5, 32, 32)
  // const material = new THREE.LineBasicMaterial( {color: 0x0044ee, lineWidth: 1, transparent: true} )
  // const sphere = new THREE.Mesh(geometry, material)
  // sphere.position.y = 20
  // sphere.position.x = 0
  // sphere.position.z = 0
  // sphere.wireframe = true
  // scene.add(sphere)

  var mesh = new THREE.Object3D()

    mesh.add( new THREE.LineSegments(

      new THREE.SphereGeometry(),

      new THREE.LineBasicMaterial( {
        color: 0xffffff,
        transparent: true,
        opacity: 0.5
      } )

    ) )

    mesh.add( new THREE.Mesh(

      new THREE.SphereGeometry(),

      new THREE.MeshPhongMaterial( {
        color: 0x156289,
        emissive: 0x072534,
        side: THREE.DoubleSide,
        shading: THREE.FlatShading
      } )

    ) )

  scene.add(mesh)
}
