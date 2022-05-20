import Paddle from "./paddles.js";


export function buildPaddle(gameWidth, game, paddles){
    game.newPaddle++
    if(game.newPaddle===gameWidth/10){
    var min = 0,
    max = gameWidth-gameWidth/4;
    var rand = Math.floor(Math.random() * (max - min + 1) + min);
    let positionx= rand
    paddles.push(new Paddle(game,positionx))
    game.newPaddle=0
    }
    return paddles
}
