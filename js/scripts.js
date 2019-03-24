function triangletracker() {
    var firstNumber = parseInt(document.getElementById("firstNumber").value);
    var secondNumber = parseInt(document.getElementById("secondNumber").value);
    var thirdNumber = parseInt(document.getElementById("thirdNumber").value);
     
    var mitch = function(firstNumber,secondNumber,thirdNumber)  {
        return (firstNumber + secondNumber > thirdNumber && firstNumber + thirdNumber > secondNumber && secondNumber + thirdNumber > firstNumber);
        }
        if (mitch(firstNumber,secondNumber,thirdNumber) && firstNumber <= 0 || secondNumber <= 0 || thirdNumber <= 0 || NaN )  {
        alert ('THIS IS NOT A TRIANGLE!! TRY OTHER DIMENSIONS.');   
        }
        else if (mitch(firstNumber,secondNumber,thirdNumber) && firstNumber === secondNumber && firstNumber=== thirdNumber && secondNumber === thirdNumber )  {
        alert ('THIS IS AN EQUILATERAL TRIANGLE!');
        } 
        else if (mitch(firstNumber,secondNumber,thirdNumber) && firstNumber === secondNumber || thirdNumber === secondNumber || thirdNumber === firstNumber )  {
        alert ('THIS IS AN ISOSCELES TRIANGLE!');
        } 
        else if (mitch(firstNumber,secondNumber,thirdNumber) && firstNumber !== secondNumber && firstNumber!== thirdNumber && secondNumber !== thirdNumber )  {
        alert ('THIS IS A SCALENE TRIANGLE!');
        }     