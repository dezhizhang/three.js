
class GamePage{
    constructor(callbacks) {
        this.callbacks = callbacks;
      
    }

    init() {

        let height = window.innerWidth;
        let width = window.innerHeight;
       
        let renderer = new THREE.WebGLRenderer({
            canvas:canvas
        });
        //定义场景
        let scene = new THREE.Scene();
        this.scene = scene
        //定义象机
        let camera = new THREE.OrthographicCamera(-width/2,width/2,-height/2,height/2,-1000,1000);
        renderer.setClearColor(new THREE.Color(0x000000,1.0));
        renderer.setSize(width,height);
        renderer.render(scene,camera);
        let triangleShape = new THREE.Shape();
        triangleShape.moveTo(0,100);
        triangleShape.lineTo(-100,-100);
        triangleShape.lineTo(100,-100);
        triangleShape.lineTo(0,100);
        //定义三角形
        let geometry = new THREE.ShapeGeometry(triangleShape);
        let material = new THREE.MeshBasicMaterial({color:0xff0000,side:THREE.DoubleSide});
        let mesh = new THREE.Mesh(geometry,material);
        mesh.position.x = 0;
        mesh.position.y = 0;
        mesh.position.z = 1;
        scene.add(mesh);
        camera.position.x = 0;
        camera.position.y = 0;
        camera.position.y = 0;
        camera.lookAt(new THREE.Vector3(0,0,1));
        let currentAngle = 0;
        let lastTimestamp = Date.now();
        let aminate = function() {
            let now = Date.now();
            let duration = now - lastTimestamp;
            lastTimestamp = now;
            currentAngle = currentAngle + duration / 1000 *Math.PI;
        }
        let render = function() {
            aminate();
            mesh.rotation.set(currentAngle,0,0);
            renderer.render(scene,camera);
            requestAnimationFrame(render);
        }
        render();
    }

    restart() {
        console.log('game page restart')
    }
}

export default GamePage;
