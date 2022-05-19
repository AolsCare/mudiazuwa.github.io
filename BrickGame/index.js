import Game from './game.js';

let canvas=document.getElementById("gameScreen")
let ctx= canvas.getContext("2d");

const GAME_WIDTH=window.innerWidth;
const GAME_HEIGHT=window.innerHeight;

let game= new Game(GAME_WIDTH, GAME_HEIGHT);

let lastTime=0
window.addEventListener('resize', resizeCanvas, false)
function resizeCanvas(){
    canvas.width=window.outerWidth;
    canvas.height=window.outerHeight;
    game.gameWidth=window.outerWidth;
   game.gameHeight=window.outerHeight;
}
resizeCanvas()

function gameloop(timestamp){
let deltaTime=timestamp-lastTime;
lastTime=timestamp
    ctx.clearRect(0,0, GAME_WIDTH, GAME_HEIGHT)
   game.update(deltaTime);
   game.draw(ctx);
    

requestAnimationFrame(gameloop)
}

requestAnimationFrame(gameloop)
