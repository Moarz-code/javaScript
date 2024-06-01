
console.log("Fizz buz with a different approach");

function FizzBuzz(startNum, endNum) { 
    for (let i = startNum; i <=endNum; i++) { 
        let outString = "";
        if (i % 3 == 0 ) { 
           outString += "Fizz";
        } 
        if (i % 5 == 0) {
            outString += "Buzz";
        }
        console.log(i + ": " +outString);
    
    }
}



FizzBuzz(100,110);