export function detectCollision(ball, gameObject){
    //check collision with paddle
    let bottomofBall= ball.position.y+ball.size;
    let topofObject= gameObject.position.y;
    let leftofBall=ball.position.x;
    let rigthofball=ball.position.x+ball.size;
    let leftsideofObject= gameObject.position.x;
    let rightSideofObject=gameObject.position.x+gameObject.width;

    if(bottomofBall>=topofObject&&leftofBall>=leftsideofObject&&rigthofball<=rightSideofObject){
      return true
    }else{
        return false
    }
}