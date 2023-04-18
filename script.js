///fdsfs
//rtgtr
var socket=io();
let side = 30
var grassArr = []
var grassEaterArr = []
var predatorArr = []
var waterArr = []
var bombArr = []
var fireArr = []

function setup() {
       createCanvas(20 * side, 20 * side)
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                let grass = new Grass(x, y)

                                grassArr.push(grass)


                        }
                        
                        
                        else if(matrix[y][x] == 2){
                             let grEat = new  GrassEater(x,y)
                             grassEaterArr.push(grEat)
                        }
                        
                        
                        else if(matrix[y][x] ==  3){
                                let pre = new Predator(x,y)
                                predatorArr.push(pre)
                        }
                        else if(matrix[y][x] ==  4){
                                let wat = new Water(x,y)
                              waterArr.push(wat)
                        }
                        
                        
                        
                        else if(matrix[y][x] ==  5){
                                let bom = new Bomb(x,y)
                              bombArr.push(bom)
                        }
                        
                        
                        else if(matrix[y][x] ==  6){
                                let fi = new Fire(x,y)
                              fireArr.push(fi)
                        
        }}

}


function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        if (matrix[y][x] == 1) {
                                fill("green")
                        }else if(matrix[y][x] == 2){
                                fill ("yellow")
                        }else if(matrix[y][x] == 3){
                                fill ("purple")
                        }else if(matrix[y][x] == 4){
                                fill ("blue")
                        }
                        else if(matrix[y][x] == 5){
                                fill ("black")
                        }else if(matrix[y][x] == 6){
                                fill ("red")
                        }else {fill("gray")
                                }
                        rect(x * side, y * side, side, side,side,side)

                }
        }



                for (let i in grassArr) {
                        grassArr[i].mul()
                }


                for(let i in grassEaterArr){
                        grassEaterArr[i].eat()
                }

             

                for(let i in predatorArr){
                        predatorArr[i].eat()
                }
 
                for(let i in waterArr){
                        waterArr[i].eat()
                }

              

                for(let i in bombArr){
                        bombArr[i].eat()
                }

                for(let i in fireArr){
                        fireArr[i].eat()
                }
      }
    }
