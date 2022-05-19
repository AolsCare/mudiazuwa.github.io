import Brick from './brick.js'

export function buildLevel(game, level, gameWidth){
    let bricks= [];
    level.forEach((row, rowindex)=>{
        row.forEach((brick, brickindex)=>{
            if(brick===1){
                let position={
                x: gameWidth/12*brickindex,
                y:75+24*rowindex
                    };
                bricks.push(new Brick(game, position, gameWidth/12))
            }
        })
    })
    return bricks
}

export const level1=[
    [0,1,0,1,0,1,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
]

export const level2=[
    [0,1,0,1,0,1,0,1,0,1,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1,1,1],
    [0,0,1,1,1,1,1,1,1,1,0,0],
    [0,0,0,1,1,1,1,1,1,0,0,0]
]