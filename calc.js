let sum = "";

function addToSum(operator) {
    sum = sum + operator;
    console.log(sum);
    document.getElementById("output").innerText = sum;
}

function evaluateSum() {
    sum = eval(sum);
    document.getElementById("output").innerText = sum;
}

function clearSum() {
    sum = "";
    document.getElementById("output").innerText = sum;
}

function deletChar() {
    sum = sum.slice(0, -1);
    document.getElementById("output").innerText = sum;
}




// function adition(number) {
//     return number + number;
// }

// console.log(adition(5));

// function subtraction(number) {
//     return number - number;
// }






