function triangletracker() {
    var firstNumber = parseInt(document.getElementById("firstNumber").value);
    var secondNumber = parseInt(document.getElementById("secondNumber").value);
    var thirdNumber = parseInt(document.getElementById("thirdNumber").value);
     
    var mitch = function(firstNumber,secondNumber,thirdNumber)  {
        return (firstNumber + secondNumber > thirdNumber && firstNumber + thirdNumber > secondNumber && secondNumber + thirdNumber > firstNumber);
        }