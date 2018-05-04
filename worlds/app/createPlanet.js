import * as THREE from 'three';
import createObject3D from './createObject3D';
import { random } from 'lodash';

export default () => {

  const radius = random(1, 5);
  const xPos = random(-20, 20);
  const yPos = random(-20, 20);
  const zPos = random(-20, 20);

  const mesh = createObject3D(new THREE.SphereGeometry(radius, 9, 5), 0xa14430);

  mesh.position.x = xPos;
  mesh.position.y = yPos;
  mesh.position.z = zPos;

  return mesh;
};
