

export default class InputHandler{
    constructor(Paddle, game,ball){
        document.addEventListener("keydown", event=>{
            switch(event.keyCode){
                case 37:
                   ball.moveLeft()
                    break;
                    case 39:
                ball.moveRight()
                        break;
                       
            }
        })
        document.addEventListener("keyup", event=>{
            switch(event.keyCode){
                case 37:
                    if(ball.speed<0)ball.stop()
                    break;
                    case 39:
                        if(ball.speed>0)ball.stop()
                        break;
            }
        })
    }
}