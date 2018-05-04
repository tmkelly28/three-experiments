import {AxisHelper} from 'three'

export default scene => {
  const axisHelper = new AxisHelper(100)
  scene.add(axisHelper)
  return axisHelper
}
