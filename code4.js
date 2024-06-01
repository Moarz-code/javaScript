console.log("Any website that can be built with javaScript")
console.log("WILL be built in javaScript")

let luckyNum; // this number is a undefined
console.log(luckyNum) 

//variable scoping
//avoid var altogether 

let a = 'global' //this is a global variable 

function fun() { 
    let a = 'function' // this variable is local for this function
    console.log("from function: " + a)
    if (true) { 
        let a = 'block' ;
        console.log("from if statement : " + a)
    }
}

fun()
console.log(a) //notice how this prints out global


function wtfIsThis() { 
    console.log(this)
}


