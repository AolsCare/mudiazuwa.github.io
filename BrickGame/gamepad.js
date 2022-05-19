export default class PadHandler{
    constructor(Paddle){
this.gamepadIndex;
window.addEventListener('gamepadconnected', (event) => {
    this.gamepadIndex = event.gamepad.index;
});

setInterval(() => {
    if(this.gamepadIndex !== undefined) {
        // a gamepad is connected and has an index
        this.myGamepad = navigator.getGamepads()[this.gamepadIndex];
        this.myGamepad.buttons.map(e => e.pressed).forEach((isPressed, buttonIndex) => {
           
        if(isPressed) {
            switch(buttonIndex){
                case 14:
                    Paddle.moveLeft()
                    break;
                    case 15:
                Paddle.moveRight()
                        break;
            }
            }else{
            }
        }
        )
    }
}, 100)

    }
}