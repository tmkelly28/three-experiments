import * as THREE from 'three'
import createOrbitControls from 'three-orbit-controls'

export default camera => {
  const OrbitControls = createOrbitControls(THREE)
  new OrbitControls(camera) // eslint-disable-line no-new
  return OrbitControls
}
