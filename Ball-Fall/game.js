import Ball from "./ball.js"
import {  buildPaddle } from "./RandomPaddle.js"
import InputHandler from "./input.js"
import TouchHandler from "./touch.js"


export default class Game{
    constructor(GAMEWIDTH, GAMEHEIGHT){
        this.gameWidth=GAMEWIDTH
        this.gameHeight=GAMEHEIGHT
        this.ball=new Ball(this)
        this.gameObjects=[]
        this.newPaddle=0
        this.paddles=[]
        new InputHandler(this.paddles, this,this.ball )
        new TouchHandler(this.paddle, this,this.ball )
        this.start()
    }
    start(){
        this.gameObjects=[this.ball]
    }
    update(deltaTime){
        this.paddles=buildPaddle(this.gameWidth, this, this.paddles);
        [...this.gameObjects, ...this.paddles].forEach(object=> object.update(deltaTime))
        this.paddles=this.paddles.filter(paddle=>!paddle.markedForDeletion )
    }
    draw(ctx){
        [...this.gameObjects, ...this.paddles].forEach(object=> object.draw(ctx))
    }
}