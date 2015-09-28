(function(){
console.log('Golden');
var scene, camera, renderer;
var cubeA, cubeAGeometry, cubeAMaterial;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10;

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight/2)

//test cubeA
var cube_geo = new THREE.BoxGeometry(2,2,2,2);
var cube_mat = new THREE.MeshBasicMaterial({
  color: 0x00ff00
});
var tst_Cube = new THREE.Mesh(cube_geo, cube_mat);

render();
document.body.appendChild(renderer.domElement);
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);

}

})();
