
class GameOverPage {
    constructor(callbacks) {
        this.callbacks = callbacks
    }

    init(options) {
       this.initGameOverCanvas(options);
    }

    //初始化
    initGameOverCanvas(options) {
        let aspect = window.innerWidth / window.innerHeight;
        this.scene = options.scene;
        this.canvas = document.createElement('canvas');
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.texture = new THREE.Texture(this.canvas);
        this.material = new THREE.MeshBasicMaterial({
            map:this.texture,
            transparent:true
        });
        this.geometry = new THREE.PlaneGeometry(window.innerWidth,window.innerHeight);
        this.mesh = new THREE.Mesh(this.material,this.geometry);
        this.mesh.position.z = 1;
        this.context = this.canvas.getContext('2d');
        this.context.fillStyle = '#333';
        this.context.fillRect((window.innerWidth - 200)/2,(window.innerHeight - 200)/2,200,100);
        this.texture.needUpdate = true;
        this.scene.add(this.mesh);

    }
    show() {
        console.log('game-over-page-show')
    }
}

export default GameOverPage;
