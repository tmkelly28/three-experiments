import * as THREE from 'three';

export default (geometry, color) => {

  const mesh = new THREE.Object3D();
  const lineMaterial = new THREE.LineBasicMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.5
  });
  const basicMaterial = new THREE.MeshPhongMaterial({ color });
  const lineSegments = new THREE.LineSegments(geometry, lineMaterial);

  mesh.add(lineSegments);
  mesh.add(new THREE.Mesh(geometry, basicMaterial));

  return mesh;
};
