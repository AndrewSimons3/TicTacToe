import Game from './Game.js';
import GameView from './GameView.js'

const game = new Game();
const gameView = new GameView();
gameView.updateBoard(game);

console.log(game.board);
console.log("My turn is", game.turn);
game.nextTurn();
console.log('My turn is', game.turn);
game.makeMove(3);
console.log(game.board);
gameView.updateBoard(game);
game.nextTurn();
game.makeMove(6);
gameView.updateBoard(game);

