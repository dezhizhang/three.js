let scene,camera,renderer,mesh,cube;

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
    //创建立方体
    let cubeGeometry = new THREE.BoxGeometry(1,1,1);
    let cubeMaterial = new THREE.MeshBasicMaterial({color:0xff00ff});
    cube = new THREE.Mesh(cubeGeometry,cubeMaterial);
    scene.add(cube);

    //加入到html
    document.body.appendChild(renderer.domElement);
    render();
}

//帧循环函数
function render() {
    requestAnimationFrame(render);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene,camera);
}

window.onload =  init;

  
