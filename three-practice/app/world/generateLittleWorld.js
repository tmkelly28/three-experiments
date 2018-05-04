import cube from './cube'
import tree from './tree'
import mountain from './mountain'
import cloud from './cloud'

const MIN = -12
const MAX = 12

const world = {
  grid: [],
  clouds: [],
  renderClouds () {
    this.clouds.forEach(cloud => {
      const y = cloud.position.y

      let x = cloud.position.x + 0.01
      let z = cloud.position.z + 0.01

      if (x > MAX) x = MIN
      if (z > MAX) z = MIN

      cloud.position.set(x, y, z)
    })
  }
}

world.renderers = [world.renderClouds.bind(world)]

export default function generateLittleWorld (scene) {
  for (let x = MIN; x < MAX; x += 1) {
    world.grid.push([])

    for (let z = MIN; z < MAX; z += 1) {
      const data = {}
      world.grid[x + MAX][z + MAX] = data

      cube(x, 0, z)(scene)

      if (Math.random() > 0.8) {
        data.tree = tree(x, 0.75, z, scene)
      }

      if (
        Math.random() > 0.95 &&
        (x - 3 > MIN) &&
        (x + 3 < MAX) &&
        (z - 3 > MIN) &&
        (z + 3 < MAX)
      ) {
        data.mountain = mountain(x, 1.5, z, scene)
      }

      if (Math.random() > 0.99) {
        world.clouds.push(cloud(x, 3, z, scene))
      }
    }
  }

  return world
}
