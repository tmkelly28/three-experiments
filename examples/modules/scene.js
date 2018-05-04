import {Color, Scene} from 'three'

// scene
export default () => {
  const scene = new Scene()
  scene.background = new Color(0x202020)
  return scene
}
