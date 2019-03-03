import * as  THREE from '../libs/three';
import game from './game/game';

window.THREE = THREE;

class Main {
    constructor() {

    }

    init() {
        game.init();

    }

}

export default  new Main();
