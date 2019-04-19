
class GamePage{
    constructor(callbacks) {
        this.callbacks = callbacks;
    }

    init() {
       let width = window.innerWidth;
       let height = window.innerHeight;

       let renderer = new THREE.WebGLRenderer();
       let scene = new THREE.Scene();
       this.scene = scene;
        
    }

    restart() {
        console.log('game page restart')
    }
}

export default GamePage;
