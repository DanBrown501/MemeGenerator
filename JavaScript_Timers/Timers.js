function greet(){
    console.log("HI!! I LOVE YOU!")
}

function diss(){
    console.log("you are the worst :(")
}

let funcs = [greet, diss]

const myfunc = function add(x,y){
    return x + y;
}

function giveBirth(){
    console.log("GIVING BIRTH!!!")
    return function cry(){
        return "WAAAHHH"
    }
}

function doublediss(){
    diss()
    diss()
}




// function repeatThreeTimes(func){
//     func();
//     func();
//     func();
// }

// function repeat(num, func){
//     for(i = 0; i< num; i++){
//         func();
//     }
// }
