console.log("1. Conventional functions") 

result = add(5,2)
console.log("result of addition: " + result) 

function add(num1, num2) { 
    return num1 + num2
}




console.log() 
console.log("2. Expression Functions") 

const subtract = function (num1, num2) { 
    return num1 - num2
}

result = subtract(5,2)
console.log("result of subtraction: " + result) 
console.log("expression functions are NOT hoisted")
console.log("This means expression functions can only be used after defining it") 
console.log("Unlike the 1.Conventional method, in which the function can be used before definition")

console.log()
console.log("3. Arrow functions") 

product =(num1, num2) => num1*num2
result = product(5,2)
console.log("The product is " + result)


console.log() 
console.log("4. Nested functions ") 

function outer() {
    console.log('outer'); 

    function inner() { 
        console.log('inner');
    }
    inner()
}

console.log("The inner function has to be called inside the outer function")
console.log() 
outer();


console.log()
console.log("5. IEFF or however its spelt");

(function () {
    console.log('IEFF');
}) () 

console.log("These functions do not have to be called")

console.log() 
console.log("6. Generator function")

function* simpleGenerator() {
    yield 1 
    yield 2 
    yield 3 
}

const generatorObject = simpleGenerator() 

console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())
console.log(generatorObject.next())

console.log()
console.log("Declare the generator function with *")
console.log("assign the function to an object")
console.log("object.next() returns the first return value") 
console.log("This continue until all return values have been return")
console.log("Instead of return we use yield inside generator functions")

console.log("HI")

console.log("hi")

console.log("Hi")
