export default class TouchHandler{
    constructor(Paddle, game, ball){
        
        document.getElementById("left_touch").addEventListener("touchstart", function(){
            ball.moveLeft()
        })      
        document.getElementById("right_touch").addEventListener("touchstart", function(){
            ball.moveRight()
        })
        document.getElementById("left_touch").addEventListener('touchend', e=>{
            if(ball.speed<0)ball.stop()
        })
        document.getElementById("right_touch").addEventListener('touchend', e=>{
             if(ball.speed>0)ball.stop()
        })
       
  
    }
}