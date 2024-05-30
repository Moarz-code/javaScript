console.log('Hello World'); 


// Variables 3 ways 

var myName = 'Moarz' ; 
// This variable is defined for the global scope 

let firstName = 'Moarz'; 
// This variable is defined for the local scope

const LastName = 'Moarz'; 
// This variable LastName can not be reassigned

//Data types 

let favouriteColour; 
console.log(favouriteColour);


//Functions

function sayHi(name) {
    console.log('Hi ' + name);
}

function multiply(num1, num2) {
    ans = num1 * num2 
    console.log(ans)
}

sayHi("moarz");

multiply(5,2); 

//control flow 

let price = 5; 
let money = 2; 
const canBuy = money >= price ; 

console.log(canBuy); //this returns a false value 

if (canBuy) {
    console.log('Enjoy our purchase');
} else  { 
    console.log('go back home you peasant');
}

let hour = 13; 
if (hour >= 6 && hour <= 12) {
    console.log('serving breakfast');
} else if (hour > 12 && hour <=14) {
    console.log('serving lunch'); 
} else {
    console.log('serving dinner'); 
}


//switch case statement 

switch(hour) {
    case hour >= 6: 
    console.log('serving breakfast ');
}


//for loops 

let i = 0; 

let myArray = [1,2,3,4,5,6,7]; 

let count = 0; 

for (let i = 0; i < myArray.length; i++) {
    count +=1; 
}

console.log(count);

console.log('fizz Buzz starts here'); 

for (let i = 0; i <= 100; i++) { 
    if (i % 5 == 0 && i % 3 == 0 ) {
        console.log(i + ": Fizz Buzz")
    } else if (i % 3 == 0 ) { 
        console.log(i + ": Fizz")
    } else if ( i % 5 == 0 ) { 
        console.log(i + ": Buzz")
    }
}

// Linear search 

let myNum = [0,1,2,3,4,5,6,7] 

let target = 5

for (let i = 0; i <= myNum.length -1 ; i++) { 
    if (myNum[i] == target) { 
        console.log("You number is found at index: " + i )
    }
}