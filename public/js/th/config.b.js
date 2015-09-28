console.log('before main', document.body, document.getElementById('THREE'))
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('THREE').appendChild(renderer.domElement)

var icogeometry = new THREE.IcosahedronGeometry(1);
var icomaterial = new THREE.MeshDepthMaterial({
    color: 0x00ff00,
    morphTargets: false,
    wireframe: true,
    wireframeLineWidth: 1
});
var ico = new THREE.Mesh(icogeometry, icomaterial);

var knotGeo = new THREE.TorusKnotGeometry(5, 1, 100, 16);
var knotMat = new THREE.MeshDepthMaterial({
    color: 0xdddddd,
    morphTargets: false,
    wireframe: false,
    wireframeLineWidth: 1
});
var knotMatB = new THREE.MeshPhongMaterial({
    color: 0xdddddd,
    specular: 0x009900,
    shininess: 30,
    shading: THREE.FlatShading,
    wirefram: true

});
var knot = new THREE.Mesh(knotGeo, knotMat);
scene.add(ico);
scene.add(knot);

camera.position.z = 5;

function render() {
    requestAnimationFrame(render);

    ico.rotation.x += 0.01;
    ico.rotation.y += 0.01;
    knot.rotation.x += 0.01;
    knot.rotation.y += 0.01;

    renderer.render(scene, camera);

}

render();
console.log(renderer.domElement)
