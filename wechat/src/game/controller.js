
import gmaeView from './view';
import gameModel from './model';

class GameController {
    constructor(){
        this.gmaeView = gmaeView;
        this.gameModel = gameModel;
    }
    showGameOverPage = () => {
        this.gmaeView.showGameOverPage();
    }

    restartGame = () => {
        this.gmaeView.restartGame();
    }
    //初始化页面
    initPages() {
        const gamePageCallbacks = {
            showGameOverPage:this.showGameOverPage
        }

        const gameOverPageCallbacks = {
            gameRestart: this.restartGame
        }

        this.gmaeView.initGameOverPage(gameOverPageCallbacks);
        this.gmaeView.initGamePage(gamePageCallbacks)
    }
}

export default new GameController();
