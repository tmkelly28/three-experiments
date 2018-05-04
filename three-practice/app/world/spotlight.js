import {SpotLight, SpotLightHelper} from 'three'

// Spotlight := Boolean -> Scene -> SpotLight
module.exports = help => scene => {
  const spotLight = new SpotLight(0xffffff, 1, 0, 0.314, 0, 1)

  spotLight.position.set(0, 500, 0)
  spotLight.castShadow = true
  spotLight.shadow.mapSize.width = 1024
  spotLight.shadow.mapSize.height = 1024
  spotLight.shadow.camera.near = 500
  spotLight.shadow.camera.far = 4000
  spotLight.shadow.camera.fov = 30

  scene.add(spotLight)

  if (help) {
    const spotLightHelper = new SpotLightHelper(spotLight)
    scene.add(spotLightHelper)
  }

  return spotLight
}

// var light
// scene.add( new THREE.AmbientLight( 0x666666 ) )
//
// light = new THREE.DirectionalLight( 0xdfebff, 1.75 )
// light.position.set( 500, 10, 100 )
// light.position.multiplyScalar( 1.3 )
// light.castShadow = true
// light.shadow.mapSize.width = 1024
// light.shadow.mapSize.height = 1024
// var d = 300
// light.shadow.camera.left = - d
// light.shadow.camera.right = d
// light.shadow.camera.top = d
// light.shadow.camera.bottom = - d
// light.shadow.camera.far = 1000
// scene.add(light)
