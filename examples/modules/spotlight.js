import {SpotLight, SpotLightHelper} from 'three'

export default scene => {
  const spotLight = new SpotLight(0xffffff, 1, 0, 0.314, 0, 1)
  spotLight.position.set(0, 100, 0)
  spotLight.castShadow = true
  spotLight.shadow.mapSize.width = 1024
  spotLight.shadow.mapSize.height = 1024
  spotLight.shadow.camera.near = 500
  spotLight.shadow.camera.far = 4000
  spotLight.shadow.camera.fov = 30
  scene.add(spotLight)

  const spotLightHelper = new SpotLightHelper(spotLight)
  scene.add(spotLightHelper)

  return spotLight
}
