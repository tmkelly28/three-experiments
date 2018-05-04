import * as THREE from 'three';
import createObject3D from './createObject3D';

export default () => createObject3D(new THREE.ConeGeometry(3.3, 4, 8, 1, false, 0, 3), 0x1c99cc);
