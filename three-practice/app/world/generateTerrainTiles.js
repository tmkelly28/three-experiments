import tile from './tile'
import tree from './tree'
import cube from './cube'
import {times, rand} from '../util'

const world = {
  grid: [],
  renderers: []
}

const NormalTile = tile(2, 0.3, 2)
const GreenTile = NormalTile(0x15680b)
const GrayTile = NormalTile(0x555555)

const House = cube(0.25, 0.25, 0.25)(0x593815)

const trunk = [0.06, 0.06, 0.25, 32]
const canopy = [0.125, 0.5, 32]
const Tree = tree(...trunk)(...canopy)

export default function generateTerrainTiles (scene) {
  GrayTile(0, 0, 0)(scene)
  GreenTile(3, 0, 0)(scene)
  House(3, 0.25, 0)(scene)
  times(10)(() => Tree(rand(2.50, 3.75), 0.25, rand(-0.75, 0.75))(scene))
  return world
}
