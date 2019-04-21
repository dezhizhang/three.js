let scene,camera,renderer,mesh;

//init函数
function init() {
  
    //创建场景
    scene = new THREE.Scene();
    //创建相机
    camera = new THREE.PerspectiveCamera(45,window.innerWidth / window.innerHeight,0.1,1000);
    camera.position.set(0,0,-5);
    camera.lookAt(new THREE.Vector3(0,0,0));
    //创建渲染器
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xEEEEEE,1.0));
    renderer.setSize(window.innerWidth,window.innerHeight);
    //加入到html
    document.body.appendChild(renderer.domElement);
}

//帧循环函数
function aimate() {
    renderer.render(scene,camera);
}

window.onload = function() {
    init();
    aimate();
}