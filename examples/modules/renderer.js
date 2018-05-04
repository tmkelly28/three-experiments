import {WebGLRenderer, PCFSoftShadowMap} from 'three'

export default () => {
  const renderer = new WebGLRenderer()
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = PCFSoftShadowMap
  document.body.appendChild(renderer.domElement)
  return renderer
}
