//Defining the function 
function sayHi() { 
    console.log('hi')
}

// Call 

sayHi()

function sum(num1, num2) {
    return num1 + num2
}

result = sum(5,2) 
console.log(result)

// 1 for Multiplication, 2 for division, 3 for addition, 4 subtraction

function calculator(option, num1, num2) { 
    switch(option){
       case 1: return num1 * num2
       case 2: return num1/ num2 
       case 3: return num1 + num2
       case 4: return num1 - num2
    }
}


result = calculator(1,5,2)
console.log(result)

result = calculator(2,5,2)
console.log(result)

result = calculator(3,5,2)
console.log(result)

result = calculator(4,5,2)
console.log(result)

//. Sum of Multiples
//Write a program that finds the sum of all multiples of 3 or 5 below 1000.
let sumofThree = 0 
let sumofFive = 0 
for (let i = 0 ; i <= 1000; i++) { 
    if (i % 3 == 0) { 
        sumofThree += 1 
    } else if (i % 5 == 0 ) { 
        sumofFive +=1
    }
}

console.log("Sum of Three: " + sumofThree)
console.log("Sum of Five: " + sumofFive)




// Leap Year checker
// Year must be divisible by 4, centuries must be divisible by 400

function isLeap(year) { 
    if (year % 4 == 0) {
        if (year % 100 == 0 ) { 
            if (year % 400 == 0) { 
                return true 
            }else  {
                return false } 
        }
    }
}

//8. Find the Largest and Smallest Number in an Array


myList = [1,5,9,2,3,0] 

let max = 0;
for ( let i = 0; i < (myList.length - 1); i++) {
    if (myList[i] > max) { 
        max = myList[i]
    }

}

console.log(max)

arrowAdd = (num1, num2) => num1 + num2;

result = arrowAdd(5,2)
console.log(result)

console.log(result)