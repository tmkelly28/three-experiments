import {PointLight, PointLightHelper} from 'three'

export default scene => {
  const light = new PointLight(0xffffff, 1, 100)
  light.position.set(0, 20, 0)
  light.castShadow = true
  const pointLightHelper = new PointLightHelper(light, 1)
  scene.add(pointLightHelper)
  scene.add(light)
  return light
}
