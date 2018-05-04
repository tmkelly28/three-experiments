let INTERSECTED

export default intersects => {
  if (intersects.length > 0) {
    if (INTERSECTED !== intersects[0].object) {
      if (INTERSECTED && INTERSECTED.material.emissive) {
        INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex)
      }
      INTERSECTED = intersects[0].object
      if (INTERSECTED.material.emissive) {
        INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex()
        INTERSECTED.material.emissive.setHex(0xf0f0f0)
      }
    }
  } else {
    if (INTERSECTED && INTERSECTED.material.emissive) {
      INTERSECTED.material.emissive.setHex(INTERSECTED.currentHex)
    }
    INTERSECTED = null
  }
}
